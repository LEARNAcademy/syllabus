# Rules of React

Here are some rules to keep handy as you build Tic Tac Toe - following them will help you avoid lots of problems.

- Never update State directly, always use setState()
- Never alter the DOM directly, always operate on a value in state
- Only call setState once per method or render cycle
- State is for values that change, Props is for values to pass to a child component, constants should be set outside the component

# For cleaner React

Some guidelines for better looking React code:

- Instead of using this.state multiple times, destructure the state object to save values
- "export default" can be written when you create the component class, or at the end of the file. Whichever you choose, stay consistent!

This challenge is intended to let you practice maintaining state in a React application and
become more familiar with passing props and dealing with user interactions. This game will be for two
users, playing on one device, taking turns. You will have to use component state to keep track of
whose turn it is and which squares have been marked by each player. One hint is that you should not
directly manipulate the DOM to keep track of changes (in other words, no direct DOM manipulation like
getElementById("square").style = ...). React state and props should do all the heavy lifting.

On another note - this project will challenge your knowledge of React but should also be an exercise
in creating good user experiences. Your view should be styled to look good as well as function
flawlessly.

Here are the user stories to guide your progress:

- As a user, I should start off seeing a 3x3 grid on the main page

![tic-tac-toe board](https://s3.amazonaws.com/learn-site/curriculum/tic-tac-toe-board.png)

- As a user, I should be able to click on a square to mark it. My partner should be able to
click on a square after me and see their mark.

- As a user, when someone has won the game (3 squares in a row: horizontally, vertically, or diagonally)
or there are no more squares, an alert will tell me who has won or that there are no more squares
and the game has ended.

![winner](https://s3.amazonaws.com/learn-site/curriculum/tic-tac-toe-winner.png)



## Extra Challenges
- Use flexbox to set up your grid
- Allow users to choose their mark (X, O, a color, an emoji, etc...)
- Create a component for alerts and push the win/lose messages there instead of using an alert

[On to Ruby!](../ruby/01rb_intro.md)

[Back to Practice with Dice Roller](./08dice_roller.md)

[Back to Syllabus](../README.md)
