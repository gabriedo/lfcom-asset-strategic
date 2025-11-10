export const processMarkdown = (markdown: string): string => {
  let html = markdown;

  // Process headers (must be done before other replacements)
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

  // Process bold text
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Process unordered lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/gs, (match) => `<ul>${match}</ul>`);

  // Process paragraphs (text not already wrapped in tags)
  html = html.split('\n\n').map(block => {
    block = block.trim();
    if (!block) return '';
    
    // Don't wrap if it's already a header, list, or other tag
    if (block.startsWith('<h') || block.startsWith('<ul') || block.startsWith('<li')) {
      return block;
    }
    
    // Don't wrap if it's just whitespace or already wrapped
    if (block.match(/^<[^>]+>.*<\/[^>]+>$/s)) {
      return block;
    }
    
    return `<p>${block}</p>`;
  }).join('\n');

  // Clean up extra newlines
  html = html.replace(/\n{3,}/g, '\n\n');

  return html;
};
