# Rails Controllers, Routes, and Views

#### Overview

Rails uses the MVC architectural pattern. MVC defines how an application handles different kinds of information. MVC separates an application into models for handling data and business logic, controllers to handle requests and retrieve the data from the model, and views for handling graphical user interface objects and presentations. URL parameters, also known as params or query strings, are a way to pass in additional information into a controller method to query the database or dynamically modify the view. This section will take a deep dive into the controller and view aspects of MVC.

#### Previous Controllers, Routes, and Views Lecture (1hr 7min)
[![YouTube](http://img.youtube.com/vi/dprfcJq2xX4/0.jpg)](https://www.youtube.com/watch?v=dprfcJq2xX4)

#### Previous Params Lecture (1hr 19min)
[![YouTube](http://img.youtube.com/vi/Ag5FCQCiXz0/0.jpg)](https://www.youtube.com/watch?v=Ag5FCQCiXz0)

#### Learning Objectives

- can conceptualize the flow of data from route to controller to view
- can define ERB
- can use correct Ruby syntax to create navigation
- can describe the purpose of an instance variable
- can describe the anatomy of a route
- can modify a route to expect one or more parameters
- can identify the data type of parameters
- can recognize parameters as a hash
- can extract values from params in the controller

#### Vocabulary

- controller
- view
- routes
- erb
- root
- `link_to`
- params
- instance variable

#### Additional Resources

- [Params](http://api.rubyonrails.org/classes/ActionController/Parameters.html)

#### Process

- Create a new Rails app on the desktop: $ `rails new rails-routes-controllers-views-params -d postgresql -T`
- $ `cd rails-routes-controllers-views-params`
- Create a database: $ `rails db:create`
- Add the git remote from GitHub Classroom
- Ensure a main branch exists
- Make an initial commit to the main branch
- Generate the controller
- Begin the rails server: `$ rails server`
- In a browser navigate to: `http://localhost:3000`

#### Troubleshooting Tips
- Did you create your database?
- Are your view files in the correct folder?
- Errors? Always look at the first error in the list.
- Check your terminal for errors.

---

### Rails Response

To understand how to program a response, we need to have an idea of how a request is made to the Rails server. A typical request starts when a url is typed into the browser address bar and the user hits enter.

### The Controller

What the heck is a controller?? The Rails controller is the logical center of your application. It coordinates the interaction between the user, the views, and the model.

The controller:
- is responsible for routing external requests to internal actions. It handles people-friendly URLs extremely well.
- manages caching.
- manages helper modules, which extend the capabilities of the view templates without bulking up their code.
- manages sessions, giving users the impression of an ongoing interaction with our applications.

Let's see the controller in action!

From the command line, we can add a new Rails controller with a Rails command:
```
$ rails generate controller Main
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

We will use the controller file and the view folder that was generated from this command.

<img src="./assets/generate-controller.png" />


Now, we can add methods to the controller file that was created in the generate command.

When a method is invoked, we define what we want to happen in the application. In this case, when the `answer` method is triggered, it will render some HTML that reads "This is the answer".

**app/controllers/main_controller.rb**:
```ruby
class MainController < ApplicationController
  def answer
    render html: 'This is the answer'
  end
end
```

We access the method in the controller through our url request. This is done by appending a slash `/` and the name of your method to `localhost:3000`. Try navigating to `localhost:3000/answer`. At this point, we will see an error that says no route matches '/answer'

### The Route

In order for our Rails server to respond to a request to this url, it needs a particular path and an http verb. A `routes.rb` file in the `config` folder is created when you run `rails new`. This file is intended to house all valid urls in your application.

<img src="https://i.ibb.co/7r7kVM9/config-routes.png" alt="config-routes" border="0" />


**config/routes.rb**
<img src="https://i.ibb.co/L8tf1xt/routes-explained.png" alt="routes-explained" border="0" />

The route here is essentially adding an address to the application. Now, when we navigate to `localhost:3000/answer` Rails will determine that we have requested the `/answer` route. The route will find the `main` controller and call the `answer` method.

This completes the Rails response to the `/answer` request. When we visit `localhost:3000/answer` we should see a white page with the text 'This is the answer'.

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
    render html: 'This is the answer'
  end

  def question
    render html: 'This is the question.'
  end
end
```

Now, our Rails app has all the information to display a response to the `/question` request. When we visit `localhost:3000/question`, we should see a white page with the text "This is the question".

### Landing Page

A landing page is what the user sees when they first visit your site. By default, Rails gives us a landing page at `localhost:3000` with the Rails boilerplate code. We can instruct our application to use another view as the landing page by using a helper method called **root**. The root route at the top because it is the most popular route and should be matched first. The root route can only have a `GET` action.

```ruby
Rails.application.routes.draw do
  root 'main#question'
  get '/answer' => 'main#answer'
  get '/question' => 'main#question'
end
```

### The View

So far our routes and controllers are only returning a basic string from the controller method. This is a great start, but now we want to make more complex views.

The generate command we ran earlier creates a directory in the `app/views` named after our controller. Inside this folder create a NEW FILE called `question.html.erb`
- `question` references the name of the method in the controller
- **erb** extension stands for `embedded Ruby`. Embedded Ruby or Templated Ruby is a file structure that allows us to code in HTML and drop Ruby code into the view file.

Let's add some text to the new file:

**views/main/question.html.erb**:
```
<p>Hello?</p>
```

Now, when we navigate to `localhost:3000/question` we should see text saying "Hello?"

Going back to our controller, we can create an instance variable (since we are inside the class MainController) that we will render in our view:

**app/controllers/main_controller.rb**:
```ruby
class MainController < ApplicationController
  def answer
    render html: 'This is the answer'
  end

  def question
    @our_question = 'Why did the chicken cross the road?'
    render 'question'
  end
end
```

In our view, we will refer to the instance variable we set within the `question` method in the controller.

**views/main/question.html.erb**:

```
My joke: <%= @our_question %>!
```

The symbols `<%= %>` allow us to escape the HTML and embed Ruby syntax and logic. By wrapping our Ruby code in those symbols, it will execute on the page and then print the outcome.

### Navigating Between Views

So far we have created controllers that manage our routes and views by directly manipulating the url. To make this process more dynamic we can add code to our view so the user can click a link to move between pages.

**views/main/home.html.erb**:
```
<h3>Wanna hear a joke?</h3>
<%= link_to 'Tell Me!', '/question' %>
```
**link_to** is a helper method that lives inside embedded Ruby tags and creates navigation in our Rails app. It takes two attributes: the first is the hyperlink, or anchor and the second is the route that will be appended to the end of `localhost:3000`.

Earlier in our code, we created a landing page so our users won't see the Rails boilerplate UI. To create a link that will navigate back to the landing page we pass a `'/'` as the route.

**views/main/question.html.erb**:
```
<h3>Back to Landing Page</h3>
<%= link_to 'Home', '/' %>
```

### Rails Parameters

Parameters allow us to add more information to our program by passing a value into the controller.

```ruby
class MainController < ApplicationController

  def greeting
    @name = params[:name]
    # the instance variable stores the information that will be passed as a param
  end

end
```

Note that instead of hardcoding in a name, we're asking Rails to check its params hash and assign the name key to our `@name` instance variable.

### Routes with Params

Adding params to our controller makes the page more dynamic, but it isn't very functional yet.

Let's look at a route that would display our greeting method in the view.

**routes.rb**:
```ruby
Rails.application.routes.draw do
  get '/greeting' => 'main#greeting'
```

Now the URL can accept a name parameter by passing in a value for name. This can be done by adding a "?" + name + the user input.
`http://localhost:3000/greeting?name=LEARN`

Now the page will display `Hello, LEARN!`

**Using params**: Parameters allow us to add more information to our program by passing a value into the route rather than directly to the URL.

**routes.rb**:
```ruby
Rails.application.routes.draw do
  get '/greeting/:name' => 'main#greeting'
  # added /:name to the route
```

What we've done now is create a Rails route that expects a url that will end in a `/:param`. In this case, the param is called `name`.


With this update to our routes, instead of using the question mark and equal signs to pass in a parameter, we can simply enter: `http://localhost:3000/greeting/Friends`

The page will display `Hello, Friends!`

### Controller Arguments

Often, we do some logic in the controller and send the results to the view with instance variables.

Let's create a new route and controller for example:

**routes.rb**:
```ruby
Rails.application.routes.draw do
  get "/answer/:number", to: 'main#answer'
```

**app/controllers/main_controller.rb**:
```ruby
class MainController < ApplicationController

  def answer
    if params[:number].to_i.even?
      @result_string = "Even"
    else
      @result_string = "Odd"
    end
    render "answer"
  end

end
```

**answers.html.erb**:
```html
Number is: <%= @result_string %>
```

### Review

- The `routes.rb` file defines all the possible urls to which your application is prepared to respond. It's like the address book of your Rails app.
- Each route will point to a method on in the controller file.
- The controller method will ultimately do the work you require and send the appropriate view response.
- `params` is a method returning a `ActionController::Parameters` which is a hash of parameters submitted in the request.

---

### 💻 Challenges

Routes, Views, Controllers
- As a user, I can visit a custom landing page at `localhost:3000`.
- As a user, I can see the names of my team members as hyperlinks on the landing page.
- As a user, I can click on each team member's name and be taken to a page that displays a list of that team member's top three things. (Could be top three restaurants, activities, books, video games, hiking locations, beaches, doughnut shoppes, movies, etc.)

Params
- As a user, I can visit a page called cubed that takes a number as a param and displays that number cubed.
- As a user, I can visit a page called evenly that takes two numbers as params and displays whether or not the first number is evenly divisible by the second.
- As a user, I can visit a page called palindrome that takes a string as a param and displays whether it is a palindrome (the same word forward and backward).
- As a user, I can visit a page called Madlib that takes params of a noun, verb, adjective, or adverb, and displays a short silly story.

---

[Back to Syllabus](../README.md#unit-six-ruby-on-rails)
