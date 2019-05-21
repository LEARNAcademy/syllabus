# React Rails Group Exercise

## Setup Steps

1) Create a Rails Application
```bash
$ rails new hello_world
$ cd hello_world
```

2) Add the React Gems
```bash
$ bundler add webpacker
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
```bash
cat app/views/pages/index.html.erb
```
```result
: <%= react_component("HelloWorld") %>
```

9) Start a Rails server

```bash
$ rails s
```

## What's Next?

[How about Building a Single Page App using React in Rails](https://github.com/LEARNAcademy/react-rails/tree/master/02_single_page_app)
