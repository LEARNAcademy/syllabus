# React Introduction

#### Overview
React is JavaScript library for creating user interfaces. Everything in React is a component. React components are independent and reusable pieces of code. Class components serve a similar purpose as functions, but work in isolation and returns markup via a render function.

#### Previous Lecture (58 min)
[![YouTube](http://img.youtube.com/vi/N4bt2peqzrE/0.jpg)](https://www.youtube.com/watch?v=N4bt2peqzrE)

#### Learning Objectives
- can define React
- can define DOM
- can define JSX
- can reproduce the basic structure of a class-based React component
- can describe a component
- can demonstrate the process of setting up a basic class-based React component
- can demonstrate the creation of multiple components
- can display multiple components inside a container component

#### Vocabulary
- React
- component
- DOM
- JSX
- render
- return
- class component
- component call

#### Additional Resources
- [React Documentation](https://reactjs.org/)

#### Troubleshooting Tips
- Seeing a blank page? Inspect and look for errors!

---

### What is React?
React is used to build webpages, mobile web pages, and even native mobile applications. It is component based, which means that we use it to build many small parts, and then join them together to form entire applications. This turns out to be extremely scalable. It was created from Facebook as that application grew and became more dynamic.


### React Components
Functions are encapsulated and reusable blocks of code. As developers, we want to write as few lines of code as possible. When we repeat code, it makes the developer gods cry. So, that is why we put code that we want to reuse in a function, and call that function when we want to use that code!

Everything in React is a component, and components are analogous to functions. They share characteristics and can be used in a similar way. Think about Facebook for a second. From the outer most container of the whole page, to a single line of text or button, they are all components.

Every component returns something in the same way that a function returns something. Everything that is visible on the page is made up of logic and display components. Smart components hold all of the logic, and display components hold all the user interface elements. Just like in functions, when we pass in arguments, in components we pass **props** from logic components down the river to display components. But, in React, what is unique is that display components can send data back up the river to the logic component using **state**.

For now, we'll start with an app that is composed of a single component, and from there build out more useful and engaging features for our users.

There are different ways of creating React components, but in this lesson, and throughout the course, we will work primarily with class components.

Here's a complete React application, containing just one component, with one line of markup:

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
      class HelloReact extends React.Component{
        render(){
          return(
            <h1>Hello React!</h1>
          )
        }
      }
      const domContainer = document.querySelector('#react-container');
      ReactDOM.render(<HelloReact />, domContainer);
    </script>
  </body>
</html>
```

There's a lot there. But let's focus on the React portion. It's the section in `<script>` within the body of the html.

```html
<script type="text/babel">
  class HelloReact extends React.Component{
    render(){
      return(
        <h1>Hello React!</h1>
      )
    }
  }
  const domContainer = document.querySelector('#react-container');
  ReactDOM.render(<HelloReact />, domContainer);
</script>
```

Here we start with the class definition of our component. Notice that it extends from the React.Component class. Within this class is a single method, the render method. Notice that the render method does one thing, return a single html element.

The final lines in `<script>` define a container and tell React to render our component in the container.

This is the barest React application. It is composed of a single component. Recall though that a page in a typical React application is composed of many components. As our application grows in complexity, we will begin to require nested components.

### What is JSX?
JavaScript is what you all have been learning up to this point. And now, we will introduce you to syntax extension to JavaScript, or `jsx`. JSX is JavaScript flavored HTML that behaves almost like HTML with a couple small exceptions -- most notably JSX uses the syntax `className` rather than HTML's `class` because `class` is reserved for HTML. As the building block of React Components, you all will be using JSX a lot.

### Nested Components
Nesting components allows us to call a component within the return of another component.

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
          <p>This is app content.</p>
        </>
      )
    }
  }
  const domContainer = document.querySelector('#react-container');
  ReactDOM.render(<App />, domContainer)
</script>
```

With that call to the Content component within the App component's render, we now have a nested component. This pattern allows us to start building more complex applications.

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
          <></>
        )
      }
    }
    const domContainer = document.querySelector('#react-container')
    ReactDOM.render(<App />, domContainer)
  </script>
</body>
</html>
```

- As a user, I see a Header component with the name of your cohort
- As a user, I can see a Content component that contains a list of all your classmates
- As a user, I can see a Footer component with your name

---
[Back to Syllabus](../README.md#unit-two-introduction-to-react)
