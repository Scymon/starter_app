import os
import sys
import json

def main():
    print("--- Python Engine: Active ---")
    
    # Path to the shared settings
    settings_path = os.path.join(os.getcwd(), 'src', 'shared', 'constants', 'settings.json')
    
    try:
        with open(settings_path, 'r') as f:
            settings = json.load(f)
            # Accessing your specific key: project_name
            name = settings.get('project_name', 'Unknown')
            author = settings.get('author', 'Unknown')
            
            print(f"Project: {name}")
            print(f"Creator: {author}")
            
    except FileNotFoundError:
        print("Error: Could not find shared settings.")

if __name__ == "__main__":
    main()