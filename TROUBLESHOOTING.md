# Troubleshooting Guide 鈥?seekingtex Project

> 鏈枃妗ｈ褰曢」鐩腑閬囧埌鐨勬墍鏈夐敊璇強淇鏂规硶锛屾瘡娆′慨澶嶅悗鏇存柊銆?

---

## 1. 椤圭洰鏋舵瀯蹇€熷弬鑰?

| 灞傜骇   | 鎶€鏈?                                 |
| -------- | -------------------------------------- |
| 妗嗘灦   | Astro v6 (hybrid SSG/SSR)              |
| 閮ㄧ讲   | Cloudflare Workers (`output:'server'`) |
| CI/CD    | GitHub Actions 鈫?`wrangler deploy`    |
| 鍖呯鐞? | Yarn 4 (Berry)                         |
| Node     | >= 22.12.0                             |

### 鏋勫缓娴佺▼

```
yarn run build =
  1. node scripts/geo-build.mjs   鈫?llms.txt (13璇█) + sitemap-entity.xml
  2. astro build                  鈫?dist/client/ (SSG) + dist/server/ (Worker)
  3. node scripts/patch-worker.mjs 鈫?No-op (subdomain routing宸茬Щ闄?
```

### CI/CD 娴佺▼ (`.github/workflows/actions.yaml`)

```
push to main 鈫?
  Job 1: check-astro (astro check)
  Job 2: build-and-deploy (濡傛灉Job 1閫氳繃)
    鈫?yarn run build
    鈫?娉ㄥ叆 VECTORIZE + AI bindings 鍒?wrangler.ci.json
    鈫?纭繚 Vectorize index + KV namespace 瀛樺湪
    鈫?娉ㄥ叆 KV namespace ID
    鈫?wrangler deploy
```

---

## 2. 甯哥敤妫€鏌ュ懡浠?

| 鍛戒护                                                               | 鐢ㄩ€?                                                                    | 浣曟椂杩愯                          |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------ |
| `node i18n-tool.cjs check`                                           | 棰勬彁浜ら獙璇侊紙esbuild瑙ｆ瀽銆乁+FFFD銆佸紩鍙枫€佹嫭鍙枫€侀噸澶嶉敭锛? | *_姣忔淇敼 config.ts 鍓?_          |
| `npx esbuild src/i18n/config.ts --bundle --format=esm --outfile=NUL` | esbuild 璇硶妫€鏌?                                                       | config.ts 淇敼鍚?                   |
| `node -c src/i18n/config.ts`                                         | Node.js 璇硶妫€鏌?                                                       | config.ts 淇敼鍚?                   |
| `node scripts/geo-build.mjs`                                         | GEO 鏋勫缓妫€鏌?                                                          | 鎻愪氦鍓?                            |
| `npx astro check`                                                    | Astro 绫诲瀷妫€鏌?                                                        | 鎻愪氦鍓嶏紙闇€瑕?wrangler 鐧诲綍锛? |
| `npm run check`                                                      | 瀹屾暣妫€鏌ラ摼 (astro + eslint + prettier + i18n)                        | 鎻愪氦鍓?                            |

---

## 3. i18n/config.ts 閿欒淇

### 3.1 esbuild "Unterminated string literal" 閿欒

**鍘熷洜**: `src/i18n/config.ts` 涓瓨鍦ㄦ湭缁堟鐨勫瓧绗︿覆瀛楅潰閲忋€?
**甯歌鍘熷洜**:

1. **U+FFFD corruption**: `鈫抈 (U+2192) 琚崯鍧忎负 `\uFFFD?`锛屽鑷撮棴鍚堝紩鍙蜂涪澶?2. **鏈浆涔夌殑鍗曞紩鍙?*: 鍊煎唴閮ㄥ寘鍚湭杞箟鐨?`'`瀛楃锛堝`'2'6"` 灏哄鏍囨敞锛?3. **閲嶅閿?*: 鍚屼竴璇█娈典腑瀛樺湪閲嶅鐨勯敭鍚?
   **淇鏂规硶**:

