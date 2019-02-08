# Github Resources

Git is a free, open-sourced version control system widely used in the programming world. It is a very powerful tool used for sharing and working on code and allows for many people to contribute to the same code base. Git was created in 2005 by Linus Torvalds, the creator of Linux, to track changes in source code. Git is accessed primarily through the command line.

History of the name git according to Linus is quite funny. 'Git' is British slang for pig headed or argumentative. This will feel very appropriate at moments when interacting with git. Torvolds says, while 'git' was a random three-letter combination that is pronounceable, and not actually used by any common UNIX command, it can change meaning, depending on your mood: <br />

Global Information Tracker: if you're in a good mood, and it actually works for you. Angels sing and light suddenly fills the room <br />
Goddamn Idiotic Truckload of sh*t: when it breaks

## Setting up Git

Instructions for mac: <br />
https://www.atlassian.com/git/tutorials/install-git

Scroll down to the section `Install Git with Homebrew`

Instructions for windows: <br />
https://git-scm.com/download/win

## Git Workflow

### How to start a project in github
<b>Follow these steps if you have NO existing code and want to start a new project</b>
<ol>
    <li>Sign into github and click on + sign (upper right hand corner)</li>
    <li>Click on “New Repository” and name your repository</li>
    <li>Click on “initialize a README”</li>
    <li>Click “Create repository”</li>
    <li>Click green button “clone or download”</li>
    <li>Go to your terminal and cd onto the desktop</li>
    <li>Type `git clone` and paste the link that you copied from github</li>
    <li>Now you will have a folder on your desktop.  <b>cd into that folder</b></li>
    <li>Type `atom .`  You are now in an atom file that is connected to your terminal and your github repo!</li>
    <li>Create a new file in atom and save as filename.js</li>
    <li>Begin your project!</li>
</ol>

### How to save your existing code in github

<b>Follow these steps if you have code saved to your local drive and want to add that project to your github</b>
<ol>
    <li>Sign into github and click on `+` sign (upper right hand corner)</li>
    <li>Click on `New Repository` and name your repository. TIP: name your github repo the same name as your project folder, DO NOT click on “initialize a README”</li>
    <li>Click `Create Repository`</li>
    <li>Go to your terminal and cd into your project</li>
    <li>In terminal, type: <br /> `git init`<br />`git add .`<br />`git commit -m “initial commit”`<br /></li>
    <li>Follow second set of instruction on github repo page (it will looking something like this)...<br />
    `git remote add origin https://github.com/username/example.git` <br />
    `git push -u origin master`
</ol>

## As you work on your project
<b>Repeat these steps often!</b><br />
    In terminal:<br />
    `git add .`<br />
    `git commit -m "message about current work"`<br />
    `git push`
