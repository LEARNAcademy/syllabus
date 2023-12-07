# Terminal

#### Overview

Terminal is a Mac application that allows developers to communicate directly with the Mac operating system. The terminal gives developers quick access to all the files and directories on the computer as well as commands to run processes and troubleshoot issues.

#### Learning Objectives

- can access the terminal application on Mac
- can use terminal commands to navigate into directories on Mac 
- can use terminal commands to show the current directory on Mac
- can use terminal commands to show the content of the current directory on Mac
- can use terminal commands to open the current directory in a text editor on Mac

#### Vocabulary

- terminal
- graphical user interface (GUI)
- command line interface (CLI)
- root directory

#### Additional Resources

- [Mac Terminal User Guide](https://support.apple.com/guide/terminal/welcome/mac)
- [Oh My ZSH](https://ohmyz.sh/)
- [Customizing Terminal](https://medium.com/@charlesdobson/how-to-customize-your-macos-terminal-7cce5823006e)

---

### Terminal

The **terminal** is a Mac-specific application that allows developers to make text-based commands to the Mac operating system. Much of our daily interaction with our computers is done through the **graphical user interface** (GUI) such as viewing windows, clicking on icons and buttons, or using drag and drop. The development of GUIs is what made computers usable for the general population and launched the popularity of the personal computer. However, the terminal offers a **command line interface (CLI)** which allows developers to give commands directly to the computer. This provides more control over the programs and additional access to built-in functionality. Certain aspects of coding cannot be properly executed through the GUI, such as `git` commands and version managers. Plus, it looks super cool and hackery. It is sure to impress your friends and family!

Using the terminal can be empowering, but proceed carefully! Always ensure you understand what a command does before executing it.

### Accessing Terminal

The terminal application is saved in the doc of your Mac. Additionally, the terminal can be accessed through the Mac spotlight search. Access spotlight search with the keys `command` + `spacebar` and type `terminal`.

### Navigating in Terminal

Everything on a computer such as files, directories, and applications, is organized like a tree. Each level offers additional branches to navigate. The base of the tree is the root directory. The **root directory** is the starting point from which all other directories and files stem.

When the terminal app is initially opened, it will start at the root directory. From there you can change directories into move about your computer.

### Principle Terminal Commands

- `pwd` - present working directory; displays the full path to the directory you are currently in
- `ls` - list; displays the content of the current directory
- `cd` - change directory; append this command with the name of a directory to where you want to go (example: `cd Desktop`)
- `cd ..` - change directory; move one direction toward the root (one level back)
- `touch` - append this command with the name of a file you wish to create (example: `touch index.html`)
- `code .` - opens all the files in the current directory in Visual Studio Code

### Additional Terminal Commands

- `mkdir` - make directory; append this command with the name of a new directory you wish to create (example: `mkdir project-folder`)
- `rmdir` - remove directory; append this command with the name of the directory you wish to delete (example: `rmdir project-folder`)
- `open` - append the command with a file name to open just one file (example: `open index.html`)
- `open .` - opens all the content of the present directory
- `;` - allows multiple commands in sequence (example: `mkdir project-folder; touch index.html`)
- `history` - displays a list of all recently used commands
- `clear` - clears the terminal screen

### Tips and Shortcuts

- `tab` - autocomplete the directory or file name
- `command` + `+` or `-` - increase or decrease the font size  
- `command` + `t` - opens a new tab in the terminal  
- `command` + `k` - clears the terminal
- `command` + `d` - split the pane to view two terminal windows 
- `up arrow` or `down arrow` - prints the last command entered; use the up/down arrows to scroll through your command history  
- `option` + `right arrow` - navigates right by each full string of text on the command line       
- `option` + `left arrow` - navigates left by each full string of text on the command line       
- `control` + `u` - clears the current command line

### Oh My ZSH

There are software programs that can added to your terminal that will add a bit of flare and functionality to your terminal. One we like at LEARN is called Oh My ZSH. To install Oh My ZSH follow the instructions on [their website](https://ohmyz.sh/#install). 

### Customizing Terminal

Terminal's default colors and fonts can be modified as well. Select `Terminal` > `Settings` > `+ Add Profile` and customize!

---

### 💻 Challenges

- Open the terminal application
- Quit the terminal application and reopen
- Find out what directory you are in
- List out all directories available
- Navigate to the desktop directory
- Create a new directory called `first-directory` and navigate into the newly created directory
- Open the `first-directory` directory in a text editor
- Go back to the desktop directory
- Show all the past commands you have used
- Clear the terminal window
- Repeat a previous command without retyping it
- Increase the terminal text size
- Use tab to autocomplete a directory name

### 🏔 Stretch Goals

- Change the color and fonts in your terminal
- Move the cursor to the beginning of the text

---

[Back to Syllabus](../README.md#programming-tools)
