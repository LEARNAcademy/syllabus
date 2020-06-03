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

To understand how to program a response, we need to have an idea of how a request is made to the Rails server. A typical request starts when a url is typed into the browser address bar and the user hits enter.

## The Controller

What the heck is a controller?? The Rails controller is the logical center of your application. It coordinates the interaction between the user, the views, and the model.

The controller:
- is responsible for routing external requests to internal actions. It handles people-friendly URLs extremely well
- manages caching
- manages helper modules, which extend the capabilities of the view templates without bulking up their code
- manages sessions, giving users the impression of an ongoing interaction with our applications

Let's see the controller in action!

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

Let's take a look at where these new files live in our file structure:

<img src="https://i.ibb.co/k564cRR/generate-controller-files.png" alt="generate-controller-files" border="0" />

Now we can add methods to the controller file that was created in the generate command.

Inside the controller, we define what we want to happen when a method is reached. In this case, when the `answer` method is triggered, it will render some html that reads "This is the answer".

**app/controllers/main_controller.rb**:
```ruby
class MainController < ApplicationController
  def answer
    render html: "This is the answer"
  end
end
```

We access the method in the controller through our url request. This is done by appending **/ + the name of your method** to localhost:3000. Try navigating to `localhost:3000/answer`. At this point, we will see an error that says no route matches "/answer"

## The Route

In order for our Rails server to respond to a request to this url, it needs a particular path and an http verb. A `routes.rb` file in the `config` folder is created when you run `rails new`. This file is intended to house all valid urls in your application.

<img src="https://i.ibb.co/7r7kVM9/config-routes.png" alt="config-routes" border="0" />

**config/routes.rb**

<img src="https://i.ibb.co/L8tf1xt/routes-explained.png" alt="routes-explained" border="0" />

The route here is essentially adding an address to your application. Now when you navigate to `localhost:3000/answer` in the browser, Rails will determine that you have requested the `/answer` route and that it needs to find the `main` controller and run its `answer` method.

This completes the Rails response to the `/answer` request. When we visit `localhost:3000/answer`, we should see a white page with the text "This is the answer".

### Add Another Route
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

### Landing Page

A landing page is what the user sees when they first visit your site. Rather than seeing the boiler plate Rails page as the landing page, we can modify the `routes.rb` file to create a new one using `root`.

```ruby
Rails.application.routes.draw do
  get '/answer' => 'main#answer'
  get '/question' => 'main#question'
  root to: 'main#question'
end
```

### Controller Challenges
For each section below: generate a new controller, methods to reach, and routes.

### Joke
- As a user, I can go to the url 'localhost:3000/' and see a welcome message as well as you and your partner's names.
- As a user, I can go to the url 'localhost:3000/question' and see the set-up for a joke.
- As a user, I can go to the url 'localhost:3000/answer' and see the punchline to the joke.


## The View

So far our routes and controllers are only returning a basic string from the controller method. But, we probably want to make more complex views.

The generate command creates a directory in the `app/views` named after our controller. Inside this folder create a _new file_ called `question.html.erb`
- `question` references the name of the method in the controller
- `erb` extension stands for `embedded ruby`. It means that these views can have Ruby values in them and even evaluate some Ruby logic!

Let's add some text to the new file:

**views/main/question.html.erb**:
```
Hello?
```

Now, when we navigate to 'localhost:3000/question', we should see simple text saying "Hello?"

Going back to our controller, we can create an instance variable (since we are inside the class MainController), that we will render in our view:

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

Back in our view, we will refer back to the instance variable we set within the `question` method in the controller.

**views/main/question.html.erb**:

```
My joke: <%= @our_question %>!
```

Those `<%= %>` symbols are what makes this an `.html.erb` file, or "embedded ruby". By wrapping our Ruby code in those symbols, it will execute on the page and then print the outcome.

#### Navigating Between Views

So far we have created controllers that manages our routes and views through directly manipulating the url. To make this process more dynamic we can add code to our view so the user can click a link to move between pages.

**views/main/home.html.erb**:
```
<h3>Wanna hear a joke?</h3>
<%= link_to "Tell Me!", "/question" %>
```
`link_to` inside embedded Ruby tags take a string that will become the hyperlink and the route that will be added to the end of `localhost:3000`

Earlier in our code we created our own landing page so our user won't see the Rails boilerplate code. To navigate back to the landing page we created just pass a "/" as the route.

**views/main/question.html.erb**:
```
<h3>Back to Landing Page</h3>
<%= link_to "Home", "/" %>
```

### Review

- The `routes.rb` file defines all the urls your application is prepared to respond to (it's like the address book of your Rails app)
- Each route will point to a method on a controller file
- The controller method will ultimately do the work you require and send the appropriate view response

## Challenges
For each section below, generate a new controller to handle the methods, routes, and views.

#### Joke... again ;)
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
