# Apartment App

#### Overview
As a developer, I have been commissioned to create an application where a user can see apartments that are available for rent. As a user, I can see a list of apartments. I can click on an apartment listing and see more information about that apartment. As a user, I can create an account and log in to the application. If I am logged in, I can add an apartment to the list. As a logged in user, I can see a list of all the apartments as well as just the apartments I added. If my work is acceptable to my client, I may also be asked to add the ability to remove an apartment from the list as well as edit the apartment information.

#### Learning Objectives
- can pass authentication routes to a view
- can distinguish between protected and unprotected pages
- can distinguish between views for authentication/authorization and views for user CRUD actions

#### Process
- $ `rails new apartment-app -d postgresql -T`
- $ `cd apartment-app`
- $ `rails db:create`
- Add the remote from your GitHub classroom repository
- Create a default branch (main)
- Make an initial commit to the repository

#### Troubleshooting Tips
With this particular stack we need to look for errors in the console and in the terminal. Any syntax errors or incorrect code anywhere in the React components will prevent `App.js` from compiling. So a mistake is likely to lead to a blank page.

- Stop the server and start it again.
- Did all the setup commands run properly? The commands can be rerun if something isn't working.
- Seeing a blank page? Look for errors in the terminal or inspect your page.
- Errors? Always look at the first error in the list.
- Need to check your routes? Run $ `rails routes` in the terminal.

---

### Apartment App

### Adding RSpec
- $ `bundle add rspec-rails`
- $ `rails generate rspec:install`

### Adding React
- $ `bundle add webpacker`
- $ `bundle add react-rails`
- $ `rails webpacker:install`
- $ `rails webpacker:install:react`
- $ `yarn add @babel/preset-react`
- $ `yarn add @rails/activestorage`
- $ `yarn add @rails/ujs`
- $ `rails generate react:install`
- $ `rails generate react:component App`

### Adding Devise
- $ `bundle add devise`
- $ `rails generate devise:install`
- $ `rails generate devise User`
- $ `rails db:migrate`
- Add the following:

**config/environments/development.rb**
```ruby
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

- Add the following:

**config/initializers/devise.rb**
```ruby
# Find this line:
config.sign_out_via = :delete
# And replace it with this:
config.sign_out_via = :get
```

### Rails Routing
- $ `rails generate controller Home`
- Add a file in *app/views/home* called *index.html.erb*
- Add the following:

**app/views/home/index.html.erb**
```html
<%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>
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
get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
root 'home#index'
```

### React Routing
- $ `yarn add react-router-dom@5.3.0`

**app/javascript/components/App.js**
```javascript
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
```

### Adding Reactstrap
- $ `bundle add bootstrap`
- $ `mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss`
- $ `yarn add reactstrap`

**app/assets/stylesheets/application.scss**
```css
@import 'bootstrap';
```

### Apartment Resource
The Devise User model is going to have an association with the Apartment model. In this situation, the User will have many apartments and the Apartments will belong to a User.

- $ `rails g resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string image:text user_id:integer`
- $ `rails db:migrate`

### User and Apartment Associations
The Apartments will belong to a User and a User will have many apartments.

**app/models/apartment.rb**
```ruby
class Apartment < ApplicationRecord
  belongs_to :user
end
```

**app/models/user.rb**
```ruby
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :apartments
end
```

### Getting Started with React
To keep the files organized, it is a good practice to create three directories in your React application: assets, components, and pages.

We want to ensure the Devise data is getting to `App.js` properly. We can write some code that will be removed once we further the development process. We can destructure the values out of props and log the data.

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
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    console.log("new_user_route:", new_user_route)
    console.log("sign_in_route:", sign_in_route)
    console.log("sign_out_route:", sign_out_route)
    return(
      <>
        <h1>Apartment App</h1>
      </>
    )
  }
}

export default App
```

---

### Challenge

As a developer, I have been commissioned to create an application where a user can see apartments that are available for rent. As a user, I can see a list of apartments. I can click on an apartment listing and see more information about that apartment. As a user, I can create an account and log in to the application. If I am logged in, I can add an apartment to the list. As a logged in user, I can see a list of all the apartments as well as just the apartments I added. If my work is acceptable to my client, I may also be asked to add the ability to remove an apartment from the list as well as edit the apartment information.

**Story:** As an unregistered user, I can see a landing page with information about the application.

**Story:** As an unregistered user, I can see the navigation options for a page with all the apartment listings, a page where I can create an account, and always get back to the home page.

**Story:** As an unregistered user, I can navigate to a page that shows me a list of all the apartments available for rent.

**Story:** As an unregistered user, I can select one available apartment and view its details.

**Story:** As a user, I can register to create an account on the web application, login to my existing account, and logout.

**Story:** As a logged in user, I can see a list of all the apartments I have available for rent.

**Story:** As a logged in user, I can fill out a form that will allow me to create a new listing of an apartment.

**Story:** As a logged in user, I can edit the information for the apartments I have created, but I cannot edit the information for apartments created by someone else.

**Story:** As a logged in user, I can delete an apartment I have created, but I cannot delete apartments created by someone else.

---
[Back to Syllabus](../README.md#unit-nine-react-in-rails-and-authentication)
