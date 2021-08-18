# React Nested Components

## Overview
- React components are independent and reusable pieces of code
- Class components serve a similar purpose as functions, but work in isolation and returns JSX via a render function

## Learning Objectives
- Understanding the anatomy of a basic React component
- Creating a basic React class component
- Creating child components
- Calling React child components inside the return of the parent component

## Vocabulary
- React
- class component
- render
- return
- component call
- JSX

## What is JSX?

JavaScript is what you all have been learning up to this point. And now, we will introduce you to syntax extension to JavaScript, or `jsx`. JSX is JavaScript flavored HTML that behaves almost like HTML with a couple small exceptions -- most notably JSX uses the syntax `className` rather than HTML's `class` because `class` is reserved for HTML.

As the building block of React Components, you all will be using JSX a lot.

## Nested Components

Nesting components allows us to call a component within the return of another component.

Let's start with a new application:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <title>Intro to React</title>

  </head>
  <body>

    <div id="react-container"></div>

    <script type="text/babel">
      class App extends React.Component{
        render(){
          return(
            <></>
          )
        }
      }
      const domContainer = document.querySelector('#react-container');
      ReactDOM.render(<App />, domContainer);
    </script>
  </body>
</html>
```

Here we have set up an App component to return an empty div. Firstly, let's talk about the `render()` class method. Render only works in smart, class components, and is doing the rendering of our JSX to display the code that will go within our empty div.

Next, we have a `return()` which is similar to the built-in JS function `return`. It is returning the content inside of the parentheses. In React, when working with smart components, we need the JSX to live inside a single tag, which goes inside the `return()`, which lives inside the `render(){}`.

In React, the component renders only one JSX element. Therefore, it is imperative to wrap all of your elements in a single containing tag. In the example above, we created an empty `React Fragment` to house the JSX code we will be writing. This is were we will nest our other components.

Next, we will define another component class:

```html
<script type="text/babel">
  class App extends React.Component{
    render(){
      return(
        <></>
      )
    }
  }

  class Content extends React.Component{
    render(){
      return(
        <>
          <h1>Title</h1>
          <p>
            This is app content.
          </p>
        </>
      )
    }
  }
  const domContainer = document.querySelector('#react-container')
  ReactDOM.render(<App />, domContainer)
</script>
 ```

 Finally, we call the component within the main component. In our case, the App component:

 ```html
<script type="text/babel">
  class App extends React.Component{
    render(){
      return(
        <>
          <Content />
        </>
      )
    }
  }

  class Content extends React.Component{
    render(){
      return(
        <>
          <h1>Title</h1>
          <p>
            This is app content.
          </p>
        </>
      )
    }
  }
  const domContainer = document.querySelector('#react-container');
  ReactDOM.render(<App />, domContainer)
</script>
```

With that call to the Content component within the App component's render, we now have a nested component. This pattern allows us to start building more complex applications. But, at this stage it helps to have some project structure built into our application. For that we'll turn to `yarn create react-app **your app name**`.

## Challenge

The goal of the following challenge is for you to practice nesting components and getting familiar with class based component syntax.

Create a new HTML file. Copy the following code into your file:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <title>Intro to React</title>

</head>
<body>

  <div id="react-container"></div>

  <script type="text/babel">
    class App extends React.Component{
      render(){
        return(
          <h1>Hello React!</h1>
        )
      }
    }
    const domContainer = document.querySelector('#react-container')
    ReactDOM.render(<App />, domContainer)
  </script>
</body>
</html>
```


Here are your stories:

- As a user, I see a Header component with the name of you cohort
- As a user, I can see a Content component that contains a list of all your classmates
- As a user, I can see a Footer component with the names of you and your partner

---
[Back to Syllabus](../README.md#unit-two-introduction-to-react)
