import json

def main():
    path_to_content = r"C:\Users\Rutil\.gemini\antigravity-ide\brain\932eb641-288e-44c3-9274-dca182d17d03\.system_generated\steps\498\content.md"
    with open(path_to_content, 'r', encoding='utf-8') as f:
        content = f.read()
    
    start = content.find('{')
    end = content.rfind('}')
    if start != -1 and end != -1:
        data = json.loads(content[start:end+1])
        blog_data = {}
        for k, v in data.items():
            if k.startswith('/blog/'):
                slug = k.replace('/blog/', '')
                blog_data[slug] = {
                    'title': v.get('title'),
                    'description': v.get('description'),
                    'h1': v.get('h1'),
                    'h2': v.get('h2'),
                    'paragraphs': v.get('p', [])
                }
        
        # Save as JSON so we can import it in our code or print it out cleanly
        with open('scratch/blog_data.json', 'w', encoding='utf-8') as out:
            json.dump(blog_data, out, indent=2)
        print("Successfully extracted blog data to scratch/blog_data.json")
    else:
        print("Could not find json")

if __name__ == '__main__':
    main()
