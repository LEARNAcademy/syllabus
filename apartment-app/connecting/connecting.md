# Apartment App Connecting Authentication with JWT

#### Overview

Development will always occur in stages. During the initial development of the Apartment App each side of the application used mock data to support the development process. Now it is time to connect the frontend and backend of the Apartment App project. This means removing the reliance on mock data and considering the mechanics of authentication so the users will have the ability to sign up, log in, and log out.

#### Previous Lecture (1 hour 12 min)

[![YouTube](http://img.youtube.com/vi/bLtp2MKzi7o/0.jpg)](https://www.youtube.com/watch?v=bLtp2MKzi7o)

#### Vocabulary

- useRef React hook
- FormData
- localStorage

#### Additional Resources

- [useRef Hook](https://react.dev/reference/react/useRef)
- [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

### Connecting React and Rails API

Connecting the frontend and backend of Apartment App requires making fetch requests from the React frontend to the Rails API. For the apartment CRUD actions this processes looks very similar to the fetch actions performed in Cat Tinder. However, when we are dealing with user credentials we need to be thoughtful about how that data is passed between applications. When a user first signs up, we need to send their username and password to the Rails API where it will be stored as a new instance in the database. To authenticate an existing user (log in) we need to send the user's email and password to the Rails API and perform a check against existing users in the database. If the credentials match, a token will be created and passed back to the React application. This token remains valid during the current user session and will authorize the user to see certain protected pages. Once the user logs out, the session token is invalidated.

### Initial State Variables

Now that we have removed mock data from the React application we need to reestablish the initial state values for `currentUser`. When a user first navigates to the application, by default, they are not logged in. This means the value of `currentUser` should start as `null`. The removal of mock apartment data also mean we should set the initial value of the `apartments` state variable to an empty array.

**src/App.js**

```javascript
const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [apartments, setApartments] = useState([])

  return (
    // existing code ...
  )
}
```

### Collect Input Data

In order to sign up or log in to our Apartment App, a user must provide credentials by means of an email and a password. As developers, we need a way to collect the data the user inputs from the respective form. React and JavaScript give us methods that simplify this process.

**useRef** is a React hook that allows us to access elements from the DOM and persist those values between renders. With `useRef` we can create a reference to our sign up and log in forms then access the values entered in those form fields as needed by using the `current` property.

**src/pages/Signup.js**

```javascript
// Don't forget your import
import { useRef } from "react"

const Signup = () => {
  // First, create a variable using useRef. We want to get the input values from the signup form so we'll name the variable 'formRef'
  const formRef = useRef()

  const handleSubmit = () => {
    console.log("sign up")
  }

  return (
    <div>
      {/* Next, use the property `ref` to attach the variable to the form you want to target. */}
      <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name="email" placeholder="email" />
        <br />
        Password:{" "}
        <input type="password" name="password" placeholder="password" />
        <br />
        Confirm Password:{" "}
        <input
          type="password"
          name="password_confirmation"
          placeholder="confirm password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <div>
        Already registered, <a href="/login">Login</a> here.
      </div>
    </div>
  )
}
export default Signup
```

In the above example, we can grab all the input values with `formRef.current`.

#### Packaging Form Data

Now that we have a way to access the user inputs, we need to package the data in a format `JWT` recognizes. For this we will use a JavaScript object called `FormData`. **FormData** allows us to build and manipulate HTML form data before sending it to the Rails API. `FormData` provides a way to create objects containing form fields (keys) and their values(input). We can pass in `formRef.current` as an argument when creating a new `FormData`, then use `Object.fromEntries` to access the values. We will do all of this in a `handleSubmit` function that is linked to the submit form button.

**src/pages/Signup.js**

```javascript
const handleSubmit = (e) => {
  // preventDefault stops the default behavior of the form which will allow us to send the data with fetch
  e.preventDefault()
  // store the form entries in a variable
  const formData = new FormData(formRef.current)
  // create an object from the entries
  const data = Object.fromEntries(formData)
  // store user's info in format that can be used with JWT
  const userInfo = {
    user: { email: data.email, password: data.password }
  }
}
```

### Login and Signup Functions

When writing fetch calls for authenticating users, we need to store the token created by JWT. **localStorage** allows us to store key-value pairs in the form of strings and provides methods to store, retrieve, and remove the token locally in the user's browser. The data stored remains available until the user clears the browser cache or the website clears the storage.

The localStorage property comes with four basic methods:

- `localStorage.setItem(key, value)`: Stores a value in `localStorage`. The key is a unique identifier for the data, and the value is the actual data you want to store. Both the key and value must be strings.
- `localStorage.getItem(key)`: Retrieves the value associated with a given key from `localStorage`. It returns null if the key does not exist.
- `localStorage.removeItem(key)`: Removes the item associated with the specified key from `localStorage`.
- `localStorage.clear()`: Removes all items stored in `localStorage`, effectively clearing the entire storage.

**Note**: Data must be stored as strings. When dealing with data structures such as objects or arrays we will need to convert them to strings using JSON.stringify() before storing. It is also necessary to parse them back to their original format using JSON.parse() when retrieving from `localStorage`.

We can now use these methods to access our JWT in the fetch requests for sign up, log in, and log out.

**src/App.js**

```javascript
// authentication methods
const login = (userInfo) => {
  fetch(`${url}/login`, {
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    method: "POST"
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      // store the token
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then((payload) => {
      setCurrentUser(payload)
    })
    .catch((error) => console.log("login errors: ", error))
}

const signup = (userInfo) => {
  fetch(`${url}/signup`, {
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    method: "POST"
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      // store the token
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then((payload) => {
      setCurrentUser(payload)
    })
    .catch((error) => console.log("login errors: ", error))
}

const logout = () => {
  fetch(`${url}/logout`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token") //retrieve the token
    },
    method: "DELETE"
  })
    .then((payload) => {
      localStorage.removeItem("token") // remove the token
      setCurrentUser(null)
    })
    .catch((error) => console.log("log out errors: ", error))
}
```

Now we can pass these functions into the appropriate components and call them in the `eventHandler` functions we have established.

**src/App.js**

```javascript
<Header current_user={currentUser} logout={logout} />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login login={login} />} />
  <Route path="/signup" element={<Signup signup={signup}/>} />
  {/* other routes... */}
```

**src/pages/Signup.js**

```javascript
const handleSubmit = (e) => {
  {
    /* ... */
  }

  signup(userInfo)
  navigate("/")
  e.target.reset() // resets the input field
}
```

**src/components/Navigation.js**

```javascript
const handleClick = () => {
  logout()
  navigate("/")
}
```

### Persist Current User

Having the initial state of `currentUser` set to `null` will cause the user to be logged out if the user manually refreshes the browser. To solve this problem we can add the user information to `localStorage` after it is retreived at signup and login. We will also want to remove the user when they sign out.

**src/App.js**

```javascript
const login = (userInfo) => {
  // existing fetch method ...

.then((payload) => {
  //add the following line
  localStorage.setItem("user", JSON.stringify(payload))
  setCurrentUser(payload)
})
  // ...

const signup = (userInfo) => {
  // existing fetch method ...

.then((payload) => {
  //add the following line
  localStorage.setItem("user", JSON.stringify(payload))
  setCurrentUser(payload)
})
  // ...

const signout = (id) => {
  // existing fetch method ...

.then((payload) => {
  localStorage.removeItem("token")
  //add the following line
  localStorage.removeItem("user")
  setCurrentUser(null)
  })
  // ...

```

Then we can create a function that checks if a user exists and set the state to the logged in user if it does. This function will live in the `useEffect` hook.

**src/App.js**

```javascript
useEffect(() => {
  const loggedInUser = localStorage.getItem("user")
  if (loggedInUser) {
    setCurrentUser(JSON.parse(loggedInUser))
  }
  readApartments()
}, [])
```

---

[Back to Syllabus](../../README.md#unit-nine-react-and-rails-with-authentication)