```bash
# 1. 杩愯棰勬彁浜ゆ鏌?node i18n-tool.cjs check

# 2. 濡傛灉鏈?U+FFFD 閿欒锛岀敤鑴氭湰鎵归噺鏇挎崲
# 灏?\uFFFD? 鏇挎崲涓?\u2192 (鈫掔澶?

# 3. 濡傛灉鏈夋湭杞箟寮曞彿锛屾墜鍔ㄨ浆涔?# 'value with 'quote'' 鈫?'value with \'quote\''

# 4. 濡傛灉鏈夐噸澶嶉敭锛屽垹闄よ緝鏃х殑閲嶅椤?
# 5. 楠岃瘉淇
npx esbuild src/i18n/config.ts --bundle --format=esm --outfile=NUL
```

### 3.2 缂栫爜鎹熷潖 (U+FFFD 鏇挎崲瀛楃)

**鐥囩姸**: 鏂囨湰涓嚭鐜?`?` 鎴?`??` 瀛楃

**鍘熷洜**: 鏂囦欢缂栫爜鍦ㄤ笉鍚屽伐鍏烽棿浼犻€掓椂琚崯鍧忥紙UTF-8 鈫?Latin-1 鈫?UTF-8锛?
**妫€娴?*:

```bash
# Node.js (瀹芥澗锛岄€氳繃)
node -c src/i18n/config.ts

# esbuild (涓ユ牸锛屽け璐?
npx esbuild src/i18n/config.ts --bundle --format=esm --outfile=NUL
```

**淇**: 鐢ㄦ纭殑 Unicode 瀛楃鏇挎崲 `\uFFFD`:

- `\uFFFD?` 鈫?`\u2192` (鈫?绠ご)
- `\uFFFD` 鈫?瀵瑰簲鐨勬纭瓧绗?

### 3.3 缂栫爜閾佸緥

| #   | 瑙勫垯                | 鍘熷洜                                                    |
| --- | --------------------- | --------------------------------------------------------- |
| 1   | **UTF-8 鏃?BOM**      | BOM 瀵艰嚧 YAML 瑙ｆ瀽閿欒                               |
| 2   | **鍙敤鐩爣璇█**    | 涓嶈鍦ㄦ娲茶瑷€鏂囦欢涓寘鍚腑鏂?鏃ユ枃/闊╂枃         |
| 3   | **涓嶈涓浆缈昏瘧**  | 鑻辫鈫掓硶璇?鐩存帴缈昏瘧锛屼笉瑕?鑻辫鈫掍腑鏂団啋娉曡 |
| 4   | **姝ｇ‘ Unicode**     | 浣跨敤姝ｇ‘鐨?Unicode 鐮佺偣锛屼笉瑕佸弻閲嶇紪鐮?         |
| 5   | **CJK 鏂囦欢**        | 纭繚鍖呭惈鏈夋晥鐨勫師鐢熷瓧绗?                          |
| 6   | *_涓嶈 AI 閲嶇紪鐮?_ | 楠岃瘉 AI 杈撳嚭鏄纭殑 UTF-8                           |
| 7   | *_淇敼鍚庨獙璇?_     | 杩愯 `node i18n-tool.cjs check`                          |
| 8   | *_YAML 鏈夋晥鎬?_     | 纭繚寮曞彿闂悎銆佺缉杩涗竴鑷?                           |
| 9   | **榛樿鑻辫**        | 鍏堝啓鑻辫鍐呭锛屽啀缈昏瘧                              |
| 10  | **涓嶈 .bak 鏂囦欢** | 鎻愪氦鍓嶆竻鐞嗗浠芥枃浠?                                |

**甯歌鎹熷潖妯″紡**:

