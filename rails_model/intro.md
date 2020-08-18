# Ruby on Rails Introduction

## Overview
- "Learning to build a modern web application is daunting. Ruby on Rails makes it much easier and more fun. It includes everything you need to build fantastic applications, and you can learn it with the support of our large, friendly community." -- Rails Docs
- Ruby on Rails is a server-side web application framework written in Ruby. Rails was created by Danish programmer David Heinemeier Hansson (known as DHH). Rails was released in July 2004 as open source code.
- Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages.

## Learning Objectives
- Exploring the fundamentals of Ruby on Rails
- Generating a new Rails project
- Running the Rails server

## Vocabulary
- Ruby on Rails
- MVC

## Additional Resources
- <a href="https://rubyonrails.org/" target="blank">Rails Docs</a>
- <a href="https://medium.com/@instaacarma/the-history-of-ruby-on-rails-986ead4e0e0a" target="blank">History of Ruby on Rails</a>

## Ruby on Rails Principles
- Convention over Configuration: "One of the early productivity mottos of Rails went: “You’re not a beautiful and unique snowflake”. It postulated that by giving up vain individuality, you can leapfrog the toils of mundane decisions, and make faster progress in areas that really matter."
- Programmer Happiness: "There would be no Rails without Ruby, so it's only fitting that the first doctrinal pillar is lifted straight from the core motivation for creating Ruby. Ruby’s original heresy was indeed to place the happiness of the programmer on a pedestal."

## Create a Rails App
Now that we've explored HTML, CSS, JavaScript, and Ruby, we have the complete set of tools needed to start learning Rails, the framework for writing web applications in Ruby.

```
$ rails new app_name -d postgresql -T
$ cd app_name
$ rails db:create
$ rails server
```

- `rails new app_name`: generates a new folder with the entire Rails directory structure with all the code you need to run our simple application right out of the box
- `rails new app_app -d postgresql -T`: Rails comes with a default SQL database called SQLite, passing the flags `-d postgresql -T` will replace the default database with postgres
-  The `-T` flag tells rails to skip adding the default Minitest framework, as we're going to use Rspec instead
- `rails db:create`: sets up an empty database
- `rails server` or `rails s`: starts the Rails application by starting the server

In a browser navigate to:
`http://localhost:3000`
or
`127.0.0.1:3000`

![Rails Boilerplate](./assets/yay-youre-on-rails.png)


[Go to next lesson: Rails Active Record Introduction](./active_record_intro.md)

[Back to Syllabus](../README.md)
