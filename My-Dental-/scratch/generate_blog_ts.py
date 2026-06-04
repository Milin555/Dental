import json
import os

def main():
    json_path = 'scratch/clean_blog_posts.json'
    if not os.path.exists(json_path):
        print("clean_blog_posts.json not found")
        return

    with open(json_path, 'r', encoding='utf-8') as f:
        posts = json.load(f)

    # Some images mapped to slugs to make them look nice and match
    image_mappings = {
        'clear-aligner-workflows-explained': '/images/blog_aligners.png',
        'digital-impressions-vs-traditional-impressions': '/images/blog_impressions.png',
        'a-practical-guide-to-scanning-for-crowns': '/images/blog_crowns.png',
        'how-intraoral-scanners-improve-workflows': '/images/blog_implants.png',
        'intraoral-scanner-buying-guide': '/images/blog_buying.png',
        'intraoral-scanning-mistakes': '/images/blog_mistakes.png',
        'intraoral-scanning-clear-aligners': '/images/blog_aligners.png',
        'digital-vs-traditional-impressions': '/images/blog_impressions.png',
        'a-practical-guide-to-scanning-for-crowns-veneers': '/images/blog_crowns.png',
        'intraoral-scanning-crowns-bridges': '/images/blog_crowns.png',
        'intraoral-scanning-for-implants': '/images/blog_implants.png',
    }

    # Add dates manually
    dates = {
        'clear-aligner-workflows-explained': 'May 28, 2026',
        'digital-impressions-vs-traditional-impressions': 'May 20, 2026',
        'a-practical-guide-to-scanning-for-crowns': 'May 12, 2026',
        'how-intraoral-scanners-improve-workflows': 'May 02, 2026',
        'intraoral-scanner-buying-guide': 'April 18, 2026',
        'intraoral-scanning-mistakes': 'April 05, 2026',
        'intraoral-scanning-clear-aligners': 'May 28, 2026',
        'digital-vs-traditional-impressions': 'May 20, 2026',
        'a-practical-guide-to-scanning-for-crowns-veneers': 'May 12, 2026',
        'intraoral-scanning-crowns-bridges': 'May 12, 2026',
        'intraoral-scanning-for-implants': 'May 02, 2026',
    }

    ts_content = "export interface BlogPost {\n"
    ts_content += "  slug: string;\n"
    ts_content += "  title: string;\n"
    ts_content += "  description: string;\n"
    ts_content += "  author: string;\n"
    ts_content += "  readTime: string;\n"
    ts_content += "  category: string;\n"
    ts_content += "  date: string;\n"
    ts_content += "  image: string;\n"
    ts_content += "  paragraphs: string[];\n"
    ts_content += "}\n\n"

    ts_content += "export const blogPosts: Record<string, BlogPost> = {\n"
    
    for slug, post in posts.items():
        image = image_mappings.get(slug, 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80')
        date = dates.get(slug, 'May 28, 2026')
        
        # Escape quotes in strings
        title_esc = post['title'].replace('"', '\\"')
        desc_esc = post['description'].replace('"', '\\"')
        author_esc = post['author'].replace('"', '\\"')
        read_time_esc = post['readTime'].replace('"', '\\"')
        category_esc = post['category'].replace('"', '\\"')
        
        ts_content += f"  \"{slug}\": {{\n"
        ts_content += f"    slug: \"{slug}\",\n"
        ts_content += f"    title: \"{title_esc}\",\n"
        ts_content += f"    description: \"{desc_esc}\",\n"
        ts_content += f"    author: \"{author_esc}\",\n"
        ts_content += f"    readTime: \"{read_time_esc}\",\n"
        ts_content += f"    category: \"{category_esc}\",\n"
        ts_content += f"    date: \"{date}\",\n"
        ts_content += f"    image: \"{image}\",\n"
        ts_content += "    paragraphs: [\n"
        for p in post['paragraphs']:
            p_esc = p.replace('"', '\\"').replace('\n', ' ')
            ts_content += f"      \"{p_esc}\",\n"
        ts_content += "    ]\n"
        ts_content += "  },\n"
        
    ts_content += "};\n"

    os.makedirs('src/lib', exist_ok=True)
    with open('src/lib/blogData.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)
    print("Generated src/lib/blogData.ts successfully!")

if __name__ == '__main__':
    main()
