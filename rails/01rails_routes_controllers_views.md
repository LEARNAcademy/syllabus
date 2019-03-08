### Serve HTML and Other Resources

#### Create a Rails App
Now that we've explored HTML, CSS, Javascript, and Ruby, we have the complete set of tools we need to start learning Rails, the framework for writing web applications in Ruby. Getting started is as easy as a few commands in the terminal.

##### In the terminal:
```
rails new myapp
cd myapp
rails server
```
These commands do a few things. `rails new app_name` generates a new rails application in a folder. The Rails app we are generating is going to be called "myapp". Once we've navigated ourselves into the Rails app directory, we run the Rails application by starting the server. We do that by typing `rails server` or `rails s`.

In a browser type into the address field:
`http://localhost:3000`
or
`127.0.0.1:3000`

And just like that, we should see the boilerplate Rails homepage.

#### Serve the public

Rails has a folder called `/public'. Anything we put into this folder will be accessible by the rest of the application just by asking for it. To see this in action, create HTML file in `/public` called `myfile.html`.

##### In a browser enter:

`http://localhost:3000/myfile.html`

And look, `myfile.html` loaded right away.

#### Set Landing Page

We can take advantage of the `/public` directory to quickly set up our own home page instead of the Rails boilerplate. Let's change the file name for `myfile.html` to `index.html`.

##### In a browser:

`http://localhost:3000`

Now our page is being served on the home page instead.

### Answering Web Requests

As neat as the `/public` directory is for quickly setting up easy-to-access pages, Rails has its own file for setting up routes to pages that we want more control over. This is the `config/routes.rb` file. The following is an example of a simple route in `config/routes.rb`:

#### Simple route + controller

*config/routes.rb*:
```
Rails.application.routes.draw do
  get '/answers' => 'main#answers'
```
This route will, when you type `localhost:3000/answers` into the browser (the get '/answers' part), look for a controller called MainController and load any methods called `answers` that it finds there (the 'main#answers' part).

If our MainController looks like this:
*app/controllers/main_controller.rb*:
```
class MainController < ApplicationController
  def answers
    render html: "hello" #.html_safe
  end
end
```
When we visit `localhost:3000/answers`, we should see a white page with the text "hello".

#### Using GET parameter

So, we can use the URL to load pages. What else can we do with it? It turns out that we can store information in the URL by using the `params` method.

`params` is a method returning a `ActionController::Parameters` which is a hash of parameters submitted in the request.
For more see <a href="http://api.rubyonrails.org/classes/ActionController/Parameters.html" target="_blank" >here</a>

Use: `p params` in the `answers` method to print to the log (in our case the console)

If we update our `answers` method to use `params`:
*main_controller.rb*:
```
class MainController < ApplicationController

  def answers
    render html: params[:number]
  end

end
```

And then we give the URL a number parameter by loading this URL:
`http://localhost:3000/answers?number=17`

Instead of seeing a page with "hello" on it, now we see a white page with the number 17 on it.


#### Route with parameter

Now that we know that we can pass parameters to a page, let's do it in a way that uses Rails' built-in architecture.  That means adding some functionality to our `config/routes.rb` file.

*routes.rb*:
```
Rails.application.routes.draw do
  get '/answers/:number' => 'main#answers'
```
A Rails route that expects a parameter will end in a `/:param`

With this update to our routes, instead of using the kind of ugly-looking URL with the question marks and equal signs to pass in a parameter, we can enter: `http://localhost:3000/answers/42`

#### Render Simple View

What if we don't want to render plain text on a page? Rails can do that, too.

Let's update our `answers` method to load an html.erb file instead of rendering plain text.

```
main_controller.rb:
class MainController < ApplicationController

  def answers
    render "answers.html.erb" # Rails magic without this
  end

end
```
*views/main/answers.html.erb*:
```
Answer is: something
```
`http://localhost:3000/answers/42`

And our `answers.html.erb` loads

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

### Controller Arguments

Normally we do most of the logic in the controller and send on the results to the view with instance variables.
```
class MainController < ApplicationController

  def answers
    cookies[:name] = params[:name] unless params[:name].nil?
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

### Using Cookie

If we want our variables to persist in between page refreshes or redirects, storing them in cookies is a fantastic way to keep them in the browser history.

```
class MainController < ApplicationController

  def answers
    cookies[:name] = params[:name] unless params[:name].nil?
    render "answers.html.erb"
  end

end
```
Now, the `answers` method will store a `name` parameter in a cookie if a `name` parameter exists.

Update `answers.html.erb`:
```
Hello <%= cookies[:name] %>!
Number is: <%= params[:number] %>
```

What happens when we visit the following URLs?
`http://localhost:3000/answers/42`
`http://localhost:3000/answers/42?name="joe"`
`http://localhost:3000/answers/42`

See cookie in browser: Preferences -> Privacy -> Cookies -> Localhost


#### Using Session
A session is similar to a cookie, except it's encrypted. You can see where it's stored in _myapp_session cookie. How would you replace cookies with sessions?


#### Rails Generate