| 涔辩爜 (閿欒)                     | 姝ｇ‘           | 鍙兘鍘熷洜                                       |
| ---------------------------------- | --------------- | ------------------------------------------------- |
| `脙漏`, `脙录`                     | `茅`, `眉`      | UTF-8 瀛楄妭琚綋浣?Latin-1 璇诲彇鍚庨噸鏂颁繚瀛? |
| `閸忓懏鐨礰                        | `鍏呮皵`        | 宸ュ叿鐢ㄩ敊璇紪鐮佽鍙?UTF-8 CJK 瀛楄妭         |
| `(鏁扮爜鍗拌姳)` 鍦ㄦ硶璇枃浠朵腑 | 缈昏瘧涓烘硶璇? | 浠庝腑鏂囨ā鏉垮鍒剁矘璐存湭缈昏瘧                |

---

## 4. 鏋勫缓鑴氭湰浣跨敤鎸囧崡

### 4.1 GEO 鏋勫缓 (`scripts/geo-build.mjs`)

**鍔熻兘**: 杩愯 `build-geo-v4.ts` 鐢熸垚 `llms.txt` (13璇█) 鍜?`sitemap-entity.xml`

**浣跨敤**:

```bash
node scripts/geo-build.mjs
```

**杈撳嚭**:

- `public/llms.txt` - 绔欑偣 AI 姒傝
- `public/llms-full.txt` - 瀹屾暣 AI 鐭ヨ瘑
- `public/sitemap-entity.xml` - 瀹炰綋绔欑偣鍦板浘
- `public/{lang}/llms.txt` - 姣忚瑷€ AI 鐭ヨ瘑鍥捐氨

### 4.2 i18n 宸ュ叿 (`i18n-tool.cjs`)

**鍔熻兘**: 22璇█缈昏瘧绯荤粺绠＄悊 CLI

**鍛戒护**:

| 鍛戒护                                    | 鐢ㄩ€?                           |
| ----------------------------------------- | -------------------------------- |
| `node i18n-tool.cjs count`                | 鏄剧ず姣忚瑷€閿暟              |
| `node i18n-tool.cjs audit <lang>`         | 瀹¤璇█锛堢己澶?鏈炕璇戯級     |
| `node i18n-tool.cjs missing`              | 鏄剧ず鎵€鏈夎瑷€缂哄け閿暟     |
| `node i18n-tool.cjs insert <lang> <json>` | 浠?JSON 鎻掑叆缈昏瘧             |
| `node i18n-tool.cjs extract <lang> [out]` | 鎻愬彇缂哄け EN 鍊煎埌 JSON      |
| `node i18n-tool.cjs fix`                  | 淇鏍煎紡閿欒鐨勯敭鍊煎       |
| `node i18n-tool.cjs verify <lang>`        | 楠岃瘉娈佃惤瀹屾暣鎬?            |
| `node i18n-tool.cjs check`                | **棰勬彁浜ら獙璇?*锛堟渶閲嶈锛? |

### 4.3 缈昏瘧妫€鏌?(`scripts/check-translations.mjs`)

**鍔熻兘**: 妫€鏌ュ鑸枃浠躲€侀厤缃枃浠躲€侀〉闈㈠唴瀹?YAML銆佷骇鍝佹枃鏈€乀ODO 鍗犱綅绗︺€佺煡璇嗗浘璋辫妭鐐广€佺‖缂栫爜鑻辫

**浣跨敤**:

```bash
npm run check:i18n
```

### 4.4 Worker 淇ˉ (`scripts/patch-worker.mjs`)

**鍔熻兘**: 纭繚 Vectorize 绱㈠紩瀛樺湪锛屽皢 SESSION KV 鍛藉悕绌洪棿 ID 娉ㄥ叆鍒?`dist/server/wrangler.json`

**浣跨敤**: 鏋勫缓娴佺▼鑷姩璋冪敤锛屾棤闇€鎵嬪姩杩愯

### 4.5 SEO 绠￠亾 (`scripts/seo-pipeline.mjs`)

**鍔熻兘**: 鍒嗘瀽 GSC 鏁版嵁锛岀敓鎴?CTR 淇銆佹帓鍚嶆彁鍗囦换鍔°€佸唴瀹瑰樊璺濆垎鏋愩€丟EO 鍐呭鍜岀ぞ浜ゅ獟浣撳笘瀛?
**浣跨敤**:

```bash
npm run seo:pipeline
```

---

## 5. 甯歌閿欒鍙婁慨澶?

### 5.1 Cloudflare Pages 鏋勫缓澶辫触

**鍙兘鍘熷洜**:

1. **浠ｇ爜閿欒**: esbuild/astro 鏃犳硶瑙ｆ瀽婧愭枃浠?2. **璁よ瘉杩囨湡**: `wrangler` 璁よ瘉浠ょ墝杩囨湡
2. **璧勬簮涓嶈冻**: KV/Vectorize 鍒涘缓澶辫触

**璇婃柇姝ラ**:

```bash
# 1. 妫€鏌ヤ唬鐮佽娉?node i18n-tool.cjs check
npx esbuild src/i18n/config.ts --bundle --format=esm --outfile=NUL

