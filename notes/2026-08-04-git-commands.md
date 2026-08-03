# Git Commands Cheatsheet

## Daily Commands

```bash
# Check status
git status

# Add changes
git add .                    # Add all
git add filename             # Add specific file
git add -p                   # Add patches (interactive)

# Commit
git commit -m "message"
git commit -am "message"     # Add + commit tracked files

# Push
git push
git push -u origin main
```

## Branching

```bash
# Create and switch
git checkout -b new-branch
git switch -c new-branch

# Switch branches
git checkout branch-name
git switch branch-name

# List branches
git branch
git branch -a

# Delete branch
git branch -d branch-name
```

## Viewing History

```bash
git log
git log --oneline
git log --graph --oneline --all
git diff
git diff --staged
```

## Undo Things

```bash
# Undo unstaged changes
git checkout -- filename
git restore filename

# Undo staged changes
git restore --staged filename

# Amend last commit
git commit --amend

# Revert a commit
git revert commit-hash

# Reset (be careful!)
git reset --soft HEAD~1
git reset --hard HEAD~1
```

## Stashing

```bash
git stash
git stash pop
git stash list
git stash drop
```

## Useful Shortcuts

```bash
git status -s              # Short status
git log -3                 # Last 3 commits
git diff HEAD~1            # Compare with previous
```
