# Rendering the V(iew)

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

#### Render View With Ruby Value

A web page that forever says "Answer is: something" isn't very useful. Let's change it to print the value of our number parameter.

*answers.html.erb*:
```
Number is: <%= params[:number] %>
```
Those `<%= %>` symbols are what makes this an `.html.erb` file, or "embedded ruby". By wrapping our Ruby code in those symbols, it will execute on the page and then print.

Visit `http://localhost:3000/answers/42` and see what happens.

### Examine Params

Let's learn more about the `params` method.

*answers.html.erb*:
```
<%= params.class %><br/>
<%= params %></br>
```

## Homepage URL

In the router

```
root to: 'main#questions'
```

Then we can add a controller endpoint and view for 'questions' as our homepage.

# Challenges

## Serve a dynamic page with Rails
* Make a webpage for your class with a route, controller file, and view file - take note of the path of information from route to view
* Navigate to the page you created in the browser
* Pass a query string parameter into your controller, and render it in the view
* Add a new Route, controller endpoint, and view that accepts a Route parameter and displays it in the view
  - For example: '/answers/42'

#### STRETCH:
* set the dynamic page you created as the home page
  - Use the route that doesn't require arguments as your home page
  - set the root url in the router to be the homepage.
* create at least one piece of data in the controller to be passed to the view

-- hint: You can read about routes on the excellent [Rails guides](https://guides.rubyonrails.org/routing.html)
