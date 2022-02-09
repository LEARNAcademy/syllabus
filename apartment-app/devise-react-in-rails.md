# React IN Rails with Devise

#### Overview
A key component of web applications is the ability for a user to log in. This requires using the Devise gem to create authentication and authorization for a Rails application. Before we move forward with the React portion, we will look at how Devise interacts with a Rails application in combination with a React application that offloads authentication responsibilities to Devise.

#### Previous Lecture (27 min)
[![YouTube](http://img.youtube.com/vi/EONxG_ttNCA/0.jpg)](https://www.youtube.com/watch?v=EONxG_ttNCA)

#### Learning Objectives
- can define authorization
- can define authentication
- can create a User model
- can create a relationship between User and another model
- can render views for log in and sign up
- can define authentication token

#### Additional Resources
- [Authentication vs Authorization](./authentication-vs-authorization.md)
- [Devise](https://github.com/plataformatec/devise)
- [Devise Github Repo](https://github.com/plataformatec/devise#getting-started)

#### Process
- $ `rails new apartment-app -d postgresql -T`
- $ `cd apartment-app`
- $ `rails db:create`
- Add the remote from your GitHub classroom repository
- Create a default branch (main)
- Make an initial commit to the repository
- $ `bundle add rspec-rails`
- $ `rails generate rspec:install`
- $ `bundle add devise`
- $ `rails generate devise:install`
- $ `rails generate devise User`
- $ `bundle add react-rails`
- $ `rails webpacker:install:react`
- $ `rails generate react:install`
- $ `rails generate react:component App`
- $ `rails generate controller Home`
- $ `rails db:migrate`
- $ `rails s`

#### Troubleshooting Tips
Now that we are working in a new stack, the way we find error messages is going to look a little bit different. We are used to getting a browser display when something goes wrong. With this particular stack, we need to look for errors in the console and in the terminal. Any syntax errors or incorrect code anywhere in the React components will prevent `App.js` from compiling. So a mistake is likely to lead to a blank page.

- Stop the server and start it again.
- Did all the setup commands run properly? The commands can be rerun if something isn't working.
- Seeing a blank page? Look for errors in the terminal or inspect your page.
- Errors? Always look at the first error in the list.

---

### Adding mailer settings
You’ll need to set up the default URL options for the Devise mailer in each environment. In the *config/environments/development.rb* file, add the following code at the end of the previous code inside the file:
```ruby
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

Devise is a Rails gem that gives developers a collection of methods that create authorization and authentication. Using Devise, we can create a special model called User that gets Devise code injected into each new model instance. Just by running the setup commands we get Devise sign in and sign up forms as well as a lot of additional functionality that we will explore with the Apartment App challenge.

Navigate to `http://localhost:3000/users/sign_in` and see a log in page.

Navigate to `http://localhost:3000/users/sign_up` and see a sign up page.

### React Component View
Next, we'll add a view and add our React component. In addition to rendering the `App` component in the view, we can pass information from Rails into React. Here we want to pass information down from Devise into our React App:
1. If user is logged in or not
2. The id of the current user
3. Relative URL of signup screen (from Devise)
2. Relative URL of login screen for users who already have an account (from Devise)
3. Relative URL of logout endpoint (also from Devise)

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


### Routing Constraints
You'll recall that Rails has a router, and now that we've added React Router, so does React. You might imagine that these two routers could come into conflict, and that would be correct. We need to clearly separate the Rails routing responsibilities, and the React routing responsibilities. We're building a single page app. This, by definition, means that all HTML traffic goes to just one page. All other types of requests though, will need to be routed by the Rails app. Most important of these, is the JSON and JavaScript traffic that the Rails app must handle, we've been thinking of these requests as API requests from the frontend app to the backend one.

The Rails Router has a convenient feature that we can use to achieve this separation of traffic, all HTML requests go to our React app, and everything else be handled normally.

**config/routes.rb**
```ruby
Rails.application.routes.draw do
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
```
Notice the "constraints" section. This states that all HTML traffic goes to `home#index` our React app.

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
import React, { Component } from 'react'

class App extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return(
      <>
        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
      <>
    )
  }
}

export default App
```

This is good foundational code, but ultimately `App.js` is going to be in charge of "big picture" functionality like routing and fetch calls so it would make more sense to move the `sign_in` and `sign_out` routes to another component like a Header.

---

### Challenge: Apartment App Devise with React
As a developer, I have been commissioned to create an application where a user can see apartments that are available for rent. As a user, I can see a list of apartments. I can click on an apartment listing and see more information about that apartment. As a user, I can create an account and log in to the application. If I am logged in, I can add an apartment to the list. As a logged in user, I can see a list of all the apartments as well as just the apartments I added. If my work is acceptable to my client, I may also be asked to add the ability to remove an apartment from the list as well as edit the apartment information.
- As a developer, I can add React components to my apartment app
- As a developer, I ensure my app distinguishes the difference between JSON and HTML payloads in my routes
- As a user, I can navigate to a log in page
- As a user, I can log out

---
[Back to Syllabus](../README.md#unit-nine-react-in-rails-and-authentication)
