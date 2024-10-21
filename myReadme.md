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

- Vscode allows you to use extensions globally or only enabled in the current project. So install the extensions for the project specific requirement. For example,

### Step 3. Changing configuration

- All configuration are kept under `Config/default/` folder. There is one `zh` chinese menu file is present. Delete this file using `rm ./config/_default/menus.zh-hans.yaml`.
