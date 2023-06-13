# Apartment App Connecting Authentication with JWT

#### Overview

At this point we should be fetching the apartments from the database and no longer using mock data. Now we need to look at creating fetch requests that provide the authentication and authorization processes for the user to sign up, log in, or log out. 

#### Vocabulary
- useRef Hook
- FormData


#### Additional Resources
- [useRef Hook](https://react.dev/reference/react/useRef)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)


---
### State Variables

We want to update the values of our initial state variables to interact with our Rails application. Because a user should not be logged in on the first load of our app, we will set `currentUser` to `null` in its useState Hook. We will also set the initial state of `apartments` to an empty array.

**App.js**
```javascript
const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [apartments, setApartments] = useState([])
  
  return(
    // existing code ...
  )
}
```

### Collect Input Data

In order to sign up or log in to the Apartment application, a user must provide credentials by means of an email and a password. As developers, we need a way to collect the data the user inputs from the respective form. React and JavaScript give us methods that simplify this process.

#### useRef Hook

**useRef** is a React Hook that allows us to refer to DOM elements and access them in our code. With useRef, we can create a reference to our signup and login forms, then access the values when we need them by using the `current` property. 

```javascript
// Don't forget your import
import { useRef } from "react"

const Signup = () => {
//First, create a variable using useRef. We want to get the input values from the signup form so we'll name the variable 'formRef'
  const formRef = useRef()
  
  const handleSubmit = () => {
    console.log('sign up')
  }

  return(
    <div>
    {/* Next, use the property `ref` to attach the variable to the form you want to target. */}
     <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name='email' placeholder="email" />
        <br/>
        Password: <input type="password" name='password' placeholder="password" />
        <br/>
        Confirm Password: <input type="password" name='password_confirmation' placeholder="confirm password" />
        <br/>
        <input type='submit' value="Submit" />
    </form>
    <br />
    <div>Already registered, <a href="/login">Login</a> here.</div>
    </div>
  )
}
export default Signup
```
In the above example, we can grab all the input values with `formRef.current`.

#### FormData

Now that we have a way to access the user inputs, we need to package the data in a format `JWT` recognizes. For this we will use the JavaScript built-in object **FormData**. `FormData` allows us to build and manipulate HTML form data before sending it to the server.  It provides a way to create objects containing form fields(keys) and their values(input).  We can pass in our `formRef.current` as an argument when creating a new FormData, then use `Object.fromEntries` to get the values.  We will do all of this in a handleSubmit function that is linked to the form's 'Submit' button:

```javascript
 const handleSubmit = (e) => {
  //stop the default behavior of the form.  We want to send it with fetch.
    e.preventDefault()
    // store the form entries in a variable
    const formData = new FormData(formRef.current)
    // create an object from the entries
    const data = Object.fromEntries(formData)
    // store user's info in format that can be used with JWT.
    const userInfo = {
        "user":{ email: data.email, password: data.password }
    }
}
```
### Login and Signup Functions

When writing our fetch calls for authenticating users, we need to store the token created by JWT.  `localStorage` and its methods will allow us to store, retrieve, and remove the token locally in the user's browser. 

#### localStorage

**localStorage** allows us to store key-value pairs in the form of strings. The data stored remains available even after the user closes the browser or navigates away from the website.  The localStorage property comes with four basic methods:

- `localStorage.setItem(key, value)`: Stores a value in localStorage. The key is a unique identifier for the data, and the value is the actual data you want to store. Both the key and value must be strings.

- `localStorage.getItem(key)`: Retrieves the value associated with a given key from localStorage. It returns null if the key does not exist.

- `localStorage.removeItem(key)`: Removes the item associated with the specified key from localStorage.

- `localStorage.clear()`: Removes all items stored in localStorage, effectively clearing the entire storage.

**Note**: Data must be stored as strings. If you need to store objects or arrays, you need to convert them to strings using JSON.stringify() before storing, and then parse them back to their original format using JSON.parse() when retrieving from localStorage.

We can now use these methods to access our JWT token in our fetch requests for signup, login, and logout.

 ```javascript
  // authentication methods
  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      method: 'POST'
    })
    .then(response => {
        if (!response.ok) {
        throw Error(response.statusText)
      }
    // store the token
    localStorage.setItem("token", response.headers.get("Authorization"))
    return response.json()
  })
  .then(payload => {
    setCurrentUser(payload)
  })
  .catch(error => console.log("login errors: ", error))
  }

  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      method: 'POST'
    })
    .then(response => {
        if (!response.ok) {
        throw Error(response.statusText)
      }
      // store the token
    localStorage.setItem("token", response.headers.get("Authorization"))
    return response.json()
  })
  .then(payload => {
    setCurrentUser(payload)
  })
  .catch(error => console.log("login errors: ", error))
  }
  ```

  ```javascript
  const logout = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": 'application/json',
        "Authorization": localStorage.getItem("token") //retrieve the token 
      },
      method: 'DELETE'
    })
    .then(payload => {
    localStorage.removeItem("token")  // remove the token
    setCurrentUser(null)
  })
  .catch(error => console.log("log out errors: ", error))
  }
  ```

  

---

[Back to Syllabus](../../README.md#unit-nine-react-and-rails-with-authentication)
