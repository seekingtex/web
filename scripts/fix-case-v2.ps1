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
    
    # Step 1: Specific patterns first (more specific before less specific)
    $content = [regex]::Replace($content, '(?i)([a-zA-Z0-9._%+-]+)@seekingtex\.com', 'gzb@seekingtex.com')
    $content = [regex]::Replace($content, '(?i)/images/seekingtex/', '/images/seekingtex/')
    $content = [regex]::Replace($content, '(?i)github\.com/seekingtex', 'github.com/seekingtex')
    $content = [regex]::Replace($content, '(?i)@seekingtex_watersports', '@seekingtex_watersports')
    $content = [regex]::Replace($content, '(?i)#seekingtexAdventure', '#SeekingtexAdventure')
    $content = [regex]::Replace($content, '(?i)seekingtexTEX', 'seekingtexTEX')
    
    # Step 2: Domain (must be after email/images)
    $content = [regex]::Replace($content, '(?i)seekingtex\.com', 'seekingtex.com')
    
    # Step 3: CamelCase prefix (seekingtex followed by uppercase letter)
    $content = [regex]::Replace($content, '(?i)\bseekingtex(?=[A-Z])', { param($m)
        switch -CaseSensitive ($m.Value) {
            'seekingtex' { 'Seekingtex' }
            default { 'seekingtex' }
        }
    })
    
    # Step 4: Generic brand name - preserve case (word boundaries)
    $content = [regex]::Replace($content, '(?i)\bseekingtex\b', { param($m)
        switch -CaseSensitive ($m.Value) {
            'seekingtex' { 'SEEKINGTEX' }
            'seekingtex' { 'Seekingtex' }
            'seekingtex' { 'seekingtex' }
            default { $m.Value }
        }
    })
    
    # Use ordinal comparison to detect change
    $changed = [System.String]::Equals($content, $original, [System.StringComparison]::Ordinal)
    
    if (-not $changed) {
        [System.IO.File]::WriteAllText($file, $content)
        $fixCount++
        Write-Host "  FIXED: $($file.Substring($RootDir.Length + 1))"
    }
}

Write-Host "`nTotal files fixed: $fixCount"
