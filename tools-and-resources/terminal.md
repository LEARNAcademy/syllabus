# Introduction to Terminal

## Basics
**What is terminal?**  
Terminal is a platform to give text-based commands to your computer. Lots of the daily interaction we have with our computers is done through the graphical user interface (GUI) such as viewing windows, clicking on icons and buttons, or using drag and drop. The development of GUIs is what made computers usable for the general population and launched the popularity of the personal computer. However, using the command line interface (CLI) gives programmers a whole other level of interaction with our computers. By giving commands directly to the computer, we have more control over our programs and gain access to built in functionality. There are certain aspects of coding that cannot be properly executed through the GUI such as `git` commands and version managers. Plus, it looks super cool and hackery. It is sure to impress your parents!

## Accessing Terminal
Terminal can be accessed by opening **Finder** >> **Applications** >> **Utilities** >> **Terminal**. Or find Terminal using a handy shortcut. Additionally, pressing the keyboard buttons, `command` and `spacebar` at the same time, will open Spotlight Search where you can search for Terminal. We will use Terminal a lot so saving it to your dock is recommended if it isn't already there.


## Terminal Commands
```
pwd         Present Working Directory, shows what directory you are currently in
ls          List, tells you all the files available in your current directory
cd          Change Directory, follow this command with a name of a directory one level deeper ( Example: cd Desktop )
cd ..       Move one level up from where you are currently.
mkdir       Make directory, follow this command with a name to create a new directory ( Example: mkdir my_project)
rmdir       Remove directory, follow with a name to remove a directory ( Example: rmdir my_project )
touch       Follow with a name to create a file ( Example: touch index.html )
open        Follow with the full file name to open ( Example: open index.html )
open .      Opens the directory as if you double clicked on a folder
atom .      Opens all the files in the current directory using Atom editor
atom        Follow this command with the full file name to open Atom to directly edit the file ( Example: atom index.html )
code .      Opens all the files in the current directory using Visual Studio Code editor
code        Follow this command with the full file name to open VSCode to directly edit the file.( Example: code index.html )
;           Allows multiple commands in sequence ( Example: mkdir test_folder; touch index.html )
history     See all commands used
clear       Clear the Terminal screen
```

## Tips and Shortcuts
`command` and `t`             Opens a new tab in terminal  
`command` and `k`             Clears the terminal  
`command` and `d`             Split pane  
`tab`                         Will autocomplete the directory or file name  
`command` and `+` or `-`      Will increase or decrease the font size  
`up arrow`                    Prints the last command entered, use the up/down arrows to scroll through commands history  


## Extras
There are programs that help add a bit of flare and functionality to your terminal. One we like at LEARN is a shell called ZSH (Z shell). Find out more <a href="https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH" target="_blank">here.</a>


## Working in Terminal

- Open the Terminal.
- Show what directory you are in.
- List out all directories available.
- Navigate to the desktop directory.
- Create a new directory and navigate into the newly created directory.
- Open the directory in a text editor.
- Go back to the desktop directory.
- Show past commands used.
- Clear the Terminal.
- Repeat a previous command without typing it.
- Increase the Terminal text size.

## Stretch Challenges
- Change the look of your Terminal
- Drag and Drop for a directories path
- Move cursor to beginning of text


[ Back to Syllabus ](../README.md#programming-tools)
