# React Testing Tools

## [Jest and Enzyme Video](https://player.vimeo.com/video/227512341)

There are two main tools you'll use to test your React applications: Jest and Enzyme.

## Jest

Jest is a testing framework built right into React when you use create-react-app.  Its maintained by the good folks at
Facebook, and they've done a great job of making testing a pleasure as you write your code.

#### Try this
```
$ create-react-app jest-example
$ cd jest-example
$ yarn test
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.074s
Ran all test suites related to changed files.

Watch Usage
 › Press a to run all tests.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```
* You've just run your first test! *

Notice all of those options above, they are very powerful, and you can use them to run one test, one file of tests, or whatever you'd like.  Notice also that when we run ```yarn test``` the command doesn't exit back to the command line.  This is because Jest continues to run, and will watch your code for changes.  If you make a change in either the test, or the file under test, the tests will re-run, automatically!  That's pretty cool.  A really powerful way to develop is to keep your tests running in a terminal window right inside of Atom.  That way you can always see the results of the code changes you make.  I use the 'platformio-ide-terminal' package.  Here's what my Atom looks like as I write this:

![jest in atom](https://s3.amazonaws.com/learn-site/curriculum/testing-react/jest-window.png)

## What's in a Test?

Create-react-app adds a testing file for you when you create the app.  Let's open it up, and see what it looks like

#### /src/App.test.js
```javascript
1  import React from 'react';
2  import ReactDOM from 'react-dom';
3  import App from './App';

5  it('renders without crashing', () => {
6    const div = document.createElement('div');
7    ReactDOM.render(<App />, div);
8  });
```

1) We need to load the react framework
3) Here we import the App component, which we're going to test
5) This is the first test.  Tests are meant to be as human readable as possible.  A test has the following structure:

```javascript
  it("<name of test>", ()=>{
    // Test Setup code
    // Optional expectations we can specify about our code
  })
```

6) This line is setting up our test,  we're working with a real DOM here, actual HTML
7) Finally, in this test, we render our component into the dom, and assure that it doesn't crash.

## Adding Enzyme

[Enzyme Docs](https://github.com/airbnb/enzyme)

Jest is pretty easy to use, but adding Enzyme and react-test-renderer makes working with React components even better.  First, lets' add them to our package.json file:

```bash
$ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
```

Now that we've done that, we have some great tools to inspect the rendered HTML of our application.  Currently, our App.js file looks like this:

#### /src/App.js

```javascript
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

### Writing a new Test
Imagine that we want to change the ```<p>``` text to read "Welcome to LEARN".  Let's rewrite our test file with a test to check for that, then we'll update the code to make it pass. (that's TDD!)

### /src/App.test.js
```javascript
1  import React from 'react';
2  import ReactDOM from 'react-dom';
3  import App from './App';
4  import Enzyme, { mount } from 'enzyme';
6  import Adapter from 'enzyme-adapter-react-16';
7
8  Enzyme.configure({ adapter: new Adapter() });
9
10 it('Renders a LEARN welcome', ()=>{
11   const app = mount(<App />)
12   expect(app.find('p').text()).toEqual('Welcome to LEARN')
13 })
```
** Note: We removed the default test that create-react-app provided, as its not very useful once we're writing our own tests

4) Notice on line 4, we import 'mount' from Enzyme.
6) Here we use mount to instantiate an instance of our App component.
7) Here's the magic of Enzyme, we can call ```app.find('p')``` to inspect the dom, and find our element.
   Also notice the syntax of an expectation.
   ```javascript
    expect(<one thing>).toEqual(<another thing>)
   ```
   In this case, we're expecting the things to be the same.  We could expect them to be differnt, greater than, or any host of other tests.

### Failing test output
Notice the running test command you have,  It has notice that we made a code change, and re-run our test for us.  ... And we have a failing test!  This is a very good thing, as we know what we now need to do to our code.

![failing-enzyme-test](../assets/failing-enzyme-test.png)

### Getting our test GREEN

Our test lets us know exactly what we need to do to get it to pass, so let's do that in App.js

#### /src/App.js
```
  // Change this:
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>

  <p>
    Welcome to LEARN
  </p>
```

![passing-enzyme-test](../assets/passing-enzyme-test.png)

## Jest Matchers

There are all kinds of matchers to use with expect.  Above we used ```expect().toEqual()```.  Checkout Jest's documentation to see them all:

[jest matchers](https://facebook.github.io/jest/docs/en/using-matchers.html#content)

#### Where to go from here

[Go to Testing Structure in React](./02react_testing_app_structure.md)

[Back to Syllabus](../../README.md)
