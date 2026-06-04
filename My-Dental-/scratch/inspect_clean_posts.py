import json

def main():
    with open('scratch/clean_blog_posts.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    for slug, post in data.items():
        print(f"Slug: {slug}")
        print(f"  Title: {post['title']}")
        print(f"  Author: {post['author']}")
        print(f"  Read Time: {post['readTime']}")
        print(f"  Category: {post['category']}")
        print(f"  Paragraph Count: {len(post['paragraphs'])}")
        if post['paragraphs']:
            print(f"  First paragraph: {post['paragraphs'][0][:80]}...")
            print(f"  Last paragraph: {post['paragraphs'][-1][:80]}...")
        print()

if __name__ == '__main__':
    main()
