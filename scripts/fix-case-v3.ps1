param([string]$RootDir = "D:\seekingtex-github")

$ErrorActionPreference = "Stop"

$files = @()
$dirs = @("$RootDir\src\data","$RootDir\src\pages\keystatic","$RootDir\src\pages\api","$RootDir\src\lib","$RootDir\src\workers")
foreach ($dir in $dirs) { if (Test-Path $dir) { $files += Get-ChildItem -Recurse -LiteralPath $dir -File | Where-Object { $_.Extension -in '.yaml','.yml','.ts','.json','.astro','.md','.mdx' } | ForEach-Object { $_.FullName } } }
$files = $files | Select-Object -Unique

Write-Host "Scanning $($files.Count) files..."
$fixCount = 0

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file)
    $original = $content
    
    # Step 1: Fix all-caps SEEKINGTEX -> Seekingtex (title case for brand name in prose)
    $content = $content.Replace('SEEKINGTEX', 'Seekingtex')
    
    # Step 2: Fix specific lowercase patterns that should stay lowercase
    # These are IDs, slugs, entity references, variable names, URLs, etc.
    # Pattern: 'Seekingtex' inside identifiers (preceded by space/:/- and followed by -/'/:)
    
    # YAML/JSON slug values: slug: Seekingtex -> slug: seekingtex
    $content = [regex]::Replace($content, "(?<=(?:^|\s)(?:slug|id|targetId)\s*:\s*['""]?)Seekingtex", 'seekingtex')
    # YAML entity-node id values: id: Seekingtex -> id: seekingtex
    $content = [regex]::Replace($content, "(?<=targetId:\s*['""]?)Seekingtex", 'seekingtex')
    # Parameter/variable names that start lowercase (camelCase)  
    # e.g.: `seekingtexVec` -> `seekingtexVec`
    $content = $content.Replace('SeekingtexVec', 'seekingtexVec')
    # Entity reference: `identifier: seekingtex:entity:`
    $content = $content.Replace('Seekingtex:entity:', 'seekingtex:entity:')
    
    # Step 3: Verify email is correct
    $content = $content.Replace('gzb@Seekingtex.com', 'gzb@seekingtex.com')
    
    # Use ordinal comparison (byte-level, case-sensitive) to detect change
    $changed = $false
    if ($content.Length -ne $original.Length) {
        $changed = $true
    } else {
        $bytes1 = [System.Text.Encoding]::UTF8.GetBytes($content)
        $bytes2 = [System.Text.Encoding]::UTF8.GetBytes($original)
        for ($i = 0; $i -lt $bytes1.Length; $i++) {
            if ($bytes1[$i] -ne $bytes2[$i]) {
                $changed = $true
                break
            }
        }
    }
    
    if ($changed) {
        [System.IO.File]::WriteAllText($file, $content)
        $fixCount++
        Write-Host "  FIXED: $($file.Substring($RootDir.Length + 1))"
    }
}

Write-Host "`nTotal files fixed: $fixCount"
