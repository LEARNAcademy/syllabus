# Rails Forms

https://player.vimeo.com/video/155715320

## Video: Ruby Assessment & Rails Models Review

[![YouTube](http://img.youtube.com/vi/-CDpoSQTme0/0.jpg)](https://www.youtube.com/watch?v=-CDpoSQTme0)

## Video: Rails Forms

[![YouTube](http://img.youtube.com/vi/9UGcF6pnAag/0.jpg)](https://www.youtube.com/watch?v=9UGcF6pnAag)

## Overview
- Adding CRUD operations for the user to see, add, edit, and delete information from the database
- Building a `get` request for a method called `new` and a `post` request for method called `create`

## Learning Objectives
- Creating a form that will accept information from the user
- Creating a submit process that will add information to the server
- Performing CRUD actions in a Rails application

## Vocabulary
- CRUD
- RESTful routes

## Set Up

#### Creating a new Rails app:
```
$ rails new myapp -d postgresql -T
$ cd myapp
$ rails db:create
$ rails server
```

In a browser navigate to:
`http://localhost:3000`


## Creating a Form
As developers, we want our users to be able add information to our web application that is then stored in the database. So far, the only way we have adding new information to the database is through the terminal. Obviously, we want our user to have an easier way to add, update, and delete information.

### Set up
Prior to creating a form, there are a few things we want to have completed:
- Models generated with appropriate attributes
- Relationships between models defined
- [Controller generated](./01rails_routes_controllers_views.md)
- Routes and views created to see the information from the database displayed on the page

### Route

We need to add a route that will show our user a page where they can enter information in a form and a route that will post the information to the database.

**config/routes.rb**

```ruby
Rails.application.routes.draw do

  # the get route called 'new' will allow our user to create a new entry
  get "model_names/new" => "model_names#new"

  # the post route that will 'create' a new item in the database
  post "model_names" => "model_names#create"

end
```

### Controller

**app/controllers/model_name_controller.rb**

```ruby
class ModelNameController < ApplicationController
  # the new method just needs to exist to route to the correct view
  def new
    # because of Rails naming conventions, we don't need to have a render here, but really this is happening:
    # render "new.html.erb"
  end

  # the create method defines an instance variable that will create a new instance of the model with a title and content provided by the user
  def create
    @instance_variable_name = ModelName.create(
      title: params[:title],
      content: params[:content]
    )
    # if the user successfully creates a new post Rails will route to a view of that post, otherwise it will stay on the form
    if @instance_variable_name.valid?
      redirect_to @instance_variable_name
      # this does the same thing as passing a route to the show page of the object: redirect_to '/model_names/#{instance_variable_name.id}'
    end
  end
end
```

### View

**views/model_name/new.html.erb**

This form view requires a bit of Ruby syntax magic to bypass an authentication token Rails adds when users are submitting information to the database.

Inside the embedded Ruby are a series of html tags. There is a label for the input field for `title` and the same for the input field for `content` followed by a button that will submit that content to the database.

```html
<h1>Add a New Post</h1>

<%= form_with url: "/model_names", local: true do %>
  <label for="title">Title</label>
  <input type="text" name="title">
  <br>
  <label for="content">Content</label>
  <textarea name="content"></textarea>
  <br>
  <input type="submit" value="submit">
<% end %>
```

## Challenge: Blog Post
- As a developer, I can create a blog application.
- As a developer, my blog post can have a title and content.
- As a developer, I can add new blog posts to my database.
- As a developer, my blog application can have many comments for each post. The comment has an author and content.
title and content.
- As a developer, I can add new comments to the blog posts in my database.
- As a user, I can see all the blog titles listed on the home page of the application.
- As a user, I can click on the title of a blog and be routed to a page where I see the title and content of the blog post I selected.
- As a user, I can navigate back to the home page.
- As a user, I can click a button that will take me to a page where I can create a blog post.
- As a user, I see a form I can fill out to create a new blog post.
- As a user, I can click a button that will submit my blog post to the application.
- As a user, I can see my blog title listed on the home page.

### Stretch Challenges
- As a user, I can delete my blog post.
- As a user, I can update my blog post.

[Back to Syllabus](../README.md)
