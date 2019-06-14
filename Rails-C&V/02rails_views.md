# Rendering the V(iew)

## Rendering an html view

You may be wondering, how do I send something more complicated to the user. In the previous example, the html that we sent as a response was limited. We were basically sending strings. Thankfully, Rails also makes the process of serving html pretty comprehensive.

Let's add route in 'config/routes.rb' that looks like this:
```ruby
Rails.application.routes.draw do
    get "/answers", to: 'main#answers'

    get "/greeting", to: 'main#greeting' # Our new route
end
```

Then we'll add a ```greeting``` method to our controller.

*main_controller.rb*:

```ruby
class MainController < ApplicationController

  def answers
    render html: "hello" #.html_safe
  end

  def greeting
    render "greeting.html.erb"
  end
end
```

Now, let's add a folder named after our controller to our views folder and inside of it create the ```greeting.html.erb``` file we referred to in our controller.


*views/main/greeting.html.erb*:

```
Hello!
```

Now if we visit `http://localhost:3000/greeting` Rails renders our `greeting.html.erb`.

# Passing Values to the (V)iew

#### Render View With Ruby Value

So that's pretty cool, but eventually, we'll want this view to become a bit more dynamic. In order to do that, we need a way to pass values to the view. Remember those instance variables that we used in Ruby classes? That's where those come in.

You may have noticed that our html files have a funny extension. They end with `html.erb`. What that final `erb` extension stands for is `embedded ruby`. It means that these views can have Ruby values in them and even evaluate some Ruby logic! 

Let's take a look at how to pass a value in to the view.

We'll update the controller's greeting method to set up an instance variable:

*main_controller.rb*

```ruby
class MainController < ApplicationController

  def answers
    render html: "hello" #.html_safe
  end

  def greeting
    @name = "Jane"
    render "greeting.html.erb"
  end
end
```
Then, we'll update the `greeting.html.erb` file to display the variable as part of the view:

*views/main/greeting.html.erb*:

```
Hello <%= @name %>!
```

Those `<%= %>` symbols are what makes this an `.html.erb` file, or "embedded ruby". By wrapping our Ruby code in those symbols, it will execute on the page and then print.

Visit `http://localhost:3000/greeting` and see what happens.

## A last note on views

Sometimes you want to tell Rails what you want as your 'landing page' or the page the user sees when they first visit your site. You can do this in the `routes.rb` like so:

*routes.rb*

```ruby
Rails.application.routes.draw do
    get "/answers", to: 'main#answers'

    get "/greeting", to: 'main#greeting'
    root to: "main#greeting"
end
```

This tells Rails that when a user calls your app without specifying a route url, it should send them to the `greeting` method of the `main` controller or the '`/greeting`' route.

Now that we know how to pass values into our Rails views, we are on our way to making our views much more dynamic. Next, we'll take a look at using Rails params allows us to get info from a client request into a server response.

## Challenges

The goal of these challenges are to solidify your routes and controller knowledge and add views on top if it. 

Go ahead and create a new Rails app for these stories.

#### Stories: Recommended

You are building an app that puts together you and your partners list of recommended things.

- As a user, I can see a page listing you and your partner's list of recommended places to see in San Diego (or another city of your choosing)
- As a user, I can see a page listing you and your partner's list of recommended international destinations
- As a user, I can see a page listing you and your partner's list of recommended films
- As a user, I can see a page listing you and your partner's list of recommended T.V. shows

### Stretch Challenges

- As a user, I can visit landing page that has links to all you other pages
- As a user, I can return to the landing page from within any of the other pages