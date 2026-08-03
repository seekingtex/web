LANGUAGE PROCESSING GUIDE - Fabric Use Case Conversion
============================================================

## Summary
This document provides a comprehensive guide for processing Turkish (tr), Czech (cs), Danish (da), Romanian (ro), and Thai (th) languages in the `src/i18n/config.ts` file. The goal is to convert all boat/water-sports related content to fabric use case equivalents while maintaining structure and fixing garbled text issues.

## 1. FILE ANALYSIS

The `src/i18n/config.ts` file contains TypeScript code with language sections for:
- `en` (English) - Reference language
- `tr` (Turkish)
- `cs` (Czech) 
- `da` (Danish)
- `ro` (Romanian)
- `th` (Thai)

Each language section contains key-value pairs for UI translations.

## 2. CLEANUP RULES TO APPLY

### Rule 1: Boat/Water-Sports Terms → Fabric Use Case Equivalents

#### Navigation Item Replacements:
- `nav.boatKnowledge` → `nav.fabricKnowledge`
- `nav.commercialWorkboats` → `nav.performanceStretchFabrics`
- `nav.waterSafety` → `nav.fabricSafety`

#### Use Case Scenario Mappings:
- All boat/water-sports scenarios → Use EN reference
- Keep scenario structure (beginner, outdoor, pro, family)
- Use EN values as reference for scenarios

#### Website Section Mappings:
- `commercialWorkboats.*` → Apply EN reference values
- `engineeringPerfection.*` → Apply EN reference values
- `solutionsByUseCase.*` → Apply EN reference values

### Rule 2: Fix Garbled Text Issues
- **Thai (th)**: Look for ? characters, visually verify
- **Other languages**: Check for garbled text patterns
- Fix any garbled translations to proper fabric terminology

### Rule 3: Maintain All Structure
- Preserve all existing keys and nesting
- Only change display values
- Maintain TypeScript syntax
- Keep all language sections intact

## 3. KEY BOAT/WEATHER-SESPORTS TERMS TO REPLACE (FROM EN REFERENCE)

### Navigation Items (EN Reference):
```
'en': {
  'nav.boatKnowledge': 'Fabric Safety and Standards',
  'nav.commercialWorkboats': 'Performance Stretch Fabrics',
  'nav.waterSafety': 'Fabric Safety and Compliance Knowledge'
}
```

### Use Case Scenarios (EN Reference):
```
'en': {
  'home.useCases.beginner.scenario': 'A sportswear brand wants to launch...',
  'home.useCases.outdoor.scenario': 'An outdoor brand needs waterproof breathable fabric...', 
  'home.useCases.pro.scenario': 'A tactical equipment manufacturer needs heavy-duty fabric...',
  'home.useCases.family.scenario': 'An apparel brand needs eco-friendly performance fabrics...'
}
```

### Website Sections (EN Reference):
```
'en': {
  'commercialWorkboats.a1': '... (commercial workboats reference)...',
  'engineeringPerfection.p1': '... (engineering perfection reference)...',
  'solutionsByUseCase.scenario1': '... (solutions reference)...'
}
```

## 4. PROCESSING STEPS

### Step 1: Parse the File
1. Read `src/i18n/config.ts`
2. Extract all language sections (en, tr, cs, da, ro, th)
3. Store translations in dictionaries

### Step 2: Process Each Language (in order)

#### Turkish (tr):
1. Find all boat/water-sports terms in TR section
2. Replace:
   - `nav.boatKnowledge` → `nav.fabricKnowledge`
   - `nav.commercialWorkboats` → `nav.performanceStretchFabrics`
3. Use EN values for scenarios
4. Fix any garbled text (check for ? characters)

#### Czech (cs):
1. Same replacements as TR
2. Use EN values for scenarios
3. Fix garbled text if any

#### Danish (da):
1. Same replacements as TR
2. Use EN values for scenarios
3. Fix garbled text if any

#### Romanian (ro):
1. Same replacements as TR
2. Use EN values for scenarios
3. Fix garbled text if any

#### Thai (th):
1. Same replacements as TR
2. Use EN values for scenarios
3. **Special attention**: Check for garbled text and fix
4. Verify no ? characters remain
5. Visual verification in Thai characters

### Step 3: Save Processed Files
For each language, create a processed file:
- `processed_tr.json`
- `processed_cs.json`
- `processed_da.json`
- `processed_ro.json`
- `processed_th.json`

## 5. IMPLEMENTATION STRATEGY

