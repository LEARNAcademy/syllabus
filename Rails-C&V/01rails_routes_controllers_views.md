# Rails Intro: Coding a Response (Routes and Controllers)

The goal of this section is to get you up and running with Rails.

You will learn:

- How to generate a Rails project
- How to run the Rails server
- How to work with public files
- How to code a response

## Create a Rails App
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

## A simple response: Public files

#### Serving the public

Rails has a folder called `/public'. Anything we put into this folder will be accessible by the rest of the application just by asking for it. To see this in action, create HTML file in `/public` called `myfile.html`.

#### In a browser enter:

`http://localhost:3000/myfile.html`

And look, `myfile.html` loaded right away.

#### Set Landing Page

We can take advantage of the `/public` directory to quickly set up our own home page instead of the Rails boilerplate. Let's change the file name for `myfile.html` to `index.html`.

##### In a browser:

`http://localhost:3000`

Now our page is being served on the home page instead.

### Answering Web Requests (Programming the response)

As neat as the `/public` directory is for quickly setting up easy-to-access pages, as developers, we typically need a way to create more application endpoints that allow us more control and the ability to do more work in responding to a user request. In short, we need to program a response

#### Anatomy of a Rails response

To understand how to program a response, we need to have an idea of how a request is made to the Rails server. As you may recall, a typical request starts with a url. In other words, a url is typed into the browser address bar and the user hits enter.

We've worked with some urls previously but take this one for example: 

`localhost:3000/answers`


In order for our Rails server to respond to a request to this url, it must have a way of knowing that it should be responding to the call to that url. A file is created when you run ```rails new``` that is intended to be the home of all those valid urls. It is the ```routes.rb``` file in the ```config``` folder of your Rails app.s

## A route

*config/routes.rb*:
```
Rails.application.routes.draw do
  get '/answers' => 'main#answers'
```
The route here is the line that reads ```get '/answers' => 'main#answers'```. What it does is essentially add something like an address on your application. Meaning when you type `localhost:3000/answers` into the browser (the get '/answers' part) and hit enter, Rails will determine that you have requested the ```/answers``` route and that it needs to find the ```main``` controller and run its ```answers``` method. Let's take a look then at a Rails controller.

## A Rails controller
From the command line, we can add a new Rails controller with a rails command:
```bash
rails generate controller main
```

We can then program our controller like this:
*app/controllers/main_controller.rb*:
```
class MainController < ApplicationController
  def answers
    render html: "hello" #.html_safe
  end
end
```

Here we are defining the main controller that we specified to handle our ```/answers``` requests in the ```routes.rb``` file. The controller, in its ```answers``` method defines what should happen when it is reached. In this case, it renders some html that reads "hello". 

This completes the Rails response to the ```/answers``` request. When we visit `localhost:3000/answers`, we should see a white page with the text "hello".

Let's program another response. Let's say we want our Rails program to be able to respond to requests for:

```localhost:3000/mypage```

First, we can tell Rails to accept requests to ```/mypage``` in the ```routes.rb```:

*config/routes.rb*:
```
Rails.application.routes.draw do
  get '/answers' => 'main#answers'
  get '/mypage' => 'main#mypage'
```

Now, I need to add a ```mypage``` method to my ```main``` controller that will define how to respond:

*app/controllers/main_controller.rb*:
```
class MainController < ApplicationController
  def answers
    render html: "hello" #.html_safe
  end

  def mypage
    render html: "welcome to my page" #.html_safe
  end
end
```

Now, our Rails app has everything it needs to respond when I visit ```localhost:3000/mypage``` in the browser. 

This may be a lot to take in, but let's recap:

### Routes and Controllers are the meat and potatoes to your Rails server

- The ```routes.rb``` file defines all the urls your application is prepared to respond to (it's like the address book of your Rails app)
- Each route will point to a method (street) on a controller (city) file
- The controller method will ultimately do the work you require and send the appropriate response

## Challenges

1) As a User I want to go to the application and see the default Rails welcome page
* Hint:  The goal here is to create a new application and start a webserver

2) As a User I want to go to the '/questions' page and be asked a profound question.
* Hint: Use a Route and a new controller.

3) As a User I want to go to the '/number' page, and see the number that is the secret to life, universe, and everything.
* Hint:  The number is: 42

4) As a User I want to go to the '/team' page, and see a list (separated by commas) of the team members who built this application.
