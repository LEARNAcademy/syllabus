# Git and GitHub Introduction and Configurations

[Presentation](https://github.com/LEARNAcademy/git-intro/blob/master/GitAndGithub.pdf)

### Git Introduction

Git is a free, open-sourced version control system widely used in the programming world. It is a very powerful tool used for sharing and working on code and allows for many people to contribute to the same code base. Git was created in 2005 by Linus Torvalds, the creator of Linux, to track changes in source code. Git is accessed primarily through the command line.

History of the name git according to Linus is quite funny. 'Git' is British slang for pig headed or argumentative. This will feel very appropriate at moments when interacting with git. Torvolds says, while 'git' was a random three-letter combination that is pronounceable, and not actually used by any common UNIX command, it can change meaning, depending on your mood:  

Global Information Tracker: if you're in a good mood, and it actually works for you. Angels sing and light suddenly fills the room  
Goddamn Idiotic Truckload of sh*t: when it breaks.

### Git Configurations

Instructions for Mac OSX
- **Step 1**: Verify git version using: $ `git --version`
  - Version 2.31.1 is required for using Personal Access Tokens for GitHub Authentication
  - For more information about GitHub's Authentication migration from password credentials to tokens, visit: [Token Authentication Requirements](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/)
- **Step 2**: Configure git username in terminal
  - Configure global username which is used to display your name on **all** repos
  - $ `git config --global user.name "Your Name Here"`
  - For more info, visit: [Setting your Username in GitHub](https://docs.github.com/en/github/getting-started-with-github/setting-your-username-in-git)
- **Step 3**: Configure git email in terminal
  - Configure global commit email address
  - $ `git config --global user.email "youremail@example.com"`
  - For more info, visit: [Setting Your Commit Email Address](https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address)
- **Step 4**: Configure the credential helper
  - $ `git config --global credential.helper osxkeychain`
  - Because git was installed using Homebrew the OSX Keychain helper should already be installed
- **Step 5**: Verify all git configurations are correct
  - $ `git config -l`
  - You should see a list of items similar the following:
  ```
  credential.helper=osxkeychain
  user.name=Mona Lisa
  user.email=email@example.com
  ```
- **Step 6**: Create a Personal Access Token (PAT)
  - **This token needs to be treated like a password. Do not share it with anyone and do not save it in any place where it may be publicly accessible.**
  - For more info, visit: [Creating a GitHub Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
  - In the upper-right corner of any GitHub browser page, click your profile photo, then click **Settings**
  - In the left sidebar, click **Developer settings**
  - In the left sidebar, click **Personal access tokens**
  - Click the button at the top labeled **Generate new token**
  - In the **Note** text box, give your token a name, something generic, yet descriptive such as `LEARN GitHub`
  - Change the expiration date to at least six months in the future
  - Select the following scopes:
    - `repo`
    - `admin:org`
    - `notifications`
    - `user`
  - Click Generate token
    - **DO NOT NAVIGATE AWAY FROM PAGE UNTIL YOU HAVE COPIED THE TOKEN AND PASTED IT SOMEWHERE IN A SAFE PLACE**
    - Paste the token in a note file for temporary storage
- **Step 7**: Prompt GitHub authentication in the terminal

  - Make a new repo in your personal GitHub
    - Go to `Your repositories` located on the dropdown menu under your GitHub icon
    - Select the `New` button
    - Create a unique-repository-name
    - Since we are not importing an existing repo, check the box by `Add a README file`
    - Select the `Create repository` button
    - Select the dropdown menu on the `Code` button
    - Copy the https url

  - Clone existing repo using HTTPS
    - $ `git clone <https for repo>`
    - $ `cd <repo-name>`

  - NOTE: While working in the terminal, it is important to know where you are storing/modifying information. Here are some informational terminal commands
    - To see the branch you are currently using: $ `git branch`
    - To see the directory you are currently using: $ `pwd`
    - To see what files are located in the current directory/repo: $ `ls`
    
  - Make a change in the repository and push a change
    - Create files
      - $ `touch <file-name.extension>`
    - Open text editor (the following is an example of vs code)
      - $ `code .`
      - Make changes on the appropriate files
    - $ `git status`
    - $ `git add <file-name>`
    - $ `git commit -m "meaningful message here"`
    - $ `git push origin <branch-name>`

  - When prompted for your username, enter your GitHub handle
  - When prompted for your password, enter your **token**
  - For more info, visit: [Updating Credentials](https://docs.github.com/en/github/getting-started-with-github/updating-credentials-from-the-macos-keychain)

---
[Back to Syllabus](../README.md#github)
