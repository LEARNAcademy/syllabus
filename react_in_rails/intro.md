# React IN Rails Introduction

### Video: React in Rails
[![YouTube](http://img.youtube.com/vi/ZkYxPZcISGQ/0.jpg)](https://www.youtube.com/watch?v=ZkYxPZcISGQ)

### Overview
- Rails has a very powerful asset packaging system called the Asset Pipeline that can be used to serve React components
- Adding React components inside a Rails project simplifies the flow of information from the database to the view

### Learning Objectives
- Conceptualizing how to set up an environment that will serve React components inside a Rails application
- Rendering a single React component in a Rails `html.erb` view

### Vocabulary
- Asset Pipeline
- webpacker

### Additional Resources
- [ React-Rails project docs ](https://github.com/reactjs/react-rails)

### Set Up
The setup includes adding React to the Rails application and adding Webpacker to compile the JavaScript.
- $ rails new hello_world -d postgresql -T
- $ cd hello_world
- $ rails db:create
- $ bundle add react-rails
- $ rails webpacker:install
- $ rails webpacker:install:react
- $ rails generate react:install

### Troubleshooting Tips
- Did you create your database?
- Did you migrate?
- Errors? Always look at the first error in the list.

### React Component
Create a React component in the Rails application using a generate command.
- $ rails g react:component App
- The install commands created a directory in *app* called *javascript*
- In *app/javascript* there will be another directory called *components* that will contain our *App* React component with some basic code
- Add an `h1` tag to the React component

**app/javascript/components/HelloWorld.js**
```javascript
import React from "react"
import PropTypes from "prop-types"
class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Hello World!</h1>
      </React.Fragment>
    );
  }
}

export default App
```

### Rails Controller and View
Next, we need to generate a controller so that we can route the React component can be rendered in a Rails view. This is the only Rails view we will make. Everything else will come from the React components.
- $ rails g controller Home
- Add a file in *app/views/home* called *index.html.erb*
- By calling the React Component in `erb` tags the component will be rendered in the browser through the Rails view

**app/views/home/index.html.erb**
```javascript
 <%= react_component "App" %>
```
Now we need to make sure we route to the appropriate file for our views.

### Rails Routes
Create a route so the React component will be rendered in a Rails view.

**config/routes.rb**
```ruby
 Rails.application.routes.draw do
   root to: "home#index"
 end
```

## Start the Rails Server
- $ rails s

### Challenge: Hello World
- Follow these instructions to create your own "Hello World" React in Rails application


[ Go to next lesson: React Routing IN Rails ](./react_routing_in_rails.md)

[ Back to Syllabus ](../README.md#unit-nine-react-in-rails-and-authentication)
