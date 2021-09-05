# Cat Tinder API CORS

### Overview
- CORS stands for Cross-Origin Resource Sharing.
- CORS manages requests that occur between decoupled applications, or from another "origin".
- Browsers have security built in to protect users from submitting their data to servers that they are not intending to, so we have to tell the frontend that the backend is indeed the correct place for it to be communicating with.

### Learning Objectives
- Following the process of adding CORS to a Rails application

### Useful Commands
- $ bundle install

### Additional Resources
- [ MDN on CORS ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
- [ CORS Wikipedia ](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)

---
### Allowing External Requests
The last bit of housekeeping we need to do on the backend is enable our Rails application to accept requests from the React application.

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
CORS which stands for Cross-Origin Resource Sharing. Our React frontend and Rails backend applications are running on two different servers. We have to tell the Rails app that (while in development) it is okay to accept requests from any outside domain.

CORS can be added to our application by doing three things:

1. Adding this line of code to the Gemfile:
```
gem 'rack-cors', :require => 'rack/cors'
```

2. Add a file to the `config/initializers` directory named `cors.rb` and add the following code to the new file:

**config/initializers/cors.rb**
```ruby
# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'  # <- change this to allow requests from any domain while in development.

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

3. Run the command `$ bundle` from the command line to update the dependencies.

That's it!  We can now accept POST, PUT, and DELETE requests in our server side application.

### CORS in Production
When you take your app to production, you'll want to change the wildcard `*` to the URL that your frontend app is served from.

### Challenge: Cat Tinder API CORS
As a developer, I have been commissioned to create an application where a user can see cute cats looking for friends. As a user, I can see a list of cats. I can click on a cat and see more information about that cat. I can also add cats to the list of cats looking for friends. If my work is acceptable to my client, I may also be asked to add the ability to remove a cat from the list as well as edit cat information.

- As a developer, I can enable my controller to accept requests from outside applications
- As a developer, I can add the CORS gem to my Rails application
- As a developer, I can add the `cors.rb` file to my application

---
[Back to Syllabus](../../README.md#cat-tinder-backend)
