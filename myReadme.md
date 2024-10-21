## Suli blog


### Step 1. Clonning and running

- Cloned in `suliblog` under `~/Documents/projects/hbstack/`.
- Changed `go.mod` top entry to point to `module github.com/AbdulSayyed/suliblog`.
- To get the prerequisite run `npm i @hbstack/node-packages` following the instructions.
- Running with `npm run dev`. First tiem errors, second time started. Most errors are dart sass realted, they are warning not errors.
- Also added this file and named `myReadme.md`.


### Step 2. Cleanign and uploading on Github

-  `.gitignore` file so  is already there so using the same file.
- Cleaning all chineese files with are not required.
- Run `find . -iname _index.zh-hans.md -ls |more` to make sure which files will be deleted.
- Run `find . -iname _index.zh-hans.md -exec /bin/rm {} \;` to delete all the files starting with `_index...`.
- Also run `find . -iname index.zh-hans.md` to see which files are to be deleted followed by `find . -iname index.zh-hans.md -exec /bin/rm {} \;` to delete other files.
- Git status changed `✔ ~/Documents/projects/hbstack/suliblog [main|● 65✚ 4…2] ` which says 65 files are deleted, and 2 untracked files