# React IN a Rails Application Introduction

## Video: React in Rails
[![YouTube](http://img.youtube.com/vi/ZkYxPZcISGQ/0.jpg)](https://www.youtube.com/watch?v=ZkYxPZcISGQ)

## Overview
- Rails has a very powerful asset packaging system called the Asset Pipeline that can be used to serve React components
- Adding React components inside a Rails project simplifies the flow of information from the database to the view

## Learning Objectives
- Understanding how to set up an environment that will serve React components inside a Rails application
- Rendering a single React component in a Rails `html.erb` view

## Vocabulary
- Asset Pipeline
- webpacker

## Useful Commands
- $ spring stop
- $ bundle install

## Additional Resources
- <a href="https://github.com/reactjs/react-rails" target="blank">React-Rails project docs</a>


### Set Up
The setup includes adding React to the Rails application and adding Webpacker to compile the JavaScript.
- $ rails new hello_world -d postgresql -T
- $ cd hello_world
- $ rails db:create
- $ bundle add react-rails
- $ bundle install
- $ rails webpacker:install
- $ rails webpacker:install:react
- $ rails generate react:install
- $ yarn install


### Step 1: React Component
Create a React component in the Rails application using a generate command
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

### Step 2: Rails Routes
Create a route so the React component will be rendered in a Rails view

**config/routes.rb**
```ruby
 Rails.application.routes.draw do
   root to: "home#index"
 end
```

### Step 3: Rails Controller and View
Generate a Rails controller and create the view. The controller name matches the route and the method called in the route must match the view file.
- $ rails g controller Home
- Add a file in *app/views/home* called *index.html.erb*
- By calling the React Component in `erb` tags the component will be rendered in the browser through the Rails view

**app/views/pages/index.html.erb**
```javascript
 <%= react_component "App" %>
```

### Step 4: Start the Rails server
- $ rails s

## Challenge: Hello World
- Follow these instructions to create your own "Hello World" React in Rails application


[Go to next lesson: React Routing in Rails](./react_routing_in_rails.md)

[Back to Syllabus](../README.md)
