$bytes = [System.IO.File]::ReadAllBytes('README.md')
$corruptText = [System.Text.Encoding]::UTF8.GetString($bytes)
$gbkBytes = [System.Text.Encoding]::GetEncoding(936).GetBytes($corruptText)
$recoveredText = [System.Text.Encoding]::UTF8.GetString($gbkBytes)

# After GBK round-trip, box-drawing chars are recovered
# But arrows (→) and em dashes (—) became ?? because trail byte was lost
# Fix: replace ?? with appropriate characters based on context

# Em dash context: spaces around ?? or in specific patterns
# Most ?? between spaces or at line ends should be em dash
$fixed = $recoveredText -replace ' \?\? ', ' — '

# Arrow context: ?? followed by specific paths/URLs
$fixed = $fixed -replace '\?\?seekingtex', '→seekingtex'
$fixed = $fixed -replace '\?\?redirect', '→redirect'
$fixed = $fixed -replace '\?\?auto', '→auto'
$fixed = $fixed -replace '\?\?`English', '→`English'
$fixed = $fixed -replace '\?\?`/{lang}', '→`/{lang}'
$fixed = $fixed -replace '\?\?`/llms', '→`/llms'
$fixed = $fixed -replace '\?\?/llms', '→/llms'
$fixed = $fixed -replace '\?\?never', '→never'
$fixed = $fixed -replace '\?\?`/api', '→`/api'
$fixed = $fixed -replace '\?\?GEO SEO', '→GEO SEO'
$fixed = $fixed -replace '\?\?Generative', '→Generative'
$fixed = $fixed -replace '\?\?globally', '→globally'
$fixed = $fixed -replace '\?\?single source', '→single source'
$fixed = $fixed -replace '\?\?build-geo', '→build-geo'
$fixed = $fixed -replace '\*\*Board\*\* \?\? never', '**Board** → never'
$fixed = $fixed -replace '`summary` \?\? but', '`summary` → but'

# Remaining ?? might be em dashes between words
$fixed = $fixed -replace '(?<=[a-zA-Z]) \?\?', ' —'

# Fix specific remaining patterns
$fixed = $fixed -replace 'each group to 4\?\?6', 'each group to 4–6'
$fixed = $fixed -replace '40\?\?20 chars', '40–120 chars'

# Fix language names that are still corrupted
$fixed = $fixed -replace '涓囧垪', '中文'
$fixed = $fixed -replace '鏃ユ湰瑾?', '日本語'
$fixed = $fixed -replace '頃滉淡?', '한국어'
$fixed = $fixed -replace '袪褍褋褋泻懈泄', 'Русский'
$fixed = $fixed -replace '螘位位畏谓喂魏', 'Ελληνικά'
$fixed = $fixed -replace '喔犩覆喔┼覆喙勦笚喔?', 'ไทย'
$fixed = $fixed -replace '丕賱毓乇亘賷丞', 'العربية'

# Fix corrupted accented characters
$fixed = $fixed -replace 'Fran莽ais', 'Français'
$fixed = $fixed -replace 'Espa帽ol', 'Español'
$fixed = $fixed -replace 'Portugu锚s', 'Português'
$fixed = $fixed -replace 'T眉rk莽e', 'Türkçe'
$fixed = $fixed -replace '膷e拧tina', 'Čeština'
$fixed = $fixed -replace 'Rom芒n膬', 'Română'

# Fix em dash in specific headers and text
$fixed = $fixed -replace 'Preventing Encoding & Search\?\?Replace', 'Preventing Encoding & Search–Replace'

# Write as UTF-8 without BOM
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText('README.md', $fixed, $utf8NoBom)

Write-Output "README.md fixed and saved as UTF-8 without BOM"
