# Rails Params

#### Overview

The basic request-response cycle in a Rails application sends a URL and HTTP action to the routes file which invokes a controller method and returns a static view. To make dynamic views, additional information called parameters are passed with the URL. Parameters create a more interactive user experience in an application.

#### Previous Lecture (1hr 19min)

[![YouTube](http://img.youtube.com/vi/Ag5FCQCiXz0/0.jpg)](https://www.youtube.com/watch?v=Ag5FCQCiXz0)

#### Learning Objectives

- can modify a route to expect one or more parameters
- can identify the data type of parameters
- can extract values from params in the controller
- can describe the purpose of an instance variable

#### Vocabulary

- params
- instance variable

### Useful Commands

- `rails generate controller <ControllerName>`

#### Additional Resources

- [Params](http://api.rubyonrails.org/classes/ActionController/Parameters.html)

#### Process

- Use the same application from the Controller, Routes, Views syllabus section
- Generate a new controller
- Begin the rails server: $ `rails server`

#### Troubleshooting Tips

- Did you create your database?
- Are your view files in the correct folder?
- Errors? Always look at the first error in the list.
- Check your terminal for the params hash.

---

### Rails Parameters

Dynamic views are the primary difference between a website and a web application. A website typically displays the same content to every user. A web application allows the user's interactions to inform what data is displayed. Creating a web application is a complex process where the model, controllers, and views all work together.

Parameters, or **params** for short, are extra pieces of information that are passed in the URL. Param data can then be used by the controller which can in turn, dynamically modify the view.

### Controller Set Up

In this example, we will start with a simple application that will greet our user. The name of who we are greeting will be dynamic through the use of params.

First, we must generate a controller and create a controller method for our greeter. Remember that controllers are classes so we will use the PascalCase naming convention for the generate command in the terminal.

```bash
rails generate controller Main
```

The output in the terminal will display something that looks like this.

```bash
  create  app/controllers/main_controller.rb
  invoke  erb
  create    app/views/main
  invoke  helper
  create    app/helpers/main_helper.rb
```

We will be using the controller file and the view folder. We will not be using the helper file that was created. That file can be either ignored or deleted.

Inside the main controller file we can add a method called greeter. This initial code will be almost exactly what we did in the controllers, routes, views syllabus section. Params are an extension of that foundational workflow.

**app/controllers/main_controller.rb**

```ruby
class MainController < ApplicationController
  def greeter
  end
end
```

Now we will create a route for this controller method.

**config/routes.rb**

```ruby
Rails.application.routes.draw do
  get '/greeter', to: 'main#greeter'
end
```

And finally we will create a view file in the main view folder. The view file will be called exactly `greeter.html.erb`.

**app/views/main/greeter.html.erb**

```html
<h1>Hello!</h1>
```

If we fire up the Rails server and navigate to `localhost:3000/greeter` we will see the static page render the text `Hello!`

At this point our greeter page is working but it will always render the exact same text. Our goal is to be able to pass information into the view so that we can greet many different people. To make this page dynamically greet our users we can use params.

### Params Hash

Following the workflow we have established, we will start with the controller. The name of the person we want to greet is dynamic, which means it is going to change, which means we can't hard code a name. Instead we will make a variable in the controller method. The variable is one that is going to be passed around the Rails app from the controller over to the view. We will use an instance variable to achieve this movement of information. An **instance variable** is accessible to both the controller class, the controller methods and the associated views.

Params are a Ruby hash that comes from the URL. They are similar to React props in that it is a specialized data structure for communication in our application. In React, `props` is the name of the object that contains key-value pairs of data. In Rails, `params` is the name of the hash that contains key-value pairs.

**app/controllers/main_controller.rb**

```ruby
class MainController < ApplicationController
  def greeter
    @name = params
  end
end
```

To explore more about params, we will skip routes for a minute and head over to the view. We will add another file inside the main folder in the view directory. It will be called exactly `greeter.html.erb`. The view file has access to the instance variable `@name`. Since it is a Ruby instance variable we need to use the erb syntax to render the variable.

**app/views/main/greeter.html.erb**

```html
<h1>Hello <%= @name %>!</h1>
```

If we refresh the browser, we see something pretty interesting.

```
Hello {"controller"=>"main", "action"=>"greeter"}!
```

It doesn't display a name, but to be fair, we haven't provided one yet. What we are seeing is a hash with key-value pairs specifying what controller we are using as well as the name of the controller method. That means that we are successfully passing our params hash to the view. Now we just need to add the right data. Back to the controller!

### Passing Params

Our instance variable `@name` is holding a hash called params. Now we need to add our own key-value pair with a name of our user so we can greet them. We will modify the params hash by assigning a new key called `user_name`.

**app/controllers/main_controller.rb**

```ruby
class MainController < ApplicationController
  def greeter
    @name = params[:user_name]
  end
end
```

Again, we will skip the routes for now. The view is already taking our instance variable so we can head to the browser. When we refresh, the params hash is gone.

Now, we can pass in a name to the URL. To start, we are going to pass a query string into the URL. A query string is a key-value pair that is added to the end of a URL. To separate the param from the rest of the URL we will use a `?`.

In the URL we will type the following:

```
http://localhost:3000/greeter?user_name=learn
```

And we see the dynamic output render to the browser. We can change the name of our user by changing the value in the URL.

At this point we are successfully passing params. To see our params hash we can look in the terminal where the Rails server is running. Within the stack trace is a line that says `Parameters: {"user_name"=>"learn"}`. This is helpful to visualize the data structure of params and also helpful when troubleshooting.

### Routes with Params

Our routes file has been neglected since we set up the initial route. Now it is the routes' time to shine. Our params functionality is working, but notice that if you don't pass a param in the URL, the application still works. While this might seem fine on face value, it actually presents us with a bug. If this page is designed to greet a user, it shouldn't work if we don't have the right information. To fix this bug we will set our route to require a param.

**config/routes.rb**

```ruby
Rails.application.routes.draw do
  get '/greeting/:user_name', to: 'main#greeting'
end
```

What we've done is create a Rails route that expects this URL to have a param. We have also given our params hash the name of the key, in this case it is called `user_name`. With this update to the route, if we refresh the page at `http://localhost:3000/greeter` we will see an error.

```
Routing Error
No route matches [GET] "/greeter"
```

Since our route now requires a param, the page will not work without one. Going into the URL we can pass a param. However, this time it will look a little different. Since we assigned the key `user_name` in the route, we don't have to pass that information into the URL. We can simple enter: `http://localhost:3000/greeter/learn` and the page will render correctly!

### Passing Multiple Params

Passing multiple params is very similar to passing a single param. In this example, we will pass two params that are numbers. We will use the numbers to do some basic Ruby logic. First we'll start in the controller and create a method. In this method there will be two instance variables that will come from params.

**app/controllers/main_controller.rb**

```ruby
class MainController < ApplicationController
  def numbers
    @num1 = params[:num1]
    @num2 = params[:num2]
  end
end
```

Next up is the route. In this example we have two params. We need both params in order for our application to function properly. So we will require both params in the route.

**config/routes.rb**

```ruby
Rails.application.routes.draw do
  get '/numbers/:num1/:num2', to: 'main#numbers'
end
```

Now, we will add another file inside the main folder in the view directory. It will be called exactly `numbers.html.erb`. Before we do anything interesting with the numbers, we need to make sure the data gets to the correct place. We can start with just rendering the instance variables.

**app/views/main/numbers.html.erb**

```html
<h1>Numbers Game</h1>

<p>Number 1: <%= @num1 %></p>
<p>Number 2: <%= @num2 %></p>
```

In the URL bar we will pass in two params. Something like this `http://localhost:3000/numbers/2/3` will render our two numbers to the view.

### Logic with Params

We are successfully passing two params from the URL to the view. Now we can use the numbers to create logic. For this example, we will have the controller determine if the sum of the numbers is an even number or an odd number. This will require a refactor of our controller method and view file.

Inside the controller we can write regular Ruby code.

**app/controllers/main_controller.rb**

```ruby
class MainController < ApplicationController
  def numbers
    if (params[:num1] + params[:num2]).even?
      @outcome = 'the sum of the numbers is even'
    else
      @outcome = 'the sum of the numbers is not even'
    end
  end
end
```

Now we can pass the new instance variable to the view.

**app/views/main/numbers.html.erb**

```html
<h1>Numbers Game</h1>

<p><%= @outcome %></p>
```

If we refresh the browser, we see an error.

```
NoMethodError in MainController#numbers
undefined method `even?' for "23":String
```

Interesting! To start troubleshooting, let's see if we can understand more about this error. We know that `even?` is a valid Ruby method that will return a Boolean value depending on whether an integer is even or not. The `undefined method` part tells us we are not calling this method on the right kind of data. The other part of the error says we are getting back `"23"` which is the concatenation of our numbers params rather than addition. The error also says `"23"` is a string. Next in the troubleshooting process we will look at the params data structure in terminal. We see: `Parameters: {"num1"=>"2", "num2"=>"3"}` which confirms that our params are, in fact, strings. Since strings can't be true or false, this would be the reason for our error.

This error is occurring because params are always strings. All params, no matter what, will be strings.

Since we need to evaluate our params as numbers, it is up to us to make that data transition programmatically. We can use the Ruby method `to_i` to convert our strings into integers.

**app/controllers/main_controller.rb**

```ruby
class MainController < ApplicationController
  def numbers
    if (params[:num1].to_i + params[:num2].to_i).even?
      @outcome = 'the sum of the numbers is even'
    else
      @outcome = 'the sum of the numbers is not even'
    end
  end
end
```

Now our page is working!

---

### 💻 Challenges

Create a controller called `Main` to complete the following challenges. Each challenge will have its own controller method, route, and view file.

- Create a page called cubed that takes one number as a param and displays that number cubed.
- Create a page called evenly that takes two numbers as params and displays whether or not the first number is evenly divisible by the second.
- Create a page called palindrome that takes a string as a param and displays whether it is a palindrome (the same word forward and backward) or not.
- Create a page called random that takes two numbers as params and displays a random number from within the inclusive range of the two numbers.
- Create a page called [madlib](https://en.wikipedia.org/wiki/Mad_Libs) that takes at least three params that are different parts of speech (noun, pronoun, verb, adjective, adverb) and displays a short silly story.
  - Hint: Use AI to generate the story!

### 🏔 Stretch Goals

- Implement error handling in each controller to check if the required parameters are present. Display a custom error message in the view if parameters are missing.
- Add styling to your pages using the file `app/assets/stylesheets/application.css`. There is no need to import your stylesheet, Rails handles all of that for you.

---

[Back to Syllabus](../README.md#unit-six-ruby-on-rails)
