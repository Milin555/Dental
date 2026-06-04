import json
import os

def main():
    transcript_path = r"C:\Users\Rutil\.gemini\antigravity-ide\brain\932eb641-288e-44c3-9274-dca182d17d03\.system_generated\logs\transcript.jsonl"
    if not os.path.exists(transcript_path):
        print("No transcript.jsonl found")
        return
        
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for line in f:
            obj = json.loads(line)
            tool_calls = obj.get('tool_calls', [])
            for tc in tool_calls:
                if tc.get('name') == 'generate_image':
                    print(f"ImageName: {tc.get('arguments', {}).get('ImageName')}")
                    print(f"Prompt: {tc.get('arguments', {}).get('Prompt')}\n")

if __name__ == '__main__':
    main()
