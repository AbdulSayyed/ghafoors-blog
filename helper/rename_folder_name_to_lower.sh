#!/bin/bash

# Function to collect directories
collect_dirs() {
    find "$1" -type d | sort -r
}

# Function to rename directories to lowercase
rename_dirs() {
    for dir in $(collect_dirs "$1"); do
        # Get the current and lowercase names of the directory
        base_dir=$(basename "$dir")
        lower_dir="$(dirname "$dir")/$(echo "$base_dir" | tr '[:upper:]' '[:lower:]')"

        # Rename the directory only if the name differs and no destination conflict
        if [ "$dir" != "$lower_dir" ]; then
            if [ ! -e "$lower_dir" ]; then
                mv "$dir" "$lower_dir"
            else
                echo "Error: Cannot move $dir to $lower_dir because the destination already exists."
            fi
        fi
    done
}

# Start the renaming process from the current directory
rename_dirs "."