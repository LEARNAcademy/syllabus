# Cat Tinder Interacting with DOM Elements

## [Testing Interactions Video](https://player.vimeo.com/video/227512883)

To follow along with the video, here is the code for  ```/src/App.js```:

#### /src/App.js
```Javascript
import React, { Component } from 'react';
import {
  Col,
  Button,
  Container,
  Row,
} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <Container>
        <h1>
          Testing Example
        </h1>
        <Row>
          <Col xs={4}>
            <Button>
              Play Game
            </Button>
          </Col>
          <Col xs={8}>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
```

And here is the code for ```/src/__tests__/App.js```:

#### /src/\_\_tests\_\_/App.js
```Javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('button starts off with label "Play Game"')
test('starts out with no text in main container')
test('button changes to "Excellent!" when clicked')
test('displays game results when button clicked')
test('hides game results when results visible and button clicked')
test('changes button text when button clicked a second time')
```

Often in our tests, we will want to click on buttons, navigate to new pages, and other interactive actions.  Enzyme makes this possible by simulating user actions.  Here is the test file from the video above:

#### /src/\_\_tests\_\_/App.js
```Javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('button starts off with label "Play Game"', () =>{
  const app = mount(<App />)
  expect(app.find('button').text()).toEqual('Play Game')
})
test ('starts out with no text in main container', () => {
  const app = mount(<App />)
  expect(app.find('#result-text').text()).toEqual('')
})
test('button changes to "Excellent!" when clicked', () => {
  const app = mount(<App />)
  app.find('button').simulate('click')
  expect(app.find('button').text()).toEqual('Excellent!')
})
test('displays game results when button clicked', () => {
  const app = mount(<App />)
  app.find('button').simulate('click')
  expect(app.find("#result-text").text()).toContain(
    'Congratulations')
})
test('hides game results when results visible and button clicked', () => {
  const app = mount(<App />)
  app.find('button').simulate('click')
  app.find('button').simulate('click')
  expect(app.find('#result-text').text()).toEqual('')
})
test('changes button text when button clicked a second time', () => {
  const app = mount(<App />)
  app.find('button').simulate('click')
  app.find('button').simulate('click')
  expect(app.find('button').text()).toEqual('Play Game')
})
```

And here is the Component to make these tests pass:

#### /src/App.js
```javascript
import React, { Component } from 'react';
import {
  Col,
  Button,
  Container,
  Row,
} from 'react-bootstrap'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      buttonText: "Play Game",
      gameWon: false
    }
  }
  toggleResult(){
    const newButtonText = this.state.gameWon ? "Play Game" : "Excellent!"
    const newGameWon = this.state.gameWon ? false : true
    this.setState({ buttonText: newButtonText, gameWon: newGameWon})

  }
  render() {
    return (
      <Container>
        <h1>
          Testing Example
        </h1>
        <Row>
          <Col xs={4}>
            <Button onClick={this.toggleResult.bind(this)}>
              {this.state.buttonText}
            </Button>
          </Col>
          <Col xs={8}>
            <span id="result-text">
              {this.state.gameWon &&
                <h4>Congratulations!  You have won a free book about React!</h4>
              }
            </span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
```

#### Where to go from here

[Go to Cat Tinder Intro](./05cat_tinder_intro.md)

[Back to React Interaction Testing](./01react_testing_jest_enzyme.md)

[Back to Syllabus](../../README.md)
