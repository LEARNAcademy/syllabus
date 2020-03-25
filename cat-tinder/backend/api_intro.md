# Cat Tinder API Introduction

## Overview
- We've looked at connecting React apps to an external API, and seen how to use JSON data to build compelling front end applications. Now we're going to build our own API that will serve the data to our front end.
- We're going to build an application to help our users' cats socialize and be well adjusted members of the feline community. Our application will allow users to create profiles for their cats and search other cat profiles.

## Learning Objectives
- Creating a Rails application setup as an API
- Creating endpoints to accept JSON requests and serve data encoded in JSON format
- Validating user input

## Vocabulary
- API
- JSON

## Useful Commands
## Additional Resources
## Set Up

#### Creating a new Rails app:
```
$ rails new cat_tinder_backend -d postgresql -T
$ cd cat_tinder_backend
$ rails db:create
$ echo "gem 'rspec-rails', groups: [:development, :test]" >> Gemfile
$ bundle install
$ rails generate rspec:install
$ rails server
```

In a browser navigate to:
`http://localhost:3000`


## API Technologies
Creating our own API opens up a new world of possibilities for building engaging, interactive applications.  We can begin to accept user input, store and manipulate that input in the backend, and then provide a personalized experience for our user, perfectly suited to the task he/she is trying to achieve.

The primary tool to collect input from users is an HTML form.  The user fills in form fields with information that allows them to interact with the application. As a general rule, we always want to process, validate, and store user data on the server where we have more control and processing power to handle it. To accomplish this, we need to build an API. Then our React app can send the form data to the API and receive data back when requested. While there are many options for building back end APIs, Ruby on Rails is a fantastic platform.

In the architecture we are building, our front and backend will be two separate applications, giving us more freedom to choose the tools and technologies we want.

Throughout your career as a developer, you'll interact with many other backend platforms. APIs can be built using Ruby, PHP, Python, Java, and even JavaScript, among many others. That might seem overwhelming, but remember that the concepts are generally the same no matter what technology is used. The server is where we process data sent by the frontend, clean and store that data, and serve updated data back to the frontend app to be consumed by the user.

![Api](https://s3.amazonaws.com/learn-site/curriculum/React/api.jpeg)


## RSPEC Set Up
```
$ echo "gem 'rspec-rails', groups: [:development, :test]" >> Gemfile
$ bundle install
$ rails generate rspec:install
```

The echo command above inserts a line of code into the Gemfile. It instructs Rails to only load RSPEC when we are in development or test mode, and not production.  The `rails g rspec:install` command installs all the necessary files to create and run our tests.


## Cat Resource
The following command will add the Model, Migration, Controller, and Routes for our cats.

```
$ rails generate resource Cat name:string age:integer enjoys:text
$ rails db:migrate
````

## Initial Check
Let's take a look around the application and verify that everything is setup correctly.  The first thing we can do is see that our test suite is running.  
```
$ rspec spec
```

Of course, we don't have any specs yet, so we won't get much feedback, but RSPEC itself should run and finish successfully.

In the application, the following files should look something like this:

**db/migrate/**

```ruby
class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :age
      t.text :enjoys

      t.timestamps
    end
  end
end
```

**config/routes.rb**

```ruby
Rails.application.routes.draw do
  resources :cats
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
```

## Challenges:
- Create a new Rails application with a postgresql database
- Add a resource for Cat
- Set up RSPEC in the Gemfile


[Go to next lesson: Cat Tinder API Seeds](./seeds.md)

[Back to Cat Tinder: New Cat Functionality Overview](../frontend/10cat_tinder_form_submit.md)

[Back to Syllabus](../../README.md)
