[TOC]

## 1. Ghafoors-blog

### 1.1. Step 1. Cloning and running

- Cloned in `suliblog` under `~/Documents/projects/hbstack/`.
- Changed `go.mod` top entry to point to `module github.com/AbdulSayyed/suliblog`.
- To get the prerequisite run `npm i @hbstack/node-packages` following the instructions.
- Running with `npm run dev`. First time errors, second time started. Most errors are dart sass related, they are warning not errors.
- Also added this file and named `myReadme.md`.

### 1.2. Step 2. Cleaning and uploading on Github

- `.gitignore` file so is already there so using the same file.
- Cleaning all chinese files with are not required.
- Run `find . -iname _index.zh-hans.md -ls |more` to make sure which files will be deleted.
- Run `find . -iname _index.zh-hans.md -exec /bin/rm {} \;` to delete all the files starting with `_index...`.
- Also run `find . -iname index.zh-hans.md` to see which files are to be deleted followed by `find . -iname index.zh-hans.md -exec /bin/rm {} \;` to delete other files.
- Git status changed `✔ ~/Documents/projects/hbstack/suliblog [main|● 65✚ 4…2]` which says 65 files are deleted, and 2 untracked files
- Since we do not need hbstack `.git`, delete this folder. Run `git init .`, add all files `git aa` and finally make first commit `git cm "Initial commit`.
- Make a new repo on github and push the repo.

### 1.3. Step 3. Configure vscode to use the project

- Create `.vscode` folder in project root directory and create a file named `extensions.json` this file will maintain the extensions needed for this project. Create another file called `.settings.json` where some sittings for this projects will be saved.

#### 1.3.1. Install markdownlint extension

- First install `markdownlint` extension from the market place and use it globally. Create `.markdownlint.json` file in your home folder `~/.markdownlint.json`. Add these contents in this file.

```json
{
  "default": true,
  "MD041": false,
  "MD013": false
}
```

- The above two rules are set to false, MDO41 does not allow any heading to start from the top but heading one `#`. Similarly the rule MD013 set to false so that the length of line can be ignored.

> Note: To enable vscode to see your `.markdownlint.json` file, you would need to tell vscode where to look for this file. It can be done in user setting file. The second way is to create a link file in your project root folder which points to your `~/.markdownlint.json` file. To do so be in your project root directory and run this command `ln -s /home/ghafoor/.markdownlint.json .markdownlint.json`

- Vscode allows you to use extensions globally or only enabled in the current project. So install the extensions for the project specific requirement. For example following extensions are only enabled locally in this project.

