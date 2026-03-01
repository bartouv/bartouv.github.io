#!/usr/bin/env python3
"""
Add social share buttons and reading progress indicator to all articles.
Follows the existing pattern of scripts like add_seo_metadata.py
"""

import re
from pathlib import Path

READING_PROGRESS_HTML = '''<!-- Reading Progress Indicator -->
<div class="reading-progress" role="progressbar" aria-label="Reading progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
  <div class="reading-progress-bar"></div>
</div>

'''

SOCIAL_SHARE_HTML = '''<!-- SOCIAL SHARE -->
<div class="article-share">
  <div class="share-label">// SHARE THIS ARTICLE</div>
  <div class="share-buttons">
    <a href="#" class="share-btn share-twitter" data-platform="twitter" aria-label="Share on Twitter">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
      <span>Twitter</span>
    </a>
    <a href="#" class="share-btn share-linkedin" data-platform="linkedin" aria-label="Share on LinkedIn">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
      <span>LinkedIn</span>
    </a>
    <a href="#" class="share-btn share-reddit" data-platform="reddit" aria-label="Share on Reddit">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
      <span>Reddit</span>
    </a>
    <a href="#" class="share-btn share-hackernews" data-platform="hackernews" aria-label="Share on Hacker News">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z"/>
      </svg>
      <span>HackerNews</span>
    </a>
    <button class="share-btn share-copy" aria-label="Copy link to clipboard">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
      </svg>
      <span>Copy Link</span>
    </button>
  </div>
</div>

'''

SCRIPT_TAGS = '''<!-- ARTICLE FEATURES -->
<script src="../js/article-share.js"></script>
<script src="../js/reading-progress.js"></script>

'''

def add_features_to_article(filepath):
    """Add reading progress and social share to a single article."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False

    # 1. Add reading progress indicator after <body>
    if '<div class="reading-progress"' not in content:
        content = content.replace(
            '<body>\n',
            f'<body>\n\n{READING_PROGRESS_HTML}',
            1
        )
        modified = True
        print(f"  ✓ Added reading progress indicator")

    # 2. Add social share before article-nav
    if '<div class="article-share"' not in content:
        # Look for </article> followed by article navigation
        pattern = r'</article>\n\n<!-- ARTICLE NAVIGATION -->'
        if re.search(pattern, content):
            content = re.sub(
                pattern,
                f'</article>\n\n{SOCIAL_SHARE_HTML}<!-- ARTICLE NAVIGATION -->',
                content,
                count=1
            )
            modified = True
            print(f"  ✓ Added social share buttons")

    # 3. Add script tags before Prism.js (if not already present)
    if 'article-share.js' not in content:
        prism_comment = '<!-- PRISM.JS FOR SYNTAX HIGHLIGHTING -->'
        if prism_comment in content:
            content = content.replace(
                prism_comment,
                f'{SCRIPT_TAGS}{prism_comment}',
                1
            )
            modified = True
            print(f"  ✓ Added JavaScript includes")

    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    articles_dir = Path('articles')

    if not articles_dir.exists():
        print("❌ Articles directory not found")
        return

    articles = sorted(articles_dir.glob('*.html'))
    articles = [a for a in articles if a.name != 'template.html']

    print(f"📝 Adding features to {len(articles)} articles...\n")

    modified_count = 0
    for article in articles:
        print(f"Processing {article.name}...")
        if add_features_to_article(article):
            modified_count += 1
        else:
            print(f"  ⏭️  Already has features, skipping")
        print()

    print(f"✅ Complete! Modified {modified_count}/{len(articles)} articles")

if __name__ == '__main__':
    main()
