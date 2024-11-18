<!-- TOC -->

- [Rules (1)](#rules-1)
  - [General Naming Conventions (1.1)](#general-naming-conventions-11)
    - [Markdown File Names (1.1.1)](#markdown-file-names-111)
  - [Hugo Folder Structure Naming (1.2)](#hugo-folder-structure-naming-12)
  - [Content Headings (1.3)](#content-headings-13)
  - [Use Markdownlint to Check Custom Styles (1.4)](#use-markdownlint-to-check-custom-styles-14)
  - [Use Custom Script to Replace Section Numbering (1.5)](#use-custom-script-to-replace-section-numbering-15)
  - [Vscode Related Settings (1.6)](#vscode-related-settings-16)
  - [What is Set in .markdownlint File ? (1.7)](#what-is-set-in-markdownlint-file--17)
  - [How New index.md Files are Created ? (1.8)](#how-new-indexmd-files-are-created--18)

## Rules (1)

### General Naming Conventions (1.1)

1. All folder and file names must start with `lower case`
   1. Docs folder names are an exception, they start with `upper case` and follow AP Styles.
2. Names must be descriptive `blog-post` is preferred over `bp`.
3. Avoid special characters `#,@,$`, they require escaping in terminal and in configuration files.
4. Stick to `letter, number and hyphen (-)`. Separate files names with hyphen.
5. Some files names comes with underscore (\_) such as `node_modules`, keep them as it is.

#### Markdown File Names (1.1.1)

1. Starts with short date `2024-11-10` followed by the file name separated by hyphen. Ror example, `2024-11-10-what-is-software-engineering.md`.
   1. If the file is part of a series, add a number after the date. For example, `2024-11-10-what-is-software-engineering-01.md`.
   2. Since this site `ghafoor-blog` is cloned from Hbstack framework built upon Hugo, the file names are kept as per the Hugo's default naming conventions which utilises, the concept of branch and leaf bundle.
   3. The leaf bundle is a directory that contains a single content file and any associated static files. The leaf bundle is named after the content file.
   4. The branch bundle is a directory that contains multiple content files and any associated static files. The branch bundle is named after the directory.
   5. Hence following this structure, all markdown contents are kept in an `index.md` file which is present in a folder named after the content file. For example, `what-is-software-engineering/index.md`.
   6. When a page is displayed it follows the URL structure as `https://ghafoor-blog/docs/ibm-fullstack-software-developer/01-Software-Engineering/01-module/001-Why-soft-engineering/`.
   7. The above URL structure is created by the folder structure present in the `content` folder. The `index.md` file is the main file which is displayed when the URL is accessed.
2. The `index.md` file is the main file which is displayed when the URL is accessed. The `index.md` file is the main file which is displayed when the URL is accessed.

3. Keep the extension as `.md` not an `.Md` or `.mkd` etc. Keep them short, longer files names creates search problems.

### Hugo Folder Structure Naming (1.2)

- Organized Layout: Follow Hugo's default directory structure and naming conventions:

  - content/: Contains all Markdown files for your site’s pages and posts.
  - layouts/: Holds custom HTML templates.
  - static/: Stores images, stylesheets, and JavaScript files.
  - data/: For any data files like .yaml, .json, or .toml.
  - themes/: Contains theme files.
  - docs/: Contains docs file to explain things in detail.

- Group Related Files: For better organization, group files with similar functions together. For example, css/ and js/ can go inside static/.
- Consistent Naming for Sectional Folders: Use a plural name for folders containing similar items. For example, posts/ for blog posts or images/ for images
- Keep the `ReadMe.md` file in a root folder. Name should not be other than `ReadMe.md`.

### Content Headings (1.3)

> Title Case Style is used as opposed to Sentence case.

- Title case capitalize the `First Letter of Each Significant Word`. It is used in `AP` style. Microsoft and Apple use `Sentence Style`.
- No full stop in the end of the heading.

```txt
Capitalize the First Letter of Each Significant Word
```

> Note: Preposition and determiners are not capitalized.

### Use Markdownlint to Check Custom Styles (1.4)

1. Use `heading-apstyle-check.js` to make sure that heading follows `AP` style headings. To do so run the script as shown below.

```bash
npm run check-apstyle
# It runs the following
"check-apstyle": "markdownlint '**/*.md' --ignore 'node_modules' --config .markdownlint.json --rules './heading-apstyle-check.js'"
```

2. Also use script present to make sure that no extra spaces are present at the end of the heading contents and before the numbering

```bash
npm run check-space
# It runs the following
"check-space": "markdownlint '**/*.md' --ignore 'node_modules' --config .markdownlint.json --rules './heading-space-check.js'"
```

These two `.js` files are run with `markdownlint` this is a Separate package installed using `npm -i -g markdown-cli` which work with vscode extension.

### Use Custom Script to Replace Section Numbering (1.5)

1. Markdown All in One Vscode extension is used to add section numbers. They are added in the beginning. To move them at the end following script is used.

```bash
# ./site_rules.md is correct but not site_rule.md
node update-heading.js <filename>
```

> Note: Make sure `./` path is provided before a file name

1. Before running the above first make sure that all heading numbers are added. So the workflow would be as follows.
2. When section numbers needs to be updated, first remove all previous one by running .

```bash
node remove-section-number.js
```

3. It will remove all sections numbers present at the end of the heading.
4. Make sure your heading `##` are correctly formatted, then run vscode extension to add the headings number. Once they are added use the script to replace them at the front.

### Vscode Related Settings (1.6)

1. Create `.vscod` folder in the root directory. Add `settings.json` and `extensions.json` files in it.
2. Keep the details of the extensions in `extensions.json` file as shown below.

```json
{
  "recommendations": [
    "yzhang.markdown-all-in-one",
    "DavidAnson.vscode-markdownlint",
    "shd101wyy.markdown-preview-enhanced",
    "bierner.markdown-mermaid",
    "bierner.markdown-checkbox"
  ]
}
```

> These are ids, which can be copied from the extensions page.

3. Settings.json file would include project specific settings. It is mostly used to include tasks for example, if this project needs to run a compiler.

### What is Set in .markdownlint File ? (1.7)

- The `.markdownlint.json` file is kept in a root folder of the project. It is used to set the rules for markdownlint. The rules are set as shown below. It is a symbol link present in home directory of the machine `~/.markdownlint.json`.
- If an new rule is added, its reason should be included in this site_rules.md file under this section in the following format.

```json
{
    "default": true,
    "MD041": false,# First line should be a top level heading, not needed
    "MD013": false,# line length is false, more than 80 allowed
    "MD001": true, # Heading increment by only one level
    "MD010": true, # No hard tabs allowed only spaces
    "MD018": true, # No missing space after hash #
    "MD019": true, # No multiple spaced after #(hash) in headings
    "MD029": false # for ordered list continuity if a code block is present
}
```

### How New index.md Files are Created ? (1.8)

- All files when created follow the pattern present in an `archetypes` folder.
- To create a new file for example, in docs folder run the following command.

```bash
hugo new content/docs/ibm-fullstack-software-developer/01-Software-Engineering/02-module/001-Software-Development/index.md
```

- It will crate a new file with the front matter written for the intended content.
- In the above case front matter would have the following content.

```yaml
---
title: '001 Software Development'
#linkTitle:    # introduction
date: 2024-11-18T15:57:30Z
draft: true
description:
noindex: false
# comments: false
nav_weight: 1
# nav_icon:
#   vendor: bootstrap
#   name: toggles
#   color: '#e24d0e'
series:
  - Docs
categories:
#  -
tags:
#  -
images:
#  -
# menu:
#   main:
#     weight: 100
#     params:
#       icon:
#         vendor: bs
#         name: book
#         color: '#e24d0e'
---
Summary.

<!--more-->

Content.
```

- The above front matter is a template for the new file. It is used to create new files with the same structure.
- You must be in the root directory of the project to run the above command.
- The `linkTitle` is commented out, it is used to create a link in the sidebar. You need to assign a value to it to create a link in the sidebar. Sometimes it is not necessary to have `linkTitle` in the front matter. But follow the pattern of the existing files.
