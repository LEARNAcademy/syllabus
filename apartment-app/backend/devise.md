# Rails API with Devise

#### Overview

The Apartment Application is a decoupled React and Rails application that allows users to see apartments that are available for rent. Users are able to add new apartments to the application. However, we want to be protective of our database and not allow just anyone on our site the ability to post data. In this project, Apartments can only be created by a valid, logged in user.

#### Previous Lecture (45 min)

[![YouTube](http://img.youtube.com/vi/ZomvJEIpKxY/0.jpg)](https://youtu.be/ZomvJEIpKxY)

#### Learning Objectives

- can define authorization
- can define authentication
- can define user session
- can create a User model
- can create a relationship between User and another model

#### Vocabulary

- Devise
- authorization
- authentication
- user session

#### Additional Resources

- [Authentication vs Authorization](../authentication-vs-authorization.md)
- [Devise Cheatsheet](https://devhints.io/devise)
- [Devise Github Repo](https://github.com/plataformatec/devise#getting-started)
- [First or Create Active Record Method](https://guides.rubyonrails.org/v3.2.9/active_record_querying.html#first_or_create)

#### Process

- $ `rails new apartment-app-backend -d postgresql -T`
- $ `cd apartment-app-backend`
- $ `rails db:create`
- $ `bundle add rspec-rails`
- $ `rails generate rspec:install`
- Add the remote from your GitHub classroom repository
- Create a default branch (main)
- Make an initial commit to the repository
- Ask your instructors for branch protection
- $ `rails server`

#### Troubleshooting Tips

- Stop the server and start it again.
- Did all the setup commands run properly? The commands can be rerun if something isn't working.
- Check your gemfile to ensure all dependencies were added correctly.
- Look for errors in the terminal.
- Errors? Always look at the first error in the list.

---

### Devise

A key component of web applications is the ability for a user to log in. This requires a developer to consider both authentication and authorization. **Authentication** is the ability to provide valid credentials, such as a username and password. **Authorization** defines what data a user is authenticated to access. When working in a Rails application we can use a gem called Devise. **Devise** gives developers a collection of methods that create authorization and authentication.

Using Devise, we can create a special model called User that gets Devise code injected into each new model instance. Just by running the setup commands we get basic Devise functionality.

- $ `bundle add devise`
- $ `rails generate devise:install`
- $ `rails generate devise User`
- $ `rails db:migrate`

And with those simple commands, we now have the ability to create users in the database.

### User Sessions

Once a user exists in the database, we want to allow the user to sign in. When the user signs in, Devise creates a user session. A **user session** means that a user has been authenticated by submitting valid credentials. During a user session, a token is added to every new request the user makes. This token is used to authorize which pages are available to this particular user.

### Apartment Resource

For this application, Apartments will have the following fields: a street, a unit number, a city, a state, the square footage, a price, number of bedrooms, number of bathrooms, whether pets are allowed, and an image.

We need to ensure there is a relationship between users and apartments. Apartments should only be created by valid, signed in users. A user can add as many apartments as they would like. This means the relationship between users and apartments is the User has_many Apartments, Apartment belongs_to a User. This relationship is defined in the code first by adding the foreign key of `user_id` to the belongs_to table. Secondly, the relationship will need to be defined in both the Apartment and the User model classes.

```bash
rails generate resource Apartment street:string unit:string city:string state:string square_footage:integer price:string bedrooms:integer bathrooms:float pets:string image:text user_id:integer
```

Don't forget to migrate!

### Seeds

In order to create a User instance in the database, we need a unique username, password, and password confirmation. When this information is successfully submitted to the database, a new instance of User will be created.

Seed data has to align with the relationship of our User and Apartment models. Before we have apartments, we must have users.

Devise provides us with some built-in validations. For example, every user in the database must have a unique email. To ensure our seeded user data is made correctly, we can use the `.first_or_create` Active Record method. Using the `.where` method, we first query for all emails that match a particular user in the database. The `.where` method will return an array of all matches. The `.first_or_create` method checks whether first instance in the array is nil or not. If the value is nil, then no user exists. A nil value will trigger the `.create` method which requires password and password confirmation keys with matching password values.

```ruby
user1 = User.where(email: "test1@example.com").first_or_create(password: "password", password_confirmation: "password")
user2 = User.where(email: "test2@example.com").first_or_create(password: "password", password_confirmation: "password")
```

Once we have user seeds, apartments can be added to the seed file that get created belonging to our users.

### Additional Devise Configurations

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

---

### 🏠 Challenge: Apartment App API Setup

As a developer, I have been commissioned to create an application where a user can see apartments that are available for rent. As a user, I can see a list of apartments. I can click on an apartment listing and see more information about that apartment. As a user, I can create an account and log in to the application. If I am logged in, I can add an apartment to the list. As a logged in user, I can see a list of all the apartments as well as just the apartments I added. If my work is acceptable to my client, I may also be asked to add the ability to remove an apartment from the list as well as edit the apartment information.

- As a developer, I can create a new Rails application with a Postgresql database.
- As a developer, I can create a RSpec testing suite in my Rails application.
- As a developer, I can add a User model with Devise.
- As a developer, I can add a resource for Apartment that has a street, a unit number, a city, a state, the square footage, a price, number of bedrooms, number of bathrooms, whether pets are allowed, and an image.
- As a developer, I can create seed the database with users and apartments.

---

[Back to Syllabus](../../README.md#unit-nine-react-and-rails-with-authentication)
