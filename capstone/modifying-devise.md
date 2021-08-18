# Modifying Devise

## Overview
- When we add the Devise gem to a Rails app it comes preset with a database schema for a User model, forms for your user to sign in and sign up, as well as a bunch of security measures behind the scenes.
- This overview assumes the developer has created a Rails application with React components and has added the necessary installs for Devise. More information about installing Devise can be found [ here. ](../react_in_rails/devise.md)

## Additional Resources
- [ Devise Strong Params ](https://github.com/heartcombo/devise#strong-parameters)

## Adding Columns to User
It is possible to modify the User table to add additional columns that the user must add when signing up for the application. This should be done with a migration after generating the User model.

In this example we will add a username column to the User model. Start with creating a migration and updating the migration file.

```
$ rails generate migration add_username_to_user
```

**db/migrate/**
```ruby
class AddUsernameToUser < ActiveRecord::Migration[6.0]
  def change
    # add_column :table, :column_name, :data_type
    add_column :users, :username, :string
  end
end
```

```
$ rails db:migrate
```

Now that we have modified the schema, we need to make sure the username is accepted by the [ Devise strong params. ](https://github.com/heartcombo/devise#strong-parameters). We don't see the Devise strong params directly in the Rails app, but we can have access to all controllers through the *application_controller*.

**app/controllers/application_controller.rb**
```ruby
class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    # pass params for the sign up form
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :email, :password])
    # pass params for the sign in form
    devise_parameter_sanitizer.permit(:account_update, keys: [:username, :email, :password])
  end
end
```

This sets up the necessary code for the model, but now we need to add a form to the sign up page so the user can add a username when creating a new instance in the User model.

## Modifying Devise Forms
In this particular stack, all the user views come from React components with the exception of the Devise forms.

When we add Devise to a Rails app, Devise automatically creates some generic views. These views get pulled from the Devise gem and don't actually exist in the Rails app. To change the views we can override the default form by bringing the Devise forms into your local app.

```
$ rails generate devise:views
```

This command will create an entire folder in views called `devise`. In this directory, there is a set of nested directories. The sign_up form can be found in the `registrations` directory.

We can copy the `div` for email and modify the elements to create an additional input for username.

**app/views/devise/registrations/new.html.erb**
```ruby
<div class="field">
  <%= f.label :username %>
  <%= f.text_field :username, autofocus: true, autocomplete: "username" %>
</div>
```

There is one more housekeeping item to ensure our modified views override the default Devise views.

**config/initializers/devise.rb**
```ruby
# ==> Scopes configuration
# Turn scoped views on. Before rendering "sessions/new", it will first check for
# "users/sessions/new". It's turned off by default because it's slower if you
# are using only default views.


# This line is commented out and set to false.
# config.scoped_views = false

# Update the value to be true:
config.scoped_views = true
```

## Styling Devise Forms
Classes can be added to the tags then accessed in the stylesheet. Note the different syntax between the `html` tags and the `erb` tags.

**app/views/devise/registrations/new.html.erb**
```ruby
<div class="field">
  <%= f.label :username, :class => "form-element" %>
  <%= f.text_field :username, autofocus: true, autocomplete: "username", :class => "form-element" %>
</div>
```

These classes can be referenced in the stylesheet.

**app/assets/stylesheets/application.scss**
```css
.form-element{
  margin: 10px;
}
```

We can also add Bootstap stylings to the form. Remember that Reactstrap is just Bootstrap applied specifically to React components. While we can't use Reactstrap on a Ruby form, we can use the corresponding Bootstrap classes.  

To create local access to the Bootstrap styles, we need to link the stylesheet to each page in the `<head>`. While the page does not currently have a `<head>` tag, we can add one and wrap all the current form tags in the `<body>`.

**app/views/devise/registrations/new.html.erb**
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  </head>

  <body class="form-body">

    <h2>Sign up</h2>

    <div class="login-container">
      <%= form_for(resource, as: resource_name, url: registration_path(resource_name)) do |f| %>
      <%= render "devise/shared/error_messages", resource: resource %>

      <div class="field">
        <%= f.text_field :username, autofocus: true, autocomplete: "username", :class => "form-element", placeholder: "username" %>
      </div>

    (other form code here...)

    </div>

  </body>
</html>
```

If you are adding custom stylings to your Bootstrap classes, use the `!important` attribute.

```css
.class-name{
  attribute: value !important;
}
```

---
[Back to Syllabus](../README.md#unit-ten-capstone-project-mvp)
