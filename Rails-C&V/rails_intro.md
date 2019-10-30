# Rails Intro

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
