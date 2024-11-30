#!/bin/bash

# This script creates _index.md files in all subdirectories of the current directory.
# To run this script, navigate to the directory containing the subdirectories and execute the script by typing `bash create_index_files.sh` or `./create_index_files.sh`
# Define the content to be added in _index.md
content="---
title:
# linkTitle:
nav_weight:
nav_icon:
  vendor: bs
  name: book-half
  color: blue
---"

# Loop through all subdirectories
find . -type d | while read -r dir; do
    index_file="$dir/_index.md"
    
    # Check if _index.md already exists
    if [[ -e "$index_file" ]]; then
        echo "_index.md already exists in $dir. Skipping..."
    else
        echo "Creating _index.md in $dir..."
        echo "$content" > "$index_file"
    fi
done

echo "Operation completed."
