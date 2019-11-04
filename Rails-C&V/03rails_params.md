# Using Parameters in Rails


[![YouTube](http://img.youtube.com/vi/FrQJX4UoX4k/0.jpg)](https://www.youtube.com/watch?v=FrQJX4UoX4k)
]


Parameters are how your Rails server receives information from the client. That said, you will be working with params a lot when programming your Rails servers.

Let's take a look at a couple of ways to start using Rails params.

#### Using GET parameter

So, we can use the URL to load pages. What else can we do with it? It turns out that we can store information in the URL by using the `params` method.

`params` is a method returning a `ActionController::Parameters` which is a hash of parameters submitted in the request.
For more see <a href="http://api.rubyonrails.org/classes/ActionController/Parameters.html" target="_blank" >here</a>

Use: `p params` in the `greeting` method to print to the log (in our case the console)


So we can update our `greeting` method to use `params`:
*main_controller.rb*:
```
class MainController < ApplicationController
  #...other methods

  def greeting
    p params
    @name = params[:name]
    render 'greeting.html.erb'
  end

end
```

Note that, instead of hardcoding in a name we're asking Rails to check its params hash and assign what's in it for the name key to our @name instance variable.

And then we give the URL a name parameter by loading this URL:
`http://localhost:3000/greeting?name="Joe"`

Instead of seeing "Hello Jane", we now have "Hello Joe".

Just by using params inside of our method we have made our page much more dynamic.

If we pass a different name parameter through the URL like: `http://localhost:3000/greeting?name="Jill"`, we will see our page render "Hello Jill".

Let's check out another way to utilize the `params` method in Rails.

#### Route with parameter

Now that we know that we can pass parameters to a page, let's do it in a way that uses Rails' built-in architecture.  That means adding some functionality to our `config/routes.rb` file.

*routes.rb*:
```ruby
Rails.application.routes.draw do
  get "/answers", to: 'main#answers'

  get '/greeting/:name' => 'main#greeting' # Altered this route
```

What we've done now, is create a Rails route that expects a parameter that will end in a `/:param`. In this case, a param called `name`.

With this update to our routes, instead of using the question mark and equal signs to pass in a parameter, we can enter: `http://localhost:3000/greeting/jill`

### Controller Arguments

Often we do some logic in the controller and send on the results to the view with instance variables.

Let's update our answers route for example:

*routes.rb*:
```ruby
Rails.application.routes.draw do
  get "/answers/:number", to: 'main#answers'

  get '/greeting/:name' => 'main#greeting' # Altered this route
```

```ruby
class MainController < ApplicationController

  def answers
    if params[:number].to_i.even?
      @result_string = "Even"
    else
      @result_string = "Odd"
    end
    render "answers.html.erb"
  end

end
```

*answers.html.erb*:
```
Number is: <%= @result_string %>
```

## Challenges

The goal of these challenges is to round out your use of controllers, routes, and views with params practice.

Go ahead and create a new Rails app for these stories.

#### Stories

You are making an simple app that performs various logic on the parameters passed in.

- As a user, I can visit a page that takes a number and displays that number cubed
- As a user, I can visit a page that takes 2 numbers and displays where or not the first number is evenly divisible by the second
- As a user, I can visit a page that takes in a string and displays how many characters are in the string
- As a user, I can visit a page that takes a string and displays whether it is a palindrome
- As a user, I can visit a page that takes a noun, verb, adjective, adverb, and  uses them to display a short silly story
