# 💰 React Treasure Hunt Game

#### Overview

Treasure Hunt is the first project that students create at LEARN. During Jumpstart, treasure hunt is done with HTML, CSS, and JavaScript. While this is a perfectly acceptable tech stack, using React allows for more advanced and dynamic code structures.

As a developer, you are tasked with creating a treasure hunt game. The user will see a game board on the page and be able to select various squares on the board. Hidden behind one square is a treasure that will win the game and hidden behind another square is a bomb that will lose the game. All other squares will reveal a neutral image. The user will be given a particular number of clicks to find the treasure that will win the game.

#### Learning Objectives

- can create a logic component to handle the game play
- can pass data and behavior from a container component to a nested component with props
- can break down a complex problem to create a desired outcome

#### Additional Resources

- [Render](https://render.com/docs/deploy-create-react-app)

#### Process

- One person on the team accepts the group assignment from GitHub classroom
- Create a team name (team name can be whatever you would like as long as it is work-appropriate)
- Clone the newly created repository
- `cd` into the repository
- Run $ `yarn` to install the React dependencies
- Create a new branch following the naming instructions described below
- Open the repository in a text editor
- Code!

#### Useful Commands

- $ `yarn start`
- control + c (stops the server)
- command + t (opens a new terminal tab)

#### Troubleshooting Tips

- Did you run $ `yarn` in the new repository?
- Is your server running?
- Are your components exported?
- Inspect the page and look for errors in the console tab.
- Always look at the first error message in the list.

---

### 💰 React Treasure Hunt Challenge

As a developer, you are tasked with creating a treasure hunt game. The user will see a game board on the page and be able to select various squares on the board. Hidden behind one square is a treasure that will win the game, and hidden behind another square is a bomb that will lose the game. All other squares will reveal a neutral image. The user will be given a particular number of clicks to find the treasure that will win the game.

### 📚 User Stories

**Story 1**: In order to play the treasure hunt game, as the user of the application, I should see a three-by-three board game with a question mark in each square that can be clicked.

**Branch**: game-structure

**Acceptance Criteria**

- Can see a page with a three-by-three grid board game
- Can see a question mark in each square
- Can click on any of the question marks and see an alert with the index position of that question mark in the array
- Can click on any of the question marks and a tree emoji appears instead of the alert

**Story 2**: In order to play the treasure hunt game, as the user of the application, I should be able to see a winning square and a losing square.

**Branch**: win-lose

**Acceptance Criteria**

- Can select the random winning square and the question mark will become a treasure emoji
- Can select the random losing square and the question mark will become a bomb emoji

**Story 3**: In order to play the treasure hunt game, as the user of the application, I should be able to restart the game at any time.

**Branch**: restart

- Can see a button called “Play Again”
- Can click on the “Play Again” button to reset the board game

**Story 4**: In order to play the treasure hunt game, as the user of the application, I should see a counter that starts at five and decrements by one every time I click on a square that is neither the treasure nor the bomb.

**Branch**: counter

**Acceptance Criteria**

- Can see a counter that starts at five
- Can see the counter decrement by one for each guess

**Story 5**: In order to play the treasure hunt game, as the user of the application, I should be notified when I win the game or when I lose the game and not be able to keep playing.

**Branch**: end-of-game

- Can see a message stating that I won the game after selecting the square that contains the treasure
- Can see a message stating that I won the game after selecting the square that contains the bomb
- Can see a message stating that I won the game after the counter reaches zero
- Cannot continue the game play once the game has been won or lost

### 🏔 Stretch Challenges

- Consider how to handle a situation where the bomb and the treasure are at the same index.

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).
