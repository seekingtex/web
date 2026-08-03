import json
import re
from pathlib import Path

# Function to read and parse the i18n config file
def parse_i18n_config(file_path: str) -> dict:
    # Read raw bytes
    with open(file_path, 'rb') as f:
        raw_data = f.read()
    
    # Try to decode with different encodings
    encodings = ['utf-8', 'utf-8-sig', 'iso-8859-1', 'cp1252']
    content = None
    encoding_used = None
    
    for enc in encodings:
        try:
            content = raw_data.decode(enc)
            encoding_used = enc
            print(f"✓ Decoded file with {encoding_used}")
            break
        except UnicodeDecodeError:
            continue
    
    if content is None:
        raise ValueError("Could not decode file with any of the attempted encodings")
    
    # Now parse the TypeScript content
    # The file has a structure like:
    # export const ui = {
    #   en: {
    #     'key1': 'value1',
    #     'key2': 'value2'
    #   },
    #   tr: {
    #     'key1': 'value_tr1',
    #     'key2': 'value_tr2'
    #   }
    # }
    
    # Find the ui export
    ui_pattern = r'export const ui = ({[^{}]+(?:\{[^{}]*\}[^{}]*)*}) as const;'
    ui_match = re.search(ui_pattern, content, re.DOTALL)
    
    if not ui_match:
        print("Could not find ui export, trying different pattern...")
        # Try a more permissive pattern
        ui_match = re.search(r'export const ui = (.+?) as const;', content, re.DOTALL)
        if not ui_match:
            raise ValueError("Could not find ui export in file")
    
    ui_content = ui_match.group(1)
    
    # Parse languages and translations
    translations = {}
    
    # Use a simple state machine to parse
    lines = ui_content.split('\n')
    current_lang = None
    
    for line in lines:
        line = line.strip()
        
        if not line or line.startswith('//'):
            continue
            
        # Check for language section
        lang_match = re.match(r'^([a-z]+):\s*\{$', line)
        if lang_match:
            current_lang = lang_match.group(1)
            if current_lang not in translations:
                translations[current_lang] = {}
            continue
            
        # Check for end of ui export
        if line == '};':
            break
            
        # Parse key-value pairs
        kv_match = re.match(r"^\s*'(\w+(?:\\.\w+)*)':\s*'([^']*)'", line)
        if kv_match and current_lang:
            key = kv_match.group(1)
            value = kv_match.group(2)
            translations[current_lang][key] = value
    
    return translations

# Function to apply cleanup rules based on EN reference
def apply_cleanup_rules(en_translations, other_translations):
    # Define translation mapping
    # These are the keys that need to be replaced with fabric equivalents
    cleanup_mapping = {
        # Navigation items to replace
        'nav.boatKnowledge': 'nav.fabricKnowledge',
        'nav.commercialWorkboats': 'nav.performanceStretchFabrics',
        
        # Website sections to be replaced (apply EN values)
        'commercialWorkboats': 'commercialWorkboats',
        'engineeringPerfection': 'engineeringPerfection',
        'solutionsByUseCase': 'solutionsByUseCase',
    }
    
    # Reference EN values for sections
    # For demonstration, we'll use the EN values directly
    EN_REFERENCE_VALUES = {
        'nav.fabricKnowledge': 'Fabric Safety and Standards',
        'nav.performanceStretchFabrics': 'Performance Stretch Fabrics',
        
        # Add more EN values for reference if needed
        'commercialWorkboats': 'commercialWorkboats',
        'engineeringPerfection': 'engineeringPerfection',
        'solutionsByUseCase': 'solutionsByUseCase',
    }
    
    cleaned_translations = other_translations.copy()
    
    # Step 1: Replace boat/water-sports terms with fabric equivalents
    print(f"\nStep 1: Checking for boat/water-sports term replacements in other language...")
    
    for key, value in cleaned_translations.items():
        if key in cleanup_mapping:
            new_key = cleanup_mapping[key]
            if new_key in EN_REFERENCE_VALUES:
                print(f"  Converting {key} to {new_key}")
                cleaned_translations[new_key] = EN_REFERENCE_VALUES[new_key]
                # Remove old key
                del cleaned_translations[key]
    
    # Step 2: Replace scenarios and sections (for demonstration, using EN reference for scenarios)
    print(f"\nStep 2: Checking for scenario/section references in other language...")
    
    for key, value in cleaned_translations.items():
        # Check if this key matches any pattern that should use EN reference
        if any(section in key.lower() for section in ['scenario', 'solution']):
            # In a real implementation, we would:
            # 1. Check if there's a corresponding key in EN
            # 2. If yes, replace with EN value
            # 3. Keep structure but update display value
            print(f"  Found scenario/section reference: {key}")
            # For now, we'll keep it as-is
    
    return cleaned_translations

