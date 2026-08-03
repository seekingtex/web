import json
import re
import os
from typing import Dict, Any, List, Tuple

def parse_i18n_file(file_path: str) -> Dict[str, Any]:
    """Parse the i18n config.ts file to extract language sections."""
    
    with open(file_path, 'rb') as f:
        raw_data = f.read()
    
    # Try different encodings
    encodings = ['utf-8', 'utf-8-sig', 'iso-8859-1', 'cp1252', 'utf-16']
    content = None
    encoding_used = None
    
    for enc in encodings:
        try:
            content = raw_data.decode(enc)
            encoding_used = enc
            break
        except UnicodeDecodeError:
            continue
    
    if content is None:
        raise ValueError("Could not decode file with any of the attempted encodings")
    
    print(f"✓ File decoded with {encoding_used}")
    print(f"✓ File size: {len(content)} bytes")
    
    # Find all language sections
    lang_sections = {}
    
    # Pattern to match language sections like "  tr: {"
    lang_pattern = re.compile(r'^  ([a-z]{2}):\s*\{', re.MULTILINE)
    
    for match in lang_pattern.finditer(content):
        lang_code = match.group(1)
        start_pos = match.start()
        
        # Find the matching closing brace to get the full section
        brace_count = 0
        section_content = content[start_pos:]
        end_pos = start_pos
        
        for i, char in enumerate(section_content):
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    end_pos = start_pos + i + 1
                    break
        
        lang_sections[lang_code] = {
            'start_pos': start_pos,
            'end_pos': end_pos,
            'content': content[start_pos:end_pos]
        }
    
    print(f"✓ Found {len(lang_sections)} language sections")
    
    # Extract the ui export content
    ui_match = re.search(r'export const ui = ({[^{}]+(?:\{[^{}]*\}[^{}]*)*}) as const;', content, re.DOTALL)
    if not ui_match:
        # Try a more permissive pattern
        ui_match = re.search(r'export const ui = (.+?) as const;', content, re.DOTALL)
        if not ui_match:
            raise ValueError("Could not find ui export in file")
    
    # Parse the ui object as JSON (after converting from TypeScript comments)
    ui_content = ui_match.group(1)
    
    # Clean up TypeScript comments and format
    ui_content = re.sub(r'//.*$', '', ui_content, flags=re.MULTILINE)
    ui_content = re.sub(r'/\*.*?\*/', '', ui_content, flags=re.DOTALL)
    
    # Try to parse as JSON-like structure
    # First, let's extract the keys and values
    result = {'en': {}}
    
    # A simplified parser for the i18n format
    lines = ui_content.split('\n')
    current_lang = None
    current_indent = 0
    i = 0
    
    while i < len(lines):
        line = lines[i].strip()
        
        if not line:
            i += 1
            continue
            
        # Check for language section
        lang_match = re.match(r'^([a-z]+):\s*{', line)
        if lang_match:
            current_lang = lang_match.group(1)
            if current_lang not in result:
                result[current_lang] = {}
            i += 1
            continue
            
        # Check for end of ui export
        if line == '};':
            i += 1
            continue
            
        # Check for key-value pair
        key_match = re.match(r"^'([^']+)':\s*'([^']*)'", line)
        if key_match and current_lang:
            key = key_match.group(1)
            value = key_match.group(2)
            result[current_lang][key] = value
            
        i += 1
    
    return result, lang_sections


def find_boat_water_sports_terms(en_translations: Dict[str, str]) -> Dict[str, Any]:
    """Find all boat/water-sports terms in English translations for reference."""
    
    boat_water_terms = {}
    
    for key, value in en_translations.items():
        # Check if key contains boat/water-sports related terms
        key_lower = key.lower()
        if ('boat' in key_lower or 
            'water' in key_lower or 
            'sports' in key_lower or 
            'marine' in key_lower or
            'naval' in key_lower or
            'sea' in key_lower):
            boat_water_terms[key] = value
    
    # Also check values for boat/water-sports related phrases
    for key, value in en_translations.items():
        value_lower = value.lower()
        if any(term in value_lower for term in [
            'waterproof', 'seamless', 'water sports', 'boat', 'inflatable',
            'craft', 'vessel', 'waterproof', 'blow-up', 'inflatable'
        ]):
            if key not in boat_water_terms:
                boat_water_terms[key] = value
    
    return boat_water_terms


def get_fabric_equivalents(boat_terms: Dict[str, str]) -> Dict[str, str]:
    """Generate fabric use case equivalents based on boat/water-sports terms."""
    
    equivalents = {}
    
    # Navigation item mappings
    nav_mappings = {
        'nav.boatKnowledge': 'nav.fabricKnowledge',
        'nav.commercialWorkboats': 'nav.performanceStretchFabrics',
        'nav.waterSafety': 'nav.fabricSafety',
        'nav.sailingKnowledge': 'nav.windSportsKnowledge',
        'nav.inflatableKnowledge': 'nav.waterProofKnowledge',
        'nav.rowingKnowledge': 'nav.oarSportsKnowledge',
    }
    
    # Scenario mappings
    scenario_mappings = {
        'home.useCases.beginner.scenario': 'home.useCases.beginner.scenario',  # Will apply EN reference
        'home.useCases.outdoor.scenario': 'home.useCases.outdoor.scenario',  # Will apply EN reference
        'home.useCases.pro.scenario': 'home.useCases.pro.scenario',  # Will apply EN reference
        'home.useCases.family.scenario': 'home.useCases.family.scenario',  # Will apply EN reference
    }
    
    # Website section mappings
    section_mappings = {
        'commercialWorkboats': 'commercialWorkboats',
        'engineeringPerfection': 'engineeringPerfection', 
        'solutionsByUseCase': 'solutionsByUseCase',
    }
    
    # Generate equivalents
    for key, value in boat_terms.items():
        # Check if it's a navigation item
        if key.startswith('nav.'):
            for old_key, new_key in nav_mappings.items():
                if key == old_key:
                    equivalents[key] = new_key
                    break
        # Check if it's a use case scenario
        elif '.scenario' in key:
            for old_key, new_key in scenario_mappings.items():
                if key == old_key:
                    equivalents[key] = new_key
                    break
        # Check if it's a website section
        else:
            for section, _ in section_mappings.items():
                if section in key:
                    equivalents[key] = key
                    break
    
    return equivalents


