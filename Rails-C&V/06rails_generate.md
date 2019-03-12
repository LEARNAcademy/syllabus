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

To create the corresponding routes, controller and views, enter the following in the terminal:

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