# Function to save processed translations back to file
def save_processed_translations(lang_code: str, translations: dict, original_path: str):
    # Create the new file content
    # This creates a simplified version of the TypeScript file
    content = f"export const {lang_code} = {{\n"
    
    # Sort keys for consistency
    sorted_keys = sorted(translations.keys())
    
    for key in sorted_keys:
        value = translations[key].replace("'", "\\'")
        content += f"  '{key}': '{value}',\n"
    
    content += "}\n"
    
    # Save to a new file
    output_path = f"D:/seekingtex-github/processed_{lang_code}.ts"
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"  ✓ Saved processed {lang_code} translations to {output_path}")

# Main function
def main():
    input_path = 'D:/seekingtex-github/src/i18n/config.ts'
    
    print("=" * 60)
    print("PROCESSING LANGUAGES FOR FABRIC USE CASES")
    print("=" * 60)
    
    # Parse the original config
    print(f"\nParsing {input_path}...")
    original_translations = parse_i18n_config(input_path)
    
    # Show what languages we have
    print(f"\nLanguages found: {list(original_translations.keys())}")
    
    # Get EN translations as reference
    en_translations = original_translations.get('en', {})
    print(f"\nEN translations: {len(en_translations)} keys")
    
    # Show some EN references for boat/water-sports
    print(f"\nSome English translations for reference:")
    for key in sorted(en_translations.keys()):
        if 'boat' in key.lower() or 'water' in key.lower() or 'sports' in key.lower():
            print(f"  {key}: {en_translations[key][:50]}...")
    
    # Languages to process
    languages_to_process = ['tr', 'cs', 'da', 'ro', 'th']
    
    for lang_code in languages_to_process:
        if lang_code in original_translations:
            print(f"\n{'='*60}")
            print(f"PROCESSING {lang_code.upper()}")
            print(f"{'='*60}")
            
            # Get this language's translations
            lang_translations = original_translations[lang_code]
            print(f"  Original {lang_code} has {len(lang_translations)} keys")
            
            # Apply cleanup rules
            cleaned = apply_cleanup_rules(en_translations, lang_translations)
            
            print(f"  Processed {lang_code} has {len(cleaned)} keys")
            
            # Show a few converted items
            converted_items = [k for k in cleaned.keys() if k in ['nav.fabricKnowledge', 'nav.performanceStretchFabrics']]
            if converted_items:
                print(f"  Converted items: {converted_items}")
                
                # Save processed language
                save_processed_translations(lang_code, cleaned, input_path)
            else:
                print(f"  No boat/water-sports terms found in {lang_code} to convert")
        else:
            print(f"\n⚠ {lang_code.upper()} section not found in config.ts")
    
    print("\n" + "=" * 60)
    print("PROCESSING COMPLETE")
    print("=" * 60)
    print("\nNote: This script processes the translations but doesn't modify")
    print("the original config.ts file. A separate script would be needed")
    print("to properly update the TypeScript file structure.")

if __name__ == '__main__':
    main()
