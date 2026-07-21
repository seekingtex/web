param(
    [string]$RootDir = "D:\seekingtex-github"
)

$ErrorActionPreference = "Stop"

Function Process-File {
    param([string]$Path)
    try {
        $content = [System.IO.File]::ReadAllText($Path)
        $original = $content
        
        # Ordered replacements (more specific first, less specific last)
        # 1. Email (any @seekingtex.com)
        $content = $content -replace '(?i)([a-zA-Z0-9._%+-]+)@seekingtex\.com', 'gzb@seekingtex.com'
        # 2. Image paths
        $content = $content -replace '(?i)/images/seekingtex/', '/images/seekingtex/'
        # 3. Instagram/social handles
        $content = $content -replace '(?i)@seekingtex_watersports', '@seekingtex_watersports'
        $content = $content -replace '(?i)@seekingtex\b', '@Seekingtex'
        $content = $content -replace '(?i)@seekingtex\b', '@seekingtex'
        # 4. Hashtag
        $content = $content -replace '(?i)#seekingtexAdventure', '#SeekingtexAdventure'
        # 5. GitHub repo
        $content = $content -replace '(?i)github\.com/seekingtex', 'github.com/seekingtex'
        # 6. seekingtex.com domain (as whole word)
        $content = $content -replace '(?i)seekingtex\.com', 'seekingtex.com'
        # 7. seekingtex (all caps)
        $content = $content -replace 'seekingtex', 'SEEKINGTEX'
        # 8. seekingtex-xxx (compound words like seekingtex-admin, seekingtex-auth, seekingtexTEX)
        $content = $content -replace 'seekingtex-', 'Seekingtex-'
        $content = $content -replace 'seekingtexTEX', 'seekingtexTEX'
        $content = $content -replace 'seekingtexTEX', 'SeekingtexTEX'
        # 9. seekingtex (title case) - must be done after domain/email replacements
        $content = $content -replace 'seekingtex', 'Seekingtex'
        # 9. seekingtex (lowercase) - remaining lowercase references
        $content = $content -replace '(?<![A-Za-z])seekingtex(?![A-Za-z])', 'seekingtex'
        
        if ($content -ne $original) {
            [System.IO.File]::WriteAllText($Path, $content)
            return $true
        }
    } catch {
        Write-Warning "Error processing $Path : $_"
    }
    return $false
}

# Gather all files
$allFiles = @()
$dirs = @(
    "$RootDir\src\data",
    "$RootDir\src\pages\keystatic",
    "$RootDir\src\pages\api",
    "$RootDir\src\lib",
    "$RootDir\src\workers"
)

foreach ($dir in $dirs) {
    if (Test-Path -LiteralPath $dir) {
        $allFiles += Get-ChildItem -Recurse -LiteralPath $dir -File | Where-Object { 
            $_.Extension -in '.yaml', '.yml', '.ts', '.json', '.astro', '.md', '.mdx' -or 
            $_.Name -eq 'content-v2.yaml' -or
            $_.Name -like 'content-v2*'
        } | ForEach-Object { $_.FullName }
    }
}

# De-duplicate
$allFiles = $allFiles | Select-Object -Unique

Write-Host "Found $($allFiles.Count) files to scan..."

$modifiedCount = 0
$modifiedFiles = @()

foreach ($file in $allFiles) {
    # Quick check first - does it contain "seekingtex"?
    $raw = [System.IO.File]::ReadAllText($file)
    if ($raw -match '(?i)seekingtex') {
        if (Process-File -Path $file) {
            $modifiedCount++
            $relativePath = $file.Substring($RootDir.Length + 1)
            $modifiedFiles += $relativePath
            Write-Host "  MODIFIED: $relativePath"
        }
    }
}

Write-Host "`n=== SUMMARY ==="
Write-Host "Total files modified: $modifiedCount"
$modifiedFiles | ForEach-Object { Write-Host "  $_" }

# Save the list of modified files for reference
$modifiedFiles | Out-File -FilePath "$RootDir\temp-rebrand-modified-files.txt" -Encoding utf8
