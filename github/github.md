# Git and GitHub Introduction and Configurations

[Presentation](https://github.com/LEARNAcademy/git-intro/blob/master/GitAndGithub.pdf)

### Git Introduction

Git is a free, open-sourced version control system widely used in the programming world. It is a very powerful tool used for sharing and working on code and allows for many people to contribute to the same code base. Git was created in 2005 by Linus Torvalds, the creator of Linux, to track changes in source code. Git is accessed primarily through the command line.

History of the name git according to Linus is quite funny. 'Git' is British slang for pig headed or argumentative. This will feel very appropriate at moments when interacting with git. Torvolds says, while 'git' was a random three-letter combination that is pronounceable, and not actually used by any common UNIX command, it can change meaning, depending on your mood:  

Global Information Tracker: if you're in a good mood, and it actually works for you. Angels sing and light suddenly fills the room  
Goddamn Idiotic Truckload of sh*t: when it breaks

### Git Configurations

Instructions for Mac OSX (initial configuration required for interacting with GitHub over HTTPS via command line):
- Install Git: `$ brew install git`
- Verify Git version using: `$ git --version`
  - Version 2.31.1 is required for using Personal Access Tokens for GitHub Authentication
  - For more information about GitHub's Authentication migration from password credentials to tokens, visit [Token Authentication Requirements](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/)
  - If Git version is older than 2.31.1, update Git using: `$ brew upgrade git`
- Once we have an appropriate Git version, we can configure Git username (**which is not the same as GitHub username**), in Terminal:
  - Configure Git global username which is used to display your name on **all** repos using: `$ git config --global user.name "Mona Lisa"`
  - For more info: [Setting your username in Git](https://docs.github.com/en/github/getting-started-with-github/setting-your-username-in-git)
- Configure global commit email address, (GitHub uses this email address to display the author of the commit)
  - Set up and verify your commit email address on GitHub by following these steps: [Setting Your Commit Email Address](https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address)
  - Configure Git email address using: `$ git config --global user.email "email@example.com"`
- Because Git was installed using Homebrew, the OSX Keychain helper should already be installed
  - Configure the credential helper using: `$ git config --global credential.helper osxkeychain`
- Verify all recent Git configurations are correct:
  - Using `$ git config -l`, you should see a list of items  similar the following:
  ```
  credential.helper=osxkeychain
  user.name=Mona Lisa
  user.email=email@example.com
  ```
- Create a Personal Access Token (PAT)
  - **This token needs to be treated like a password (do not share it with anyone and do not save it in any place where it may be publicly accessible).**
  - Please read through steps before performing the steps for creating a PAT here and reference the following suggestions: [Creating a GitHub Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
  - For Step 6: You can name this whatever you like, something generic like `LEARN GitHub` would suffice
  - For Step 7: Select the following scopes: `repo`, `admin:org`, `notifications`, `user`
  - For Step 9:
    - **DO NOT NAVIGATE AWAY FROM PAGE UNTIL YOU HAVE COPIED THE TOKEN AND PASTED IT SOMEWHERE IN A SAFE PLACE**
    - If you have a password manager, there may be a place to store your token there.
    - If you do not have a password or token manager, paste the token in a txt file and once it is stored in Keychain Access, the file may be deleted.
- Ways to prompt GitHub Authentication:
  - Clone an existing repo using HTTPS
  - If cloning doesn't prompt authentication (because you've likely used password authentication before), attempting to push a commit to an existing repo should prompt authentication. However if that doesn't work, you'll need to remove the credentials cached in Keychain Access. Visit [Updating Credentials](https://docs.github.com/en/github/getting-started-with-github/updating-credentials-from-the-macos-keychain) for more info.
- When authentication is prompted:
  - Use your token like a password
  ```
  $ git clone https://github.com/username/repo.git
  Username: your_username
  Password: your_token
  ```
  - Verify that the token was stored in Keychain so that you aren't constantly prompted with authentication
- Follow only Steps 1 through 3 on this page: [Updating Credentials](https://docs.github.com/en/github/getting-started-with-github/updating-credentials-from-the-macos-keychain)

[Instructions for windows machines](https://git-scm.com/download/win)

---
[Back to Syllabus](../README.md#github)
