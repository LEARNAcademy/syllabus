# React IN Rails with Devise

#### Overview

A key component of web applications is the ability for a user to log in. This requires a developer to consider both authentication and authorization. When working in a Rails application we have access to the Devise gem that will handle the necessary user views as well as the security. Since Devise is designed to work with Rails, we need to consider the division of responsibilities between the React portion of the application and responsibilities allocated to Devise.

#### Previous Lecture (1 hour 9 min)

[![YouTube](http://img.youtube.com/vi/PPrJ_UrbjFg/0.jpg)](https://youtu.be/PPrJ_UrbjFg)

#### Learning Objectives

- can define authorization
- can define authentication
- can create a User model
- can create a relationship between User and another model
- can render views for log in and sign up
- can define authentication token

#### Vocabulary

- Devise
- user session
- protected pages

#### Additional Resources

- [Authentication vs Authorization](./authentication-vs-authorization.md)
- [Devise Cheatsheet](https://devhints.io/devise)
- [Devise Github Repo](https://github.com/plataformatec/devise#getting-started)

#### Process

- $ `rails new react-in-rails-with-devise -d postgresql -T`
- $ `cd react-in-rails-with-devise`
- $ `rails db:create`
- $ `bundle add webpacker`
- $ `bundle add react-rails`
- $ `rails webpacker:install`
- $ `rails webpacker:install:react`
- $ `yarn add @babel/preset-react`
- $ `yarn add @rails/activestorage`
- $ `yarn add @rails/ujs`
- $ `rails generate react:install`
- $ `rails generate react:component App`
- $ `rails generate controller Home index`
- In the file `app/views/home/index.html.erb` add the following:

**app/views/home/index.html.erb**

```html
<%= react_component 'App' %>
```

- Add the following:

**app/views/layouts/application.html.erb**

```javascript
// Find this line:
<%= javascript_importmap_tags %>

// And replace it with this:
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```

- Add the following:

**config/routes.rb**

```ruby
Rails.application.routes.draw do
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
```

#### Troubleshooting Tips

Now that we are working in a new stack, the way we find error messages is going to look a little bit different. We are used to getting a browser display when something goes wrong. With this particular stack, we need to look for errors in the console and in the terminal. Any syntax errors or incorrect code anywhere in the React components will prevent `App.js` from compiling. So a mistake is likely to lead to a blank page.

- Stop the server and start it again.
- Did all the setup commands run properly? The commands can be rerun if something isn't working.
- Seeing a blank page? Look for errors in the terminal or inspect your page.
- Errors? Always look at the first error in the list.

---

### Adding Devise

**Devise** is a Rails gem that gives developers a collection of methods that create authorization and authentication. Using Devise, we can create a special model called User that gets Devise code injected into each new model instance. Just by running the setup commands we get Devise sign in and sign up forms as well as a lot of additional functionality.

- $ `bundle add devise`
- $ `rails generate devise:install`
- $ `rails generate devise User`
- $ `rails db:migrate`

And with those simple commands, we now have the ability to create users in the database and allow those users to log in.

### Sign In and Sign Up

Devise creates a set of Ruby `html.erb` views that allow the user to see various forms. As we know, form pages are triggered by a `get` request that displays a page for users to enter information that can be posted to the database. In order to create a User instance in the database, we need to collect a username, password, and password confirmation. The `users/sign_up` route will give us the appropriate form and when submitted successfully will post to the database and create a new instance of User.

- Navigate to `http://localhost:3000/users/sign_up` and see a sign up page.

Once a user exists in the database, we want allow the user to sign in. This action is also considered a post request and therefore requires a corresponding form. When the user is logged in, we have created a user session. A **user session** means that a user has been authorized by submitting the correct credentials. During a user session, a token is added to every new request the user makes. This token can be used to authenticate which pages are available to this particular user.

- Navigate to `http://localhost:3000/users/sign_in` and see a log in page.

### Protected Pages

**Protected pages** are views that are only available to a user that is logged in. An app will typically have a mix of pages that a non-logged in user can see and ones that are only available to users who are logged in. Often protected pages will display information specific to that user.

### React Component View

While Devise will handle the forms for the user sign up and sign in, the rest of the views will come from React. Some of these views will be protected pages. To create a protected page we are going to need some information about the user. To make this information available to the React side of our app, we can pass information from Rails and Devise into the React App.js component. Specifically we want to have access to:

1. If user is logged in or not
2. The id of the current user
3. Relative url of signup form (from Devise)
4. Relative url of login form for users who already have an account (from Devise)
5. Relative url of logout endpoint (also from Devise)

**app/views/home/index.html.erb**

```
<%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>
```

This object is a set of keys defined by the developer and corresponding values that come from Devise. This object is being passed into App.js. We then have access to the object through props. We can then use some logs to see the data we have are able to access.

**app/javascript/components/App.js**

```javascript
import React from "react"

const App = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  console.log("logged_in:", logged_in)
  console.log("current_user:", current_user)
  console.log("new_user_route:", new_user_route)
  console.log("sign_in_route:", sign_in_route)
  console.log("sign_out_route:", sign_out_route)
  return (
    <>
      <h1>React in Rails with Devise</h1>
    </>
  )
}

export default App
```

### Additional Configurations

There are a couple more configurations we will need to make our app work properly with Devise. The first one is to set up the default url options for the Devise mailer in our development environment. Add the following code near the other mailer options:

**config/environments/development.rb**

```ruby
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

Secondly, we need to instruct Devise to listen for logout requests via a `get` request instead of the default `delete`. We do that in Devise's config file:

**config/initializers/devise.rb**

```ruby
# Find this line:
config.sign_out_via = :delete
# And replace it with this:
config.sign_out_via = :get
```

### Additional React Components

At this point, there is only one React component in the application. Just like in a regular React App, our project will have many, many components. To keep the files organized, it is a good practice to create three directories in your React application: assets, components, and pages.

**Assets**  
The assets directory is used to store image files used in your application.

**Components**  
The components directory is for helper components such as headers, footers, and buttons.

**Pages**  
The pages directory is for full views. The full view can consist of items from the assets and components directory as well the code unique to a page.

### Login/Logout Button

Now that Devise is configured and our Rails app is supporting the React App.js component, we can look at how the user flow will be handled in the application. The forms for Devise are coming from the Rails side of the application, but everything else including the navigation links will come from React. To see this exchange, let's build out some basic navigation in a Header component.

App.js will only be in change of "big picture" logic. All the UI will be handled by other components. The Header component will need access to all the data being passed from Devise. We can use the spread operator to pass all the data coming into App.js on to Header.

**app/javascript/components/App.js**

```javascript
import React from "react"
import Header from "./components/Header"

const App = (props) {
  return (
    <>
      <Header {...props} />
    </>
  )
}

export default App
```

The Header component will be displaying navigation information as well as any text or image headings desired by the developer. The navigation can include internal links to other React components as well as the routes to the Devise forms. We can use Reactstrap to add some stylings.

- $ `bundle add bootstrap`
- $ `mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss`
- $ `yarn add reactstrap`

**app/assets/stylesheets/application.scss**

```css
@import "bootstrap";
```

The Header component will receive the data passed into the component call. We can make referencing these values easier by destructing them out of props. Since `logged_in` is a Boolean value, we can create some conditional rendering to show the appropriate navigation links to Devise depending on whether the user is logged in or not.

**app/javascript/components/components/Header.js**

```javascript
import React from "react"
import { Nav, NavItem } from "reactstrap"

const Header = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  console.log("logged_in:", logged_in)
  console.log("current_user:", current_user)
  console.log("new_user_route:", new_user_route)
  console.log("sign_in_route:", sign_in_route)
  console.log("sign_out_route:", sign_out_route)
  return (
    <Nav>
      <NavItem>
        <a href={sign_in_route} className="nav-link">
          Sign In
        </a>
      </NavItem>
      <NavItem>
        <a href={sign_out_route} className="nav-link">
          Sign Out
        </a>
      </NavItem>
    </Nav>
  )
}

export default Header
```

---

### Challenge

Follow these instructions to create your own React in Rails application with Devise.

---

[Back to Syllabus](../README.md#unit-nine-react-in-rails-and-authentication)
