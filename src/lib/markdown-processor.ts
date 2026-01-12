export const processMarkdown = (markdown: string): string => {
  let html = markdown;

  // Process tables FIRST (before other replacements)
  html = html.replace(/\|(.+)\|\n\|[-:\|\s]+\|\n((?:\|.+\|\n?)+)/g, (match, headerRow, bodyRows) => {
    const headers = headerRow.split('|').map((h: string) => h.trim()).filter((h: string) => h);
    const rows = bodyRows.trim().split('\n').map((row: string) => 
      row.split('|').map((cell: string) => cell.trim()).filter((cell: string) => cell)
    );
    
    const headerHtml = headers.map((h: string) => `<th>${h}</th>`).join('');
    const bodyHtml = rows.map((row: string[]) => 
      `<tr>${row.map((cell: string) => `<td>${cell}</td>`).join('')}</tr>`
    ).join('');
    
    return `<div class="table-wrapper"><table><thead><tr>${headerHtml}</tr></thead><tbody>${bodyHtml}</tbody></table></div>`;
  });

  // Process horizontal rules
  html = html.replace(/^---+$/gm, '<hr class="my-8 border-t border-border" />');

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

  // Process checkboxes
  html = html.replace(/^- \[ \] (.+)$/gm, '<div class="checkbox-item"><span class="checkbox unchecked">☐</span> $1</div>');
  html = html.replace(/^- \[x\] (.+)$/gm, '<div class="checkbox-item"><span class="checkbox checked">☑</span> $1</div>');

  // Process numbered lists
  html = html.replace(/^\d+\.\s(.+)$/gm, '<li>$1</li>');
  
  // Process unordered lists
  html = html.replace(/^[-•]\s(.+)$/gm, '<li>$1</li>');
  
  // Wrap lists in ul tags
  html = html.replace(/(<li>.*?<\/li>\s*)+/gs, (match) => {
    return `<ul>${match}</ul>`;
  });

  // Process paragraphs (text not already wrapped in tags)
  html = html.split('\n\n').map(block => {
    block = block.trim();
    if (!block) return '';
    
    // Don't wrap if it's already a header, list, blockquote, table or other tag
    if (block.startsWith('<h') || block.startsWith('<ul') || 
        block.startsWith('<li') || block.startsWith('<blockquote') ||
        block.startsWith('<div class="table') || block.startsWith('<hr') ||
        block.startsWith('<div class="checkbox')) {
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