# 2. 妫€鏌ユ瀯寤?node scripts/geo-build.mjs
npm run build

# 3. 妫€鏌?wrangler 璁よ瘉
wrangler whoami
```

### 5.2 PowerShell 缂栫爜闂

**闂**: PowerShell 5.1 榛樿浣跨敤 ANSI 缂栫爜锛岀牬鍧?UTF-8 澶氬瓧鑺傚瓧绗?
**閿欒鐢ㄦ硶**:

```powershell
Set-Content -Path file.astro -Value $newContent
```

**姝ｇ‘鐢ㄦ硶**:

```powershell
[System.IO.File]::WriteAllText($Path, $content, [System.Text.UTF8Encoding]::new($false))
```

### 5.3 Zod Schema 姝ｅ垯鏇挎崲閿欒

**闂**: 鍦?Zod 鑱斿悎鏋氫妇鍊间腑杩涜鏂囨湰鏇挎崲浼氱牬鍧忔ā寮忓畾涔?
**瑙勫垯**: 鍙闈炵粨鏋勫寲鏂囨湰锛堟钀姐€佹弿杩般€佸厓鏁版嵁锛夎繘琛屾枃鏈浛鎹紝涓嶈瀵?TypeScript 浠ｇ爜銆乑od 妯″紡瀹氫箟鎴栦弗鏍肩殑鏋氫妇/鑱斿悎绫诲瀷杩涜鏇挎崲

### 5.4 閲嶅閿娴?

**闂**: 缈昏瘧閰嶇疆涓殑閲嶅閿笉浼氬鑷存湰鍦?`astro dev` 宕╂簝锛屼絾 esbuild 浼氬彂鍑鸿鍛?
**妫€娴?*:

```bash
node i18n-tool.cjs check
```

**淇**: 鍒犻櫎杈冩棫鐨勯噸澶嶉敭琛岋紝淇濈暀杈冩柊鐨勶紙閫氬父鏄洿濂界殑缈昏瘧锛?

### 5.5 `&rarr;` HTML 瀹炰綋闂

**闂**: 涓嶈鍦ㄦ簮鏂囦欢涓娇鐢?HTML 瀹炰綋 `&rarr;`锛屼娇鐢ㄥ瓧闈?Unicode 绠ご `鈫抈

**鍘熷洜**: 鍦?Astro 妯℃澘銆乊AML 鍖哄煙鏂囦欢鎴栫粍浠?props 涓紝`&rarr;` 缁忓父琚弻閲嶈浆涔変负 `&amp;rarr;`

**妫€娴?*:

```bash
grep -r '&rarr' src/
grep -r '&amp;rarr' src/
```

---

## 6. 楠岃瘉娓呭崟

姣忔淇敼鍚庯紝濮嬬粓楠岃瘉锛?

