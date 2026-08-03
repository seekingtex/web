import json
import re
from pathlib import Path

def parse_config_file_simple(file_path: str) -> dict:
    """Simple parser for the config.ts file."""
    
    with open(file_path, 'rb') as f:
        raw_data = f.read()
    
    # Try common encodings
    for encoding in ['utf-8', 'utf-8-sig', 'iso-8859-1', 'cp1252']:
        try:
            content = raw_data.decode(encoding)
            break
        except UnicodeDecodeError:
            continue
    else:
        raise ValueError("Could not decode file with any encoding")
    
    # Extract ui export
    ui_pattern = r'export const ui = ({[^{}]+(?:\{[^{}]*\}[^{}]*)*}) as const;'
    ui_match = re.search(ui_pattern, content, re.DOTALL)
    
    if not ui_match:
        # Try to find the ui export more broadly
        lines = content.split('\n')
        ui_start = None
        ui_end = None
        brace_count = 0
        
        for i, line in enumerate(lines):
            if 'export const ui = {' in line:
                ui_start = i
                brace_count = 1
            elif ui_start is not None:
                brace_count += line.count('{')
                brace_count -= line.count('}')
                if brace_count == 0:
                    ui_end = i
                    break
        
        if ui_start is None or ui_end is None:
            raise ValueError("Could not find ui export section")
        
        ui_content = '\n'.join(lines[ui_start:ui_end+1])
    else:
        ui_content = ui_match.group(1)
    
    # Now parse the languages
    translations = {}
    
    # Look for language sections
    lang_sections = re.findall(r'^  (en|tr|cs|da|ro|th):\s*\{([^{}]+(?:\{[^{}]*\}[^{}]*)*)\}', ui_content, re.MULTILINE | re.DOTALL)
    
    for lang_code, lang_content in lang_sections:
        # Parse key-value pairs
        lang_translations = {}
        
        # Find all key-value patterns: 'key': 'value',
        kv_pattern = r"'([^']+)':\s*'([^']*)'"
        kv_matches = re.findall(kv_pattern, lang_content)
        
        for key, value in kv_matches:
            lang_translations[key] = value
        
        translations[lang_code] = lang_translations
    
    return translations

def find_boat_terms_in_en(en_translations: dict) -> dict:
    """Find boat/water-sports terms in EN translations for reference."""
    
    boat_terms = {}
    
    # Pattern-based search for boat/water-sports related terms
    for key, value in en_translations.items():
        key_lower = key.lower()
        value_lower = value.lower()
        
        # Look for boat/water-sports related keys
        if any(term in key_lower for term in [
            'boatknowledge', 'commercialworkboats', 'safetyinwatersports',
            'learn.safetyinwater', 'learn.safetyinwatersports'
        ]):
            boat_terms[key] = value
        
        # Look for boat/water-sports related values
        elif any(phrase in value_lower for phrase in [
            'water sports', 'boat knowledge', 'commercial workboats',
            'water sport', 'sailing craft', 'watercraft', 'boat safety'
        ]):
            boat_terms[key] = value
    
    return boat_terms

def create_fabric_equivalents(boat_terms: dict) -> dict:
    """Create fabric use case equivalents based on boat terms."""
    
    equivalents = {}
    
    # Base fabric equivalent mappings
    fabric_mappings = {
        'nav.boatKnowledge': 'nav.fabricKnowledge',
        'nav.commercialWorkboats': 'nav.performanceStretchFabrics',
        'learn.safetyInWaterSports': 'learn.fabricSafety', 
        'learn.safetyInWater': 'learn.fabricSafety',
    }
    
    # For website sections, keep the key but use EN reference for values
    section_mappings = [
        'commercialWorkboats',
        'engineeringPerfection', 
        'solutionsByUseCase'
    ]
    
    for key, value in boat_terms.items():
        # Check if this is a navigation item
        if key.startswith('nav.') and key in fabric_mappings:
            equivalents[key] = fabric_mappings[key]
        
        # Check if this is a scenario or section
        elif any(section in key for section in section_mappings):
            # Keep key but note it needs EN reference
            equivalents[key] = key  # Will use EN value as reference
    
    return equivalents

