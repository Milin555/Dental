import sys
import re

def parse_readable_text(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Strip style and script tags completely
    html = re.sub(r'<style\b[^>]*>([\s\S]*?)<\/style>', '', html, flags=re.I)
    html = re.sub(r'<script\b[^>]*>([\s\S]*?)<\/script>', '', html, flags=re.I)
    
    # Find all text inside tags, like <h1 ...>Text</h1> or <p ...>Text</p>
    # Or just strip tags but remove any css-like text (containing curly braces)
    text = re.sub(r'<[^>]+>', ' \n ', html)
    
    lines = []
    for line in text.split('\n'):
        line = line.strip()
        # Ignore lines with CSS rules
        if '{' in line or '}' in line or '@media' in line or '/*' in line:
            continue
        if len(line) > 1:
            # Clean up entities
            line = html_unescape(line)
            lines.append(line)
            
    return '\n'.join(lines)[:2500]

def html_unescape(text):
    text = text.replace('&amp;', '&')
    text = text.replace('&lt;', '<')
    text = text.replace('&gt;', '>')
    text = text.replace('&quot;', '"')
    text = text.replace('&#39;', "'")
    return text

if __name__ == '__main__':
    if len(sys.argv) > 1:
        print(parse_readable_text(sys.argv[1]))
