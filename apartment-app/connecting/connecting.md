### Skip Authenticity Token

We need to update the application controller to allow requests from applications outside the Rails application.

To do this, we add a line to the ApplicationController:

**app/controllers/application_controller.rb**

```ruby
class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
end
```

### Enable CORS

CORS can be added to our application by doing three things:

1. Adding this line of code to the Gemfile:

```
gem 'rack-cors', :require => 'rack/cors'
```

2. Add a file to the `config/initializers` directory named `cors.rb` and add the following code to the new file:

**config/initializers/cors.rb**

```ruby
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'  # <- change this to allow requests from any domain while in development.

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

3. Run `$ bundle` from the command line to update the dependencies.

This action is also considered a post request and therefore requires a corresponding form.

---

[Back to Syllabus](../../README.md#unit-nine-react-and-rails-with-authentication)
