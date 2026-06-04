import json

def main():
    with open('scratch/blog_data.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    post = data.get('clear-aligner-workflows-explained')
    if post:
        print("TITLE:", post['title'])
        print("DESCRIPTION:", post['description'])
        print("PARAGRAPHS:")
        for idx, p in enumerate(post['paragraphs']):
            print(f"{idx}: {p[:100]}...")
    else:
        print("Not found")

if __name__ == '__main__':
    main()
