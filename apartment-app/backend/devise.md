# Rails API with Devise and JWT

#### Overview

The Apartment Application is a decoupled React frontend and Ruby on Rails API. The goal is to create a web application that allows users to see apartments that are available for rent. Users are able to add new apartments to the application. However, we want to be protective of our database and not allow just anyone on our site the ability to post data. In this project, Apartments can only be created by a valid, logged in user.

This section will cover the configuration and setup process that will be necessary for our users to be able to create accounts, log in, and log out securely.

#### Previous Lecture (1 hour 22 min)

[![YouTube](http://img.youtube.com/vi/Ca4u-eM7j-I/0.jpg)](https://www.youtube.com/watch?v=Ca4u-eM7j-I)

#### Learning Objectives

- can define authorization
- can define authentication
- can define user session
- can create a User model with Devise
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

- $ `rails new apartment-app-backend --api -d postgresql -T`
- $ `cd apartment-app-backend`
- $ `rails db:create`
- Add the remote from your GitHub classroom repository
- Create a default branch (main)
- Make an initial commit to the repository

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
- When I am on the internet in America, I have access to particular movies on Netflix that may be different that what is available in another country.

The last instance shows an authorization scheme that is not dependent on authentication.

[Authorization](https://en.wikipedia.org/wiki/Authorization)

### Devise

A key component of web applications is the ability for a user to log in. This requires a developer to consider both authentication and authorization. When working in a Rails application we can use a gem called Devise. **Devise** gives developers a collection of methods that create authorization and authentication.

Using Devise, we can create a special model called User that gets Devise code injected into each new model instance. Just by running the setup commands we get basic Devise functionality.

```bash
bundle add devise
rails generate devise:install
rails generate devise User
rails db:migrate
```

And with those commands, we now have the ability to create users in the database.

### User Sessions

Once a user exists in the database, we want to allow the user to sign in. When the user signs in, Devise creates a user session. A **user session** means that a user has been authenticated by submitting valid credentials. During a user session, a token is added to every new request the user makes. This token is used to authorize which pages are available to this particular user.

### Additional Devise Configurations

There are a few more configurations we will need to make our app work properly with Devise. The first one is to set up the default url options for the Devise mailer in our development environment. Add the following code near the other mailer options:

**config/environments/development.rb**

```ruby
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

Secondly, we need to instruct Devise to listen for logout requests via a `get` request instead of the default `delete`. This can be found in the Devise configuration file:

**config/initializers/devise.rb**

```ruby
# Find this line:
config.sign_out_via = :delete
# And replace it with this:
config.sign_out_via = :get
```

Next we want to create registrations and sessions controllers to handle sign ups and logins.

```bash
rails generate devise:controllers users -c registrations sessions
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

### CORS Setup

Since we are making cross-origin requests from the React frontend to the Rails API, we need to tell the Rails app that it is okay to accept request from our React application. While in development, the React app will run locally on `localhost:3001`.

We will also be passing the JWT through the headers so we need to add `"Authorization"` to the list of request headers that are allowed as well as exposed response headers.

Find the file `config/initializers.cors.rb` and add update the content to the following:

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

Since we specified API in the build of this Rails application, the `rack-cors` gem is already in the Gemfile. However, it is commented out. Uncomment this line:

```ruby
gem "rack-cors"
```

Install the dependencies by running `bundle`.

### JSON Web Token (JWT)

**JWT** is a standard that provides secure transmission of information between a client and a server as a JSON object. We mainly use JWT for authorization. When a user logs in to an application, the backend creates a JWT and sends it to the frontend. We can store the token in the browser using **localStorage**, a JavaScript property that allows our frontend to save key-value pairs in the browser. The localStorage methods allow us to access and use the token for authorization in subsequent API calls. To use JWT in our application, we need to install the following dependency:

```bash
bundle add devise-jwt
```

### JWT Secret Key Configuration

Note: The following step is more streamlined if the process is done on the machine that the Rails app was created on. When creating a Rails app, a `config/master.key` file is made that automatically is hidden from git. This file will be needed for our next steps.

We need a secret key to create a JWT token. We can generate one with this command:

```bash
bundle exec rails secret
```

Be sure to copy the newly-generated key. It is very important that we hide this key. Rails stores secrets in `config/credentials.yml.enc` and uses the `config/master.key` to encrypt the credentials file. To add our secret key to these credentials, we can edit the credentials file through the terminal:

```bash
EDITOR="code --wait" bin/rails credentials:edit
```

This command will open a new window in VS Code. It may ask for your permission to open file. This is normal and full permission can be granted.

The new file in VS Code will resemble the file below. (The secret_key_base will be different.)

```ruby
# aws:
#   access_key_id: 123
#   secret_access_key: 345

# Used as the base secret for all MessageVerifiers in Rails, including the one protecting cookies.
secret_key_base: 0d3c46237fc570e64ae474c1b9d7c184db3cba9ec7509fc0d67fe774150d8f642c9f4e68c6ac4378d9bba4946d5a4dd717909711dc245b7c6d2473d9741683ad
```

Add the new secret at the bottom of this file by assigning it to `jwt_secret_key`:

```ruby
jwt_secret_key: <newly-created secret key>
```

The file will look something like this:

```ruby
# aws:
#   access_key_id: 123
#   secret_access_key: 345

# Used as the base secret for all MessageVerifiers in Rails, including the one protecting cookies.
secret_key_base: secret_key_base: 0d3c46237fc570e64ae474c1b9d7c184db3cba9ec7509fc0d67fe774150d8f642c9f4e68c6ac4378d9bba4946d5a4dd717909711dc245b7c6d2473d9741683ad
jwt_secret_key: d7ce900c4c385b7459ef3a1aba1996e9495ea96d41c6ff8c3ecfc9b8dda3692332de4e123cc14404d5031d4e64d25cf79f139ea5845fe790248d2c6ec3ec7127
```

In the terminal run the command `control + c` to encrypt and save the file.

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

Having the ability for the application to revoke a JWT is important to keeping the application secure. For example, when a user logs out the JWT should no longer be valid. If the user deletes their account or the account is compromised, revoking the JWT will protect the content in the database from being accessed.

We are going to use a DenyList to revoke the JWT. To create a DenyList, we need to generate a new model.

```bash
rails generate model jwt_denylist
```

Inside the migration that is created from this generate command, modify the `change` method to include the following:

**db/migrate/**

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

Lastly, we need to update the User model to include the revocation strategy. Modify the existing code to include the following:

**app/models/user.rb**

```ruby
devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :validatable, :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist
```

---

[Back to Syllabus](../../README.md#unit-nine-react-and-rails-with-authentication)
