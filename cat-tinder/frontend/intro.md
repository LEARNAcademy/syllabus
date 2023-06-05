# Cat Tinder Introduction

#### Overview

Cat Tinder. It's like Tinder, but for cats. Cat Tinder is a full-stack, decoupled application that creates profiles for cats and allows a user to see other cat profiles. A decoupled application means we are actually creating two separate applications. A React application to create the views in the frontend and a Rails API that handles our data.

#### Previous Lecture (55 min)

[![YouTube](http://img.youtube.com/vi/gA9Z9_B3cPI/0.jpg)](https://www.youtube.com/watch?v=gA9Z9_B3cPI)

#### Learning Objectives

- can define React-router
- can define Reactstrap
- can utilize third-party packages in a React application
- can create JSON mock data for scaffolding
- can define routes in a React application

#### Vocabulary

- SPAs
- assets directory
- components directory
- pages directory
- Reactstrap
- scaffolding
- React Router

#### Additional Resources

- [Reactstrap](https://reactstrap.github.io/)
- [React Router](https://reactrouter.com/en/main)
- [Canva](https://www.canva.com/)

#### Process

- $ `yarn create react-app cat-tinder-frontend`
- $ `cd cat-tinder-frontend`
- Add the remote from your GitHub classroom repository
- Create a default branch (main)
- Make an initial commit to the repository
- Ask your instructors for branch protection
- $ `yarn start`

---

### Application Planning

Planning is a crucial step in creating a successful application. First, it is important to have an understanding of a project as a whole. Once the overarching goals have been established, tasks must be broken down into individual actions. It is not possible to create the entire application at once and jumping between tasks is inefficient and can create code conflicts within the development team. It is necessary to outline an agreed upon task list that everyone on the team follows.

### Cat Tinder Frontend

Right now we are focused on only the frontend of our application. To create the view of our application it is important to be aware of the API. The backend of our Cat Tinder app has a model called `Cat`. Our cat model will have three attributes: a name, an age, what the cat enjoys doing, and an image.

In the Rails application the schema looks like this:

![cat-schema](../assets/cat-schema.png)

As a frontend developer we will need to create a React app that will hit the Rails API endpoints and offer our user a functional and visually appealing application.

### Getting Starting

So far we have only created SPAs in React. An **SPA**, or single page application, is an application that does not have navigation to different pages. SPAs can be a collection of components that create a single view. Now we want to be able to navigate to different pages as we explore CRUD functionality in a decoupled application.

To keep the files organized, it is a good practice to create three directories in your React application's `src` directory: assets, components, and pages.

#### Assets

The **assets directory** is used to store image files used in your application.

#### Components

The **components directory** is for helper components that can be reused on many views. In the Cat Tinder application we will have components for the header and footer.

- Header.js
- Footer.js

#### Pages

The **pages directory** is for full views. The full view can consist of items from the assets and components directory as well code unique to a page.

- Home.js
- CatIndex.js
- CatShow.js
- CatNew.js
- CatEdit.js
- NotFound.js

### Reactstrap

**Reactstrap** is a version of Bootstrap built specifically for React components that provides pre-build snippets of UI. To access the functionality of Reactstrap you must add the dependencies for Reactstrap and Bootstrap via `yarn` as well as add an import to `src/index.js`.

Once Reactstrap has been added to the application, styled components can be imported and used like component tags. This opens up a lot of options for quick styling and functionality.

```
$ yarn add bootstrap
$ yarn add reactstrap
Add to src/index.js: import 'bootstrap/dist/css/bootstrap.min.css'
```

### Mock Cats

An important part of development is the ability to create scaffold code. Creating **scaffolding** is writing code that exists for just for the purpose of building more code. Creating placeholder data is a great way to ensure our frontend application is working before we connect it to the database.

To get our frontend up and running, we are going to create a file called `mockCats.js` that will live in the `src` directory and hold an array of cat objects.

**src/mockCats.js**

```javascript
const cats = [
  {
    id: 1,
    name: "Mittens",
    age: 5,
    enjoys: "sunshine and warm spots",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 2,
    name: "Raisins",
    age: 7,
    enjoys: "being queen of the dogs",
    image:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80"
  },
  {
    id: 3,
    name: "Toast",
    age: 4,
    enjoys: "getting all the attention",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  }
]
export default cats
```

Now we can use the mock data in `App.js` while we get the application up and running. The mock data can be set into state and passed around our application.

**src/App.js**

```javascript
import React, { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"

import mockCats from "./mockCats"

const App = () => {
  const [cats, setCats] = useState(mockCats)

  console.log(cats)
  return (
    <>
      <Header />
      <Home />
      <CatIndex />
      <CatShow />
      <CatNew />
      <CatEdit />
      <NotFound />
      <Footer />
    </>
  )
}

export default App
```

### React Router

The first goal of our app is to get the base file structure ready to go. This includes the ability to navigate between pages.

By default, React is an SPA. Which means that unlike Rails, React doesn't come with a built in router. **React Router** is a very popular third-party application that will add the ability to navigate between pages. React Router is different than the Rails router in that the React Router isn't a true router. The router isn't making full request-response cycles it is just swapping out component views based on the url.

First we need to add the necessary packages to our application using a `yarn` command. This adds the React Router dependencies to the `package.json` file.

```bash
$ yarn add react-router-dom
```

This allows us to import routing components to our application. `App.js` will be in charge of defining the routes and displaying the components.

To enable the routing in the application we can add the `BrowserRouter` component to `index.js`. The `BrowserRouter` component will get imported from the React Router library. Then tags will wrap the `App.js` component invocation.

**src/index.js**

```javascript
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom" // add this import

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```

Now we can add the appropriate routing components to `App.js`. First the components will need to be imported.

**src/App.js**

```javascript
import { Routes, Route } from "react-router-dom"
```

Now we have access to the components that will help us build our routing functionality.

#### Routes

The `Routes` component wraps all the functionality of the individual routes.

#### Route

The `Route` component will define what url will be used to display a particular component. The `Route` tag gets passed two attributes:

1. Path: the url that will be appended to the end of the base url of the application. The base url in development is `localhost:3000`. The path gets defined by the developer. The name should be in lowercase and be descriptive of the page that will be displayed.
2. Element: the component to be displayed when the url matches.

**src/App.js.**

```javascript
return (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catindex" element={<CatIndex />} />
      <Route path="/catshow" element={<CatShow />} />
      <Route path="/catnew" element={<CatNew />} />
      <Route path="/catedit" element={<CatEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
)
```

The last route in the list uses the `*` syntax to direct our application to an error page. We can think of this as the `else` statement in our routes. If something happens in our application where a route is passed in that doesn't match any of the specified paths, we can direct our user to a custom error page.

---

### 🐱 Challenge: Cat Tinder Setup

As a developer, I have been commissioned to create an application where a user can see cute cats looking for friends. As a user, I can see a list of cats. I can click on a cat and see more information about that cat. I can also add cats to the list of cats looking for friends. If my work is acceptable to my client, I may also be asked to add the ability to remove a cat from the list as well as edit cat information.

- As a developer, I can create a directory in `src` called `pages`.
- As a developer, I can create a directory in `src` called `components`.
- As a developer, I can create a directory in `src` called `assets`.
- As a developer, I can create a file called `Header.js` in the `components` directory.
- As a developer, I can create a file called `Footer.js` in the `components` directory.
- As a developer, I can create a file called `Home.js` in the `pages` directory.
- As a developer, I can create a file called `CatIndex.js` in the `pages` directory.
- As a developer, I can create a file called `CatShow.js` in the `pages` directory.
- As a developer, I can create a file called `CatNew.js` in the `pages` directory.
- As a developer, I can create a file called `CatEdit.js` in the `pages` directory.
- As a developer, I can create a file called `NotFound.js` in the `pages` directory.
- As a developer, I can add a file to `src` called `mockCats.js` and add an array of cat objects that match the future backend data structure.
- As a developer, I can add Reactstrap to my application.
- As a developer, I can create header UI.
  - HINT: Check out [Canva](https://www.canva.com/) to make fun logos.
- As a developer, I can create footer UI.
- As a developer, I can see the header and footer on every page.
- As a developer, I can add some styling to the Home page.
- As a developer, I can add some styling to the NotFound page.
- As a developer, I can add React Router to my application.
- As a developer, I can add routes to be able to navigate manually to all pages.

---

[Back to Syllabus](../../README.md#cat-tinder-frontend)
