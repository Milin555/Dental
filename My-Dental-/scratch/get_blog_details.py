import json

def main():
    path_to_content = r"C:\Users\Rutil\.gemini\antigravity-ide\brain\932eb641-288e-44c3-9274-dca182d17d03\.system_generated\steps\498\content.md"
    with open(path_to_content, 'r', encoding='utf-8') as f:
        content = f.read()
    
    start = content.find('{')
    end = content.rfind('}')
    if start != -1 and end != -1:
        data = json.loads(content[start:end+1])
        print("--- BLOG PAGES ---")
        for k, v in data.items():
            if k.startswith('/blog/'):
                print(f"\nPath: {k}")
                print(f"Title: {v.get('title')}")
                print(f"Description: {v.get('description')}")
                print(f"H1: {v.get('h1')}")
                print(f"H2: {v.get('h2')}")
                print(f"Paragraph count: {len(v.get('p', []))}")
                print(f"First few paragraphs:")
                for p in v.get('p', [])[:5]:
                    print(f"  - {p}")
    else:
        print("Could not find json")

if __name__ == '__main__':
    main()
