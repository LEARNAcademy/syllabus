# State and Props

In a real React application, props for the most part come from state. In a very practical sense, props are a snapshot of state that are passed on to components tasked with displaying and/or letting a user interact with that information.

But before we dive into user interaction, let's look at the implications of throwing state in the mix.

Let's refactor the previous example:

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
        constructor(props){
            super(props)
            this.state = {
                firstPerson: 'Bob',
                secondPerson: 'Teddy'
            }
        }
        render(){
          return(
              <GreetPerson name={this.state.firstPerson} />
              <GreetPerson name={this.state.secondPerson} />
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

Notice very little has changed but the potential shifts dramatically. First, we added state to the App component by setting up a constructor with two values in state. Then, in the return, we changed the hardcoded names to references to items in state. In moving the values into state, we've centralized our data and made them available to any other components in the App component.

A change to state then is broadcast to our other components.

With a little more refactoring and DRYing up our code using a programmatic approach, this becomes even more dynamic.

Our refactored App component:

```javascript
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            people: [
                'Bob',
                'Teddy'
            ]
        }
    }
    render(){
        return(
            this.state.people.map(person => <GreetPerson name={person} />
        )
    }
}
```

Here we've stripped state back to an array of names. Then, in order to render our components, we code a map to go over the names in the people array and return a GreetPerson component for each name.

Now, as we add things to state, the component updates without any more code!

## Challenge: Dice Roller

For this exercise,  consider the following code:

```javascript
Math.floor( Math.random() * 6 + 1 )
```
this will provide a number from 1 to 6 each time it is called: [1,2,3,4,5,6]

## Challenge
Using a well thought out state tree and nested component structure, construct an application that rolls a die and keeps track of the numbers rolled.  Here is a wireframe to help you start planning your application:

![dice game](../assets/dice-game.png)

[Go to next lesson: Forms and Functional Props](./forms.md)

[Back to React Props](./props.md)

[Back to Syllabus](../README.md)
