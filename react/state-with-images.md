# React State with Images

#### Overview

Developers can add images their React applications to create more engaging user experiences. Images in a React app can be referenced from an image that exists on the internet via a URL. However, that can be risky as the developer has no control over the reliability of the image. Instead, developers often add images to the file structure of a React application and import the image to a component where it is rendered to the browser in an image JSX tag.

#### Learning Objectives

- can create an assets directory in a React application
- can import an image to a React Component
- can reference an imported image in an `img` JSX tag

#### Vocabulary

- assets directory

#### Process

- `cd` into the `react-challenges` repository
- Create a new branch: `images-initials1-initials2` (ex. images-aw-sp)
- Create a new React application with no spaces: `yarn create react-app images-student1-student2` (ex. yarn create react-app images-austin-sarah)
- `cd` into the project
- Open the project in a text editor
- Create a directory in _src_ called _components_
- Code!

#### Useful Commands

- $ yarn start
- control + c (stops the server)
- command + t (opens a new terminal tab)

#### Troubleshooting Tips

- Is your server running?
- Are your components exported?
- Inspect the page and look for errors in the console tab.
- Always look at the first error message in the list.

---

### React State with Images

Storing images in a React application gives us more control over the functionality of the application. To keep the images organized, it is convention to store all the images in a directory called the **assets directory**. The _assets_ directory lives inside the _src_ directory at the same level as _App.js_.

### Flashcard Application

Here is an example that uses images to display randomized flashcards. We will start in _App.js_ with a heading tag.

```javascript
import React from "react"

const App = () => {
  return (
    <>
      <h1>Multiplication Flash Cards</h1>
    </>
  )
}
export default App
```

### Adding Images

Next we will add the images to the application. To keep our application organized, it is convention to create a new directory in the _src_ directory called _assets_. The _assets_ directory will hold all the images for our flashcards. Next we will import the images to _App.js_. Once the images are imported, they can be stored in an array.

```javascript
import React from "react"
import flashcard1 from "./assets/flashcard1.png"
import flashcard2 from "./assets/flashcard2.png"
import flashcard3 from "./assets/flashcard3.png"
import flashcard4 from "./assets/flashcard4.png"
import flashcard5 from "./assets/flashcard5.png"

const App = () => {
  const flashcards = [
    flashcard1,
    flashcard2,
    flashcard3,
    flashcard4,
    flashcard5
  ]

  return (
    <>
      <h1>Multiplication Flash Cards</h1>
    </>
  )
}

export default App
```

### Adding State Values

Now that the images are imported to _App.js_ we can create the logic of the application. First, we will add a state variable that will hold the flashcard actively being displayed to the user as well as the method that will update the flashcard as the user selects the next option. This will be achieved with the `useState` React hook. The state variable can be named `currentCard`. It is convention to use the same name but add the prefix `set` to the updater method. We can set the first flashcard image as the initial value of `currentCard`. To see the card displayed in the browser the `currentCard` value is passed to the `src` attribute of an `img` tag in JSX.

```javascript
import React, { useState } from "react"
import flashcard1 from "./assets/flashcard1.png"
import flashcard2 from "./assets/flashcard2.png"
import flashcard3 from "./assets/flashcard3.png"
import flashcard4 from "./assets/flashcard4.png"
import flashcard5 from "./assets/flashcard5.png"

const App = () => {
  const flashcards = [
    flashcard1,
    flashcard2,
    flashcard3,
    flashcard4,
    flashcard5
  ]

  const [currentCard, setCurrentCard] = useState(flashcard1)

  return (
    <>
      <h1>Multiplication Flash Cards</h1>
      <img src={currentCard} alt="flashcard" />
    </>
  )
}

export default App
```

### Updating State Values

The next step is creating the logic that will allow the user to click through different flashcards. We will create a method that will pull a random image from the array. This method can be name `handleCardSelection` to communicate its intent. The method will hold the code that creates a random number and uses that random number to select a flashcard from the array of images. The `handleCardSelection` method is now ready to be called. We can add a button in JSX with an `onClick` attribute that will trigger the `handleCardSelection` method.

```javascript
import React, { useState } from "react"
import flashcard1 from "./assets/flashcard1.png"
import flashcard2 from "./assets/flashcard2.png"
import flashcard3 from "./assets/flashcard3.png"
import flashcard4 from "./assets/flashcard4.png"
import flashcard5 from "./assets/flashcard5.png"

const App = () => {
  const flashcards = [
    flashcard1,
    flashcard2,
    flashcard3,
    flashcard4,
    flashcard5
  ]

  const [currentCard, setCurrentCard] = useState(flashcard1)

  const handleCardSelection = () => {
    const randomCard = Math.floor(Math.random() * flashcards.length)
    setCurrentCard(flashcards[randomCard])
  }
  return (
    <>
      <h1>Multiplication Flash Cards</h1>
      <img src={currentCard} alt="flashcard" />
      <br />
      <button onClick={handleCardSelection}>New Card</button>
    </>
  )
}

export default App
```

---

### 💡 Challenge: Light Bulb

As a developer, you are tasked with creating a light switch application. The application will display an image of a lightbulb and corresponding switch. When the user clicks the switch the images will toggle between a light switch and bulb that are "off" and a light switch and bulb that are "on".

### 📚 User Stories

- As a user, I can see a square box on the screen with a black border and a white background.
- As a user, I can see the word "off" inside the box.
- As a user, every time I click on the box, the word toggles between the word "off" and the word "on."
- As a user, when I see the word "off", the background color of the box is white.
- As a user, when I see the word "on", the background color of the box is yellow.
- As a user, I can see many boxes on the page that are acting independently of one another.
- As a user, I can see a picture of a light switch in the "off" position instead of seeing a box.
- As a user, when I click on the light switch, I can see a picture of a light switch in the "on" position.
- As a user, when the light switch is "off", I see a white light bulb.
- As a user, when the light switch is "on", I see a yellow light bulb.

### 🏔 Stretch Goals

- As a user, I can start with no light bulbs or switches on the screen.
- As a user, I can see a button to add a light bulb and corresponding switch.
- As a user, I can see a button to remove a light bulb and corresponding switch.
- As a user, every time I click the add button, I can add an additional light bulb and corresponding switch that acts independently of the other light bulbs and corresponding switches.
- As a user, every time I click the remove button, I can remove the last light bulb and corresponding switch in the series.

### 🗂 Assets

- [Switch On](./assets/switchOn.png)
- [Switch Off](./assets/switchOff.png)
- [Light On](./assets/lightOn.png)
- [Light Off](./assets/lightOff.png)

---

[Back to Syllabus](../README.md#unit-three-react)