1. `node i18n-tool.cjs check` 閫氳繃
2. `npx esbuild src/i18n/config.ts --bundle --format=esm --outfile=NUL` 閫氳繃
3. `node scripts/geo-build.mjs` 閫氳繃
4. 瑙嗚妫€鏌ワ細涓婚〉銆佸崥瀹€佹殫妯″紡銆佺Щ鍔ㄨ彍鍗曘€佽仈绯昏〃鍗?

---

## 7. 閿欒淇鍘嗗彶

### 2026-07-12 鈥?esbuild U+FFFD corruption 淇

**闂**: `src/i18n/config.ts` 涓?2658 琛屽寘鍚?U+FFFD 鏇挎崲瀛楃锛屽鑷?esbuild "Unterminated string literal" 閿欒

**淇**:

1. 鏇挎崲鎵€鏈?`\uFFFD?` 涓?`\u2192` (鈫掔澶? - 2648 琛?2. 杞箟鍗曞紩鍙峰瓧绗︿覆鍊煎唴閮ㄧ殑鏈浆涔?`'` - 9 琛?3. 鍒犻櫎 fi (6) 鍜?da (1) 閮ㄥ垎鐨勯噸澶嶉敭 - 7 琛?4. 娣诲姞 `check` 鍛戒护鍒?`i18n-tool.cjs` 鐢ㄤ簬棰勬彁浜ら獙璇?
   **楠岃瘉**: esbuild PASS, i18n-tool check ALL CHECKS PASSED

### 2026-07-10 鈥?i18n 瀹¤淇

**闂**: 21 绫婚棶棰橈紝鍖呮嫭 106 涓?YAML 鏂囦欢涓殑 BOM銆?73+ 缂哄け nav 閿€?98 缂哄け AI 閿?
**淇**: 鎵归噺缈昏瘧绠￠亾 + 鑴氭湰淇

### 2026-07-07 鈥?OEM 娴佺▼鍜屽伐绋嬪洟闃熼〉闈?+ 鏋勫缓淇

**闂**: `astro-compress` 瀵艰嚧 CF Pages 瓒呮椂

**淇**: 绉婚櫎 `astro-compress`

---

## 8. 娣诲姞鏂板唴瀹规鏌ユ竻鍗?

### 鏂颁骇鍝?1. 鍦?`src/data/products.ts` 娣诲姞浜у搧鏁版嵁

2. 鍦?`src/content/products/{slug}.mdx` 鍒涘缓 MDX
3. 鍦?`src/data/product-texts.ts` 娣诲姞缈昏瘧
4. 鈫?鑷姩鐢熸垚锛氫骇鍝侀〉闈€乣/llms/products/{slug}`銆丣SON-LD銆乴lms.txt

### 鏂版湰鍦板寲椤甸潰 (22璇█)

1. 鍦?`src/pages/[lang]/{slug}.astro` 鍒涘缓椤甸潰
2. 鍦?`src/i18n/config.ts` 娣诲姞缈昏瘧閿?3. 鍦?`src/data/site/sections.ts` 娣诲姞鏉＄洰
3. 鍦?`src/lib/geo-seo/intent.ts` 娣诲姞鎰忓浘瑙勫垯
4. 鈫?鑷姩鐢熸垚锛欻TML 椤甸潰銆乴lms.txt銆乴lms-full.txt銆佺珯鐐瑰湴鍥?

### 鏂?B2B 椤甸潰

1. 鍦?`src/pages/{slug}.astro` 鍒涘缓椤甸潰锛堟牴绾э紝鑻辫锛?2. 鍦?`src/data/standalone-pages.ts` 娣诲姞鍏冩暟鎹?3. 鍦?`src/data/site/sections.ts` 娣诲姞鏉＄洰
2. 鈫?鑷姩鐢熸垚锛欻TML 椤甸潰銆乣/llms/pages/{slug}`銆乴lms.txt銆佺珯鐐瑰湴鍥?

---

_鏈€鍚庢洿鏂? 2026-07-12_