### For Navigation Items:
```typescript
// BEFORE (in any language):
'en': {
  'nav.boatKnowledge': 'Boat knowledge and safety guide',
  'nav.commercialWorkboats': 'Commercial workboats guide'
}

// AFTER (in any language):
'en': {
  'nav.fabricKnowledge': 'Fabric safety and standards',  // EN reference value
  'nav.performanceStretchFabrics': 'Performance stretch fabrics'  // EN reference value
}
```

### For Use Case Scenarios:
```typescript
// BEFORE (in any language):
'en': {
  'home.useCases.beginner.scenario': 'A sportswear brand wants...'
}

// AFTER (in any language):
'en': {
  'home.useCases.beginner.scenario': 'A sportswear brand wants...'  // EN reference value
}
```

### For Website Sections:
```typescript
// BEFORE (in any language):
'en': {
  'commercialWorkboats.a1': 'Commercial workboats guide'
}

// AFTER (in any language):
'en': {
  'commercialWorkboats.a1': 'Commercial workboats guide'  // EN reference value
}
```

## 6. VERIFICATION CHECKLIST

After processing each language, verify:

1. ✅ **Boat/Water-sports Terms Removed**: No "boat", "water", "sports", "marine", "sailing" phrases remain
2. ✅ **Fabric Terminology Used**: "fabric", "textile", "stretch fabric" terms are used
3. ✅ **EN Reference Applied**: All scenarios use EN reference values
4. ✅ **Structure Maintained**: All keys and nesting preserved
5. ✅ **Garbled Text Fixed**: No ? characters or garbled text
6. ✅ **TypeScript Valid**: Syntax is valid for file compilation

## 7. SAMPLE PROCESSING SCRIPT

### Python Script Outline:
```python
import re
import json

def parse_language_sections(file_content):
    """Extract all language sections from the file."""
    # Parse using regex patterns
    pass

def process_language_translations(lang_translations, en_translations):
    """Apply cleanup rules to a language section."""
    processed = {}
    
    for key, value in lang_translations.items():
        # Rule 1: Replace navigation items
        if key == 'nav.boatKnowledge':
            processed['nav.fabricKnowledge'] = en_translations['nav.fabricKnowledge']
        elif key == 'nav.commercialWorkboats':
            processed['nav.performanceStretchFabrics'] = en_translations['nav.performanceStretchFabrics']
        
        # Rule 2: Use EN reference for scenarios
        elif '.scenario' in key:
            en_key = key.replace('tr', 'en').replace('cs', 'en')...
            processed[key] = en_translations[en_key]
        
        # Rule 3: Use EN reference for sections
        elif any(section in key for section in ['commercialWorkboats', 'engineeringPerfection']):
            processed[key] = en_translations[key]
        
        else:
            processed[key] = value
    
    return processed

def main():
    # Read config.ts
    with open('src/i18n/config.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Parse all languages
    languages = parse_language_sections(content)
    en_translations = languages['en']
    
    # Process each language
    for lang_code in ['tr', 'cs', 'da', 'ro', 'th']:
        if lang_code in languages:
            processed = process_language_translations(
                languages[lang_code], en_translations
            )
            
            # Save to file
            with open(f'processed_{lang_code}.json', 'w') as f:
                json.dump(processed, f, indent=2)
```

## 8. EXPECTED OUTPUT FORMAT

### Processed Turkish (tr) Example:
```json
{
  "nav.fabricKnowledge": "Fabric safety and standards",
  "nav.performanceStretchFabrics": "Performance stretch fabrics",
  "home.useCases.beginner.scenario": "A sportswear brand wants to launch...",  // EN reference
  "home.useCases.outdoor.scenario": "An outdoor brand needs...",  // EN reference
  "commercialWorkboats.a1": "... (EN reference value)..."
}
```

## 9. IMPLEMENTATION NOTES

1. **Sequential Processing**: Process languages in order to avoid conflicts
2. **Reference First**: Use EN section as the primary source for fabric equivalents
3. **Validation**: Ensure all cleaned translations are correctly formatted
4. **Backup**: Keep original file as backup before making changes
5. **Testing**: Verify that the processed files work correctly with the application

## 10. BOTTLENECKS TO ADDRESS

1. **File Access**: Ensure proper permissions to read/write the config.ts file
2. **Encoding**: Handle potential UTF-8 encoding issues
3. **Large File**: The file may be large, requiring efficient parsing
4. **Memory**: Process languages individually to reduce memory usage
5. **Validation**: Ensure the processed TypeScript file is syntactically correct

This guide provides a complete roadmap for processing all target languages to convert boat/water-sports content to fabric use case equivalents while maintaining structure and fixing garbled text issues.
