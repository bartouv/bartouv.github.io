# Article Formatting Skill

Analyzes and improves article formatting according to best practices for readability and accessibility.

## When to use this skill

Use this skill when:
- Reviewing an article before publishing
- Improving readability of existing articles
- Ensuring consistent formatting across all blog posts
- User explicitly asks to format or check formatting of an article

## Instructions

When this skill is invoked, follow these steps:

### 1. Read the Article

Read the specified article HTML file from the `articles/` directory.

### 2. Analyze Structure & Hierarchy

Check for proper heading hierarchy:
- ✓ **H1**: Should be used ONLY for the main article title (in .article-title)
- ✓ **H2**: Main sections (major topics within the article)
- ✓ **H3**: Subsections under H2s
- ✗ **Problem**: Skipping heading levels (H1 → H3 without H2)
- ✗ **Problem**: Multiple H1 tags in article body
- ✗ **Problem**: Using headings for styling instead of semantic structure

**Action**: Report any heading hierarchy issues and suggest fixes.

### 3. Check Paragraph Length

Analyze paragraph length:
- ✓ **Ideal**: 2-3 sentences per paragraph (40-75 words)
- ⚠️ **Warning**: 4-5 sentences (76-100 words)
- ✗ **Too Long**: 6+ sentences or 100+ words

**Action**: Identify paragraphs that are too long. Suggest natural break points (topic shifts, examples, transitions).

### 4. Evaluate Whitespace

Check spacing between elements:
- ✓ **Good**: Adequate spacing between paragraphs (current CSS: 20px margin-bottom)
- ✓ **Good**: Spacing between sections (current CSS: 48px for H2)
- ✗ **Problem**: Dense text blocks without breaks

**Action**: Identify sections that feel too dense. Suggest adding subheadings or breaking up content.

### 5. Check Scannability

Look for opportunities to use lists:
- Identify paragraphs that enumerate items (First... Second... Third...)
- Find sequences of steps or instructions
- Spot feature lists or bullet points written as prose

**Action**: Suggest converting prose into bulleted (`<ul>`) or numbered (`<ol>`) lists.

### 6. Analyze Emphasis Usage

Check for proper use of emphasis:
- ✓ **Good**: Using `<strong>` for key terms, important concepts, actionable items
- ✗ **Overuse**: Every other sentence has bold text
- ✗ **Underuse**: No emphasis at all, making it hard to scan
- ✗ **Misuse**: Using bold for styling instead of semantic emphasis

**Action**: Report emphasis usage. Suggest key terms or concepts that should be bold.

### 7. Visual Break Assessment

For long articles (>1000 words), check for visual breaks:
- Count paragraphs between images/figures
- Identify long sections of text (300+ words) without visuals
- Check if images are relevant and well-placed

**Action**: Suggest where to add images, code examples, or diagrams if text is too dense.

### 8. Code Block Review (if applicable)

For technical articles with code:
- ✓ **Good**: Code wrapped in `<pre><code>` blocks
- ✓ **Good**: Inline code for short snippets (`<code>`)
- ✗ **Problem**: Code in plain paragraphs
- ✗ **Problem**: Missing language specification for syntax highlighting

**Action**: Report any code formatting issues.

### 9. Link Quality

Check links in article:
- Verify links use descriptive anchor text (not "click here")
- Check that external links are marked appropriately
- Ensure links are relevant and add value

**Action**: Report any link quality issues.

### 10. Generate Formatting Report

Provide a structured report:

```markdown
## Formatting Analysis: [Article Title]

### ✅ What's Working Well
- [List positive aspects]

### ⚠️ Warnings
- [List minor issues]

### ❌ Issues Found
- [List problems that should be fixed]

### 💡 Recommendations
1. [Specific actionable recommendation]
2. [Specific actionable recommendation]
...

### 📊 Statistics
- Word count: [X]
- Paragraph count: [X]
- Average paragraph length: [X] words
- Heading structure: [H1: X, H2: X, H3: X]
- Images: [X]
- Code blocks: [X]
- Links: [X]
```

## Making Changes (Optional)

If user requests formatting fixes (not just analysis):

1. **Ask for confirmation** before making changes
2. **Apply fixes** in order of priority:
   - Fix heading hierarchy issues (high priority)
   - Break up overly long paragraphs (high priority)
   - Convert prose lists to HTML lists (medium priority)
   - Add emphasis to key terms (low priority)
3. **Preserve content**: NEVER change the actual content, meaning, or information
4. **Report changes**: List all modifications made

## Best Practices Reference

### Structure
- H1: Article title only
- H2: Major sections (Introduction, Implementation, Conclusion, etc.)
- H3: Subsections within H2s
- Never skip heading levels

### Paragraphs
- Keep to 2-3 sentences (40-75 words) for web reading
- One idea per paragraph
- Use transition words between paragraphs

### Lists
- Use `<ul>` for unordered items (features, benefits, examples)
- Use `<ol>` for sequences (steps, priorities, rankings)
- Keep list items concise (1-2 sentences max)

### Emphasis
- Bold key terms on first use
- Bold actionable items
- Bold important warnings or caveats
- Don't overuse (max 2-3 bold items per section)

### Visuals
- Add images every 300-400 words for long articles
- Use code examples to illustrate technical concepts
- Ensure images have alt text
- Caption images when needed

### Accessibility
- Proper semantic HTML (not just styling)
- Descriptive link text
- Alt text for images
- Sufficient color contrast (already handled by CSS)
- Logical heading hierarchy

## Example Usage

User: "format the optimizing-draw-calls article"
- Read `/Users/galbar-touv/Blog/articles/optimizing-draw-calls.html`
- Analyze all aspects listed above
- Generate formatting report
- Ask if user wants changes applied

User: "check formatting on input-locks"
- Read `/Users/galbar-touv/Blog/articles/input-locks.html`
- Provide analysis report only
- Don't make changes unless requested

## Notes

- This skill focuses on **structure and formatting**, not content quality or technical accuracy
- Always preserve the author's voice and writing style
- When in doubt, suggest rather than change
- CSS/typography settings are handled separately in article.css (not modified by this skill)
