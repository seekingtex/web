# Language Processing Summary - Fabric Use Cases

## Overview
This document summarizes the process for converting boat/water-sports related translations in the i18n config.ts file to fabric use case equivalents across multiple languages.

## Languages to Process
1. Turkish (tr)
2. Czech (cs)
3. Danish (da)
4. Romanian (ro)
5. Thai (th)

## Cleanup Rules Applied

### Rule 1: Boat/Water-Sports Terms → Fabric Use Case Equivalents

For each language, we need to identify and replace:

#### Navigation Items:
- `nav.boatKnowledge` → `nav.fabricKnowledge`
- `nav.commercialWorkboats` → `nav.performanceStretchFabrics`

#### Use Case Scenarios:
- Any `.scenario` terms containing boat/water-sports references should be converted to fabric use case scenarios
- En reference: `home.useCases.beginner.scenario`, `home.useCases.outdoor.scenario`, etc.

#### Website Sections:
- `commercialWorkboats.*` → Use EN reference values
- `engineeringPerfection.*` → Use EN reference values  
- `solutionsByUseCase.*` → Use EN reference values

### Rule 2: Fix Garbled Text Issues
- Thai (th) and other languages with ? characters need to be fixed
- Visually verify in CJK languages (zh, ja, ko) and RTL languages (ar, th)

### Rule 3: Maintain Structure
- All existing keys and structure must be preserved
- Only change the display values

## Reference from EN (English) Section

Based on analyzing the EN section, here are the key boat/water-sports terms that need to be converted:

### Navigation Mappings:
```
en:
  'nav.boatKnowledge': 'Fabric Safety and Standards'  → Replace with 'nav.fabricKnowledge'
  'nav.commercialWorkboats': 'Performance Stretch Fabrics'  → Replace with 'nav.performanceStretchFabrics'
```

### Scenario Mappings:
```
en:
  'home.useCases.beginner.scenario': 'A sportswear brand wants...'  → Keep structure, use EN reference
  'home.useCases.outdoor.scenario': 'An outdoor brand needs...'  → Keep structure, use EN reference
  'home.useCases.pro.scenario': 'A tactical equipment manufacturer...'  → Keep structure, use EN reference
  'home.useCases.family.scenario': 'An apparel brand needs...'  → Keep structure, use EN reference
```

### Website Section Mappings:
```
en:
  'commercialWorkboats.a1': '...'  → Keep key, use EN value
  'engineeringPerfection.p1': '...'  → Keep key, use EN value  
  'solutionsByUseCase.scenario1': '...'  → Keep key, use EN value
```

## Processing Approach

### Step 1: Parse the config.ts File
1. Extract all language sections (en, tr, cs, da, ro, th)
2. For each language, create a dictionary of key-value pairs

### Step 2: Identify Boat/Water-Sports Terms
For each language, check for:
- Keys containing boat, water, sports, marine, naval, sea
- Values containing boat, water, sports, sailing, marine phrases

### Step 3: Apply Cleanup Rules
**For Navigation Items:**
- Replace `nav.boatKnowledge` with `nav.fabricKnowledge`
- Replace `nav.commercialWorkboats` with `nav.performanceStretchFabrics`

**For Use Case Scenarios:**
- Keep the same scenario keys (.scenario suffix)
- Use the EN version as reference for values

**For Website Sections:**
- Keep section keys (commercialWorkboats, engineeringPerfection, solutionsByUseCase)
- Use EN values as reference

### Step 4: Fix Garbled Text
**Thai (th):**
- Look for ? characters in values
- Visually verify in Thai
- Replace with appropriate fabric use case terms

### Step 5: Maintain Structure
- Preserve all existing keys and nesting
- Only modify display values where needed
- Ensure JSON/TypeScript structure is valid

## Expected Output

After processing, each language file should:

1. **Have no boat/water-sports terms**
   - No "boat", "water", "sports", "marine", "sailing" phrases
   - All terms converted to fabric use case equivalents

2. **Use fabric use case terminology**
   - "fabric knowledge" instead of "boat knowledge"
   - "performance stretch fabrics" instead of "commercial workboats"
   - "fabric safety" instead of "safety in water sports"

3. **Have correct English reference for scenarios**
   - Use EN scenarios for all use cases
   - Maintain scenario structure (beginner, outdoor, pro, family)

4. **Maintain file structure**
   - All existing keys preserved
   - TypeScript format maintained
   - All translations properly formatted

## Files to Generate

For each processed language, create a file:
- `processed_tr.json` (processed Turkish translations)
- `processed_cs.json` (processed Czech translations)
- `processed_da.json` (processed Danish translations)
- `processed_ro.json` (processed Romanian translations)
- `processed_th.json` (processed Thai translations)

## Key Mappings (English Reference)

### Before (Boat/Water-Sports):
```
'home.useCases.beginner.scenario': 'A sportswear brand wants to launch...'
'home.useCases.outdoor.scenario': 'An outdoor brand needs waterproof breathable fabric...'
'nav.boatKnowledge': 'Boat knowledge and safety guide'
'nav.commercialWorkboats': 'Commercial workboats guide'
'commercialWorkboats.a1': 'Commercial workboats guide'
```

### After (Fabric Use Cases):
```
'home.useCases.beginner.scenario': '[EN reference: A sportswear brand wants...]'  (EN reference value)
'home.useCases.outdoor.scenario': '[EN reference: An outdoor brand needs...]'
'nav.fabricKnowledge': 'Fabric safety and standards'  (EN reference value)
'nav.performanceStretchFabrics': 'Performance stretch fabrics'  (EN reference value)
'commercialWorkboats.a1': '[EN reference: ...]'  (EN reference value)
```

## Implementation Notes

1. **Sequential Processing**: Process languages in order to avoid file conflicts
2. **EN as Reference**: Always use EN translations when EN references are required
3. **Validation**: Ensure no boat/water-sports terms remain after processing
4. **Garbled Text Handling**: Special attention to Thai (and other CJK) languages
5. **Structure Preservation**: Maintain original file format and structure

## Next Steps

1. Parse the actual config.ts file in this environment
2. Extract all language sections
3. Apply the cleanup rules systematically
4. Generate processed files for each language
5. Verify all cleanup rules have been applied correctly

This summary provides the blueprint for converting all boat/water-sports related translations to fabric use case equivalents across all target languages.
