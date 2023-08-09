# Cat Tinder API Introduction

#### Overview

Cat Tinder. It's like Tinder, but for cats. Cat Tinder is a full-stack, decoupled application that creates profiles for cats and allows a user to see other cat profiles. A decoupled application means we are actually creating two separate applications. A React application to create the views in the frontend and a Rails API that handles our data.

#### Previous Lecture (50 min)

[![YouTube](http://img.youtube.com/vi/RTUWQ_AIEZ8/0.jpg)](https://www.youtube.com/watch?v=RTUWQ_AIEZ8)

#### Learning Objectives

- can create an API with a Cat model

#### Process

- $ `rails new cat-tinder-backend -d postgresql -T`
- $ `cd cat-tinder-backend`
- $ `rails db:create`
- $ `bundle add rspec-rails`
- $ `rails generate rspec:install`
- $ `rails server`
- Add the remote from your GitHub classroom repository
- Create a default branch (main)
- Make an initial commit to the repository
- Ask your instructors for branch protection

#### Troubleshooting Tips

- Did you create your database?
- Did you migrate?
- Errors? Always look at the first error in the list.

---

### API Technologies

Creating our own API opens up a new world of possibilities for building engaging, interactive applications. We can begin to accept user input, store and manipulate that input in the backend, and then provide a personalized experience for our user, perfectly suited to the task the user is trying to achieve.

The primary tool to collect input from users is an HTML form. The user fills in form fields with information that allows them to interact with the application. As a general rule, we always want to process, validate, and store user data on the server where we have more control and processing power to handle it. To accomplish this, we need to build an API.

Once we have a functioning API, we can build a React app to send the form data to the API and receive data back when requested. While there are many options for building backend APIs, Ruby on Rails is a fantastic platform.

In the architecture we are building, our frontend and backend will be two separate applications, giving us more freedom to choose the tools and technologies we want.

Throughout your career as a developer, you'll interact with many other backend platforms. APIs can be built using Ruby, PHP, Python, Java, and even JavaScript, among many others. That might seem overwhelming, but remember that the concepts are generally the same no matter what technology is used. The server is where we process data sent from the frontend, clean and store that data, and serve updated data back to the frontend app to be consumed by the user.

### Application Planning

Planning is a crucial step in creating a successful application. First, it is important to have an understanding of a project as a whole. Once the overarching goals have been established, tasks must be broken down into individual actions. It is not possible to create the entire application at once and jumping between tasks is inefficient and can create code conflicts within the development team. It is necessary to outline an agreed upon task list that everyone on the team follows.

#### RSpec

Running the install commands for RSpec will add the dependencies to our Gemfile and installs all the necessary files to create and run our tests. RSpec will only load when we are in development or test mode, and not production.

#### Cat Resource

The following command will add the model, migration, controller, spec files, and all the RESTful routes for our cats.

```bash
$ rails generate resource Cat name:string age:integer enjoys:text image:text
$ rails db:migrate
```

### Initial Check

Let's take a look around the application and verify that everything is setup correctly. The first thing we can do is see that our test suite is running.

```bash
$ rspec spec
```

Of course, we don't have any specs yet, so we won't get much feedback, but RSpec itself should run and finish successfully.

In the application, the following files should look something like this:

**db/migrate/**

```ruby
class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :age
      t.text :enjoys
      t.text :image

      t.timestamps
    end
  end
end
```

**config/routes.rb**

```ruby
Rails.application.routes.draw do
  resources :cats
end
```

### 🐱 Challenge: Cat Tinder API Setup

As a developer, I have been commissioned to create an application where a user can see cute cats looking for friends. As a user, I can see a list of cats. I can click on a cat and see more information about that cat. I can also add cats to the list of cats looking for friends. If my work is acceptable to my client, I may also be asked to add the ability to remove a cat from the list as well as edit cat information.

- As a developer, I can create a new Rails application with a Postgresql database.
- As a developer, I can create a RSpec testing suite in my Rails application.
- As a developer, I can add a resource for Cat that has a name, an age, what the cat enjoys doing, and an image.

---

[Back to Syllabus](../../README.md#cat-tinder-backend)
