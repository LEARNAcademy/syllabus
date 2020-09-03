# Modifying Devise

## Overview
- When you add the Devise gem to your Rails app, if comes preset with a database schema, forms for your user to sign in and sign up, as well as a bunch of security measures behind the scenes.

Modifying Devise log in and log out pages in a React in Rails app.

In this particular stack, all the user views come from a React


When you add Devise to a Rails app, Devise automatically creates some generic views. These views get pulled from the Devise gem and don't actually exist in the Rails app.

But if you want to change the views you can override the default form by bringing the Devise forms into your local app.

$ rails generate devise:views

You will get an entire folder in views called 'devise':
- The login form is sessions/new.html.erb
- The signup form is registrations/new.html.erb
- Forgot password is registrations/edit.html.erb

You can use the bootstrap version of Reactstrap components in your ruby form

Link your bootstrap style sheet to the head of your doc
(create a head/body of the document)
- can add inline styling
- can add a class, in ruby it is :class => 'class-name'

- override bootstap with !important
attribute: value !important;



## Adding Columns to User

- migration, always a migration

class AddNameToUser < ActiveRecord::Migration[6.0]
  def change
    # add_column :users, :email, :string
    add_column :users, :username, :string
    add_index :users, :username, unique: true
  end
end


- must modify strong params through the application controller, all this code is referencing a bunch of built in devise methods
- one for sign up and one for edit

https://github.com/heartcombo/devise#strong-parameters

class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :email, :password])
    devise_parameter_sanitizer.permit(:account_update, keys: [:username, :email, :password])
  end
end


autofocus: true - highlights the first input in a form set

/config/initializers/devise.rb
```
# ==> Scopes configuration
# Turn scoped views on. Before rendering "sessions/new", it will first check for
# "users/sessions/new". It's turned off by default because it's slower if you
# are using only default views.
# config.scoped_views = false
```
