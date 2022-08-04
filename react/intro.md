# React Introduction

#### Overview

React is JavaScript library for creating user interfaces. Everything in React is a component. React components are independent and reusable pieces of code. Each component contains its own functionality and returns markup.

#### Previous Lecture (58 min)

[![YouTube](http://img.youtube.com/vi/N4bt2peqzrE/0.jpg)](https://www.youtube.com/watch?v=N4bt2peqzrE)

#### Learning Objectives

- can define React
- can define DOM
- can define JSX
- can reproduce the basic structure of a function-based React component
- can describe a component
- can demonstrate the process of setting up a basic function-based React component
- can demonstrate the creation of multiple components
- can display multiple components inside a container component

#### Vocabulary

- React
- DOM
- component
- Functional components
- JSX
- React fragments
- component call (component invocation)

#### Additional Resources

- [React Documentation](https://reactjs.org/)

#### Process

- `cd` into the `react-challenges` repository
- Create a new branch: `intro-initials` (ex. intro-sp)
- `touch` a file with no spaces and `.html` extension: `intro-student.html` (ex. intro-sarah.html)
- Open the folder in a text editor
- Code!

#### Troubleshooting Tips

- Seeing a blank page? Inspect and look for errors!

---

### What is React?

**React** is JavaScript library used to build webpages, mobile web pages, and even native mobile applications. It is component based, which means that we use it to build many small parts, and then join them together to form entire applications. This turns out to be extremely scalable. It was created from Facebook as that application grew and became more dynamic.

React is a popular language because the it is structured in reusable pieces and it is designed to respond very efficiently to user interactions. When you look at a website in the browser you are looking at the DOM. The **DOM** which stands for Document Object Model is the visual representation of code. React makes very efficient user interactions by identifying the specific element where the change occurred and only updating that particular element.

### React Components

As developers, we want to write as few lines of code as possible. When we repeat code, it makes the developer gods cry. So that is why we put code that we want to reuse in a function, and call that function when we want to use that code!

Everything in React is a component. **Components** are a specific type of function that can contain JavaScript logic and returns markup that gets rendered to the browser. There are different ways of creating React components, but in this lesson, and throughout the course, we will work primarily with functional components. **Functional components** are React components that are composed of JavaScript functions.

### What is JSX?

JavaScript is what you all have been learning up to this point. And now we will introduce you to a markdown syntax extension to JavaScript, or JSX. **JSX** is JavaScript flavored markdown that behaves very similarly to HTML. There are a couple small difference between HTML and JSX. JSX uses the syntax `className` rather than HTML's `class` to modify the look and behavior of a JSX element. This is because `class` is already a protected word in JavaScript. JSX is a building block of React components and what allows React to create user interfaces.

### Getting Started

To get started, we will focus on just the anatomy of one component. To make this as simple as possible we will look at the component inside an HTML file. Here's a complete React application, containing just one component, with one line of markup.

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <title>Intro to React</title>
  </head>
  <body>
    <div id="react-container"></div>

    <script type="text/babel">
      const App = () => {
        return <h1>Hello World!</h1>
      }

      const domContainer = document.querySelector('#react-container')
      const root = ReactDOM.createRoot(domContainer)
      root.render(<App />)
    </script>
  </body>
</html>
```

There's a lot there. But let's focus on the React portion. It's the section in `<script>` within the body of the HTML.

```html
<script type="text/babel">
  const App = () => {
    return <h1>Hello World!</h1>
  }

  const domContainer = document.querySelector('#react-container')
  const root = ReactDOM.createRoot(domContainer)
  root.render(<App />)
</script>
```

Here we start with the function expression of our component. Notice that the component only does one thing. It returns a single JSX element.

The final lines in `<script>` define a container and tell React to render our component in the container.

This is the barest React application. It is composed of a single component. As our application grows in complexity, we will begin to require many, many additional components.

### Nested Components

Nesting components allows us to call a component within the return of another component. This is the convention for making more complicated React applications with reusable code. Most React components will need to return more than one JSX element. If that is the case, the elements need to be wrapped in a single container tag. While often an element such as a `div` can be used, there is a special JSX tag that is even more neutral than a `div` called a React fragment. **React fragments** are empty JSX tags that can wrap other elements without adding any additional styling.

First we will wrap the `h1` in React fragments. Then we will define another component.

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <title>Intro to React</title>
  </head>
  <body>
    <div id="react-container"></div>

    <script type="text/babel">
      const App = () => {
        return (
          <>
            <h1>Hello World!</h1>
          </>
        )
      }

      const Content = () => {
        return <h3>Welcome to LEARN Academy!</h3>
      }

      const domContainer = document.querySelector('#react-container')
      const root = ReactDOM.createRoot(domContainer)
      root.render(<App />)
    </script>
  </body>
</html>
```

Just like any other function, components must be called or invoked. A **component call (component invocation)** looks like a self closing HTML tag. This will render the component.

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <title>Intro to React</title>
  </head>
  <body>
    <div id="react-container"></div>

    <script type="text/babel">
      const App = () => {
        return (
          <>
            <h1>Hello World!</h1>
            <Content />
          </>
        )
      }

      const Content = () => {
        return <h3>Welcome to LEARN Academy!</h3>
      }

      const domContainer = document.querySelector('#react-container')
      const root = ReactDOM.createRoot(domContainer)
      root.render(<App />)
    </script>
  </body>
</html>
```

This patterns will allow us to create as many components as needed.

---

### 💻 Challenge: React Components

The goal of the following challenge is for you to practice nesting components and getting familiar with the component syntax.

Create a new HTML file. Copy the following code into your file:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <title>Intro to React</title>
  </head>
  <body>
    <div id="react-container"></div>

    <script type="text/babel">
      const App = () => {
        return <></>
      }

      const domContainer = document.querySelector('#react-container')
      const root = ReactDOM.createRoot(domContainer)
      root.render(<App />)
    </script>
  </body>
</html>
```

### 📚 User Stories

- As a user, I see a Header component with the name of your cohort.
- As a user, I can see a Content component that contains an unordered list of all your classmates.
- As a user, I can see a Footer component with your name.

---

[Back to Syllabus](../README.md#unit-three-react)
