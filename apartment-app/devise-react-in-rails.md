# Apartment App Devise with React

### Video: Devise and React
[![YouTube](http://img.youtube.com/vi/96Kd2dCsXm8/0.jpg)](https://www.youtube.com/watch?v=96Kd2dCsXm8)

[![YouTube](http://img.youtube.com/vi/qHC8NEDlB8U/0.jpg)](https://www.youtube.com/watch?v=qHC8NEDlB8U)

### Overview
- This example combines what we've learned about Devise with what we've learned about React to build a React application that offloads authentication responsibilities to Devise.

### Learning Objectives
- Passing content from Devise to the React components
- Differentiating the React pages from the Devise forms

### Set Up React Components
```
$ bundle add react-rails
$ rails webpacker:install
$ rails webpacker:install:react
$ rails generate react:install
$ rails generate react:component App
$ rails generate controller Home
```

### React Component View
Next, we'll add a view and add our React component. In addition to rendering the "App" component in the view, we can pass information from Rails into React. Here we want to pass information down from Devise into our React App:
1. If user is logged in or not
2. The id of the current user
3. Relative URL of signup screen (from Devise)
2. Relative URL of login screen for users who already have an account (from Devise)
3. Relative URL of logout endpoint (also from Devise)

**app/views/home/index.html.erb**
```
<%= react_component "App", {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>
```

### Routes and Constraints
We need to clearly separate the Rails routing responsibilities, and the React routing responsibilities. We also need to route the `index.html.erb` page to the root.

**config/routes.rb**
```ruby
Rails.application.routes.draw do
  resources :apartments
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
```
This route directs all HTML traffic to the 'home#index' route, but ignores non HTML traffic, like our API requests. That is perfect to interact with the React router.

### Additional React Components
At this point, there is only one React component in the application. Just like in a regular React App, our project will have many, many components. To keep the files organized, it is a good practice to create three directories in your React application: assets, components, and pages.

**Assets**  
The assets directory is used to store image files used in your application.

**Components**  
The components directory is for helper components such as headers, footers, and buttons.

**Pages**  
The pages directory is for full views. The full view can consist of items from the assets and components directory as well the code unique to a page.

### Login/Logout Button
With login status and routes in our React component, we can now add a button to log the user out or in.

First we need to instruct Devise to listen for logout requests via GET instead of the default DELETE. We do that in Devise's config file:

**config/initializers/devise.rb**
```ruby
# Find this line:
config.sign_out_via = :delete
# and replace it with this:
config.sign_out_via = :get
```

To start, let's look at creating the buttons directly in `App.js` then break them out into another component. The first thing is bringing in the three pieces of information that get passed from devise to "App" in *index.html.erb*.

That is followed with some conditional rendering to display the appropriate link depending on if the user is logged in or logged out.

**app/javascript/components/App.js**
```javascript
import React from "react"
import PropTypes from "prop-types"

class App extends React.Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <React.Fragment>
        { logged_in &&
          <div>
            <a href={sign_out_route }>Sign Out</a>
          </div>
        }
        { !logged_in &&
          <div>
            <a href={ sign_in_route }>Sign In</a>
          </div>
        }
      </React.Fragment>
    )
  }
}

export default App
```

This is good foundational code, but ultimately `App.js` is going to be in charge of "big picture" functionality like routing and fetch calls so it would make more sense to move the sign_in and sign_out routes to another component like a Header or Nav.


### Challenge: Apartment App Devise with React
As a developer, I have been commissioned to create an application where a user can see apartments that are available for rent. As a user, I can see a list of apartments. I can click on an apartment listing and see more information about that apartment. As a user, I can create an account and log in to the application. If I am logged in, I can add an apartment to the list. As a logged in user, I can see a list of all the apartments as well as just the apartments I added. If my work is acceptable to my client, I may also be asked to add the ability to remove an apartment from the list as well as edit the apartment information.
- As a developer, I can add React components to my apartment app
- As a developer, I ensure my app distinguishes the difference between JSON and HTML payloads in my routes
- As a user, I can navigate to a log in page
- As a user, I can log out

---
[Back to Syllabus](../README.md#unit-nine-react-in-rails-and-authentication)
