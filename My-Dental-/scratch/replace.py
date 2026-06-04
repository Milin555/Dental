import os
import re

def replace_in_file(filepath, replacements):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return

    new_content = content
    for old, new in replacements.items():
        # Handle simple string replacements
        new_content = new_content.replace(old, new)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

def main():
    replacements = {
        "My Dental Clinic": "Dental Clinic",
        "my dental clinic": "dental clinic",
        "My dental clinic": "Dental clinic",
        "mydentalclinic@gmail.com": "info@dentalclinic.demo",
        "+91 96626 70001": "+91 99999 99999",
        "9662670001": "9999999999",
        "+91 98765 43210": "+91 99999 99999",
        "9876543210": "9999999999",
        "Shop No:110, Glamor Complex, Bhatar Rd, near Vaibhav Apartment, Bhatar, Athwa, Surat, Gujarat 395006": "Demo Address, Dummy Location, Mumbai, India",
        "Bhatar, Surat": "Mumbai, India",
        "Surat": "Mumbai",
        "Bhatar": "Mumbai"
    }

    directories_to_scan = [
        r"c:\Users\Promise\Desktop\DENTIST\My-Dental-",
        r"c:\Users\Promise\Downloads\dentist"
    ]
    
    for base_dir in directories_to_scan:
        for root, dirs, files in os.walk(base_dir):
            if 'node_modules' in root or '.git' in root or 'dist' in root:
                continue
            for file in files:
                if file.endswith((".tsx", ".ts", ".html", ".css", ".json", ".js")):
                    filepath = os.path.join(root, file)
                    replace_in_file(filepath, replacements)

if __name__ == "__main__":
    main()
