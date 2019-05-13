### Serve HTML and Other Resources

#### Create a Rails App
Now that we've explored HTML, CSS, Javascript, and Ruby, we have the complete set of tools we need to start learning Rails, the framework for writing web applications in Ruby. Getting started is as easy as a few commands in the terminal.

##### In the terminal:
```
rails new myapp -d postgresql -T
cd myapp
rails db:create
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


## Challenges

1) As a User I want to go to the application and see the default Rails welcome page
* Hint:  The goal here is to create a new application and start a webserver

2) As a User I want to go to the '/questions' page and be asked a profound question.
* Hint: Use a Route and a new controller.

3) As a User I want to go to the '/number' page, and see the number that is the secret to life, universe, and everything.
* Hint:  The number is: 42

4) As a User I want to go to the '/team' page, and see a list (separated by commas) of the team members who built this application.
