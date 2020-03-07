# Rails: Parameters

## Video: Rails Params
[![YouTube](http://img.youtube.com/vi/FrQJX4UoX4k/0.jpg)](https://www.youtube.com/watch?v=FrQJX4UoX4k)
]

## Overview
- Parameters (params) are how your Rails server receives information from the user to dynamically modify the view
- Params store information in the url

## Learning Objectives
- Modifying Rails routes to include parameters
- Understanding the functionality of a parameter

## Vocabulary
- params
- instance variable

### Controller with Params

Let's start with creating a controller called `main` and method called greeting.

**main_controller.rb**:

```ruby
class MainController < ApplicationController

  def greeting
    @name = "Alpha Class"
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
    render 'greeting.html.erb'
  end

end
```

Note that instead of hardcoding in a name we're asking Rails to check its params hash and assign the name key to our `@name` instance variable.

### Routes with Params

Adding params to our controller makes the page more dynamic, but it isn't very functional yet.

Let's look at a route that would display our greeting method in the view.

**routes.rb**:
```ruby
Rails.application.routes.draw do
  get '/greeting' => 'main#greeting'
```

Now the URL can accept a name parameter by passing in a value for name.
`http://localhost:3000/greeting?name=Foxtrot`

The page will display `Hello, Foxtrot!`

**Using params**: Parameters allow us to add more information to our program by passing a value into the route rather than directly to the URL.

**routes.rb**:
```ruby
Rails.application.routes.draw do
  get '/greeting/:name' => 'main#greeting'
  # added /:name to the route
```

What we've done now, is create a Rails route that expects a parameter that will end in a `/:param`. In this case, a param called `name`.


With this update to our routes, instead of using the question mark and equal signs to pass in a parameter, we can enter: `http://localhost:3000/greeting/foxtrot`

The page will display `Hello, Foxtrot!`

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


## Challenges

- As a user, I can visit a page that takes a number and displays that number cubed
- As a user, I can visit a page that takes 2 numbers and displays where or not the first number is evenly divisible by the second
- As a user, I can visit a page that takes in a string and displays how many characters are in the string
- As a user, I can visit a page that takes a string and displays whether it is a palindrome
- As a user, I can visit a page that takes a noun, verb, adjective, adverb, and  uses them to display a short silly story

[Back to Syllabus](../README.md)
