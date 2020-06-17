# Cat Tinder Testing With Jest and Enzyme

## Video: [Jest and Enzyme Video](https://player.vimeo.com/video/227512341)

## Overview
- There are two main tools you'll use to test your React applications: Jest and Enzyme.
- Jest is a JavaScript testing framework that is added to React when you use the command yarn create react-app.
- Enzyme is a JavaScript testing utility for React that makes it easier to test your React Components' output.

## Learning Objectives
- Using Enzyme in a React application
- Running Jest in a React application
- Organizing the component testing suite

## Vocabulary
- Jest
- Enzyme

## Useful Commands
- $ yarn test

## Additional Resources
- [Jest Matchers](https://facebook.github.io/jest/docs/en/using-matchers.html#content)
- [Enzyme Docs](https://enzymejs.github.io/enzyme/)

## Set Up
- $ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16

## Jest
When you create a new React application, we get Jest automatically as well as a test file for App.js. It has one test that looks at React's boilerplate code.

**/src/App.test.js**
```javascript
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

This test isn't terribly useful and we want to have tests for our specific components so we can delete this file.

## Enzyme
Enzyme uses Jest and adds React specific functionality. Adding Enzyme and makes working with React components even better.

## Organizing Your Tests
To keep testing files organized it is convention to make a directory called `__tests__` (two underscores on either side) in the same directory as the component. The test file for each component is named the same as the component being tested. As long as the file is named `__tests__` Jest will find it run any tests. In this case, we will create a test file called *CatIndex.js* in the directory in *src/pages*.

**src/pages/__tests__/CatIndex.js**
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from '../CatIndex'

Enzyme.configure({ adapter: new Adapter() })
```

Let's write a test to check for the text rendering in our components. We will write a test, then we'll update the code to make it pass. (That's TDD!)

```javascript
it('CatIndex renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CatIndex />, div)
})

it('CatIndex renders content', () => {
  const catIndex = mount(<CatIndex />)
  expect(catIndex.find('p').text()).toEqual('All the cats.')
})
```
Notice we import 'mount' from Enzyme. Here we use mount to instantiate an instance of our CatIndex component. The magic of Enzyme is we can call `(catIndex.find('p')` to inspect the DOM and find our element.

Also notice the syntax of the expectation:
```javascript
  expect(<one thing>).toEqual(<another thing>)
```
In this case, we're expecting the things to be the same.  We could expect them to be different, greater than, or any host of other tests. Refer to the Jest Matchers docs for more information.


## Challenge: Cat Tinder Tests
- Add Enzyme to your application
- Add a `__test__` directory with files for each existing component

//Something I ran into during this section is that we needed to create a new __tests__ folder within the src/components folder and add our Header Component test there.//

[Go to next lesson: Cats Tinder Index Component](./cat-index.md)

[Back to Cat Tinder Introduction and Wireframes](./intro.md)

[Back to Syllabus](../../README.md)