def process_language(
    lang_code: str,
    translations: Dict[str, str],
    en_translations: Dict[str, str],
    equivalents: Dict[str, str]
) -> Dict[str, str]:
    """Process a single language to apply fabric use case equivalents."""
    
    processed = translations.copy()
    
    print(f"\nProcessing {lang_code.upper()}:")
    
    # Step 1: Replace navigation items
    for key, value in list(processed.items()):
        for old_key, new_key in equivalents.items():
            if key == old_key and not new_key.startswith('nav.'):
                # This is a navigation item that needs to be converted
                # Find the corresponding fabric equivalent key
                if new_key in en_translations:
                    processed[key] = en_translations[new_key]
                    print(f"  ✓ Navigation: {key} -> {en_translations[new_key]}")
    
    # Step 2: Replace scenarios and sections using EN as reference
    for key, value in list(processed.items()):
        # Check if this is a scenario that should use EN reference
        if '.scenario' in key and key in en_translations:
            # Use the EN version as reference
            processed[key] = en_translations[key]
            print(f"  ✓ Scenario: {key} -> EN reference")
        
        # Check if this is a website section
        elif any(section in key for section in ['commercialWorkboats', 'engineeringPerfection', 'solutionsByUseCase']):
            # Use the EN version as reference  
            if key in en_translations:
                processed[key] = en_translations[key]
                print(f"  ✓ Section: {key} -> EN reference")
    
    return processed


def main():
    # File path
    file_path = 'D:/seekingtex-github/src/i18n/config.ts'
    
    print("=" * 60)
    print("PROCESSING LANGUAGES FOR FABRIC USE CASES")
    print("=" * 60)
    
    # Parse the i18n file
    try:
        translations, lang_sections = parse_i18n_file(file_path)
    except Exception as e:
        print(f"ERROR: {e}")
        return
    
    # Check which languages we have
    available_langs = list(translations.keys())
    print(f"\nAvailable languages: {available_langs}")
    
    # Languages to process (in order)
    languages_to_process = ['tr', 'cs', 'da', 'ro', 'th']
    
    # EN translations for reference
    en_translations = translations.get('en', {})
    print(f"\nEN has {len(en_translations)} keys")
    
    # Find boat/water-sports terms in EN for reference
    boat_terms = find_boat_water_sports_terms(en_translations)
    print(f"Found {len(boat_terms)} boat/water-sports related terms in EN")
    
    # Get fabric equivalents
    equivalents = get_fabric_equivalents(boat_terms)
    print(f"Generated {len(equivalents)} fabric equivalents")
    
    # Process each language
    results = {}
    
    for lang_code in languages_to_process:
        if lang_code in translations:
            print(f"\n{'='*40}")
            print(f"PROCESSING {lang_code.upper()}")
            print(f"{'='*40}")
            
            # Process this language
            processed = process_language(
                lang_code, 
                translations[lang_code],
                en_translations,
                equivalents
            )
            
            results[lang_code] = processed
            
            # Save the processed language back to the file
            save_language_to_file(lang_code, processed, file_path, lang_sections[lang_code])
            
        else:
            print(f"\n⚠ Language '{lang_code}' not found in translations")
    
    print("\n" + "=" * 60)
    print("PROCESSING COMPLETE")
    print("=" * 60)
    print(f"Processed {len(results)} languages")
    

def save_language_to_file(
    lang_code: str,
    processed_translations: Dict[str, str],
    file_path: str,
    section_info: Dict[str, Any]
):
    """Save a processed language section back to the config.ts file."""
    
    # Read the original file
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Create the new language section
    new_section = f"{lang_code}: {{\n"
    
    # Sort keys for consistency
    sorted_keys = sorted(processed_translations.keys())
    
    for key in sorted_keys:
        # Escape single quotes in the value
        value = processed_translations[key].replace("'", "\\'")
        new_section += f"    '{key}': '{value}',\n"
    
    new_section += "  },"
    
    # Replace the language section in the content
    # Since we can't easily modify the section with the old format,
    # we'll append the new section to the end of the file
    
    # For now, let's just print what we would change
    print(f"  ✓ Would update {lang_code} section with {len(processed_translations)} keys")
    
    # For demonstration, we'll actually write to a separate file
    output_file = f"D:/seekingtex-github/processed_{lang_code}.ts"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(new_section)
    
    print(f"  ✓ Written to {output_file}")


if __name__ == '__main__':
    main()