Rails has a generate command that allows developers to save time by creating all necessary files for an app to work.

#### rails generate controller
To generate a controller you must give the controller a name. Then within that controller you will want a method. You can generate the method in the same line. The command will look like:
```
rails generate controller Cars create
```
In the Terminal:
```
$ rails generate controller Cars create
      create  app/controllers/cars_controller.rb
       route  get 'cars/create'
      invoke  erb
      create    app/views/cars
      create    app/views/cars/create.html.erb
      invoke  test_unit
      create    test/controllers/cars_controller_test.rb
      invoke  helper
      create    app/helpers/cars_helper.rb
      invoke    test_unit
      invoke  assets
      invoke    coffee
      create      app/assets/javascripts/cars.coffee
      invoke    scss
      create      app/assets/stylesheets/cars.scss

```

In your rails app it will:
* create a CarsController
* define a create method within the CarsController

*controllers/cars_controller.rb*
```
class CarsController < ApplicationController
  def create
  end
end
```
* create a route in the routes file

*config/routes.rb*
```
  get 'cars/create'
````
* create a `cars` view folder and create.html.erb file.

*views/cars/create.html.erb*
```
<h1>Car#create</h1>
<p>Find me in app/views/car/my_auto.html.erb</p>
```
The controller and view can be tested by going to http://localhost3000/car/create

#### rails destroy

If you so happen to make a mistake when generating your controller, you can destroy it and try again.

The command to do that is:
```
rails destroy controller Cars create
```
The command will delete all files associated with the CarController.

--------------------------------

#### Resource

<a href="http://guides.rubyonrails.org/command_line.html#rails-generate" target="_blank">rails generate</a>
<a href="http://guides.rubyonrails.org/command_line.html#rails-destroy" target="_blank">rails destroy</a>

# Making Complete Flows

https://player.vimeo.com/video/155897606

In Rails, there are suddenly a lot of moving pieces to keep in mind. Controller methods often correspond to a view, and in order to load a view in the browser we need to create a route for it. Let's practice building an app using the Rails workflow. For this app, we're going to build two forms that take in some user input, a name and a number, a page that greets the user and tells them whether their number is odd or even, and the routes and controllers that make it all run.

## Creating a New Thing

### Generator

To make life easier for developers, Rails can generate code for you. Rather than creating controllers by hand, we can have Rails create one for us with a single line in the terminal. Click <a href="http://guides.rubyonrails.org/command_line.html#rails-generate" target="_blank" >here</a> for more information from the official documentation.

We are going to use the noun-verb pattern: we want to **register** a **user**.
However, we are going to need two routes:
* `http://localhost:3000/users/index` to display an index web page.
* `http://localhost:3000/users/register` to display a register page, which is also where the information is going to be sent when users click on the submit button.

Technically `index` is not a verb but read it as "display index page"; `index` is often used for a starting or landing page for historial reasons.

To craete the corresponding routes, controller and views, enter the following in the terminal:

```
rails generate controller Users index register
```
This command will create a controller called Users with two methods in it, `index` and `register`, among other things.

Notice: it is Rails convention for controller names to be pluralized nouns and method names to be verbs.

This yields something like this:
```
create  app/controllers/users_controller.rb
route  get 'users/register'
invoke  erb
create    app/views/users
create    app/views/users/index.html.erb
create    app/views/users/register.html.erb
invoke  rspec
create    spec/controllers/users_controller_spec.rb
create    spec/views/users
create    spec/views/users/index.html.erb_spec.rb
create    spec/views/users/register.html.erb_spec.rb
invoke  helper
create    app/helpers/users_helper.rb
invoke    rspec
create      spec/helpers/users_helper_spec.rb
invoke  assets
invoke    coffee
create      app/assets/javascripts/users.coffee
invoke    scss
create      app/assets/stylesheets/users.scss
```

See how, in addition to the controller, Rails has also made an `.html.erb` file for us?

Test that the newly created implementation works by visiting the routes:
`http://localhost:3000/users/index`
`http://localhost:3000/users/register`

We should be able to see the default view that our generator created.

The generator gives us a lot of files. Here are the files we care about right now:

`config/routes.rb`
`controllers/users_controller.rb`
`views/users/index.html.erb`
`views/users/register.html.erb`

## Get Name

The default functionality on our `register` view isn't terribly interesting. Let's make the UsersController keep presenting the `register` view until the user inputs a valid name.

```
class UsersController < ApplicationController
  def index
  end

  def register
    if params.has_key?(:user_name) && !params[:user_name].strip.empty?
      # User has entered a valid name
      @name = "User name is " + params[:user_name]
    else
      # User has not entered a valid name so ask again
      @name = "Name missing"
    end
  end
end
```

`views/users/register.html.erb`:
```
<%= @name %>

<form action="/users/register" method="get">
  <input type="text" name="user_name"/>
  <input type="submit"/>
</form>
```

`config/routes.rb`:
```
  # Show the index page
  get '/users/index'
  # Run the register method and show the register page.
  get '/users/register'
```

## Play Game

