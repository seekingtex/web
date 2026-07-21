param(
    [string]$RootDir = "D:\seekingtex-github"
)

$ErrorActionPreference = "Stop"

$files = @()
$dirs = @(
    "$RootDir\src\data",
    "$RootDir\src\pages\keystatic",
    "$RootDir\src\pages\api",
    "$RootDir\src\lib",
    "$RootDir\src\workers"
)

foreach ($dir in $dirs) {
    if (Test-Path -LiteralPath $dir) {
        $files += Get-ChildItem -Recurse -LiteralPath $dir -File | Where-Object { 
            $_.Extension -in '.yaml', '.yml', '.ts', '.json', '.astro', '.md', '.mdx'
        } | ForEach-Object { $_.FullName }
    }
}

$files = $files | Select-Object -Unique
Write-Host "Scanning $($files.Count) files..."

$fixCount = 0
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file)
    $original = $content
    
    # Fix SEEKINGTEX (all caps that should be title case Seekingtex)
    # Use word-boundary aware replacement
    $content = $content -creplace 'SEEKINGTEX', 'Seekingtex'
    
    # If nothing changed, skip
    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($file, $content)
        $fixCount++
        Write-Host "  FIXED: $($file.Substring($RootDir.Length + 1))"
    }
}

Write-Host "`nFixed $fixCount files with SEEKINGTEX -> Seekingtex case correction"

# Now redo proper replacements with case-sensitive matching
Write-Host "`n--- Phase 2: Case-sensitive replacements ---"
$fixCount2 = 0
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file)
    $original = $content
    
    # Case-sensitive replacements:
    # 1. All-caps brand name
    $content = $content -creplace 'seekingtex', 'SEEKINGTEX'
    # 2. Title case brand name  
    $content = $content -creplace 'seekingtex', 'Seekingtex'
    # 3. Lowercase brand name (as whole word only)
    $content = $content -creplace '(?<![a-zA-Z])seekingtex(?![a-zA-Z])', 'seekingtex'
    # 4. Email
    $content = $content -creplace 'info@seekingtex\.com', 'gzb@seekingtex.com'
    $content = $content -creplace 'hello@seekingtex\.com', 'gzb@seekingtex.com'
    # 5. Image paths
    $content = $content -creplace '/images/seekingtex/', '/images/seekingtex/'
    # 6. Domain
    $content = $content -creplace 'seekingtex\.com', 'seekingtex.com'
    # 7. GitHub
    $content = $content -creplace 'github\.com/seekingtex', 'github.com/seekingtex'
    # 8. Social handles  
    $content = $content -creplace '@seekingtex_watersports', '@seekingtex_watersports'
    $content = $content -creplace '#seekingtexAdventure', '#SeekingtexAdventure'
    # 9. Compound words
    $content = $content -creplace 'seekingtex-', 'Seekingtex-'
    $content = $content -creplace 'seekingtexTEX', 'seekingtexTEX'
    $content = $content -creplace 'seekingtexTEX', 'SeekingtexTEX'
    
    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($file, $content)
        $fixCount2++
        Write-Host "  FIXED: $($file.Substring($RootDir.Length + 1))"
    }
}

Write-Host "`nTotal files updated in phase 2: $fixCount2"
