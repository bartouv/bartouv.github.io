# Article Formatting Skill

Automated formatting tool for GB/DEV Unity Blog articles. Fixes common formatting issues and ensures consistent styling across all articles.

## Features

The formatting skill automatically fixes:

### 1. **HTML Tag Spacing**
- ✅ Squished tags like `</figure><h2>` → `</figure>\n\n<h2>`
- ✅ Missing spaces between closing and opening tags
- ✅ Proper spacing around code blocks, lists, and figures

### 2. **Link Formatting**
- ✅ Missing spaces after links: `</a>text` → `</a> text`
- ✅ Missing spaces before links: `text<a` → `text <a`
- ✅ Punctuation before links: `</a>and` → `</a>, and`

### 3. **Common Typos**
- ✅ "bellow" → "below"
- ✅ "insures" → "ensures"
- ✅ Sentence capitalization ("we can run" → "We can run")
- ✅ Consistent use of "Let's" vs "let's"

### 4. **Emoticons & Informal Text**
- ✅ Removes emoticons: `:D.` → `!`
- ✅ Handles non-breaking spaces: `\xa0:D.` → `!`

### 5. **Code Block Formatting**
- ✅ Proper spacing around `<pre><code>` blocks
- ✅ Missing colons before code examples

### 6. **List Formatting**
- ✅ Spacing around `<ul>` and `<ol>` lists
- ✅ Consistent paragraph spacing

### 7. **Prism.js Code Block Structure**
- ✅ Adds language class to `<pre>` tags: `<pre><code class="language-csharp">` → `<pre class="language-csharp"><code class="language-csharp">`
- ✅ Ensures proper syntax highlighting by fixing Prism.js CSS selectors
- ✅ Supports C#, YAML, JavaScript, JSON, XML, CSS, and HTML

## Usage

### Format a Single Article

```bash
python3 scripts/format_article.py articles/input-locks.html
```

### Format All Articles

```bash
python3 scripts/format_article.py articles/
```

Or simply:
```bash
python3 scripts/format_article.py
```

### Preview Changes (Dry Run)

```bash
python3 scripts/format_article.py articles/ --dry-run
```

### Help

```bash
python3 scripts/format_article.py --help
```

## Example Output

```
📝 Formatting 18 articles...

✅ Formatted: input-locks.html
✅ Fixed 12 formatting issues:

  1. Fixed squished tags: </figure><h(\d)>
  2. Fixed 3 missing spaces after links
  3. Fixed typo: "bellow is" → "below is"
  4. Fixed typo: "insures that" → "ensures that"
  5. Fixed typo: "we can run" → "We can run"
  6. Removed emoticon: :D.
  7. Added missing colon before code block
  ...

✅ No changes needed: taming-polymorphic-serialization.html

✅ Formatting complete!
   Formatted: 5/18 files
```

## When to Use

### Before Publishing
Run the formatter on new articles before publishing to catch common issues:
```bash
python3 scripts/format_article.py articles/my-new-article.html
```

### Batch Cleanup
Clean up all articles after making global changes:
```bash
python3 scripts/format_article.py articles/
```

### After Imports
If you import content from Medium or other sources, run the formatter to ensure consistency:
```bash
python3 scripts/format_article.py articles/imported-article.html
```

## Integration with Workflow

### As a Pre-Commit Hook

Add to `.git/hooks/pre-commit`:
```bash
#!/bin/bash
# Format any modified article files
git diff --cached --name-only --diff-filter=AM | grep '^articles/.*\.html$' | while read file; do
    python3 scripts/format_article.py "$file"
    git add "$file"
done
```

### As Part of Build Process

Add to your deployment script:
```bash
# Format all articles before building
python3 scripts/format_article.py articles/
# Then run other build steps...
```

## Customization

### Adding New Typo Fixes

Edit `TYPO_REPLACEMENTS` in `format_article.py`:
```python
TYPO_REPLACEMENTS = {
    'your typo': 'correction',
    'another typo': 'another correction',
}
```

### Adding New Tag Patterns

Edit `fix_squished_tags()` method:
```python
patterns = [
    (r'</figure><h(\d)>', r'</figure>\n\n    <h\1>'),
    # Add your pattern here
]
```

## Safety

- ✅ **Non-destructive**: Always use `--dry-run` first to preview changes
- ✅ **Version controlled**: All changes can be reviewed with `git diff`
- ✅ **Targeted**: Only modifies article HTML files, skips `template.html`

## Troubleshooting

### No Changes Detected

If the formatter reports no issues but you see problems:
1. Check if the issue matches existing patterns
2. Add a new pattern to the formatter
3. Run with `--dry-run` to see what would change

### Unwanted Changes

If the formatter makes unwanted changes:
1. Review changes with `git diff`
2. Revert with `git checkout -- articles/filename.html`
3. Modify the formatter patterns to exclude that case

## Technical Details

- **Language**: Python 3
- **Dependencies**: None (uses stdlib only)
- **File Encoding**: UTF-8
- **Line Endings**: LF (Unix-style)
- **Regex Engine**: Python `re` module

## Future Improvements

Potential enhancements:
- [ ] Fix inconsistent quote styles
- [ ] Validate HTML structure
- [ ] Check for broken internal links
- [ ] Optimize image alt text
- [ ] Validate code block language tags
- [ ] Fix inconsistent heading hierarchy

## Related Scripts

- `add_seo_metadata.py` - Adds SEO tags to articles
- `add_accessibility.py` - Adds ARIA labels and semantic roles
- `add_prism_syntax_highlighting.py` - Adds syntax highlighting
- `audit_alt_text.py` - Validates image alt text

## License

Part of the GB/DEV Unity Blog project.
