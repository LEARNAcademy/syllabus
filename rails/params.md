# Rails Parameters

#### Overview
URL parameters, also known as params or query strings, are a way to pass in additional information into a controller method to query the database or dynamically modify the view.

#### Previous Lecture (1hr 19min)
[![YouTube](http://img.youtube.com/vi/Ag5FCQCiXz0/0.jpg)](https://www.youtube.com/watch?v=Ag5FCQCiXz0)

#### Learning Objectives
- can modify a route to expect one or more parameters
- can identify the data type of parameters
- can recognize parameters as a hash
- can extract values from params in the controller

#### Vocabulary
- params
- instance variable

#### Process
- Create a new Rails app in the appropriate folder: $ `rails new params -d postgresql -T`
- $ `cd params`
- Create a database: $ `rails db:create`
- Begin the rails server: `$ rails server`
- In a browser navigate to: `http://localhost:3000`

#### Troubleshooting Tips
- Did you create your database?
- Are your view files in the correct folder?
- Errors? Always look at the first error in the list.

### Controller with Params

Let's start with creating a controller called `main` and method called greeting.

```
$ rails g controller Main
```

**main_controller.rb**:

```ruby
class MainController < ApplicationController

  def greeting
    @name = "LEARN Class"
    render 'greeting.html.erb'
  end

end
```
The view will display the instance variable from the controller method.

**app/main/views/greeting.html.erb**:

```html
<h1>Hello, <%= @name %>!</h1>
```

**Using params**: Parameters allow us to add more information to our program by passing a value into the controller.

```ruby
class MainController < ApplicationController

  def greeting
    @name = params[:name]
    # the instance variable is storing the information that will be passed as a param
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

Often we do some logic in the controller and send on the results to the view with instance variables.

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
    render "answer.html.erb"
  end

end
```

**answers.html.erb**:
```html
Number is: <%= @result_string %>
```

`params` is a method returning a `ActionController::Parameters` which is a hash of parameters submitted in the request.
For more see <a href="http://api.rubyonrails.org/classes/ActionController/Parameters.html" target="blank">here</a>


### Params Challenges

- Create a Rails application called rails_params. The app will have a PostgreSQL database.
- Generate a controller called Main.

**User Stories**
- As a user, I can visit a page called cubed that takes a number as a param and displays that number cubed.
- As a user, I can visit a page called evenly that takes two numbers and displays whether or not the first number is evenly divisible by the second.
- As a user, I can visit a page called length that takes in a string and displays how many characters are in the string.
- As a user, I can visit a page called palindrome that takes a string and displays whether it is a palindrome (the same word read forward and backward).
- As a user, I can visit a page called madlib that takes params of a noun, verb, adjective, adverb, and displays a short silly story.

---
[Back to Syllabus](../README.md#unit-six-ruby-on-rails)
