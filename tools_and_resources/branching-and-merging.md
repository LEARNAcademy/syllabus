# Logistics of Pairing via Branches

## Branching

### What is a branch?
Branches serve as an abstraction for the edit/stage/commit process. You can think of them as a way to request a brand new working directory, staging area, and project history. New commits are recorded in the history for the current branch.

We are now going to create a new version of the project, a branch, to play around with and make changes in locally on our computer — while the original version of the project, the master, remains safely unmolested up there on GitHub. We give the new branch a descriptive name to remind us what we intend to do while working in it. In this case, it’s going to be a simple “Hello World” thingy, so let’s call it hello_octo.

### Creating a new branch
To create this new branch, type `git checkout -b branchNameHere`

Make changes and add, commit, push to the new branch

### Switching drivers
`git fetch origin`

`git checkout branch-name`

`git pull origin branch-name`

`git push origin branch-name`