> Note: The above linting works with markdown rules provided. To use the custom rules you need to install [markdwonlint-cli](https://github.com/igorshubovych/markdownlint-cli)

- This project intends to convert some of the markdown files into pdf. For this purpose markdown heading are followed by numbering in this format `(1.0)`. While writing to avoid extra spaces linting measures are needed.
- For this purpose a new file named `heading-space-check.js` is created in the same folder. Then using markdownlint-cli this rule is applied to check on the targeted file. Here is an example `markdownlint --rules ./heading-space-check.js site_rules.md`. When it is run it tells the error.

1. [Go](https://marketplace.visualstudio.com/items?itemName=golang.go) is used locally.
2. [Hugo language support for syntax](https://marketplace.visualstudio.com/items?itemName=budparr.language-hugo-vscode)

- While the following extensions are installed globally.

1. [Code for spell checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
2. [Markdown linting](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

#### 1.3.2. Amend project.json file

- Following is the state of the project.json file.

```json
{
  "name": "hb-theme",
  "description": "The starter theme template of [HB Framework](https://hbstack.dev/).",
  "scripts": {
    "dev": "hugo server --gc --enableGitInfo -D",
    "prod": "hugo server --gc --disableFastRender --enableGitInfo --renderToDisk --minify -e production -p 1314"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/hbstack/theme.git"
  },
  "author": "Razon Yang <razonyang@gmail.com>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/hbstack/theme/issues"
  },
  "homepage": "https://github.com/hbstack/theme#readme",
  "devDependencies": {
    "@fullhuman/postcss-purgecss": "^6.0.0",
    "autoprefixer": "^10.4.14",
    "postcss-cli": "^11.0.0",
    "rtlcss": "^4.0.0"
  },
  "dependencies": {
    "@hbstack/node-packages": "^0.1.5"
  }
}
```

- Modify the above file to suit your needs. First change the name of the project from `hb-theme` to your project name.
- Also change the description and the address of the repository and other details like author and homepage details, remove what is not needed for example delete bugs section. The following is the modified contents.

```json
{
  "name": "ghafoors-blogs",
  "description": "ghafoors-blogs contains all the work by Sulaiman Sayyed. This project is based on hbstack.",
  "scripts": {
    "dev": "hugo server --gc --enableGitInfo -D",
    "prod": "hugo server --gc --disableFastRender --enableGitInfo --renderToDisk --minify -e production -p 1314"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/AbdulSayyed/ghafoors-blog.git"
  },
  "author": "Abdul Ghafoor Sayyed <s.ghafoor@outlook.com>",
  "license": "MIT",
  "homepage": "https://github.com/AbdulSayyed/",
  "devDependencies": {
    "@fullhuman/postcss-purgecss": "^6.0.0",
    "autoprefixer": "^10.4.14",
    "postcss-cli": "^11.0.0",
    "rtlcss": "^4.0.0"
  },
  "dependencies": {
    "@hbstack/node-packages": "^0.1.5"
  }
}
```

### 1.4. Step 3. Changing configuration

- All configuration are kept under `config/default/` folder. There is one `zh` chinese menu file is present. Delete this file using `rm ./config/_default/menus.zh-hans.yaml`.

#### 1.4.1. Hugo.yaml

- First two lines are changed as shown below.

```yaml
baseURL: https://github.com/AbdulSayyed/ghafoors-blog.git
title: Suli blogs
```

#### 1.4.2. Languages.yaml

- Following chinese section is removed

```yaml
zh-hans:
  languageName: 简体中文
  title: HB 博客主题模板
  weight:
```

#### 1.4.3. Menus.yaml Or menus.en.yaml

- Before we look at this file we need to understand where are the main menus coming from.
- They are generated directly by hugo as being part of section.
- In hugo what is present under content directory is regarded as section as a leaf bundle or branch bundle.
- The `nav` bar contains `Docs, Gallery, Examples, Blog and support` menus.
- They come because in above folders we have a file name `_index.md` where menus entries are explicitly defined. When you do it there is no need to use url property. They are rendered automatically. The only exception is `support` menu, it is defined in `menus.yaml` file. As we do not need this menu, delete its contents.

#### 1.4.4. Params.yaml

- This is the place where followings sections variables can be changed. They are given below

  1. Header
  2. Footer
  3. Terms ( pagination )
  4. Blog
  5. Docs
  6. Content_panel
  7. Gallery
  8. sec
  9. Pwa
  10. Search
  11. mermaid
  12. Hugopress

- Under `header` brand value changed to `SB` from `GB` to present Ghafoor's Blog.
- `Header/Socials` parameters can be changed here, comment what is not needed. These social icons are present on the top, they are changed from here. To change footer social parameters change variable values under `footer/socials`.
- Under `terms` variable `paginate` value is set to 30 instead of 12.

> Note: This is the file where most variables value is set.

### 1.5. Step 4. Content folder

- It contains following folders.

```txt
── archives
├── authors
├── blog
├── categories
├── docs
├── examples
├── gallery
├── _index.md
├── series
└── tags
```

#### 1.5.1. What is \_index.md

- In Hugo files which starts from `_` are necessary to maintain folder structure. The `_index.md` file is a special file in Hugo, used to define content for a list page (such as a section, taxonomy, or homepage) rather than a single content page. In Hugo a section denotes the directory under `content` folder.
- Section Index Pages: When placed in a directory, `_index.md` defines the content and metadata for that section's index page. For example, placing `_index.md` in the content/ folder would define the content section, similarly an `_index.md` under content/blog/ directory would define what is present under `blog` folder and how it is to organised.
- Home Page: An \_index.md file in the root of the content/ directory will define the content for the homepage.
- Taxonomy Pages: When used in taxonomy directories (like tags or categories), \_index.md defines the layout and content for the list page of that taxonomy.

#### 1.5.2. Creating posts directory structure

- The structure for post would ideally look like the following:

```txt
content/
└── blog/
    ├── _index.md
    └── posts/
        ├── _index.md
        ├── js/
        │   ├── _index.md
        │   ├── post1.md
        │   ├── post2.md
        │   ├── post3.md
        │   ├── post4.md
        │   └── post5.md
        ├── python/
        │   ├── _index.md
        │   ├── post1.md
        │   ├── post2.md
        │   ├── post3.md
        │   ├── post4.md
        │   └── post5.md
        ├── topic3/
        │   ├── _index.md
        │   ├── post1.md
        │   ├── post2.md
        │   ├── post3.md
        │   ├── post4.md
        │   └── post5.md
```

- The above seems fine, but contents can be further structured using `directories` referred as `leaf bundles` in Hugo. Hence the recommended structure would be as shown below.

```txt
content/
└── blog/
    └── posts/
        └── js/
            ├── _index.md
            ├── post1/
            │   ├── index.md
            │   ├── image1.jpg
            │   └── diagram.pdf
            ├── post2/
            │   └── index.md
            ├── post3/
            │   ├── index.md
            │   ├── image2.png
            │   └── notes.txt
            ├── post4/
            │   └── index.md
            └── post5/
                └── index.md

```

#### 1.5.3. Benefits of Using Directories with index.md Files

Resource Management:

Bundling Resources: When you create a folder for a piece of content and place an index.md inside, you can also place related resources (images, files, etc.) in the same folder. This way, everything related to a specific piece of content is grouped together, making it easier to manage.
Self-contained Content: Each folder acts as a self-contained unit of content, which is particularly useful for complex pages that have multiple associated assets.
URL Structure:

Clean URLs: Using index.md within a directory results in cleaner URLs. For example, a page located at content/landing/index.md would be accessible at /landing/ instead of /landing.html.
SEO Friendly: Clean URLs are generally more SEO-friendly and user-friendly, improving the overall navigation experience on your site.
Hugo Page Bundles:

Leaf Bundles: These are used for single pages that are self-contained with their resources. The directory is treated as a single page.
Branch Bundles: These are used for sections that contain multiple pages. A \_index.md file in a directory signifies a branch bundle.

#### 1.5.4. Adding posts submenu into blog main menu

- To do so, `posts/_index.md` is changed as follows:

```txt
---
title: "Posts"
menu:
  main:
    identifier: posts
    parent: blog
    weight:
    params:
      icon:
        vendor: fas
        name: blog
#description: "Explore posts on various topics"
---

```

---

## 2. Deploying on gh-pages

---

- To deploy on gh-pages, a workflow file is needed. First it was used from hbstack site and then it is taken from jmooring github, it is working.

> Note : it is possible to have more than one workflow with different names, like `gh-pages.yaml` and `static.yaml`. At the moment my site is running `static.yaml` workflow

---

### 2.1. Featured Image on Top level widget

- The site shows a top level widget in which post images are shown.
- The setting is controlled by a variable `featured:true` from front matter.
- We can replace this to `false` and add `true` to the post's front matter which we like it to show.
- For example the following post will be shown in this carousel since it has this flag set in front matter.

```yaml

```

### 2.2. Authors folder under content

- Under content folder `authors` is changed to `author` to represent a single author.
- The folder it contains is changed from `hugomods` to `ghafoors-blog`. Its original contents are shown below.

```yaml
---
title: HugoMods Authors
description: Code and documentation contributors of HugoMods
images:
  - https://avatars.githubusercontent.com/u/128204519?s=200&v=4
socials:
  github: hugomods
  paypal: razonyang
  kofi: razonyang
  4. gmail: mailto:support@hugomods.com
---
```

- They are changed to the following

- `hugo.yaml` file under `taxonomies` section has `author` set to `authors`. Change it to only `author`.
