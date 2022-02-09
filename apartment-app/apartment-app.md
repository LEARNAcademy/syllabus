# Apartment App

#### Overview
As a developer, I have been commissioned to create an application where a user can see apartments that are available for rent. As a user, I can see a list of apartments. I can click on an apartment listing and see more information about that apartment. As a user, I can create an account and log in to the application. If I am logged in, I can add an apartment to the list. As a logged in user, I can see a list of all the apartments as well as just the apartments I added. If my work is acceptable to my client, I may also be asked to add the ability to remove an apartment from the list as well as edit the apartment information.

#### Learning Objectives
- can pass authentication routes to a view
- can distinguish between protected and unprotected pages
- can distinguish between views for authentication/authorization and views for user CRUD actions

#### Troubleshooting Tips
With this particular stack we need to look for errors in the console and in the terminal. Any syntax errors or incorrect code anywhere in the React components will prevent `App.js` from compiling. So a mistake is likely to lead to a blank page.

- Stop the server and start it again.
- Did all the setup commands run properly? The commands can be rerun if something isn't working.
- Seeing a blank page? Look for errors in the terminal or inspect your page.
- Errors? Always look at the first error in the list.

---

### Apartment Resource
The Devise User model is going to have an association with the Apartment model. In this situation, the User will have many apartments and the Apartments will belong to a User.

- $ rails g resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string user_id:integer
- $ rails db:migrate


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

### Devise Code
Looking around our app, we can see that Devise gets added to a few different spots. 1) The User model, which we already looked at. 2) The controller. This code is predominantly behind the scenes. 3) The routes. We can see that we have a resource for apartments and Devise routes for users.

**config/routes.rb**
```ruby
Rails.application.routes.draw do
  resources :apartments
  devise_for :users
end
```

---

### Challenge

As a developer, I have been commissioned to create an application where a user can see apartments that are available for rent. As a user, I can see a list of apartments. I can click on an apartment listing and see more information about that apartment. As a user, I can create an account and log in to the application. If I am logged in, I can add an apartment to the list. As a logged in user, I can see a list of all the apartments as well as just the apartments I added. If my work is acceptable to my client, I may also be asked to add the ability to remove an apartment from the list as well as edit the apartment information.

**Story:** As an un-registered guest on the website, I can go to a web page and see a list of available apartments. Apartments have: a street designation, a city, state, a manager's name, manager's contact email, monthly rental price, bedrooms, bathrooms, and whether they allow pets.

**Story:** As an un-registered guest on the website, I can click on an apartment to view its details.

**Story:** As an un-registered guest on the website, I can see a header element at the top of each page containing navigation to the other pages.

**Story:** As a un-registered guest, I can go to registration page with a form and register as a new user.

**Story:** As a registered user who has not logged in, I can go to a login page.

**Story:** As a logged in user, I should be able to log out.

**Story:** As a logged in user, I can go to a new apartment page with a form and create a new apartment.

**Story:**: As a logged in user, I can edit the information for any apartment I have created, but I cannot edit the information for apartments that belong to someone else.

---
[Back to Syllabus](../README.md#unit-nine-react-in-rails-and-authentication)
