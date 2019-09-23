# React Rails Group Exercise

[![YouTube](http://img.youtube.com/vi/ZkYxPZcISGQ/0.jpg)](https://www.youtube.com/watch?v=ZkYxPZcISGQ)

## Setup Steps

0) Add Yarn if its not already installed
```bash
$ yarn -v 
```
If yarn not found:

```bash
$ npm install -g yarn
```

1) Create a Rails Application
```bash
$ gem install rails
$ rails new hello_world
$ cd hello_world
```

2) Add the React Gems

For Rails 5.3 and below:
```bash
$ bundler add webpacker
```

```bash
 
$ bundler add react-rails
$ bundle install
```

3) Install Webpacker
```bash
$ rails webpacker:install
$ rails webpacker:install:react
$ rails generate react:install
```

4) Add Webpack to the Rails Application Layout (/app/views/layouts/application.html.erb)
```html
<%= javascript_pack_tag 'application' %>
```

5) Generate a new React component
```bash
$ rails g react:component HelloWorld
```

6) Update the new Component
```bash
cat app/javascript/components/HelloWorld.js
```
```result
: import React from "react"
: import PropTypes from "prop-types"
: class HelloWorld extends React.Component {
:   render () {
:     return (
:       <h1>Hello World</h1>
:     );
:   }
: }
:
: export default HelloWorld
```

7) Create a Homepage and add the Route to Rails

```bash
$ rails g controller Pages
```
```bash
cat config/routes.rb
```
```result
: Rails.application.routes.draw do
:   root to: "pages#index"
: end
```

8) Add homepage, and React Component

#### app/views/pages/index.html.erb
```result
: <%= react_component("HelloWorld") %>
```

9) Start a Rails server

```bash
$ rails s
```
