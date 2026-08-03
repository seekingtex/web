import json
import re

# The i18n/config.ts file is a TypeScript file with language sections
# Let me create a simpler script to parse it

def parse_config_file(file_path):
    # Read the file line by line
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        lines = f.readlines()
    
    # Find the start of the ui object
    ui_start = None
    for i, line in enumerate(lines):
        if 'export const ui = {' in line:
            ui_start = i
            break
    
    if ui_start is None:
        print("Could not find 'export const ui = {' in the file")
        return None
    
    # Find all language sections
    lang_sections = {}
    current_lang = None
    current_indent = None
    section_start = None
    
    for i in range(len(lines)):
        line = lines[i].rstrip()
        
        # Check for language section start
        if line.strip().endswith(': {') and not line.strip().startswith('//'):
            # Extract language code (first word before colon)
            lang_match = re.match(r'^\s*([a-z]+):\s*\{$', line)
            if lang_match:
                lang_code = lang_match.group(1)
                current_lang = lang_code
                current_indent = len(line) - len(line.lstrip())
                section_start = i
                print(f"Found language section: {lang_code} at line {i+1}")
                
                # Check if it's one of the languages we need to process
                if lang_code in ['tr', 'cs', 'da', 'ro', 'th']:
                    print(f"  -> Processing this language section")
        
        # Check for closing brace of language section
        elif line.strip() == '},' and current_lang and section_start is not None:
            section_lines = lines[section_start:i+1]
            lang_sections[current_lang] = section_lines
            print(f"  -> Completed language section: {current_lang} ({len(section_lines)} lines)")
            current_lang = None
            section_start = None
    
    return lang_sections

def find_boat_terms_in_en(lang_sections):
    """Find boat/water-sports terms in EN translations for reference."""
    if 'en' not in lang_sections:
        print("EN section not found for reference")
        return {}
    
    en_lines = lang_sections['en']
    
    # Patterns that indicate boat/water-sports terms
    boat_patterns = [
        'nav.boatKnowledge',
        'nav.commercialWorkboats',
        'home.useCases.*boat',
        'home.useCases.*water',
        'home.useCases.*sports',
        'commercialWorkboats',
        'engineeringPerfection',
        'solutionsByUseCase',
    ]
    
    boat_terms = {}
    for line in en_lines:
        line = line.strip()
        for pattern in boat_patterns:
            if pattern in line and ':' in line:
                # Extract key and value
                parts = line.split(':', 1)
                if len(parts) == 2:
                    key = parts[0].strip().strip("',")
                    value = parts[1].strip().strip("', ,")
                    boat_terms[key] = value
    
    return boat_terms

def process_language_section(lines, lang_code):
    """Process a language section for fabric use case equivalents."""
    processed_lines = []
    
    print(f"\nProcessing {lang_code.upper()}:")
    
    for line in lines:
        original_line = line
        line = line.rstrip()
        
        # Apply cleanup rules based on the instructions
        
        # Rule 1: Replace boat/water-sports terms with fabric use case equivalents
        # We need to compare with EN translations for reference
        
        # Add processing logic here
        processed_lines.append(original_line)
    
    return processed_lines

def main():
    file_path = 'D:/seekingtex-github/src/i18n/config.ts'
    
    print("Parsing i18n/config.ts file...")
    print(f"File path: {file_path}")
    print()
    
    # Parse the config file
    lang_sections = parse_config_file(file_path)
    
    if lang_sections:
        print(f"\nFound language sections: {list(lang_sections.keys())}")
        
        # Find boat/water-sports terms in EN for reference
        print("\nFinding boat/water-sports terms in EN for reference...")
        boat_terms = find_boat_terms_in_en(lang_sections)
        
        print(f"\nFound {len(boat_terms)} boat/water-sports related terms in EN:")
        for key, value in list(boat_terms.items())[:10]:
            print(f"  {key}: {value}")
        
        # Process each language that needs fixing
        languages_to_process = ['tr', 'cs', 'da', 'ro', 'th']
        
        for lang_code in languages_to_process:
            if lang_code in lang_sections:
                print(f"\n{'='*60}")
                print(f"PROCESSING {lang_code.upper()}")
                print(f"{'='*60}")
                
                # Process the language section
                processed = process_language_section(lang_sections[lang_code], lang_code)
                
                # Write processed section to a new file
                output_path = f"D:/seekingtex-github/processed_{lang_code}.ts"
                with open(output_path, 'w', encoding='utf-8') as f:
                    f.writelines(processed)
                
                print(f"✓ Processed {lang_code} section written to {output_path}")
            else:
                print(f"\n⚠ Language '{lang_code}' not found in config.ts")
    
    print("\n" + "="*60)
    print("PROCESSING COMPLETE")
    print("="*60)

if __name__ == '__main__':
    main()
