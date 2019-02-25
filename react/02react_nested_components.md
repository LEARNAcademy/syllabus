## Nested Components

Nesting components in React is actually quite easy. It is quite useful to think of functions when working with components. The key is that each component is declared and then called. In the case of nested components, we can call a component within the return of another component.

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
            <div></div>
          )
        }
      }
      const domContainer = document.querySelector('#react-container');
      ReactDOM.render(<App />, domContainer);
    </script>
  </body>
</html>
```

Here we have set up an App component to return an empty div. This is were we will nest our other components.

Next, we will define another component class:

```html
<script type="text/babel">
      class App extends React.Component{
        render(){
          return(
            <div></div>
          )
        }
      }
      
      class Content extends React.Component{
        render(){
            return(
                <div>
                    <h1>Title</h1>
                    <p>
                        This is app content.
                    </p>
                </div>
            )
        }
      }
      const domContainer = document.querySelector('#react-container');
      ReactDOM.render(<App />, domContainer);
    </script>
 ```
 
 Finally, we call the component within the main component. In our case, the App component:
 
 ```html
<script type="text/babel">
      class App extends React.Component{
        render(){
          return(
            <div>
                <Content />
            </div>
          )
        }
      }
      
      class Content extends React.Component{
        render(){
            return(
                <div>
                    <h1>Title</h1>
                    <p>
                        This is app content.
                    </p>
                </div>
            )
        }
      }
      const domContainer = document.querySelector('#react-container');
      ReactDOM.render(<App />, domContainer);
    </script>
 ```
 
With that call to the Content component within the App component's render, we now have a nested component. This pattern allows us to start building more complex applications. But at this stage it helps to have some project structure built into our application. For that we'll turn to create-react-app.

[Go to Create React App](./03react_create_react_app.md)


[Back to Intro to React](./01react_intro_to_react.md)


[Back to Syllabus](../README.md)