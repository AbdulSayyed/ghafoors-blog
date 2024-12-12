#!/bin/bash

# Check if a topic name is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <topic-name>"
  exit 1
fi

TOPIC_NAME=$1
BASE_DIR="../content/docs/$TOPIC_NAME"

# Function to extract numeric weight from folder name
get_weight() {
  echo "$1" | sed 's/^0*//' | cut -d'-' -f1
}

# Create the main topic folder
mkdir -p "$BASE_DIR"

# Create sub-topic folders
for SUBTOPIC in "01-sub-topic" "02-sub-topic"; do
  mkdir -p "$BASE_DIR/$SUBTOPIC"

  # Create module folders and files
  for MODULE in "01-module" "02-module"; do
    MODULE_DIR="$BASE_DIR/$SUBTOPIC/$MODULE"
    mkdir -p "$MODULE_DIR"

    # Create _index.md for the module
    cat <<EOL > "$MODULE_DIR/_index.md"
---
title: "Module- $(get_weight "$MODULE")"
nav_weight: $(get_weight "$MODULE")
nav_icon:
  vendor: bs
  name: book
  color: gray
---

EOL
  done

  # Create _index.md for the sub-topic
  cat <<EOL > "$BASE_DIR/$SUBTOPIC/_index.md"
---
title: "$SUBTOPIC"
#linkTitle:
nav_weight: $(get_weight "$SUBTOPIC")
#nav_icon:
#  vendor: bs
#  name: book-half
#  color: green
---

EOL
done

# Create the main _index.md file
cat <<EOL > "$BASE_DIR/_index.md"
---
title: "${TOPIC_NAME//-/ }"
#linkTitle:
#nav_weight: 
#nav_icon:
#  vendor: bs
#  name: book-half
#  color: green
---

EOL

echo "Structure for topic '$TOPIC_NAME' created successfully."