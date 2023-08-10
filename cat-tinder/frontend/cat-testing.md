# Cat Tinder Testing

#### Overview

Testing is the process of writing code that will ensure the application we are creating works and behaves as expected. Testing gives developers confidence. Every React application has test functionality that can be used out of the box: Jest and React Testing Library. These two work together to give developers the tools to create tests that ensure the app works for properly for the end user.

#### Previous Lecture (1 hour 2 min)

[![YouTube](http://img.youtube.com/vi/EsyDztWgsE8/0.jpg)](https://www.youtube.com/watch?v=EsyDztWgsE8)

#### Learning Objectives

- can define Jest
- can define React Testing Library
- can implement an automated test suite
- can ensure components render properly
- can import and define dependencies in a test suite

#### Vocabulary

- static tests
- unit tests
- integration tests
- end to end tests
- Jest
- React Testing Library
- assertion

#### Additional Resources

- [Jest Matchers](https://jestjs.io/docs/using-matchers)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

#### Process

- $ `yarn test`
- control + c to stop the testing suite

---

### Application Testing

When creating an application it is important to create tests that will ensure the application works as expected. There are lots of different types of tests that will achieve this goal. Broadly speaking, tests can be broken down into four categories. There are **static tests** that look for syntax mistakes and spelling errors, **unit tests** that tests isolated code actions, **integration tests** that test how your code works together, and **end to end tests** that use an automated system to mock a user of your app. We won't get into end to end testing during this project but we will use a combination of the other three to ensure our Cat Tinder app is functioning correctly.

### Jest and React Testing Library

Jest and React Testing Library are tools that work together to achieve the goal of ensuring the application works as expected. **Jest** is a JavaScript testing framework that provides the syntax for creating tests. **React Testing Library** is a utility that allows developers to test React components. React Testing Library tends to look at the code through the eyes of the user. Rather than spending a lot of time testing specific code actions, the goal of React Testing Library is to create tests that reflect how the user will interact with the application.

### Running Tests

When we run the `yarn` command to create a new React application, we get access to Jest as well as React Testing Library. Looking at the `package.json` file, there is a pre-configured command that will run the testing suite.

**package.json**

```javascript
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
},
```

In the terminal, we can open a new tab specifically to run tests. The command $ `yarn test` will look for files with the extension `.test.js` and execute code in those files. The tests will run continuously and re-run the tests automatically every time we save the file.

The terminal will offer a set of extra commands that can help dial in what tests are reported. If this list is not visible type `w` in the terminal running the tests to see the menu.

```bash
Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press i to run failing tests interactively.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.
```

### Organizing the Tests

React Testing Library works in conjunction with Jest. When the Jest commands are run in the terminal Jest looks for files with certain naming conventions. In a React application, the test files should all be inside a directory named `__tests__` (two underscores on each side). It must be named EXACTLY in this manner. The test directory will live in the `src` directory at the same level as the `components`, `pages`, and `assets` directories.

Notice that there is already a test file in the React application. It is called `App.test.js` and it lives in the same directory as `App.js`. Each component in the Cat Tinder application needs a corresponding test file. We can follow the pattern established by React and name each test file the same name as the component file with a `.test.js` file extension.

We can create tests for the components that have content so far: `Header` component, `Footer` component, `Home` page, and `NotFound` page.

### Testing the Home Page

The first test we will create is for the home page. There is not much functionality in this component, so from a user's perspective, we want to ensure that our page will render in the browser.

Right now the `Home` component looks like this:

**src/pages/Home.js.**

```javascript
import React from "react"

const Home = () => {
  return (
    <>
      <section className="banner-section">
        <h1>Find Your Cat a Feline Friend</h1>
      </section>
    </>
  )
}

export default Home
```

We can create a static test in the file `Home.test.js` that will test that the component renders. First we have to import the `render` action from the React Testing Library. Then we have to import the `Home` component to the test file. Next we have to set the `describe` and `it` statements. Both statements take two arguments. First a string that gives context to the test. The second argument is a function that will hold the test actions. In some documentation, the `describe` and `it` statement are combined into a single `test` statement. Both ways are correct.

**src/pages/Home.test.js.**

```javascript
import { render } from "@testing-library/react"
import Home from "../pages/Home"

describe("<Home />", () => {
  it("renders without crashing", () => {})
})
```

When rendering a component, React will create a `div` and attach the application code to that `div`. The test will perform that same action. An interesting note about this test is that there is not an assertion statement. An **assertion** is the expected outcome of a given action, typically defined by an `expect` statement. The only thing this test is doing is making sure the component renders. If there are syntax errors in the code the test will fail.

**src/pages/Home.test.js.**

```javascript
import { render } from "@testing-library/react"
import Home from "../pages/Home"

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Home />, div)
  })
})
```

The `NotFound` component is very similar to `Home` so the same structure of static test can be applied.

### Testing the Header Component

Next up we will test the `Header` component. From a user's perspective, we want to ensure that our page will render in the browser, that the logo is displayed, and that `Header` has three clickable links.

Right now the `Header` component looks like this:

**src/components/Header.js.**

```javascript
import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import catLogo from "../assets/cat-logo.png"

const Header = () => {
  return (
    <Nav className="header-nav">
      <NavItem>
        <NavLink to="/">
          <img
            src={catLogo}
            alt="Cat Tinder logo with outline of cat"
            className="cat-logo"
          />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/catindex" className="nav-link">
          Meet the Cats
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/catnew" className="nav-link">
          Add a New Cat
        </NavLink>
      </NavItem>
      <NavItem>
        <a
          target="blank"
          href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter"
          className="nav-link"
        >
          Adopt a Cat!
        </a>
      </NavItem>
    </Nav>
  )
}

export default Header
```

The `Header` component uses routing components from `react-router-dom` so that will need to be included in the test. We also need to access another tool from React Testing Library called `userEvent` that will simulate browser interactions such as click events.

We can start by stubbing out the tests.

**src/components/Header.test.js.**

```javascript
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header"

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })
  it("renders a logo with a src and alt", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })
})
```

Next we need to provide assertions for the logo and links. The first test doesn't have an assertion as it is just ensuring the component renders. Each of the other tests will start the same way but dig into more specific user functionality.

The logo is an image and will have a `src` attribute and an `alt` attribute. We can use these in our test to ensure the image is present and rendering. We will use the `getByRole` method to target the `img` tag. Then we will assert for the two attributes.

```javascript
it("renders a logo with a src and alt", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  const logo = screen.getByRole("img")
  expect(logo).toHaveAttribute("src", "cat-logo.png")
  expect(logo).toHaveAttribute("alt", "Cat Tinder logo with outline of cat")
})
```

The links can be handled by the `userEvent` library. This will simulate a click event and make sure the appropriate links are present.

```javascript
it("has clickable links", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  userEvent.click(screen.getByText("Meet the Cats"))
  expect(screen.getByText("Meet the Cats")).toBeInTheDocument()
  userEvent.click(screen.getByText("Add a New Cat"))
  expect(screen.getByText("Add a New Cat")).toBeInTheDocument()
  userEvent.click(screen.getByText("Adopt a Cat!"))
  expect(screen.getByText("Adopt a Cat!")).toBeInTheDocument()
})
```

The `Footer` component is very similar to `Header` so the same structure of integrations test can be applied.

### Testing Philosophy

There are a lot of complexities to testing. It can also be time consuming and, at times, frustrating. Focusing on writing tests that will prevent bugs and ensure consistent user experience.  Doing this will make you a better developer and your application more functional.

---

### 🐱 Challenge: Cat Tinder Tests

- Create a folder called `__tests__` to store all the test files.
- Add test files for the `Home`, `Header`, `Footer`, and `NotFound` components with a `.test.js` extension.
- Create a test for the `Home` page that ensures the component will render to the browser.
- Create a test for the `NotFound` page that ensures the component will render to the browser.
- Update the `App.test.js` test to ensure the component renders to the browser.
- Create tests for the `Header` component that ensures the component will render to the browser, any images render to the browser, links are clickable.
- Create tests for the `Footer` component that ensures the component will render to the browser and links are clickable.

---

[Back to Syllabus](../../README.md#cat-tinder-frontend)
