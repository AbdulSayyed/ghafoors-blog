## Rules (1)

### General Naming Conventions (1.1)

1. All folder and file names must start with `lower case`
2. Names must be descriptive `blog-post` is preferred over `bp`.
3. Avoid special characters `#,@,$`, they require escaping in terminal and in configuration files.
4. Stick to `letter, number and hyphen (-). Separate files names with hyphen.
5. Some files names comes with underscore (_) such as `node_modules`, keep them as it is.

#### Markdown File Names (1.1.1)

1. Starts with short date `2024-11-10` followed by the file name separated by hyphen.
2. Keep the extension as `.md` not an `.Md` or `.mkd` etc. Keep them short, longer files names creates search problems.

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

### Capitalize the First Letter of Each Significant Word  

```

> Note: Preposition and determiners are not capitalized.

### Use Markdownlint to check Custom Styles (1.4)

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

These two `.js` files are run with `markdownlint` this is a Separate package installed using `npm -i -g markdown-cli` which work with  vscode extension.

### Use Custom Script to Replace Section Numbering  (1.5)

1. Markdown All in One Vscode extension is used to add section numbers. They are added in the beginning. To move them at the end follwoing script is used.


```bash
# ./site_rules.md is correct but not site_rule.md
node update-heading.js <filename>
```

> Note: Make sure `./` path is provided before a file name

1. Before running the above first make sure that all heading numbers are added. So the workflow would be as follows.
   - When section numbers needs to be updated, first remove all previous one by running 
   
   ```bash
   `node remove-section-number.js`
   ```
   
   - It will remove all sections numbers present at the end of the heading.
   - Make sure your heading `##` are correctly formated, then run vscode extension to add the headings number. Once they are added use the script to replace them at the front.


### Vscode Related Settings

- 