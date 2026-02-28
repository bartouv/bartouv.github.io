#!/usr/bin/env python3
"""
Article Formatting Skill for GB/DEV Unity Blog

Fixes common formatting issues in article HTML files:
- Squished HTML tags (missing spaces between tags)
- Missing spaces after links
- Capitalization issues
- Common typos
- Emoticon cleanup
- Code block formatting
- Consistent punctuation
"""

import re
import sys
import os
from pathlib import Path


class ArticleFormatter:
    """Formats and cleans up article HTML files."""

    # Common typos to fix
    TYPO_REPLACEMENTS = {
        'bellow is': 'below is',
        'Bellow is': 'Below is',
        'bellow here': 'below',
        'insures that': 'ensures that',
        'insure that': 'ensure that',
        'let\'s look': 'Let\'s look',
        'let\'s check': 'Let\'s check',
        'let\'s start': 'Let\'s start',
        'we can run': 'We can run',
        'we can see': 'We can see',
    }

    # Emoticons to clean up
    EMOTICON_REPLACEMENTS = {
        r'\s*:D\.': '!',
        r'\xa0:D\.': '!',  # non-breaking space + :D
        r'\s*:\)\.': '.',
        r'\s*;\)\.': '.',
    }

    def __init__(self, filepath):
        self.filepath = filepath
        self.content = None
        self.changes_made = []

    def read_file(self):
        """Read the article file."""
        with open(self.filepath, 'r', encoding='utf-8') as f:
            self.content = f.read()

    def write_file(self):
        """Write the formatted content back to file."""
        with open(self.filepath, 'w', encoding='utf-8') as f:
            f.write(self.content)

    def fix_squished_tags(self):
        """Fix HTML tags that are squished together without spacing."""
        patterns = [
            (r'</figure><h(\d)>', r'</figure>\n\n    <h\1>'),
            (r'</figure><p>', r'</figure>\n\n<p>'),
            (r'</figure><ul>', r'</figure>\n\n<ul>'),
            (r'</figure><ol>', r'</figure>\n\n<ol>'),
            (r'</pre><p>', r'</pre>\n\n<p>'),
            (r'</pre><h(\d)>', r'</pre>\n\n<h\1>'),
        ]

        for pattern, replacement in patterns:
            if re.search(pattern, self.content):
                self.content = re.sub(pattern, replacement, self.content)
                self.changes_made.append(f'Fixed squished tags: {pattern}')

    def fix_missing_spaces_after_links(self):
        """Add missing spaces after closing anchor tags."""
        # Pattern: </a> followed by lowercase letter (no space)
        pattern = r'</a>([a-z])'
        matches = re.findall(pattern, self.content)

        if matches:
            self.content = re.sub(pattern, r'</a> \1', self.content)
            self.changes_made.append(f'Fixed {len(matches)} missing spaces after links')

    def fix_missing_spaces_before_links(self):
        """Add missing spaces before anchor tags when needed."""
        # Pattern: word character followed by <a (no space)
        pattern = r'([a-z])<a href'
        matches = re.findall(pattern, self.content)

        if matches:
            self.content = re.sub(pattern, r'\1 <a href', self.content)
            self.changes_made.append(f'Fixed {len(matches)} missing spaces before links')

    def fix_punctuation_before_links(self):
        """Fix punctuation issues around links."""
        # Add comma before links where it makes sense
        patterns = [
            (r'</a>and ', r'</a>, and '),
            (r'</a>a functionality', r'</a>, a functionality'),
            (r'</a>which ', r'</a>, which '),
        ]

        for pattern, replacement in patterns:
            if re.search(pattern, self.content):
                self.content = re.sub(pattern, replacement, self.content)
                self.changes_made.append(f'Fixed punctuation: {pattern}')

    def fix_typos(self):
        """Fix common typos."""
        for typo, correction in self.TYPO_REPLACEMENTS.items():
            if typo in self.content:
                self.content = self.content.replace(typo, correction)
                self.changes_made.append(f'Fixed typo: "{typo}" → "{correction}"')

    def fix_emoticons(self):
        """Remove or replace emoticons."""
        for pattern, replacement in self.EMOTICON_REPLACEMENTS.items():
            matches = re.findall(pattern, self.content)
            if matches:
                self.content = re.sub(pattern, replacement, self.content)
                self.changes_made.append(f'Removed emoticon: {pattern}')

    def fix_sentence_capitalization(self):
        """Fix sentence capitalization after periods."""
        # Pattern: </p>\n\n<p> followed by lowercase (new paragraph should be capitalized)
        pattern = r'(<p>)([a-z])'

        def capitalize_match(match):
            return match.group(1) + match.group(2).upper()

        # Only capitalize if it's clearly a new sentence
        self.content = re.sub(pattern, capitalize_match, self.content)

    def fix_code_block_spacing(self):
        """Ensure proper spacing around code blocks."""
        # Ensure code blocks have proper line breaks
        patterns = [
            (r'</code></pre>\n<p>', r'</code></pre>\n\n<p>'),
            (r'</code></pre>\n<h', r'</code></pre>\n\n<h'),
        ]

        for pattern, replacement in patterns:
            if re.search(pattern, self.content):
                self.content = re.sub(pattern, replacement, self.content)
                self.changes_made.append('Fixed code block spacing')

    def fix_list_spacing(self):
        """Fix spacing around lists."""
        patterns = [
            (r'</ul>\n<p>', r'</ul>\n\n<p>'),
            (r'</ol>\n<p>', r'</ol>\n\n<p>'),
            (r'</p>\n<ul>', r'</p>\n\n<ul>'),
            (r'</p>\n<ol>', r'</p>\n\n<ol>'),
        ]

        for pattern, replacement in patterns:
            if re.search(pattern, self.content):
                self.content = re.sub(pattern, replacement, self.content)

    def fix_missing_colons(self):
        """Add missing colons before code examples or lists."""
        # Pattern: "as follows" or similar without colon before code/list
        patterns = [
            (r'as follows</p>\n\n<pre>', r'as follows:</p>\n\n<pre>'),
            (r'following interface</p>\n\n<pre>', r'following interface:</p>\n\n<pre>'),
            (r'look at ([^<]+)</p>\n\n<pre>', r'look at \1:</p>\n\n<pre>'),
        ]

        for pattern, replacement in patterns:
            if re.search(pattern, self.content):
                self.content = re.sub(pattern, replacement, self.content)
                self.changes_made.append('Added missing colon before code block')

    def format(self):
        """Run all formatting fixes."""
        self.read_file()

        # Run all fixes
        self.fix_squished_tags()
        self.fix_missing_spaces_after_links()
        self.fix_missing_spaces_before_links()
        self.fix_punctuation_before_links()
        self.fix_typos()
        self.fix_emoticons()
        self.fix_code_block_spacing()
        self.fix_list_spacing()
        self.fix_missing_colons()

        return len(self.changes_made) > 0

    def save(self):
        """Save the formatted file."""
        self.write_file()

    def report(self):
        """Return a report of changes made."""
        if not self.changes_made:
            return "✅ No formatting issues found!"

        report = [f"✅ Fixed {len(self.changes_made)} formatting issues:\n"]
        for i, change in enumerate(self.changes_made, 1):
            report.append(f"  {i}. {change}")
        return '\n'.join(report)


