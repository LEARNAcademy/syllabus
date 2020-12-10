# Using Cookies

If we want our variables to persist in between page refreshes or redirects, storing them in cookies is a fantastic way to keep them in the browser history.

```ruby
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
* Then, render `try.html.erb`
* If you do not win, repeat 2-3. If you win, repeat 1-2-3.

Then, in *try.html.erb*:
Display the result of the guess

#### Stretch Challenge One

Create and display a counter for the number of tries attempted.

#### Stretch Challenge Two

Create a route `/new_game` and controller method `reset` to reset the game.


#### Stretch Challenge Three

Accept and store user name, and use it in the views.

#### Stretch Challenge Four

Encrypt the secret number.


[Back to Syllabus](../README.md)
