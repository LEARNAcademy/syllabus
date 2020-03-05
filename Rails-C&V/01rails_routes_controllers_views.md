# Rails: Controllers, Routes, Views

## Overview
- Understanding the basics of creating a request response cycle in Rails
- Generating a view for the user
- Navigating between views

## Learning Objectives
- Understanding the anatomy of a Rails route
- Using generate to create a controller
- Creating a method in the controller
- Creating a view with` html.erb`
- Linking between views

## Vocabulary
- controller
- view
- routes
- erb


#### Creating a new Rails app:
```
rails new myapp -d postgresql -T
cd myapp
rails db:create
rails server
```

In a browser navigate to:
`http://localhost:3000`
or
`127.0.0.1:3000`

### Rails Response

To understand how to program a response, we need to have an idea of how a request is made to the Rails server. A typical request starts when a url is typed into the browser address bar and the user hits enter. Let's do an example.

#### The Controller
From the command line, we can add a new Rails controller with a rails command:
```
rails generate controller main
```

Rails creates all the files associated with this particular controller.
Output in terminal:
```
 create  app/controllers/main_controller.rb
      invoke  erb
      create    app/views/main
      invoke  helper
      create    app/helpers/main_helper.rb
      invoke  assets
      invoke    scss
      create      app/assets/stylesheets/main.scss
```

Rails has created some files for us! Let's take a look at where they live in our file structure:

<img src="https://i.ibb.co/k564cRR/generate-controller-files.png" alt="generate-controller-files" border="0" />

Now we can add methods to the controller file that was created in the generate command.

Adding a method to the controller defines what should happen when it is reached. In this case, it renders some html that reads "This is the answer".

**app/controllers/main_controller.rb**:
```ruby
class MainController < ApplicationController
  def answer
    render html: "This is the answer"
  end
end
```

Now if we navigate to the browser `localhost:3000/answer` we see an error that no route matches "/answer"

#### The Route

In order for our Rails server to respond to a request to this url, it needs a particular path and an http verb. A file is created when you run `rails new` that is intended to be the home of all those valid urls. It is the `routes.rb` file in the `config` folder of your Rails app.

**config/routes.rb**
```ruby
Rails.application.routes.draw do
  get '/answer' => 'main#answer'
  # get is the http action we are sending with the url to the server
  # /answer is the url
  # main is the name of the controller
  # answer is the name of the method in the controller
```
The route here is essentially adding an address for your application. Meaning now when you navigate to `localhost:3000/answer` in the browser, Rails will determine that you have requested the `/answer` route and that it needs to find the `main` controller and run its `answer` method.

This completes the Rails response to the `/answer` request. When we visit `localhost:3000/answer`, we should see a white page with the text "This is the answer".

#### Add Another Route
Let's program another response. Let's say we want our Rails program to be able to respond to requests for:

`localhost:3000/question`

First, we can tell Rails to accept requests to `/question` in the `routes.rb`:

**config/routes.rb**:
```ruby
Rails.application.routes.draw do
  get '/answer' => 'main#answer'
  get '/question' => 'main#question'
```

Now, we need to add a `question` method to the `main` controller that will define how the application will respond.

**app/controllers/main_controller.rb**:
```ruby
class MainController < ApplicationController
  def answer
    render html: "This is the answer"
  end

  def question
    render html: "This is the question."
  end
end
```

Now, our Rails app has all the information to display a response to the `/question` request. When we visit `localhost:3000/question`, we should see a white page with the text "This is the question".

## Landing Page

Rather than seeing the boiler plate Rails page as the 'landing page' (or the page the user sees when they first visit your site) we can modify the `routes.rb` file to create a new landing page.

```ruby
Rails.application.routes.draw do
  get '/answer' => 'main#answer'
  get '/question' => 'main#question'
  root to: 'main#question'
end
```

#### The View

So far our routes and controllers are only returning a basic string from the controller method. The generate controller command also creates a place for us to make more complex views.

The generate command creates a directory in the `app/views` named after our controller. Inside this folder create a new file called `question.html.erb`
- `question` references the name of the method in the controller
- `erb` extension stands for `embedded ruby`. It means that these views can have Ruby values in them and even evaluate some Ruby logic!


**views/main/question.html.erb**:

```
Hello?
```
**app/controllers/main_controller.rb**:
```ruby
class MainController < ApplicationController
  def answer
    render html: "This is the answer"
  end

  def question
    @our_question = "Why did the chicken cross the road?"
    render "question.html.erb"
  end
end
```

**views/main/question.html.erb**:

```
My joke: <%= @our_question %>!
```

Those `<%= %>` symbols are what makes this an `.html.erb` file, or "embedded ruby". By wrapping our Ruby code in those symbols, it will execute on the page and then print the outcome.

#### Navigating Between Views

So far we have created controllers that manages our routes and views through directly manipulating the url. To make this process more dynamic we can add code to our view so the user can click a link to move between pages.

**views/main/question.html.erb**:
```
<h3>Wanna hear a joke?</h3>
<%= link_to "Tell Me!", "/question" %>
```
`link_to` inside embedded Ruby tags take a string that will become the hyperlink and the route that will be added to the end of `localhost:3000`

Earlier in our code we created our own landing page so our user won't see the Rails boilerplate code. To navigate back to the landing page we created just pass a "/" as the route.

```
<h3>Back to Landing Page</h3>
<%= link_to "Home", "/" %>
```

### Review

- The `routes.rb` file defines all the urls your application is prepared to respond to (it's like the address book of your Rails app)
- Each route will point to a method (street) on a controller (city) file
- The controller method will ultimately do the work you require and send the appropriate view response

## Challenges
For each section below, generate a new controller to handle the methods, routes, and views.

#### Joke
- As a user, I can go to the url 'localhost:3000/question' and be asked a joke.
- As a user, I can go to the url 'localhost:3000/answer' and see the response to the joke.

#### Recommendations
- As a user, I can see a page called 'localhost:3000/places' that lists you and your partner's top 10 places to see in San Diego.
- As a user, I can see a page called 'localhost:3000/television' that lists you and your partner's top 10 TV Shows.
- As a user, I can see a page called 'localhost:3000/team' and see a list of the team members who built this application.
- As a user, I can see your team page when I visit 'localhost:3000'.

#### Links

- As a user, I can visit a landing page that has a link to my joke.
- As a user, when I am on my joke page, I can click a link that will take me to the page with the answer.
- As a user, I can visit the landing page and see links to all recommendation lists.
- As a user, I can return to the landing page from within any of the other pages.

[Back to Syllabus](../README.md)