def process_language(
    lang_code: str,
    lang_translations: dict,
    en_translations: dict,
    boat_terms: dict,
    fabric_equivalents: dict
) -> dict:
    """Process a language section according to cleanup rules."""
    
    processed = lang_translations.copy()
    
    print(f"\n{'='*60}")
    print(f"PROCESSING {lang_code.upper()}")
    print(f"{'='*60}")
    print(f"Original keys: {len(processed)}")
    
    # Rule 1: Replace boat/water-sports terms with fabric equivalents
    print("\nRule 1: Replace boat/water-sports terms with fabric equivalents")
    
    keys_to_remove = []
    for key, value in processed.items():
        # Check if this key needs to be replaced
        needs_replacement = False
        
        # Navigation item replacements
        if key in ['nav.boatKnowledge', 'nav.commercialWorkboats', 
                   'learn.safetyInWaterSports', 'learn.safetyInWater']:
            needs_replacement = True
        
        # Scenario replacements
        elif '.scenario' in key.lower() and any(term in key.lower() for term in ['water', 'sports', 'boat']):
            needs_replacement = True
        
        if needs_replacement:
            # Find the fabric equivalent key
            fabric_key = None
            fabric_value = None
            
            # Determine fabric equivalent
            for boat_key, fabric_equiv in fabric_equivalents.items():
                if key.lower() == boat_key.lower():
                    fabric_key = fabric_equiv
                    break
            
            if fabric_key:
                # If there's a corresponding EN key, use its value
                en_equiv_key = fabric_key
                if en_equiv_key in en_translations:
                    new_value = en_translations[en_equiv_key]
                    processed[fabric_key] = new_value
                    print(f"  ✓ {key}: '{value[:50]}...' -> {fabric_key}")
                else:
                    processed[fabric_key] = value
                    print(f"  ✓ {key}: '{value[:50]}...' -> {fabric_key} (same value)")
                
                # Mark old key for removal
                if key not in [fabric_key]:
                    keys_to_remove.append(key)
    
    # Remove old keys
    for key in keys_to_remove:
        del processed[key]
    
    # Rule 2: Fix garbled text issues
    print("\nRule 2: Fix garbled text issues")
    garbled_found = False
    
    for key, value in processed.items():
        if '?' in value or '�' in value or not value.strip():
            garbled_found = True
            print(f"  ⚠ Found garbled text in {key}: '{value}'")
    
    if not garbled_found:
        print("  ✓ No garbled text found")
    
    # Rule 3: Verify boat/water-sports terms are removed
    print("\nRule 3: Verify boat/water-sports terms are removed")
    
    remaining_boat_terms = []
    for key, value in processed.items():
        key_lower = key.lower()
        value_lower = value.lower()
        
        if any(term in key_lower for term in ['boat', 'water', 'sports', 'marine', 'naval']):
            remaining_boat_terms.append(key)
        
        if any(phrase in value_lower for phrase in ['water sports', 'boat', 'sailing', 'marine']):
            remaining_boat_terms.append(key)
    
    if remaining_boat_terms:
        print(f"  ⚠ Found {len(remaining_boat_terms)} remaining boat/water-sports terms:")
        for term in remaining_boat_terms[:5]:
            print(f"    - {term}: '{processed[term][:50]}...'")
    else:
        print("  ✓ All boat/water-sports terms removed")
    
    print(f"\nFinal processed keys for {lang_code}: {len(processed)}")
    
    return processed

def main():
    file_path = 'D:/seekingtex-github/src/i18n/config.ts'
    
    print("=" * 70)
    print("PROCESSING LANGUAGES FOR FABRIC USE CASES")
    print("=" * 70)
    
    # Parse the config file
    try:
        translations = parse_config_file_simple(file_path)
        print(f"✓ Parsed config file with languages: {list(translations.keys())}")
    except Exception as e:
        print(f"Error parsing config file: {e}")
        return
    
    # Check which languages are available
    available_langs = list(translations.keys())
    print(f"\nAvailable languages: {available_langs}")
    
    # Languages to process
    languages_to_process = ['tr', 'cs', 'da', 'ro', 'th']
    
    # EN translations for reference
    en_translations = translations.get('en', {})
    print(f"\nEN translations: {len(en_translations)} keys")
    
    # Find boat/water-sports terms in EN for reference
    print("\nFinding boat/water-sports terms in EN for reference...")
    boat_terms = find_boat_terms_in_en(en_translations)
    print(f"Found {len(boat_terms)} boat/water-sports related terms in EN")
    
    # Create fabric equivalents
    print("\nCreating fabric use case equivalents...")
    fabric_equivalents = create_fabric_equivalents(boat_terms)
    print(f"Created {len(fabric_equivalents)} fabric equivalents")
    
    # Process each language
    processed_languages = {}
    
    for lang_code in languages_to_process:
        if lang_code in translations:
            # Process this language
            processed = process_language(
                lang_code,
                translations[lang_code],
                en_translations,
                boat_terms,
                fabric_equivalents
            )
            
            processed_languages[lang_code] = processed
        else:
            print(f"\n⚠ {lang_code.upper()} section not found in config.ts")
    
    # Save processed languages to files for inspection
    print("\n" + "=" * 70)
    print("SAVING PROCESSED LANGUAGES")
    print("=" * 70)
    
    for lang_code, processed_data in processed_languages.items():
        # Create a JSON representation
        output_file = f"D:/seekingtex-github/processed_{lang_code}.json"
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(processed_data, f, ensure_ascii=False, indent=2)
        
        print(f"✓ Processed {lang_code}: {len(processed_data)} keys saved to {output_file}")
    
    # Create a summary report
    print("\n" + "=" * 70)
    print("PROCESSING SUMMARY")
    print("=" * 70)
    
    print(f"Processed {len(processed_languages)} languages")
    print(f"Original key counts:")
    
    for lang_code in languages_to_process:
        if lang_code in translations:
            original_count = len(translations[lang_code])
            processed_count = len(processed_languages.get(lang_code, {}))
            diff = processed_count - original_count
            print(f"  {lang_code.upper()}: {original_count} -> {processed_count} keys (change: {'+' if diff >= 0 else ''}{diff})")
    
    print("\nNote: For implementation, the actual changes would need to be")
    print("applied to the original config.ts file following the cleanup rules.")

if __name__ == '__main__':
    main()
