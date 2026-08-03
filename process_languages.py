import re
import json
from typing import Any, Dict

# EN Translation Reference (excluding translations that need to be changed)
en_translations = {
    # Boat/water-sports terms that remain in EN (for reference)
    'nav.boatKnowledge': 'Fabric Safety and Standards',
    'nav.commercialWorkboats': 'Performance Stretch Fabrics',
    # Add other boat/water-sports terms that should remain unchanged
}

# Fabric use case equivalents for boat/water-sports terms
fabric_equivalents = {
    # Navigation items
    'nav.boatKnowledge': 'nav.fabricKnowledge',
    'nav.commercialWorkboats': 'nav.performanceStretchFabrics',
    # Add more boat-related nav items that need to be converted
}

# Function to find the start/end positions of a language section
def find_section_bounds(content: str, lang_code: str) -> tuple[int, int] | None:
    # Look for the pattern: "  langCode: {"
    pattern = rf'^  {lang_code}: \{{{'
    match = re.search(pattern, content, re.MULTILINE)
    if not match:
        return None
    
    start_pos = match.start()
    
    # Find the closing brace by counting
    brace_count = 0
    end_pos = start_pos
    for i, char in enumerate(content[start_pos:], start_pos):
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                end_pos = i + 1
                break
    
    return start_pos, end_pos

# Function to extract the tr section
def extract_tr_section(content: str) -> str | None:
    # Look for "  tr: {" specifically
    for i, line in enumerate(content.split('\n')):
        if line.strip() == 'tr: {':
            start_pos = content.find(line)
            # Find the matching closing brace
            brace_count = 0
            end_pos = start_pos
            for j, char in enumerate(content[start_pos:], start_pos):
                if char == '{':
                    brace_count += 1
                elif char == '}':
                    brace_count -= 1
                    if brace_count == 0:
                        end_pos = j + 1
                        break
            return content[start_pos:end_pos]
    return None

# Function to process a language section
def process_language_section(content: str, lang_code: str) -> str:
    # Find the section
    bounds = find_section_bounds(content, lang_code)
    if not bounds:
        print(f"  Section for '{lang_code}' not found")
        return content
    
    start_pos, end_pos = bounds
    section = content[start_pos:end_pos]
    
    # If it's the TR section (or other languages), process it
    if lang_code == 'tr':
        print(f"  Processing TR section...")
        
        # Extract and process the translations
        print(f"  Note: The TR section would be processed here")
        print(f"  Summary of replacements to apply:")
        print(f"  - All boat/water-sports scenario keys to fabric equivalents")
        print(f"  - All boat-related nav items to fabric equivalents")
        print(f"  - All commercialWorkboats.*, engineeringPerfection.*, solutionsByUseCase.* sections to fabric equivalents")
        print(f"  - Fix garbled text issues")
        
        return content  # For now, just return as-is
    
    return content

# Main function to process all languages
with open('D:/seekingtex-github/src/i18n/config.ts', 'r', encoding='utf-8') as f:
    content = f.read()

print("Processing languages for fabric use cases...")
print()

# Process each language
languages_to_process = ['tr', 'cs', 'da', 'ro', 'th']
for lang in languages_to_process:
    print(f"Processing {lang.upper()}:")
    content = process_language_section(content, lang)
    print()

print("Processing complete!")

# Save the updated content
with open('D:/seekingtex-github/src/i18n/config.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Changes saved to src/i18n/config.ts")
