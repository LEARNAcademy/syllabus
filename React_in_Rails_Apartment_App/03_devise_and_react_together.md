# Devise and React together
This example combines what we've learned about Devise with what we've learned about React to build a react application that offloads authentication responsibilities to Devise.

![devise and react together](./assets/devise-react-structure.jpg)

## Starting App

You can start with any application that does not yet use Devise or Webpacker for React.  If you are starting from scratch, you can create a new app now:
```bash
$ rails new devise_and_react_app -T -d postgresql
```

For More detailed Description of setting up devise: [Check here](./02-authorization-and-authentication/03_devise.md)
### Add Devise
```bash
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ rails db:migrate
```

Be sure and follow the instructions that Devise provides.



## Add React
For More detailed Description of setting up React: [Check here](./01-react-in-rails/02_Hello_World.md)

### React Setup
```bash
$ bundler add webpacker
$ bundler add react-rails
$ bundle install
$ rails webpacker:install
$ rails webpacker:install:react
$ rails generate react:install
```

### Add Webpack to the Rails Application Layout
#### /app/views/layouts/application.html.erb
```html
<%= javascript_pack_tag 'application' %>
```

### Generate a new React component
```bash
$ rails g react:component MainApp
```
Feel free to customize your component as needed.


## Add a homepage

```bash
$ rails g controller Pages
```

### Add a route for the homepage
#### config/routes.rb
```result
       1	Rails.application.routes.draw do
       2          devise_for :users
       3	  get '*path', to: 'pages#root', constraints: ->(request){ request.format.html? }
       4	  root to: 'pages#root'
       5	end
```
This route directs all html traffic to the 'pages#root' route, but ignores non html traffic, like our api requests will be.  That is perfect to interact with the React router eventually if and when that gets added to your app.

### Add homepage and React Component
Next, we'll add a homepage view, and add our react component to it.  We want to pass three pieces of information down from Rails into our React App.
1) If user is logged in or not
2) Relative URL of login screen (from Devise)
3) Relative URL of logout endpoint (also from Devise)

#### app/views/pages/homepage.html.erb
```result
<%= react_component("MainApp", {
    logged_in: user_signed_in?,
    sign_in_route: new_user_session_path,
    sign_out_route: destroy_user_session_path
}) %>
```

### Login/Logout button
With login status and routes in our React component, we can now add a button to log the user out or in.

First we need to instruct Devise to listen for logout requests via GET instead of the default DELETE.  We do that in Devise's config file:

#### config/initializers/devise.rb
```ruby
# Find this line:
config.sign_out_via = :delete
# and replace it with this:
config.sign_out_via = :get
```

This example puts the button in MainApp.  You may choose to pass those props to another component, and place the buttons there.


#### app/javascript/components/MainApp.js
```ruby
import React from "react"
import PropTypes from "prop-types"

class MainApp extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default MainApp
```
