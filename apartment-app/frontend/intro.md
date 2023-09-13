# Apartment App React Configurations

#### Overview

The frontend of Apartment App is a React application with multiple pages. While in development, the frontend will require mock data for both users and apartments. The mock data will allow us to build the React file structure and create pleasant styling for our future full-stack application.

#### Previous Lecture (37 min)

[![YouTube](http://img.youtube.com/vi/U5cfVXmxMuY/0.jpg)](https://www.youtube.com/watch?v=U5cfVXmxMuY)

#### Additional Resources

- [Reactstrap](https://reactstrap.github.io/)
- [React Router](https://reactrouter.com/en/main)
- [Canva](https://www.canva.com/)

#### Process

- $ `yarn create react-app apartment-app-frontend`
- $ `cd apartment-app-frontend`
- $ `yarn add react-router-dom`
- $ `yarn add bootstrap`
- $ `yarn add reactstrap`
- Add to `src/index.js`: `import 'bootstrap/dist/css/bootstrap.min.css'`
- $ `yarn start`
- Add the remote from your GitHub classroom repository
- Create a default branch (main)
- Make an initial commit to the repository
- Ask your instructors for branch protection

#### Troubleshooting Tips

- Did all the installs run properly?

---

### Apartment App Configurations

At this stage in development, the frontend application is not connected to the Rails API. However, it is very important to understand the data structure of what will eventually populate the React views and replicate that structure in mock data. Using mock data will allow us to build the structure of the frontend application and create and style our pages.

### React Router

Since React is an SPA (single page application) by default, we will have yarn add the very popular third-party library for navigation. Remember that React Router isn't a true router. The React Router isn't making full request-response cycles it is just swapping out component views based on the url. A good rule of thumb is if the browser is reloading the page during React navigation, something is likely setup incorrectly.

To enable routing in our application we need to add the `BrowserRouter` component to `index.js`. The `BrowserRouter` component will get imported from the React Router library. Then `BrowserRouter` tags will wrap the `App.js` component invocation.

**src/index.js**

```javascript
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom" // add this import

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```

### Mock Data

When creating mock data in React, it is important to include the primary keys as well as the foreign keys that belong to each data instance in the Rails API.

We can create two mock files: one for users and one for apartments.

**src/mockUsers.js**

```javascript
let mockUsers = [
  {
    id: 1,
    email: "test1@example.com",
  },
  {
    id: 2,
    email: "test2@example.com",
  },
  {
    id: 3,
    email: "test3@example.com",
  },
]

export default mockUsers
```

User passwords can be excluded from the mock data since Devise will ensure they are not available to view.

**src/mockApartments.js**

```javascript
let mockApartments = [
  {
    id: 1,
    street: "101 Rimrock",
    unit: "9A",
    city: "San Diego",
    state: "CA",
    square_footage: 500,
    price: "1800",
    bedrooms: 2,
    bathrooms: 2.0,
    pets: "yes!",
    image:
      "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    user_id: 1,
  },
  {
    id: 2,
    street: "720 Second Avenue",
    unit: "508",
    city: "San Diego",
    state: "CA",
    square_footage: 700,
    price: "2500",
    bedrooms: 2,
    bathrooms: 2.0,
    pets: "yes!",
    image:
      "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    user_id: 1,
  },
  {
    id: 2,
    street: "415 Rainbow Street",
    unit: "3B",
    city: "San Diego",
    state: "CA",
    square_footage: 400,
    price: "2000",
    bedrooms: 1,
    bathrooms: 2.0,
    pets: "small pets okay",
    image:
      "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    user_id: 2,
  },
]

export default mockApartments
```

Both of these files can be imported to `App.js` and set in state. Only one user will be logged into the application at a time, so we can reference one user from the users array when setting the initial value in state.

**src/App.js**

```javascript
import React, { useState } from "react"
import mockUsers from "./mockUsers.js"
import mockApartments from "./mockApartments.js"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)

  return (
    <>
      <h3>Apartment App</h3>
    </>
  )
}
```

### React File Structure

It is a good practice to organize all our React components into three directories within `src`: assets, components, and pages. We will also need a directory for our test files.

**Assets**
The assets directory is used to store image files.

**Components**
The components directory is for helper components such as headers, footers, and buttons.

**Pages**
The pages directory is for full views. The full view can consist of items from assets as well as other components along with whatever code is needed for the individual page.

**`__tests__`**
The test folder will hold all the React Testing Library tests for the application.

---

### 🏠 Challenge: Apartment App React Configurations

As a developer, I have been commissioned to create an application where a user can see apartments that are available for rent. As a user, I can see a list of apartments. I can click on an apartment listing and see more information about that apartment. As a user, I can create an account and log in to the application. If I am logged in, I can add an apartment to the list. As a logged in user, I can see a list of all the apartments as well as just the apartments I added. If my work is acceptable to my client, I may also be asked to add the ability to remove an apartment from the list as well as edit the apartment information.

- As a developer, I can create a new React application.
- As a developer, I can add React Router dependencies and configurations.
- As a developer, I can add Reactstrap dependencies.
- As a developer, I can create mock data for users and apartments and set the data to state in the App.js component.
- As a developer, I can create the Header and Footer components with enough code to ensure the components render.
- As a developer, I can create the Home and NotFound pages with enough code to ensure the components render.
- As a developer, I can create the SignIn and SignUp pages with enough code to ensure the components render.
- As a developer, I can create the ApartmentIndex and ApartmentProtectedIndex pages with enough code to ensure the components render.
- As a developer, I can create the ApartmentShow and ApartmentNew pages with enough code to ensure the components render.
- As a developer, I can define routes to all the pages in my application.

### 🏔 Stretch Goals

- As a developer, I can create the ApartmentEdit page with enough code to ensure the component render.

---

[Back to Syllabus](../../README.md#unit-nine-react-and-rails-with-authentication)
