<!-- TOC -->

- [Rules (1)](#rules-1)
  - [General Naming Conventions (1.1)](#general-naming-conventions-11)
    - [Markdown File Names (1.1.1)](#markdown-file-names-111)
  - [Hugo Folder Structure Naming (1.2)](#hugo-folder-structure-naming-12)
  - [Content Headings (1.3)](#content-headings-13)
  - [Use Markdownlint to Check Custom Styles (1.4)](#use-markdownlint-to-check-custom-styles-14)
  - [Use Custom Script to Replace Section Numbering (1.5)](#use-custom-script-to-replace-section-numbering-15)
    - [Content structure (1.5.1)](#content-structure-151)
  - [Vscode Related Settings (1.6)](#vscode-related-settings-16)
  - [Themes in vscode (1.7)](#themes-in-vscode-17)
  - [What is Set in .markdownlint File ? (1.8)](#what-is-set-in-markdownlint-file--18)
  - [How New index.md Files are Created ? (1.9)](#how-new-indexmd-files-are-created--19)
  - [Pdf Files Creation (1.10)](#pdf-files-creation-110)
  - [Pdf files Toc (1.11)](#pdf-files-toc-111)

## Rules (1)

### General Naming Conventions (1.1)

1. All folder and file names must start with `lower case`
   1. Docs folder names are an exception, they start with `upper case` and follow AP Styles.
2. Names must be descriptive `blog-post` is preferred over `bp`.
3. Avoid special characters `#,@,$`, they require escaping in terminal and in configuration files.
4. Stick to `letter, number and hyphen (-)`. Separate files names with hyphen.
5. Some files names comes with underscore (\_) such as `node_modules`, keep them as it is.

#### Markdown File Names (1.1.1)

1. Starts with short date `2024-11-10` followed by the file name separated by hyphen. For example, `2024-11-10-what-is-software-engineering.md`.
   1. If the file is part of a series, add a number after the date. For example, `2024-11-10-what-is-software-engineering-01.md`.
   2. Since this site `ghafoor-blog` is cloned from Hbstack framework built upon Hugo, the file names are kept as per the Hugo's default naming conventions which utilises the concept of branch and leaf bundle.
   3. The leaf bundle is a directory that contains a single content file and any associated static files. The leaf bundle is named after the content file.
   4. The branch bundle is a directory that contains multiple content files and any associated static files. The branch bundle is named after the directory.
   5. Hence following this structure, all markdown contents are kept in an `index.md` file which is present in a folder named after the content file. For example, `what-is-software-engineering/index.md` where `what-is-software-engineering` is the folder name and `index.md` is the file name.
   6. When a page is displayed it follows the URL structure as `https://ghafoor-blog/docs/ibm-fullstack-software-developer/01-Software-Engineering/01-module/001-Why-soft-engineering/`.
   7. The above URL structure is created by the folder structure present in the `content` folder. The `index.md` file is the main file which is displayed when the URL is accessed.
2. The structure of the docs folder also follows the same convention. The folder name is kept as `Title Case` and the file name is kept as `lower case` with hyphen separating the words.
3. Keep the extension as `.md` not an `.Md` or `.mkd` etc. Keep them short, longer files names creates search problems.

### Hugo Folder Structure Naming (1.2)

- Organized Layout: Follow Hugo's default directory structure and naming conventions:

  - content/: Contains all Markdown files for your site’s pages and posts.
  - layouts/: Holds custom HTML templates.
  - static/: Stores images, stylesheets, and JavaScript files.
  - data/: For any data files like .yaml, .json, or .toml.
  - themes/: Contains theme files.
  - docs/: Contains docs file to explain things in detail.

- Group Related Files: For better organization, group files with similar functions together. For example, css/ and js/ can go inside static/ folder. Similarly images/ and videos/ can be grouped together under these folders.
- Consistent Naming for Sectional Folders: Use a plural name for folders containing similar items. For example, `posts/` for blog posts or `images/` for images
- Keep the `ReadMe.md` file in a root folder. Name should not be other than `ReadMe.md`.
- To take help from other files which are not directly part of this project a `helper` folder is crates and files are kept in it. For example, the contents of helper folder is shown below.

```txt
helper/
.
├── add-section-number.js
├── heading-apstyle-check.js
├── heading-space-check.js
├── instruction.md
├── prompt.md
├── remove-section-number.js
├── sample.md
└── update-heading.js
```

- Where prompt contains project specific prompts used with GitHub Copilot and ChatGPT while `instructions.md` contains specific instructions for the project.
-

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

```txt
// workflow:
1. remove all section numbers at the end by running `node remove-section-number.js ./<file-name>`
2. Add section numbers at the beginning by running vscode extension.
3. Replace them at the end by running `node update-heading.js ./<file-name>`
```

#### Content structure (1.5.1)

- The docs contents follow the pattern as shown below:

```txt

---
front matter 
--- 
Summary. Consist of at least 500 words. The word summary should not be present this summary is used when docs page is generated. If it is less than 500 hundreds words it would include the other contents as well.

<!--more-->
Content.

<!-- more -->

## FAQ
{{< bs/accordion >}}
```


### Vscode Related Settings (1.6)

1. Create `.vscod` folder in the root directory. Add `settings.json` and `extensions.json` files in it.
2. Keep the details of the extensions in `extensions.json` file as shown below.

```json
{
  "recommendations": [
    "yzhang.markdown-all-in-one",
    "yzane.markdown-pdf",
    "davidanson.vscode-markdownlint",
    "bierner.markdown-preview-github-styles",
    "Xenny.markdown-table",
    "shd101wyy.markdown-preview-enhanced",
    // The above are markdown extensions
    "streetsidesoftware.code-spell-checker",
    "streetsidesoftware.code-spell-checker-cspell-bundled-dictionaries",
    // These two are for spell checking
    "tomoki1207.pdf"
  ]
}
```

> These are ids, which can be copied from the extensions page. They are used in this project and are have workspace scope enabled.

3. Settings.json file would include project specific settings. It is mostly used to include tasks for example, if this project needs to run a compiler. Do not include other workspace related settings here, but in `workspace` file present in the root folder.
4. Tasks.json file is used to include tasks which are specific to this project. Below are the contents of the `tasks.json` file.

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Dev Server",
      "type": "shell",
      "command": "npm run dev",
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "detail": "Start the Hugo development server"
    },
    {
      "label": "Prod Server",
      "type": "shell",
      "command": "npm run prod",
      "detail": "Start the Hugo production server"
    },
    {
      "label": "Check Space Rules",
      "type": "shell",
      "command": "npm run check-space",
      "detail": "Run markdownlint for heading-space-check.js"
    },
    {
      "label": "Check AP Style",
      "type": "shell",
      "command": "npm run check-apstyle",
      "detail": "Run markdownlint for heading-apstyle-check.js"
    },
    {
      "label": "Remove Section Numbers",
      "type": "shell",
      "command": "npm run remove-section-number",
      "detail": "Run the script to remove section numbers"
    }
  ]
}
```

- To have this file in project helps running the task without typing them on the terminal. It is a good practice to have them in the project.
- To execute a task, press `Ctrl+Shift+P` and type `Run Task` and select the task you want to run. Another way is to use the drop down menu present on the bottom of the vscode terminal and click run task. It will open a list of tasks which can be run.
-

### Themes in vscode (1.7)

- Use `Dracula` theme in vscode. It is a dark theme and is easy on the eyes. It is used by many developers and is a popular theme.
- Its setting is present in the `settings.json` file as shown below.

```json
{
  //Workbench color customization
  "workbench.colorCustomizations": {
    "editor.lineHighlightBackground": "#606164",
    "editor.lineHighlightBorder": "#7d807b",
    "editorCursor.foreground": "#FF5733", // Replace with your desired color code
    "editorCursor.background": "#FFFFFF" // Optional for block cursors
  },
  // To open new editor in a new group
  "workbench.editor.splitInGroupLayout": "horizontal",
  "workbench.colorTheme": "Dracula Theme",
  // Other settings
  "editor.fontFamily": "'MesloLGS Nerd Font', 'Fira Code'",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.lineHeight": 24,
  "editor.letterSpacing": 0.5,
  "editor.cursorBlinking": "blink",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.cursorStyle": "line",
  "editor.cursorWidth": 2,
  "editor.renderControlCharacters": true,
  "editor.renderLineHighlight": "all",
  "editor.renderWhitespace": "all",
  "editor.rulers": [80, 120],
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.wrappingIndent": "same",
  "editor.minimap.enabled": false,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,
  "editor.showFoldingControls": "always",
  "editor.guides.indentation": true,
  // Terminal settings
  "terminal.integrated.shellIntegration.enabled": true,
  "terminal.integrated.shellIntegration.decorationsEnabled": "both",
  "terminal.integrated.shellIntegration.showCommandGuide": true,
  "terminal.integrated.stickyScroll.enabled": true,
  "terminal.integrated.gpuAcceleration": "auto",
  "terminal.integrated.minimumContrastRatio": 1,
  /*
    ToDo Tree
    */
  "todo-tree.regex.regex": "((//|#|<!--|;|/\\*|^)\\s*($TAGS)|^//\\s*\\[x\\]|^//\\s*\\[ \\])",
  //"todo-tree.regex.regex": "(//|#|<!--|;|/\\*|^|^\\s*(-|\\d+.))\\s*($TAGS)",
  "todo-tree.general.tags": [
    "BUG",
    "HACK",
    "FIXME",
    "TODO",
    "XXX",
    "[ ]",
    "[x]",
    "[//]",
    "[//]: # '$TAGS'"
  ],
  "todo-tree.highlights.customHighlight": {
    "[x]": {
      "foreground": "#64dd17",
      "background": "#008800"
    },
    "[ ]": {
      "foreground": "#f44336",
      "background": "#592c2c"
    },
    "\\[//\\]: # \\((.*?)\\)": {
      "icon": "check",
      "type": "tag",
      "foreground": "#FFFF00",
      "background": "#000000"
    },
    "[//]": {
      "icon": "alert",
      "type": "text",
      "foreground": "#7a7a6c",
      "background": "#000000"
    }
  },
  "todo-tree.filtering.excludeGlobs": [
    "**/vendor/**",
    "**/node_modules/**",
    "**/dist/**",
    "**/bower_components/**",
    "**/build/**",
    "**/.vscode/**",
    "**/.github/**",
    "**/_output/**",
    "**/*.min.*",
    "**/*.map"
  ],
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": "comment",
        "settings": {
          "foreground": "#597261", //
          "fontStyle": "italic"
        }
      }
    ]
  }
}
```

### What is Set in .markdownlint File ? (1.8)

- The `.markdownlint.json` file is kept in a root folder of the project. It is used to set the rules for markdownlint. The rules are set as shown below. It is a symbol link present in home directory of the machine `~/.markdownlint.json`.
- For this extension to work you need to include its address in settings.json file as shown below.

```json
{
  "markdownlint.config": "~/.markdownlint.json"
}
// or
 "markdownlint.config": {
      "extends": "/home/ghafoor/.markdownlint.json",
    }
```

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

### How New index.md Files are Created ? (1.9)

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
nav_weight:
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
#     weight:
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

### Pdf Files Creation (1.10)

- To create a pdf file of the content, use the `markdown-pdf` extension. It is used to create pdf files of the markdown content.
- Its settings are kept in workspace file. It is used to create pdf files of the content. The settings are shown below.

```json
{
  "markdown-pdf.outputDirectory": "pdf-output",
  "markdown-pdf.outputDirectoryRelativePathFile": false,
  "markdown-pdf.styles": [
    "pdf-output/markdown-pdf.css"
    //"https://cdn.jsdelivr.net/gh/Dracula/dracula-theme@master/css/dracula.css",
    //"https://cdn.jsdelivr.net/gh/Dracula/dracula-theme@master/css/dracula.css"
  ],
  "markdown-pdf.margin.left": "20mm",
  "markdown-pdf.margin.bottom": "15mm",
  "markdown-pdf.margin.right": "10mm",
  "markdown-pdf.margin.top": "15mm",
  "markdown-pdf.executablePath": "/usr/bin/google-chrome",
  // Custom header and footer
  "markdown-pdf.headerTemplate": "<div style=\"font-size: 9px; margin-left: 25.4mm;text-align:center;color:lightgrey\"> <span>Candidate Name: Sulaiman Ahmed Sayyed</span></div> <div style=\"font-size: 9px; margin-left: auto; margin-right: 50mm;color:lightgrey\">Candidate Number:</div>",
  "markdown-pdf.footerTemplate": "<div style=\"font-size: 9px; margin: 0 auto;\">Page <span class='pageNumber'></span> of <span class='totalPages'></span></div>",
  // Mermaid settings
  "markdown-pdf.mermaidServer": "https://unpkg.com/mermaid@9.4.3/dist/mermaid.min.js"

  // "markdown-pdf.displayHeaderFooter": true,
  // "markdown-pdf.headerTemplate": "<p></p>",
  // "markdown-pdf.footerTemplate": "<p></p>",
  // "markdown-pdf.printBackground": true,
  // "markdown-pdf.margin.top": "1cm",
  // "markdown-pdf.margin.bottom": "1cm",
  // "markdown-pdf.margin.left": "1cm",
  // "markdown-pdf.margin.right": "1cm",
  // "markdown-pdf.paperFormat": "A4",
  // "markdown-pdf.printSelectionOnly": false
}
```

### Pdf files Toc (1.11)

- A pdf file toc needs to be inserted first inot markdown file and when it is converted into pdf it is also shown there.
- An extension Markdown All in one creates toc. To get the toc generated and rendered automatically, add `[TOC]` on the first line at the beginning of the markdown file. And they will be generated automatically.
- Pdf file requires a toc to be present in the markdown file. It is generated by the extension called `Marky-dynamic`.
- It requires that your markdown file starts with `<!-- TOC -->` and ends with `<!-- /TOC -->`. The toc is generated between these two comments.
