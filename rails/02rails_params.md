# Parameters

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
