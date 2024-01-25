# Rails API with Devise and JWT

#### Overview

The Apartment Application is a decoupled React and Rails application that allows users to see apartments that are available for rent. Users are able to add new apartments to the application. However, we want to be protective of our database and not allow just anyone on our site the ability to post data. In this project, Apartments can only be created by a valid, logged in user.

#### Previous Lecture (1 hour 22 min)

[![YouTube](http://img.youtube.com/vi/Ca4u-eM7j-I/0.jpg)](https://www.youtube.com/watch?v=Ca4u-eM7j-I)

#### Learning Objectives

- can define authorization
- can define authentication
- can define user session
- can create a User model
- can create a relationship between User and another model
- can create and store a jwt_secret_key

#### Vocabulary

- Devise
- authorization
- authentication
- user session
- JSON Web Token
- localStorage

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
- $ `rails server`
- Add the remote from your GitHub classroom repository
- Create a default branch (main)
- Make an initial commit to the repository
- Ask your instructors for branch protection

#### Troubleshooting Tips

- Stop the server and start it again.
- Did all the setup commands run properly? The commands can be rerun if something isn't working.
- Check your gemfile to ensure all dependencies were added correctly.
- Look for errors in the terminal.
- Errors? Always look at the first error in the list.

---

### Front to Back Communication

User authentication requires the frontend, directly controlled by the user and the backend, controlled by the developer to agree that the user is who he/she claims to be, and that there has been no interference, malicious or otherwise, between the two sides of the system. This is the fundamentals of web application security, we need to make sure we know who is communicating, and that the communication is real. There are many strategies developers use to ensure security in their applications, and just as many opinions on the benefits of each. Some developers opt to construct their own authentication strategy, while others depend on tried and true standard methods supported and maintained by the community as a whole. Best practice is to use standardized and open authentication tools for web apps. Open source tools such as those we'll be using in class, have many, many smart people driving their development, protecting their apps against bugs and security vulnerabilities. Just as important, these tools are well maintained, assuring that when new security risks are discovered, the tools are patched quickly. It is our responsibility as users of these tools to make sure that we stay current with the latest versions, keeping our own apps as safe as possible.

### How Authentication Works

The backend app has the primary responsibility for maintaining security in an application. It is the only place where we as developers can be certain that we have absolute control over our data. The backend uses secrets and hashing algorithms for its secure data that it sends out to browsers and other clients. The server then demands that the client sends a secure token that only the server could have generated with every request that requires authentication.

### Authentication

**Authentication** is the process of establishing that an entity is what/who it claims to be. In our industry the entity is often a user. Authentication is often done by providing credentials that are not publicly available, or secret, such as a password; this process is called signing in or logging in.

[Authentication](https://en.wikipedia.org/wiki/Authentication)

### Authorization

**Authorization** is process of giving permission to an entity to access a resource. This is often done after an entity has been authenticated.

For instance:

- Logging into a mail server, gives you access to your email but not others' emails.
- Logging into Google Drive gives me permission to read some files and permission to edit other files.
- When I am on the internet in the US, I can watch certain movies on Netflix, but not when I am outside the US.

The last instance shows an authorization scheme that is not dependent on authentication.

[Authorization](https://en.wikipedia.org/wiki/Authorization)

#### Devise

A key component of web applications is the ability for a user to log in. This requires a developer to consider both authentication and authorization. When working in a Rails application we can use a gem called Devise. **Devise** gives developers a collection of methods that create authorization and authentication.

Using Devise, we can create a special model called User that gets Devise code injected into each new model instance. Just by running the setup commands we get basic Devise functionality.

- $ `bundle add devise`
- $ `rails generate devise:install`
- $ `rails generate devise User`
- $ `rails db:migrate`

And with those simple commands, we now have the ability to create users in the database.

#### User Sessions

Once a user exists in the database, we want to allow the user to sign in. When the user signs in, Devise creates a user session. A **user session** means that a user has been authenticated by submitting valid credentials. During a user session, a token is added to every new request the user makes. This token is used to authorize which pages are available to this particular user.

#### JSON Web Token (JWT)

**JWT** is a standard that provides secure transmission of information between a client and a server as a JSON object. We mainly use JWT for authorization. When a user logs in to an application, the backend creates a JWT and sends it to the frontend. We can store the token in the browser using **localStorage**, a JavaScript property that allows our frontend to save key-value pairs in the browser. The localStorage methods allow us to access and use the token for authorization in subsequent API calls. To use JWT in our application, we need to add the following to our `Gemfile`:

- `gem 'devise-jwt'`
- `gem 'rack-cors'`

Once the gems are added, run $ `bundle` in the terminal to bring in the dependencies.

#### CORS Setup

Since we are making cross-origin requests from the React frontend to the Rails API, we need to tell the Rails app that (while in development) it is okay to accept request from any outside domain. We will also be passing the JWT through the headers so we need to add `"Authorization"` to the list of request headers that are allowed as well as exposed response headers.

First, we have to create a new file in `config/initializers` named `cors.rb` and add the following content:

**config/initializers/cors.rb**

```ruby
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3001'
    resource '*',
    headers: ["Authorization"],
    expose: ["Authorization"],
    methods: [:get, :post, :put, :patch, :delete, :options, :head],
    max_age: 600
  end
end
```

#### Additional Devise Configurations

There are a few more configurations we will need to make our app work properly with Devise. The first one is to set up the default url options for the Devise mailer in our development environment. Add the following code near the other mailer options:

**config/environments/development.rb**

```ruby
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

Secondly, we need to instruct Devise to listen for logout requests via a `get` request instead of the default `delete`. We also want to prevent Devise from using flash messages which are not presented in Rails API mode. We can do both these things in the Devise configuration file:

**config/initializers/devise.rb**

```ruby
# Find this line:
config.sign_out_via = :delete
# And replace it with this:
config.sign_out_via = :get

# Uncomment the config.navigational_formats line and remove the contents of the array:
config.navigational_formats = []
```

Next we want to create registrations and sessions controllers to handle signups and logins.

```bash
$ rails g devise:controllers users -c registrations sessions
```

Then replace the contents of these controllers with the following code:

**app/controllers/users/registrations_controller.rb**

```ruby
class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  def create
    build_resource(sign_up_params)
    resource.save
    sign_in(resource_name, resource)
    render json: resource
  end
end
```

**app/controllers/users/sessions_controller.rb**

```ruby
class Users::SessionsController < Devise::SessionsController
  respond_to :json
  private
  def respond_with(resource, _opts = {})
    render json: resource
  end
  def respond_to_on_destroy
    render json: { message: "Logged out." }
  end
end
```

Lastly, we need to update the devise routes:
**config/routes.rb**

```ruby
Rails.application.routes.draw do
  resources :apartments
  devise_for :users,
    path: '',
    path_names: {
      sign_in: 'login',
      sign_out: 'logout',
      registration: 'signup'
    },
    controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
    }
end
```

### JWT Secret Key Configuration

Note:  The following step is more streamlined if the process is done on the machine that the Rails app was created on.  When creating a Rails app, a `config/master.key` file is made that automatically is hidden from git.  This file will be needed for our next steps.

We need a secret key to create a JWT token. We can generate one with this command:

```bash
$ bundle exec rake secret
```

Be sure to copy the newly-generated key. It is very important that we hide this key. Rails stores secrets in `config/credentials.yml.enc` and uses the `config/master.key` to encrypt the credentials file. To add our secret key to these credentials, we can edit the credentials file through the terminal:

```bash
$ EDITOR="code --wait" bin/rails credentials:edit
```

We should see a new file in our VS Code that resembles the file below. (The secret_key_base will be different.)

```ruby
# aws:
#   access_key_id: 123
#   secret_access_key: 345

# Used as the base secret for all MessageVerifiers in Rails, including the one protecting cookies.
secret_key_base: 3fd528aca03e14342dd41c3a5b03d26c76a71b036a021a3f1e294d6461fd44c9313aafa0850b012bbcea730f3cf1232024c8076ad520dbc91d42878bc0218fb2
```

Now we can add our new secret at the bottom of this file by assigning it to a key `jwt_secret_key`:

```ruby
jwt_secret_key: <newly-created secret key>
```

Use `control + c` to encrypt and save the file.

### Configure Devise and JWT

Next we need to add the following code to the Devise configurations file. This will configure the JWT to work with Devise. It defines the types of requests that will be using JWT.

**config/initializers/devise.rb**

```ruby
config.jwt do |jwt|
  jwt.secret = Rails.application.credentials.jwt_special_key
  jwt.dispatch_requests = [
    ['POST', %r{^/login$}],
  ]
  jwt.revocation_requests = [
    ['DELETE', %r{^/logout$}]
  ]
  jwt.expiration_time = 5.minutes.to_i
end
```

### Revocation with JWT

Having the ability for the application to revoke a JWT is important to keeping the application secure. For example, when a user logs out the JWT should no longer be valid. If the user deletes their account or the account is compromised revoking the JWT will protect the content in the database from being accessed.

We are going to use a DenyList to revoke the JWT. To create a DenyList, we need to generate a new model.

```bash
$ rails generate model jwt_denylist
```

Inside the migration that is created from this generate command, add the following code to the `change` method.

```ruby
def change
  create_table :jwt_denylist do |t|
    t.string :jti, null: false
    t.datetime :exp, null: false
  end
  add_index :jwt_denylist, :jti
end
```

And migrate!

Lastly, we need to update the User model to include the revocation strategy.

**app/models/user.rb**

```ruby
devise  :database_authenticatable, :registerable,
        :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist
```

#### Apartment Resource

For this application, Apartments will have the following fields: a street, a unit number, a city, a state, the square footage, a price, number of bedrooms, number of bathrooms, whether pets are allowed, and an image.

We need to ensure there is a relationship between users and apartments. Apartments should only be created by valid, signed in users. A user can add as many apartments as they would like. This means the relationship between users and apartments is the User has_many Apartments, Apartment belongs_to a User. This relationship is defined in the code first by adding the foreign key of `user_id` to the belongs_to table.

```bash
rails generate resource Apartment street:string unit:string city:string state:string square_footage:integer price:string bedrooms:integer bathrooms:float pets:string image:text user_id:integer
```

Don't forget to migrate!

We will also need to define the relationship in both the Apartment and the User model classes.

**app/models/user.rb**
```ruby
class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :apartments
end
```

**app/models/apartment.rb**
```ruby
class Apartment < ApplicationRecord
  belongs_to :user
end
```


#### Seeds

In order to create a User instance in the database, we need a unique username, password, and password confirmation. When this information is successfully submitted to the database, a new instance of User will be created.

Seed data has to align with the relationship of our User and Apartment models. Before we have apartments, we must have users.

Devise provides us with some built-in validations. For example, every user in the database must have a unique email. To ensure our seeded user data is made correctly, we can use the `.first_or_create` Active Record method. Using the `.where` method, we first query for all emails that match a particular user in the database. The `.where` method will return an array of all matches. The `.first_or_create` method checks whether the first instance in the array is nil or not. If the value is nil, then no user exists. A nil value will trigger the `.create` method which requires password and password confirmation keys with matching password values.

```ruby
user1 = User.where(email: "test1@example.com").first_or_create(password: "password", password_confirmation: "password")
user2 = User.where(email: "test2@example.com").first_or_create(password: "password", password_confirmation: "password")
```

Once we have user seeds, apartments can be added to the seed file that get created belonging to our users.

---

### 🏠 Challenge: Apartment App API Setup

As a developer, I have been commissioned to create an application where a user can see apartments that are available for rent. As a user, I can see a list of apartments. I can click on an apartment listing and see more information about that apartment. As a user, I can create an account and log in to the application. If I am logged in, I can add an apartment to the list. As a logged in user, I can see a list of all the apartments as well as just the apartments I added. If my work is acceptable to my client, I may also be asked to add the ability to remove an apartment from the list as well as edit the apartment information.

- As a developer, I can create a new Rails application with a Postgresql database.
- As a developer, I can create a RSpec testing suite in my Rails application.
- As a developer, I can add a User model with Devise.
- As a developer, I can add a resource for Apartment that has a street, a unit number, a city, a state, the square footage, a price, number of bedrooms, number of bathrooms, whether pets are allowed, and an image.
- As a developer, I can seed the database with users and apartments.

---

[Back to Syllabus](../../README.md#unit-nine-react-and-rails-with-authentication)
