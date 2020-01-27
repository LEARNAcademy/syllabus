# React Props

[![YouTube](http://img.youtube.com/vi/-5dtIo_oib0/0.jpg)](https://www.youtube.com/watch?v=-5dtIo_oib0)

Earlier, we took a look at state in React and how to use methods to update information in a component's state. With that, we are one step closer to building truly dynamic React applications.

Where nested components gave us the ability to build modular interfaces and state gave us a means of tracking and updating data within components, props give us the ability to pass data between components. Specifically, it gives us the ability to pass data down to nested components.

## React Props Syntax

Let's look at props at work:

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
              <GreetPerson name='Bob' />
          )
        }
      }

      class GreetPerson extends React.Component{
          render(){
              return(
                  <h1>Hi, {this.props.name}!</h1>
              )
          }
      }
      const domContainer = document.querySelector('#react-container');
      ReactDOM.render(<App />, domContainer);
    </script>
  </body>
</html>
```

This is the smallest, least complex example of passing props to a nested component. Notice, that there are two things that we have to do to pass information to a nested component and render it.

The first thing to notice is the call to the nested component. Very little has changed except that we've added "name='Bob'" to the component call. This is the point in the code where we are sending information or attaching props (properties) to the nested component. In this case, the `GreetPerson` component.

The next thing to notice is how we call that information up from within the `GreetPerson` component. Within the return of our `GreetPerson` component is the expression `this.props.name` wrapped in curly brackets. The expression is a clue to us that, like state, props are really an object that we can access using javascript object syntax.

It will help to think of components and props as functions and arguments because in a very practical sense, props are arguments that you are passing to your components.

Let's add another GreetPerson component call to our App component:

```javascript
class App extends React.Component{
    render(){
        return(
            <div>
                <GreetPerson name='Bob' />
                <GreetPerson name='Teddy' />
            </div>
        )
    }
}
```

Here we start to see the power of these mechanisms working together. We are now reusing a component to display different sets of information. We can begin to see how using props and components can make for an extremely dynamic application.

Let's now take a look at how to use props in tandem with state.


[Go to next lesson: State and Props](./state-and-props.md)

[Back to React State](./state.md)

[Back to Syllabus](../README.md)
