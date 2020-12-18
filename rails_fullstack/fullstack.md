# Full-stack Rails

## Video: Rails Forms
[![YouTube](http://img.youtube.com/vi/9UGcF6pnAag/0.jpg)](https://www.youtube.com/watch?v=9UGcF6pnAag)

Additional Video: [ Rails Forms ](https://player.vimeo.com/video/155715320)

## Overview
- We will create a full-stack rails application that allows the user to retrieve information from the database as well as add content to the database.

## Learning Objectives
- Mapping CRUD actions to HTTP verbs to RESTful routes
- Following a developer flow to implement routes, controller methods, and views for RESTful routes

## Vocabulary
- CRUD
- RESTful routes

## Set Up

#### Creating a new Rails app:
```
$ rails new exercise_app -d postgresql -T
$ cd exercise_app
$ rails db:create
$ rails server
```
In a browser navigate to:
`http://localhost:3000`

### Troubleshooting Tips
- Did you create your database?
- Did you migrate?
- Errors? Always look at the first error in the list.

### Initial Setup
In this example, we are creating a MVP for an app that will keep track of a user's exercise. Prior to creating the functionality of our app, we need to create a model and a controller using Rails generate commands.
```
$ rails generate model Exercise activity:string description:string
$ rails db:migrate
$ rails generate controller exercise
```

As a scaffolding step, we can add a few instances of our Exercise model to the database in Rails console. Then we can add our RESTful routes to the application. For every step, we will be adding a controller method, a route, and some code in the view.

### Index
The first step is to create a controller method that will access all the items from the database. In the index method, we are making an Active Record call that will save all the content from the database as an instance variable.

**app/controllers/exercise_controller.rb**
```ruby
def index
  @exercises = Exercise.all
end
```

Next, we will make a route that will call the index method. Since we are returning content, the request type will be a `get` request.

**config/routes.rb**  
```
get 'exercises' => 'exercise#index'
```

To create the view, we will add a new file to the exercise directory called `index.html.erb`. The file matches the name of the controller method `index`. In the view we will use a combination of HTML tags and embedded Ruby to map through the Active Record array and record each value into a list.

**app/views/exercise/index.html.erb**
```
<h1>Exercise App</h1>

<ul>
  <% @exercises.each do |exercise| %>
    <li>
      <%= exercise.activity %>
    </li>
  <% end %>
</ul>
```

### Show
`Show` is a RESTful route that looks for one item in the database. This is done by accessing the id of the item. Inside the show method we will make an Active Record call that will find one item by id. This id will come from the url params.

**app/controllers/exercise_controller.rb**
```ruby
def show
  @exercise = Exercise.find(params[:id])
end
```

Next, we will make a route that will call the show method. Because we need to extract just one item, we need the show route to expect a param. Since we are returning content, the request type will be a `get` request.

**config/routes.rb**  
```
get 'exercises/:id => 'exercise#show'
```

To create the view for `show`, we will add a new file to the exercise directory called `show.html.erb`. In the view we will use a combination of HTML tags and embedded Ruby to list the attributes of the exercise.

**app/views/exercise/show.html.erb**
```
<h3><%= @exercise.activity %></h3>
<p><% @exercise.description %></p>
```

### New
As developers, we want our users to be able add information to our web application that is then stored in the database.

`New` is a RESTful route that displays a form for the user.

**app/controllers/exercise_controller.rb**
```ruby
def new
end
```

Next, we will make a route that will take the user to a page with a form. Since we are returning content, the request type will be a `get` request.

**config/routes.rb**  
```
get 'exercises/new => 'exercise#new'
```

To create the view for `new`, we will add a new file to the exercise directory called `new.html.erb`. In the view we will use a Ruby helper method to create form inputs. Each input will have a label and a text field for the user to enter content.

With the release of Rails 6, we get a very convenient method called `form_with` that allows us to use a series of helper methods to create form elements. Form elements are items such as text inputs, radio button, and labels. By using the `form_with` method we can create forms in true Ruby-like fashion. When the code renders, Rails translates it into the corresponding HTML form tags.

`form_with` takes a code block and passes a local variable. In this example, the variable is `|form|` but it can be called whatever you want as long as it clearly communicates your intent. Form helper methods are then applied to the variable `form` and passed a symbol of each attribute.

**app/views/exercise/new.html.erb**
```
<h3>Add a New Exercise Session</h3>
<%= form_with url: '/exercises', local: true do |form| %>

  <%= form.label :activity %>
  <%= form.text_field :activity %>

  <br>
  <%= form.label :description %>
  <%= form.text_field :description %>

  <br>
  <%= form.submit 'Add Exercise' %>
<% end %>
```

### Create
`Create` is a RESTful route that submits user data to the database.

**app/controllers/exercise_controller.rb**
```ruby
def create
  @exercise = Exercise.create(
    activity: params[:activity],
    description: params[:description]
  )
end
```

Next, we will make a route that will call the create method. Since we are submitting content to the database, the request type will be a `post` request.

**config/routes.rb**  
```
post 'exercises => 'exercise#create'
```

There is no view associated with the create method. We should think about what kind of user experience we want to create when our user creates a new item. One option is to trigger a redirect after the successful creation of a new item.

### Route Aliases
Rails routes offers us a convenient way to reference routes by creating an alias using the keyword `as`. The index, show, and new routes can all have aliases. There is no need to create an alias for the create route.

**config/routes.rb**  
```
get 'exercises' => 'exercise#index', as: 'exercises'
post 'exercises => 'exercise#create'
get 'exercises/new => 'exercise#new', as: 'new_exercise'
get 'exercises/:id => 'exercise#show', as: 'exercise'
```

These route aliases can be used in links for the view as well as in the controller methods. When referencing the route alias, `_path` is appended to the end of the alias.

**NOTE** If a route requires a param, the alias will also require a param gets passed.

**app/controllers/exercise_controller.rb**
```ruby
def create
  @exercise = Exercise.create(
    activity: params[:activity],
    description: params[:description]
  )
  if @exercise.valid?
    redirect_to exercises_path
  else
    redirect_to new_exercise_path
  end
end
```

### link_to
`link_to` is a method that can help our user navigate through the application. `link_to` takes two arguments. One that creates the hyperlink and the other that routes the user to the appropriate place. This is a prime place to our route aliases.

This link can take our user to the form to create a new exercise session.

**app/views/exercise/index.html.erb**
```
<p><%= link_to 'New Exercise', new_exercise_path %></p>
```

### Review
By following the pattern of RESTful routes, we can start to implement CRUD functionality into a Rails application.


## Challenge: Blog Post
As a developer, I have been commissioned to create an application where a user can see and create blog posts.
- As a developer, I can create a blog application.
- As a developer, my blog post can have a title and content.
- As a developer, I can add new blog posts directly to my database.
- As a user, I can see all the blog titles listed on the home page of the application.
- As a user, I can click on the title of a blog and be routed to a page where I see the title and content of the blog post I selected.
- As a user, I can navigate from the show page back to the home page.
- As a user, I see a form where I can create a new blog post.
- As a user, I can click a button that will take me from the home page to a page where I can create a blog post.
- As a user, I can navigate from the form back to the home page.
- As a user, I can click a button that will submit my blog post to the database.
- As a user, I when I submit my post, I am redirected to the home page.

### Stretch Challenges
- As a user, I can delete my blog post.
- As a user, I can update my blog post.

[ Go to next lesson: Rails Strong Parameters ](./strong_parameters.md)

[ Back to Rails RESTful Routes and CRUD Actions ](./restful_routes_crud.md)

[ Back to Syllabus ](../README.md#unit-six-ruby-on-rails)
