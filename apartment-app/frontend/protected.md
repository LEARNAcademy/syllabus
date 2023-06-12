# Apartment App Protected Pages

#### Overview

An application will typically have a combination of pages that are available to all users and pages that are only available to users who have created an account. When creating pages that are not visible to all users we must consider how we allow access and restrict access in the application.

#### Vocabulary

- protected pages

### Troubleshooting Tips

- `console.log` is your friend! Ensure you are able to see the data you expect to see.

---

### Protected Pages

**Protected pages** are views that are only available to a user that is signed in. An app will typically have a mix of pages that a non-logged in user has access to as well as pages that are only available to users who are logged in. Often protected pages will display information specific to that user.

### Protected Data

When a user is signed in to the apartment application, they have access to a page that displays the component `ApartmentProtectedIndex`. This component will display a list of apartments created by the current user. There are two pieces of information needed to populate this page correctly: the id of the current user and the foreign key of the apartments. Using the filter method we can select only the apartments that were created by the current signed in user.

### Protected Links

The apartment application introduces us to authentication, so we want to allow new users to sign up or existing users to log in. We also want to provide a way for logged in users to sign out. To improve the user experience, this means we need to provide different links to users based on their status.  To accomplish this we can use conditional rendering in our `Navigation.js`. Conditional rendering will allow us to display the options to signup or login only when `currentUser` does not exist and display the logout button only once a user has successfully logged in. 

```javascript
    <Nav className="nav">
      {current_user && (
          <NavItem>
            <input type="button" value='Logout' />
          </NavItem>
      )}
      {!current_user && (
        <>
          <NavItem>
            <NavLink to="/login" className="nav-link">
              Log In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/signup" className="nav-link">
              Sign Up
            </NavLink>
          </NavItem>
        </>
      )}
    </Nav>
  ```

Along with the authentication links, we want to allow signed in users to visit their protected pages. We can add links to `ApartmentProtectedIndex` and `New Apartment` to our navigation and include them in our conditional rendering for when a `currentUser` exists.

Remember there are some pages that all users can view regardless of their status. 

### Protected Routes

Conditionally rendering links is the first step to creating and restricting access for users in the application. But to further protect our application and user data we should ensure our routes cannot be accessed directly through the url. This means we need to protect our routes with conditional rendering. There are certain routes that should only exist if a user is signed into the application.

The JavaScript logical AND can be used to create a toggle. When `currentUser` exists, the route to `ApartmentProtectedIndex` will exist. If the `currentUser` value is null, meaning no user is currently signed in, the route will not exist. Manually navigating to the route in the browser url while `currentUser` is null will land the user on the `NotFound` page.

```javascript
{
  currentUser && (
    <Route
      path="/myapartments"
      element={
        <ApartmentProtectedIndex
          currentUser={currentUser}
          apartments={apartments}
        />
      }
    />
  )
}
```

---

### 🏠 Challenge: Apartment App Protected Pages

As a developer, I have been commissioned to create an application where a user can see apartments that are available for rent. As a user, I can see a list of apartments. I can click on an apartment listing and see more information about that apartment. As a user, I can create an account and log in to the application. If I am logged in, I can add an apartment to the list. As a logged in user, I can see a list of all the apartments as well as just the apartments I added. If my work is acceptable to my client, I may also be asked to add the ability to remove an apartment from the list as well as edit the apartment information.

- As a developer, I can create conditionally rendered navigation links for my user to sign up and sign in. When the user is signed in, I can create a conditionally rendered link for the user to sign out.
- As a developer, I can protect the ApartmentProtectedIndex page by creating a conditionally rendered navigation link and protected route.
- As a developer, I can protect the ApartmentNew page by creating a conditionally rendered navigation link and protected route.

### 🏔 Stretch Goals

- As a developer, I can protect the ApartmentEdit page by creating a conditionally rendered navigation link and protected route.

---

[Back to Syllabus](../../README.md#unit-nine-react-and-rails-with-authentication)
