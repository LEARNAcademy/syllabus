# Git and GitHub Configurations

#### Overview

Git is a very powerful tool used for project version control. GitHub uses the git technology to allow developers to collaborate on coding projects. In order to access git and GitHub from your computer there are some setup configurations required.

#### Previous Lecture (43 min)

[![YouTube](http://img.youtube.com/vi/P2n03yVbz0w/0.jpg)](https://www.youtube.com/watch?v=P2n03yVbz0w)

#### Vocabulary

- Personal Access Tokens (PAT)

#### Additional Resources

- [Updating GitHub Credentials](https://docs.github.com/en/github/getting-started-with-github/updating-credentials-from-the-macos-keychain)
- [Token Authentication Requirements](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/)
- [Setting your Username in GitHub](https://docs.github.com/en/github/getting-started-with-github/setting-your-username-in-git)
- [Setting Your Commit Email Address](https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address)
- [Creating a GitHub Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)

---

### Git Configurations

The following instructions must be completed in order to connect a Mac computer to your personal GitHub account. These instructions only need to be completed one time when initially configuring your development environment on a new Mac computer.

GitHub uses a Personal Access Token (PAT) in order to protect individual GitHub accounts. **Personal Access Tokens** are an alternative to using passwords for authentication to GitHub. The process outlined below will create a token and login into your GitHub account via the terminal command line.

1. Verify git version using the terminal command: $ `git --version`

   - Version 2.31.1 or later is required for using Personal Access Tokens for GitHub Authentication.

2. Configure global git username in terminal.

   - This is what will be displayed on your code contributions.
   - $ `git config --global user.name "Your Name Here"`

3. Configure global git email address in terminal.

   - $ `git config --global user.email "your-email@example.com"`

4. Configure the credential helper.

   - Because git was installed on your computer using Homebrew the OSX Keychain helper should already be installed and can be accessed with the following command.
   - $ `git config --global credential.helper osxkeychain`

5. Verify all git configurations are correct.

   - $ `git config -l`
   - You should see a list of items similar the following:

   ```
   credential.helper=osxkeychain
   user.name=Mona Lisa
   user.email=email@example.com
   ```

6. Create a Personal Access Token (PAT).

   - **This token needs to be treated like a password. Do not share it with anyone and do not save it in any place where it may be publicly accessible.**
   - In the upper right corner of any GitHub browser page, click your profile photo, then click **Settings**
   - In the left sidebar, click **Developer settings**
   - In the left sidebar, click **Personal access tokens**
   - Click the button at the top labeled **Generate new token**
   - In the **Note** text box, give your token a name, something generic, yet descriptive such as `LEARN GitHub`
   - Change the expiration date to at least six months in the future
   - Select the following scopes:
     - `repo`
     - `workflow`
     - `admin:org`
     - `notifications`
     - `user`
   - Click Generate token
     - **DO NOT NAVIGATE AWAY FROM PAGE UNTIL YOU HAVE COPIED THE TOKEN AND PASTED IT SOMEWHERE IN A SAFE PLACE**
   - Paste the token in a note file for temporary storage

7. Make a new repository in your personal GitHub account.

   - Go to `Your repositories` located on the dropdown menu under your GitHub icon
   - Select the `New` button
   - Create a unique-repository-name
   - Since we are not importing an existing repository, check the box by `Add a README file`
   - Select the `Create repository` button
   - Select the dropdown menu on the `Code` button
   - Copy the repository url
   - Clone existing repository using HTTPS
   - $ `git clone <https for repository>`
   - $ `cd <repository-name>`

8. Make a change in the repository and push the code.
   - $ `cd` into the repository
   - Open the directory in your text editor: $ `code .`
   - Make changes on the README.md file
   - $ `git status`
   - $ `git add <file-name>`
   - $ `git commit -m "meaningful message here"`
   - $ `git push origin <branch-name>`
9. When prompted for your username, enter your GitHub handle.
10. When prompted for your password, enter your **token**.

---

[Back to Syllabus](../README.md#github)
