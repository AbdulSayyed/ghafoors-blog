## Suli blog

### Step 1. Cloning and running

- Cloned in `suliblog` under `~/Documents/projects/hbstack/`.
- Changed `go.mod` top entry to point to `module github.com/AbdulSayyed/suliblog`.
- To get the prerequisite run `npm i @hbstack/node-packages` following the instructions.
- Running with `npm run dev`. First time errors, second time started. Most errors are dart sass related, they are warning not errors.
- Also added this file and named `myReadme.md`.

### Step 2. Cleaning and uploading on Github

- `.gitignore` file so  is already there so using the same file.
- Cleaning all chinese files with are not required.
- Run `find . -iname _index.zh-hans.md -ls |more` to make sure which files will be deleted.
- Run `find . -iname _index.zh-hans.md -exec /bin/rm {} \;` to delete all the files starting with `_index...`.
- Also run `find . -iname index.zh-hans.md` to see which files are to be deleted followed by `find . -iname index.zh-hans.md -exec /bin/rm {} \;` to delete other files.
- Git status changed `✔ ~/Documents/projects/hbstack/suliblog [main|● 65✚ 4…2]` which says 65 files are deleted, and 2 untracked files
- Since we do not need hbstack `.git`, delete this folder. Run `git init .`, add all files `git aa` and finally make first commit `git cm "Initial commit`.
- Make a new repo on github and push the repo.

### Step 3. Configure vscode to use the project

- Create `.vscode` folder in project root directory and create a file named `extensions.json` this file will maintain the extensions needed for this project. Create another file called `.settings.json` where some sittings for this projects will be saved.
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

1. [Go](https://marketplace.visualstudio.com/items?itemName=golang.go) is used locally.
2. [Hugo language support for syntax](https://marketplace.visualstudio.com/items?itemName=budparr.language-hugo-vscode)

- While the following extensions are installed globally.

1. [Code for spell checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
2. [Markdown linting](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

#### Amend project.json file

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
- Also change the description and the address of the repository and other detials like author and homepage details, remove what is not needed for example delete bugs section. The follwing is the modified contents.

```json
{
  "name": "suliblogs",
  "description": "Suliblogs contains all the work by Sulaiman Sayyed. This project is based on hbstack.",
  "scripts": {
    "dev": "hugo server --gc --enableGitInfo -D",
    "prod": "hugo server --gc --disableFastRender --enableGitInfo --renderToDisk --minify -e production -p 1314"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/AbdulSayyed/suliblog.git"
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

### Step 3. Changing configuration

- All configuration are kept under `config/default/` folder. There is one `zh` chinese menu file is present. Delete this file using `rm ./config/_default/menus.zh-hans.yaml`.

#### Hugo.yaml

- First two lines are changed as shown below.

```yaml
baseURL: https://github.com/AbdulSayyed/suliblogs.git
title: Suli blogs
```

#### Languages.yaml

- Following chinese section is removed

```yaml
zh-hans:
  languageName: 简体中文
  title: HB 博客主题模板
  weight: 2
```

#### Menus.yaml Or menus.en.yaml

- Before we look at this file we need to understand where are the main menus coming from.
- They are generated directly by hugo as being part of section.
- In hugo what is present under content directory is regarded as section as a leaf bundle or branch bundle.
- The `nav` bar contains `Docs, Gallery, Examples, Blog and support` menus.
- They come because in above folders we have a file name `_index.md` where menus entries are explicitly defined. When you do it there is no need to use url property. They are rendered automatically. The only exception is `support` menu, it is defined in `menus.yaml` file. As we do not need this menu, delete its contents.

#### Params.yaml

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


- Under `header` brand value changed to `SB` from `HB` to present Sulaiman Blog.
- `Header/Socials` parameters can be changed here, comment what is not needed. These social icons are present on the top, they are changed from here. To change footer social parameters change variable values under `footer/socials`.
- Under `terms` variable `paginate` value is set to 30 instead of 12.

> Note: This is the file where most variables value is set.


### Content folder

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

