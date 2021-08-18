# Apartment App Devise Introduction

[![YouTube](http://img.youtube.com/vi/ypXAYSn4PqY/0.jpg)](https://www.youtube.com/watch?v=ypXAYSn4PqY)

### Overview
- A key component of web applications is the ability for a user to log in. This requires using the Devise gem to create authentication and authorization for a Rails application.
- Before we move forward with the React portion, we will look at how Devise interacts with a Rails application.

### Learning Objectives
- Understanding the difference between authorization and authentication
- Interacting with the Devise generated User model

### Vocabulary
- authentication
- authorization

### Additional Resources
- [ Authentication vs Authorization ](./authentication-vs-authorization.md)
- [ Devise ](https://github.com/plataformatec/devise)
- [ Devise Github Repo ](https://github.com/plataformatec/devise#getting-started)

### Set Up
Create a new Rails app with RSpec and Devise.
```
$ rails new apartment_app -d postgresql -T
$ cd apartment_app
$ rails db:create
$ bundle add rspec-rails
$ rails generate rspec:install
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ rails db:migrate
```

### Adding mailer settings
You’ll need to set up the default URL options for the Devise mailer in each environment. In the *config/environments/development.rb* file, add the following code at the end of the previous code inside the file:
```
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

Devise is a Rails gem that gives developers a collection of methods that create authorization and authentication. Using Devise, we can create a special model called User that gets Devise code injected into each new model instance. Just by running the setup commands we get Devise sign in and sign up forms as well as a lot of additional functionality that we will explore with the Apartment App challenge.

Navigate to `http://localhost:3000/users/sign_in` and see a log in page.

Navigate to `http://localhost:3000/users/sign_up` and see a sign up page.

### Apartment Resource
The Devise User model is going to have an association with the Apartment model. In this situation, the User will have many apartments and the Apartments will belong to a User.
```
$ rails g resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string user_id:integer
$ rails db:migrate
```

## User and Apartment Associations
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

### Devise Code
Looking around our app, we can see that Devise gets added to a few different spots. 1) The User model, which we already looked at. 2) The controller. This code is predominantly behind the scenes. 3) The routes. We can see that we have a resource for apartments and Devise routes for users.

**config/routes.rb**
```ruby
Rails.application.routes.draw do
  resources :apartments
  devise_for :users
end
```

### Challenge: Apartment App Devise
As a developer, I have been commissioned to create an application where a user can see apartments that are available for rent. As a user, I can see a list of apartments. I can click on an apartment listing and see more information about that apartment. As a user, I can create an account and log in to the application. If I am logged in, I can add an apartment to the list. As a logged in user, I can see a list of all the apartments as well as just the apartments I added. If my work is acceptable to my client, I may also be asked to add the ability to remove an apartment from the list as well as edit the apartment information.

- As a developer, I can create a Rails application with Devise functionality
- As a developer, I can create an Apartment resource with the appropriate attributes
- As a developer, I can create an association between User and Apartments

---
[Back to Syllabus](../README.md#unit-nine-react-in-rails-and-authentication)
