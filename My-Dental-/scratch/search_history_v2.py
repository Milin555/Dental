import json
import os

def main():
    transcript_path = r"C:\Users\Rutil\.gemini\antigravity-ide\brain\932eb641-288e-44c3-9274-dca182d17d03\.system_generated\logs\transcript.jsonl"
    if not os.path.exists(transcript_path):
        print("No transcript.jsonl found")
        return
        
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for idx, line in enumerate(f):
            if 'generate_image' in line or 'roberto_case_study' in line or 'sara_case_study' in line or 'walter_case_study' in line or 'contact_hands' in line:
                print(f"Line {idx} matches:")
                # print a truncated version of the line
                print(line[:300] + "...")
                print()

if __name__ == '__main__':
    main()
