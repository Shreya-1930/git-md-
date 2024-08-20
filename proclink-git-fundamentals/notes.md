# Git fundamentals

# Git Commands

- git init
- git add .
  - Adds all the files to staging
- git reset
  - Undo - Bring back changes to Working area
- git add story.txt
  - Adds one file at a time to staging
- git commit -m "Begining of Bahuballi"

  ```shell
  [master 227eb5c] Cool python project started
  1 file changed, 1 insertion(+)
  create mode 100644 cool.py
  ```

- git add cool.py
- git status

  ```shell
  On branch master
  Changes to be committed:
    (use "git restore --staged <file>..." to unstage)
          new file:   cool.py
  ```

- git commit -m "Cool python project started"
- git status
- git status -s

## Git Log

git log

- log filter
  - --author -> filter by author
  - -2 -> last commit
- -p -> patch
- -S -> **pick-axe** - Search
- git log `-S<word>` -p
  - `/<word>` - highlight search
  - `<space>` - page down
  - `n` - next match
  - `N` - prev match

# Git merge

- Merge commit
- Fast forward
