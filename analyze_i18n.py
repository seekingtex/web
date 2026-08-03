#!/usr/bin/env python3

import re
import json
import os
from typing import Dict, Any

def main():
    """Process i18n config file to understand the structure and implement cleanup."""
    
    # EN translation reference (from the file)
    en_translations = {
        # Key cleanup patterns from EN to apply to all languages
        # We're looking for boat/water-sports terms in EN to use as reference
    }
    
    # Read the config file
    file_path = 'D:/seekingtex-github/src/i18n/config.ts'
    
    try:
        # Try reading with different encodings
        with open(file_path, 'rb') as f:
            raw_data = f.read()
        
        encodings = ['utf-8', 'utf-16', 'iso-8859-1', 'windows-1252']
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
            print(f"ERROR: Could not decode file with any of the attempted encodings")
            return
            
        print(f"File decoded with: {encoding_used}")
        print(f"File size: {len(content)} bytes")
        print()
        
        # Find all language sections using regex
        # This matches patterns like: "  en: {" or "  tr: {"
        lang_sections = {}
        lines = content.split('\n')
        
        for i, line in enumerate(lines):
            line = line.strip()
            if line.startswith('en: {'):
                lang_sections['en'] = {'start_line': i, 'content': ''}
            elif line.startswith('tr: {'):
                lang_sections['tr'] = {'start_line': i, 'content': ''}
            elif line.startswith('cs: {'):
                lang_sections['cs'] = {'start_line': i, 'content': ''}
            elif line.startswith('da: {'):
                lang_sections['da'] = {'start_line': i, 'content': ''}
            elif line.startswith('ro: {'):
                lang_sections['ro'] = {'start_line': i, 'content': ''}
            elif line.startswith('th: {'):
                lang_sections['th'] = {'start_line': i, 'content': ''}
        
        print(f"Found language sections: {list(lang_sections.keys())}")
        
        # Now let's try to parse the actual content
        # The file format is TypeScript with TypeScript comments
        # We need to extract the en section to use as reference
        
        # Find the start of ui object
        ui_start = content.find('export const ui = {')
        if ui_start == -1:
            print("ERROR: Could not find 'export const ui = {' in file")
            return
            
        # Find the closing 'as const;' after ui
        ui_end = content.find('as const;', ui_start)
        if ui_end == -1:
            print("ERROR: Could not find 'as const;' after ui export")
            return
            
        ui_end += len('as const;')
        ui_content = content[ui_start:ui_end]
        print(f"UI section found, length: {len(ui_content)} chars")
        
        # Now parse the languages sections
        # We'll just extract the TR section for now to understand the structure
        tr_match = re.search(r'^\s*tr: {([^{}]+(?:\{[^{}]*\}[^{}]*)*)}', content, re.DOTALL | re.MULTILINE)
        if tr_match:
            tr_section = tr_match.group(1)
            print(f"TR section found, length: {len(tr_section)}")
            
            # Extract TR keys to count them
            tr_keys = re.findall(r"'(.*?)':\s*'(.*?)'", tr_section)
            print(f"TR section has {len(tr_keys)} keys")
            
            # Show some TR keys
            print("\nSample TR keys:")
            for key, value in tr_keys[:10]:
                print(f"  '{key}': '{value}'")
                
        # Also check the EN section
        en_match = re.search(r'^\s*en: {([^{}]+(?:\{[^{}]*\}[^{}]*)*)}', content, re.DOTALL | re.MULTILINE)
        if en_match:
            en_section = en_match.group(1)
            print(f"\nEN section found, length: {len(en_section)}")
            
            en_keys = re.findall(r"'(.*?)':\s*'(.*?)'", en_section)
            print(f"EN section has {len(en_keys)} keys")
            
            # Look for boat/water-sports terms in EN
            boat_water_terms = []
            for key, value in en_keys:
                if any(term in key.lower() for term in ['boat', 'water', 'sports', 'marine', 'naval', 'sea']):
                    boat_water_terms.append((key, value))
            
            print(f"\nFound {len(boat_water_terms)} boat/water-sports related terms in EN:")
            for key, value in boat_water_terms[:10]:
                print(f"  '{key}': '{value}'")
        
    except Exception as e:
        print(f"ERROR: {e}")
        import traceback
        traceback.print_exc()

if __name__ == '__main__':
    main()
