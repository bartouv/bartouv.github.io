// Social Share Functionality for GB/DEV Unity Blog
// Handles social media sharing with native intents (no SDKs)

document.addEventListener('DOMContentLoaded', () => {
  // Only run on article pages (not index)
  if (!document.querySelector('.article-body')) return;

  // Get article metadata from meta tags
  const getArticleData = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(
      document.querySelector('meta[property="og:title"]')?.content ||
      document.querySelector('.article-title')?.textContent ||
      document.title
    );
    const description = encodeURIComponent(
      document.querySelector('meta[property="og:description"]')?.content || ''
    );

    return { url, title, description };
  };

  // Share URL builders
  const shareUrls = {
    twitter: (data) => `https://twitter.com/intent/tweet?text=${data.title}&url=${data.url}`,
    linkedin: (data) => `https://www.linkedin.com/sharing/share-offsite/?url=${data.url}`,
    reddit: (data) => `https://reddit.com/submit?url=${data.url}&title=${data.title}`,
    hackernews: (data) => `https://news.ycombinator.com/submitlink?u=${data.url}&t=${data.title}`
  };

  // Initialize share buttons
  const initShareButtons = () => {
    const data = getArticleData();

    // Set share URLs for social platforms
    document.querySelectorAll('.share-btn[data-platform]').forEach(btn => {
      const platform = btn.dataset.platform;
      if (shareUrls[platform]) {
        btn.href = shareUrls[platform](data);
        btn.target = '_blank';
        btn.rel = 'noopener noreferrer';
      }
    });

    // Copy link functionality
    const copyBtn = document.querySelector('.share-copy');
    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);

          // Visual feedback
          const originalText = copyBtn.querySelector('span').textContent;
          copyBtn.querySelector('span').textContent = 'Copied!';
          copyBtn.classList.add('copied');

          setTimeout(() => {
            copyBtn.querySelector('span').textContent = originalText;
            copyBtn.classList.remove('copied');
          }, 2000);
        } catch (err) {
          console.error('Failed to copy:', err);
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = window.location.href;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.select();
          try {
            document.execCommand('copy');
            // Visual feedback for fallback
            const originalText = copyBtn.querySelector('span').textContent;
            copyBtn.querySelector('span').textContent = 'Copied!';
            copyBtn.classList.add('copied');

            setTimeout(() => {
              copyBtn.querySelector('span').textContent = originalText;
              copyBtn.classList.remove('copied');
            }, 2000);
          } catch (fallbackErr) {
            console.error('Fallback copy failed:', fallbackErr);
          }
          document.body.removeChild(textArea);
        }
      });
    }
  };

  initShareButtons();
});