def format_article(filepath, dry_run=False):
    """Format a single article file."""
    formatter = ArticleFormatter(filepath)
    has_changes = formatter.format()

    if has_changes:
        if not dry_run:
            formatter.save()
            print(f"✅ Formatted: {os.path.basename(filepath)}")
        else:
            print(f"🔍 Would format: {os.path.basename(filepath)}")
        print(formatter.report())
    else:
        print(f"✅ No changes needed: {os.path.basename(filepath)}")

    return has_changes


def format_all_articles(articles_dir, dry_run=False):
    """Format all article HTML files in the directory."""
    articles_dir = Path(articles_dir)

    if not articles_dir.exists():
        print(f"❌ Error: Directory not found: {articles_dir}")
        return

    html_files = sorted(articles_dir.glob('*.html'))
    html_files = [f for f in html_files if f.name != 'template.html']

    if not html_files:
        print(f"❌ No HTML files found in {articles_dir}")
        return

    print(f"📝 Formatting {len(html_files)} articles...\n")

    formatted_count = 0
    for filepath in html_files:
        has_changes = format_article(filepath, dry_run)
        if has_changes:
            formatted_count += 1
        print()  # Blank line between files

    print(f"\n{'🔍 Dry run complete' if dry_run else '✅ Formatting complete'}!")
    print(f"   Formatted: {formatted_count}/{len(html_files)} files")


def main():
    """Main entry point."""
    import argparse

    parser = argparse.ArgumentParser(
        description='Format article HTML files with consistent styling and fix common issues.',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Format a single article
  python3 scripts/format_article.py articles/input-locks.html

  # Format all articles
  python3 scripts/format_article.py articles/

  # Dry run (preview changes without saving)
  python3 scripts/format_article.py articles/ --dry-run

  # Format all articles from the Blog directory
  python3 scripts/format_article.py
        """
    )

    parser.add_argument(
        'path',
        nargs='?',
        default='articles/',
        help='Path to article file or directory (default: articles/)'
    )

    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Preview changes without modifying files'
    )

    args = parser.parse_args()

    path = Path(args.path)

    if path.is_file():
        format_article(path, dry_run=args.dry_run)
    elif path.is_dir():
        format_all_articles(path, dry_run=args.dry_run)
    else:
        print(f"❌ Error: Path not found: {path}")
        sys.exit(1)


if __name__ == '__main__':
    main()