Now, we would like our Rails app to tell the user whether a number is odd or even. Like before, this will involve a some views, some routes, and some methods, and a controller to coordinate everything behind the scenes. How can we break it down?

For the game we are going to show results and submit a new number on the same page so we only need one route/controller/view.
Following the noun-verb pattern, we want route to be: `http://localhost/games/play`.
We can start by creating another controller:
```
rails generate controller Games play
```

See for yourself that the route, controller and view was created.

In `views/games/play.html.erb` insert:
```
Number is: <%= @result_string %>
<hr/>
<form action="play" method="get">
  <input type="number" name="number" required/>
  <input type="submit" value="Submit Number"/>
</form>
```

And now, our method that sends the number from the form on `play.html.erb` is:
```
class GamesController < ApplicationController
  def play
    @result_string = params[:number].to_i.odd? ? "Odd" : "Even"
  end
end
```

Put a comment in `config/routes.rb` for the new route:
```
  # Play the game after user has registered
  get 'games/play'
```

## After Getting Name Go To Game

What if we want to pass information from our `UsersController` to our `GamesController`? We can do that with cookies.

Putting the name parameter into a cookie and forwarding (redirecting) to the GamesController would look like this:

```
class UsersController < ApplicationController
  def index
  end

  def register
    if !params.has_key?(:user_name) || params[:user_name].strip.empty?
        @name = "Name missing"
      render "register.html.erb"
    else
      # save name in a cookie, so it can be accessed in the game
      cookies[:user_name] = params[:user_name]
      # redirect to the game play page
      redirect_to "/games/play"
    end
  end
end
```

We use `redirect_to` here to change the URL in the browser's address bar.
If we had used `render` then the `GamesController` `play` method would _not_ have been invoked which makes the `play.html.erb` fail bacause the `@result_string` has not been set.

## Using an Object

We can use objects in our code as well. Let's create a User class to hold given and family names as attributes:

`models/user.rb`
```
class User
  def initialize(given, family)
    @given = given
    @family = family
  end

  # To be called in the view
  def full_name
    @given + " " + @family
  end

  # Necessary for YAML
  def given= new_given
  	@given = new_given
  end

  def family= new_family
  	@family = new_family
  end
end
```

Modify the controller:

```
class UsersController < ApplicationController
  def index
  end

  def register
    if !params.has_key?(:given) || params[:given].strip.empty? ||
  	   !params.has_key?(:family) || params[:family].strip.empty?
      @name = "Name missing"
      render "register.html.erb"
    else
	  # create a user object with information submitted
  	  user = User.new(params[:given], params[:family])
      # save user object in session, so it can be accessed in the game
      session[:user] = user.to_yaml
      # rediect to the game play page
      redirect_to "/games/play"
    end
  end
end
```

Modify the play view:

```
User: <%= @user.full_name %>
<br/>
Number is: <%= @result_string %>
<hr/>
<form action="play" method="get">
  <input type="number" name="number" required/>
  <input type="submit" value="Submit Number"/>
</form>
```

Modify the `GamesController` to extract the user object from the session and generate a result:
```
class GamesController < ApplicationController
  def play
    @result_string = params[:number].to_i.odd? ? "Odd" : "Even"
    @user = YAML.load(session[:user])
  end
end
```

# Challenges

#### Serve a static page with Rails

* Create a new Rails project
* Create an example web page in the public folder and then start the Rails server to view your static page

#### Serve a dynamic page with Rails

* Make a webpage for your class with a route, controller file, and view file - take note of the path of information from route to view
* Navigate to the page you created in the browser

#### STRETCH:
* set the dynamic page you created as the landing page
* create at least one piece of data in the controller to be passed to the view
* have your route take in one paramater and print it in the view

## Challenge: Hi/Lo Game

* Create a route `/game` to call a method called `try` in `GameController`.
* Test `http://localhost:3000/game?guess=21` in a browser - what error do you get?
* Create a controller `GameController` with a method method called `try`.
* Test `http://localhost:3000/game?guess=21` in a browser - what error do you get?
* Create a view for the `try` method in `GameController` called *try.html.erb*.
* Test `http://localhost:3000/game?guess=21` in a browser and see that try.html.erb is rendered.

Then, in method `try`:

* On first call, store a secret number in a cookie
* On each call, check the secret number against the guess (the parameter).
* Then, set an instance variable to the result (call it @result) of the guess (high/low/win).
* Then, render try.html.erb.
* If you do not win, repeat 2-3. If you win, repeat 1-2-3.

Then, in *try.html.erb*:
Display the result of the guess

#### Stretch Challenge One

Create and display a counter for the number of tries attempted.

#### Stretch Challenge Two

Create a route (`/new_game`) and controller method (`reset`) to reset the game.


#### Stretch Challenge Three

Accept and store user name, and use it in the views.

#### Stretch Challenge Four

Encrypt the secret number.

[Go to Rails Forms, Layout and Flash](./02rails_forms_layouts_flash_messages.md)


[Back to Ruby Text Based Story Game Challenge](../ruby/08rb_textbased_story.md)
