# React Introduction

## Video: React
[React Video](https://player.vimeo.com/video/229416697)

## Overview
- React is a JavaScript library for building user interfaces
- Everything in React is a component

## Additional Resources
- <a href="https://reactjs.org/" target="blank">React Documentation</a>

## What is React?

React is used to build webpages, mobile web pages, and even native mobile applications. It is
component based, which means that we use it to build many small parts, and then join them together to form entire applications. This turns out to be extremely scalable. It was created from Facebook as that application grew and became more dynamic.

## Read the docs

React has great documentation for just starting with the framework, and as you grow into bigger and more complex applications. You'll want to bookmark their documentation and refer to it often.

## React Components

Functions, which you learned about last week, are encapsulated and reusable blocks of code. As developers, we want to write as few lines of code as possible. When we repeat code, it makes the developer gods cry. So, that is why we put code that we want to reuse in a function, and call that function when we want to use that code!

Everything in React is a component, and components are analogous to functions. They share characteristics and can be used in a similar way. Think about Facebook for a second. From the outer most container of the whole page, to a single line of text or button, they are all components.

Every component returns something in the same way that a function returns something. Everything that is visible on the page is made up of smart and dumb components. Smart components hold all of the logic, and dumb components hold all the user interface elements. Just like in functions, when we pass in arguments, in components we pass **props** from smart components down the river to dumb components. But, in React, what is unique is that dumb components can send data back up the river to the smart component using **state**.

We'll cover props and state later in the course.

For now, we'll start with an app that is composed of a single component, and from there build out more useful and engaging features for our users.

There are different ways of creating React components, but in this lesson, and throughout the course, we will work primarily with class components, or smart components.

Here's a complete React application, containing just one component, with one line of text:

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

[Go to next lesson: React Nested Components](./nested-components.md)

[Back to JavaScript Classes and Inheritance](../javascript/class-inheritance.md)

[Back to Syllabus](../README.md)
