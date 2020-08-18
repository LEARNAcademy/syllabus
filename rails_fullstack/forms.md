# Rails Forms

## Video: Rails Forms
[![YouTube](http://img.youtube.com/vi/9UGcF6pnAag/0.jpg)](https://www.youtube.com/watch?v=9UGcF6pnAag)

Additional Video: [ Rails Forms ](https://player.vimeo.com/video/155715320)

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
$ rails new blog -d postgresql -T
$ cd blog
$ rails db:create
$ rails server
```
In a browser navigate to:
`http://localhost:3000`

Prior to creating a form, there are a few things we want to have completed:
- Models generated with appropriate attributes
- Relationships between models defined
- [Controller generated](./routes_controllers_views.md)
- Routes and views created for the `index` and `show` routes/methods to display information on the page

### Creating a Form
As developers, we want our users to be able add information to our web application that is then stored in the database. So far, the only way we have adding new information to the database is through the terminal. Obviously, we want our user to have an easier way to add, update, and delete information.

### Route
We need to add a route that will show our user a page where they can enter information in a form and a route that will post the information to the database.

**config/routes.rb**
```ruby
Rails.application.routes.draw do

  # the get route called 'new' will allow our user to create a new entry
  get "blog_posts/new" => "blog_posts#new"

  # the post route that will 'create' a new item in the database
  post "blog_posts" => "blog_posts#create"

end
```

### Controller

**app/controllers/blog_posts_controller.rb**

```ruby
class BlogPostsController < ApplicationController
  # the new method just needs to exist to route to the correct view
  def new
    # because of Rails naming conventions, we don't need to have a render here, but really this is happening:
    # render "new.html.erb"
  end

  # the create method defines an instance variable that will create a new instance of the model with a title and content provided by the user
  def create
    @blog_post = BlogPost.create(
      title: params[:title],
      content: params[:content]
    )
    # if the user successfully creates a new post Rails will route to a view of that post, otherwise it will stay on the form
    if @blog_post.valid?
      redirect_to @blog_post
      # this does the same thing as passing a route to the show page of the object: redirect_to '/model_names/#{instance_variable_name.id}'
    else
      render action: :new
    end
  end
end
```

### View

**views/blog_posts/new.html.erb**

With the release of Rails 6, we get a very convenient method called `form_with` that allows us to use a series of helper methods to create form elements. Form elements are items such as text inputs, radio button, and labels. By using the `form_with` method we can create forms in true Ruby-like fashion. When the code renders, Rails translates it into the corresponding HTML form tags.

`form_with` takes a code block and passes a local variable. In this example, the variable is `|form|` but it can be called whatever you want as long as it clearly communicates your intent. Form helper methods are then applied to the variable `form` and passed a symbol of the model attribute.

```
<h1>Add a New Post</h1>

<%= form_with url: '/blog_posts', local: true do |form| %>

  <%= form.label :title %>
  <%= form.text_field :title %>

  <%= form.label :content %>
  <%= form.check_box :content %>

  <%= form.submit :create %>
<% end %>
```


## Challenge: Blog Post
- As a developer, I can create a blog application.
- As a developer, my blog post can have a title and content.
- As a developer, I can add new blog posts to my database.
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

[Go to next lesson: Rails Strong Parameters](./strong_parameters.md)

[Back to Rails Restful Routes and CRUD Actions](./restful_routes_crud.md)

[Back to Syllabus](../README.md)
