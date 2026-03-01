# 📝 Article Formatting Skill - Quick Reference

Automated formatting tool to maintain consistent article quality across the GB/DEV Unity Blog.

## Quick Start

```bash
# Format one article
python3 scripts/format_article.py articles/input-locks.html

# Format all articles
python3 scripts/format_article.py

# Preview changes without saving
python3 scripts/format_article.py --dry-run
```

## What It Fixes

| Issue | Before | After |
|-------|--------|-------|
| **Squished tags** | `</figure><h2>` | `</figure>\n\n<h2>` |
| **Missing spaces** | `</a>text` | `</a> text` |
| **Typos** | "bellow is" | "below is" |
| **Emoticons** | "works :D." | "works!" |
| **Capitalization** | "we can run" | "We can run" |
| **Punctuation** | `</a>and` | `</a>, and` |
| **Prism.js structure** | `<pre><code class="language-csharp">` | `<pre class="language-csharp"><code class="language-csharp">` |

## Common Use Cases

### Before Publishing
```bash
python3 scripts/format_article.py articles/my-new-post.html
```

### After Editing
```bash
python3 scripts/format_article.py articles/
git diff  # Review changes
git add articles/
git commit -m "Format articles"
```

### Safe Preview
```bash
python3 scripts/format_article.py --dry-run
# Review what would change, then run without --dry-run
```

## Fixes Applied

### 1. HTML Spacing
- Figure tags: `</figure><p>` → `</figure>\n\n<p>`
- Code blocks: `</pre><p>` → `</pre>\n\n<p>`
- Lists: `</ul><p>` → `</ul>\n\n<p>`

### 2. Link Formatting
- After links: `link</a>word` → `link</a> word`
- Before links: `word<a href` → `word <a href`
- Punctuation: `link</a>and` → `link</a>, and`

### 3. Common Typos
- `bellow` → `below`
- `insures` → `ensures`
- `let's look` → `Let's look`
- `we can run` → `We can run`

### 4. Code Examples
- Missing colons: `as follows</p>\n<pre>` → `as follows:</p>\n<pre>`

### 5. Emoticons
- `:D.` → `!`
- `:).` → `.`
- `;).` → `.`

### 6. Prism.js Code Blocks
- Missing language class on `<pre>` tags: `<pre><code class="language-csharp">` → `<pre class="language-csharp"><code class="language-csharp">`
- Ensures proper syntax highlighting by adding language class to both `<pre>` and `<code>` tags

## Example Output

```
📝 Formatting 18 articles...

✅ Formatted: input-locks.html
✅ Fixed 12 formatting issues:
  1. Fixed squished tags
  2. Fixed 3 missing spaces after links
  3. Fixed typo: "bellow" → "below"
  4. Removed emoticon: :D.

✅ No changes needed: taming-polymorphic-serialization.html

✅ Formatting complete!
   Formatted: 5/18 files
```

## Safety Features

✅ **Dry Run Mode** - Preview changes first
✅ **Git Integration** - Review with `git diff`
✅ **Targeted** - Only touches article HTML files
✅ **Reversible** - Use `git checkout` to undo

## Customization

Edit `scripts/format_article.py` to add your own fixes:

```python
TYPO_REPLACEMENTS = {
    'your typo': 'correction',
}
```

## Help

```bash
python3 scripts/format_article.py --help
```

📖 **Full documentation**: `scripts/README_FORMATTING_SKILL.md`
