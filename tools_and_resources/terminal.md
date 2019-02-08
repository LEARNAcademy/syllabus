# Terminal Info and Shortcuts

## Basics
What is terminal? <br />
Terminal is a platform to give text-based commands to your computer. Lots of the daily interaction we have with our computers is done through the graphical user interface (GUI) such as viewing windows, clicking on icons and buttons, or using drag and drop. The development of GUIs is what made computers usable for the general population and launched the popularity of the personal computer. However, using the command line interface (CLI) gives programmers a whole other level of interaction with our computers. By giving commands directly to the computer, we have more control over our programs and gain access to built in functionality. There are certain aspects of coding that cannot be properly executed through the GUI such as git commands and version managers. Plus, it looks super cool and hackery. It is sure to impress your parents!

## Accessing Terminal
Terminal can be accessed by opening finder >> applications >> utilities >> terminal. Or find terminal using a handy shortcut. Typing `command spacebar` will open Spotlight Search where you can search for terminal. We will use terminal a lot so saving it to your doc is recommended.


## Terminal Commands
```
pwd         present working directory, shows what directory you are in
ls          list, tells you all the files available in this directory
cd          change directory, follow this command with a name of a directory one level deeper
cd ..       follow this command with the name of a directory one level out
mkdir       make directory, follow this command with a name to create a new directory
rmdir       remove directory, follow with a name to remove a directory
touch       follow with a name to create a file
open        follow with the full file name to open
open .      opens the directory as if you double clicked on a folder
atom .      opens all the files in the current directory using atom
;           allows multiple commands in sequence
history     see all commands used
clear       clear the terminal
```

## Tips and Shortcuts
`command t` opens a new tab in terminal <br />
`command d` split pane <br />
`tab` will autocomplete the directory or file name <br />
`command +/-` will increase or decrease the font size <br />
`up arrow` prints the last command entered, use the up/down arrows to scroll through commands history <br />

## nodeJS
NodeJS is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node must be installed on our machines. NodeJS allows us to run JS files through terminal. Super handy! After Node is installed you can cd into the folder of your JS file and run `node filename.js` which will run your JS file will render any console.log() in your terminal. To install nodeJS use a package manager system such as Homebrew (for Mac).

## Extras
There are programs that help add a bit of flare and functionality to your terminal. One we like at Learn is a shell called ZSH (Z shell). Find out more <a href="https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH" target="_blank">here.</a>
