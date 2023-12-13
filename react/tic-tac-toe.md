# ❌ ⭕️ Tic Tac Toe

#### Overview

Tic Tac Toe is a classic children's game involving two players alternatively marking squares on a three-by-three grid. While the game is be considered relatively simple for humans, creating the logic in code is considerably more challenging.

#### Learning Objectives

- can create a logic component to handle the gameplay
- can pass data and behavior from a parent component to a nested component with props
- can effectively work within a team to achieve a desired outcome

#### Additional Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
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

- Is your server running?
- Are your components exported?
- Inspect the page and look for errors in the console tab.
- Always look at the first error message in the list.

---

### Tic Tac Toe

This is a web game for two players who are taking turns on one device. You will have to use the component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React as well as be an exercise in creating good user experiences.

When creating a project, it is important to think about the organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. `App.js` controls all of the data in state, renders the other components, and performs the game logic.

### Win Condition

The win condition is one of the most challenging aspects of coding Tic Tac Toe. Take some time with your team to discuss the different possibilities. Defining the logic by writing it out in regular English words can be helpful.

There is an interesting approach to the [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840) here. However, this code should NOT be used as is. It must be refactored. The tools used in this example are not current best practices in React. It is provided here as inspiration.

---

### 📚 User Stories

**Story 1**: In order to play tic tac toe, as the user of the application, I should see a three-by-three grid board game with squares that can be clicked alternatively by two players: player X and player O. Once a square is marked it cannot be marked again.

**Branch**: game-structure

**Acceptance Criteria**

- Can see a three-by-three grid game board
- Player one can click on a square to mark it with an X
- Player two can click on a square to mark it with an O
- Players cannot click on a square that has already been marked

**Story 2**: In order to play tic tac toe, as the user of the application, I should be able to win the game by marking three squares with the same mark in a horizontal, vertical, or diagonal row. I can restart the game at any time.

**Branch**: win-lose

**Acceptance Criteria**

- Can see a notice displaying which player won
- Game play cannot continue after the game has been won
- Can click on a restart button that will clear the game board

**Story 3**: In order to play tic tac toe, as the user of the application, I should not be able to continue playing the game if all the squares are marked. If neither player wins and all the squares are marked, I should see a notification for a "cats game."

**Branch**: cats-game

**Acceptance Criteria**

- Game play cannot continue after all squares have been marked
- Can see a notice displaying that this is a "cats game"

### 🏔 Stretch Goals

- As a user, I can see pleasant stylings on the application.
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well-commented application.
- As a developer, I have a well-written README file with instructions on accessing my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).

### 🎙 Project Demos

Each team will give a brief (three minute) presentation of their application. Presenting your project will allow you to practice communication and coding vocabulary. Presentations are not a judgement of your work or ability as each team will have different weaknesses and strengths. Presentations allow other members of the cohort to appreciate a different approach to solving a complex problem.

- Full team: show off your application's user interface (UI)
- First team member: What was the biggest learning moment for your team?
- Second team member: What was the most challenging thing about this project?
- Third team member (if applicable): How did you manage the workflow in a group of three?
