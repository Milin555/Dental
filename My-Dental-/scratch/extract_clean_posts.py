import json

def main():
    path_to_content = r"C:\Users\Rutil\.gemini\antigravity-ide\brain\932eb641-288e-44c3-9274-dca182d17d03\.system_generated\steps\498\content.md"
    with open(path_to_content, 'r', encoding='utf-8') as f:
        content = f.read()
    
    start = content.find('{')
    end = content.rfind('}')
    if start == -1 or end == -1:
        print("JSON not found")
        return

    data = json.loads(content[start:end+1])
    
    clean_blog_posts = {}
    for path, info in data.items():
        if not path.startswith('/blog/'):
            continue
        
        slug = path.replace('/blog/', '')
        paragraphs = info.get('p', [])
        
        # Find start index (after "Share Article:")
        start_idx = 0
        for idx, p in enumerate(paragraphs):
            if "Share Article:" in p or "Share article:" in p:
                start_idx = idx + 1
                break
        else:
            # If not found, look for author description/bio elements
            # Or fall back to searching for known first paragraph markers
            for idx, p in enumerate(paragraphs):
                if p.startswith("Most aligner") or p.startswith("If you switch") or p.startswith("Use analytics") or p.startswith("Implant workflows") or p.startswith("If you’re reading") or p.startswith("Rolling out"):
                    start_idx = idx
                    break
        
        # Find end index (before "Recommendations" or "Related Dental Articles" or "Related Articles")
        end_idx = len(paragraphs)
        for idx, p in enumerate(paragraphs):
            if idx > start_idx:
                if p in ["Recommendations", "Related Dental Articles", "Related Articles", "Related dental articles", "News"]:
                    end_idx = idx
                    break
        
        body_paragraphs = paragraphs[start_idx:end_idx]
        # Clean up any empty paragraphs or footer residuals
        clean_body = []
        for p in body_paragraphs:
            p_strip = p.strip()
            if not p_strip:
                continue
            if p_strip in ["Book Online", "Home", "Services", "Our Clinic", "Dentists", "News", "CONTACT INFO", "hello@dentix.com", "+37129514734"]:
                continue
            clean_body.append(p_strip)
        
        # Find author and read time from the metadata
        author = "Dr. Tracy Willow"
        read_time = "5 min read"
        category = "Dental Clinic"
        
        # Search metadata prefix (before body)
        for idx in range(min(start_idx, len(paragraphs))):
            p = paragraphs[idx]
            if "Dr." in p:
                author = p
            if "read" in p:
                read_time = p
            if p in ["Orthodontics", "Digital Clinic", "Restorative", "Dental Implants", "Buying Guide", "Clinical Tips", "Periodontics"]:
                category = p
        
        clean_blog_posts[slug] = {
            "slug": slug,
            "title": info.get('title', '').replace(' | Dentix Blog', '').replace(' | Dentix', ''),
            "description": info.get('description', ''),
            "author": author,
            "readTime": read_time,
            "category": category,
            "date": "May 28, 2026", # Default dates
            "paragraphs": clean_body
        }
        
    # Write output to JSON
    with open('scratch/clean_blog_posts.json', 'w', encoding='utf-8') as out:
        json.dump(clean_blog_posts, out, indent=2)
    print(f"Extracted {len(clean_blog_posts)} clean blog posts")

if __name__ == '__main__':
    main()
