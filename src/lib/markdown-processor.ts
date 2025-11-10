export const processMarkdown = (markdown: string): string => {
  let html = markdown;

  // Process headers (must be done before other replacements, from most specific to least)
  html = html.replace(/^##### (.+)$/gm, '<h5>$1</h5>');
  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

  // Process blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
  
  // Process bold text
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  
  // Process italic text
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Process links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-accent-blue hover:underline">$1</a>');

  // Process numbered lists
  html = html.replace(/^\d+\.\s(.+)$/gm, '<li>$1</li>');
  
  // Process unordered lists
  html = html.replace(/^[-•]\s(.+)$/gm, '<li>$1</li>');
  
  // Wrap lists in ul tags
  html = html.replace(/(<li>.*?<\/li>\s*)+/gs, (match) => {
    // Check if it's a numbered list (contains digits at start of original lines)
    return `<ul>${match}</ul>`;
  });

  // Process paragraphs (text not already wrapped in tags)
  html = html.split('\n\n').map(block => {
    block = block.trim();
    if (!block) return '';
    
    // Don't wrap if it's already a header, list, blockquote or other tag
    if (block.startsWith('<h') || block.startsWith('<ul') || 
        block.startsWith('<li') || block.startsWith('<blockquote')) {
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
}
