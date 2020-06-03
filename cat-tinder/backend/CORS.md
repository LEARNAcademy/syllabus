# Cat Tinder API CORS

## Overview
-  Browsers have security built in to protect users from submitting their data to servers that they are not intending to, so we have to tell the frontend that the backend is indeed the correct place for it to be communicating with.

## Learning Objectives
- Adding CORS to a Rails application

## Vocabulary
- CORS

## Useful Commands
- $ gem install rack-cors
- $ bundle install

## Additional Resources
- [MDN on CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
- [Wikipedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
- [NPM CORS package](https://www.npmjs.com/package/cors)

## Cross-Origin Resource Sharing
The last bit of housekeeping we need to do on the backend is enable CORS. Our React frontend and Rails backend applications are running on two different servers. We have to tell the Rails app that (while in development) it is okay to accept requests from any outside domain.

## Enable CORS in Rails
CORS can be added to our application by adding a gem.
```
$ gem install rack-cors
```

Then, we need to enable CORS in the initializer.
- Create a new file in *config/initializers* called *cors.rb*
- Add the following code to the new file.

**config/initializers/cors.rb**
```ruby
# Be sure to restart your server when you modify this file.

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

When you take your app to production, you'll want to change the wildcard `*` to the URL that your frontend app is served from.


## Bundle install
Finally, we run `$ bundle install` from the command line to update the gem file.

```
$ bundle install
```

That's it!  We can now accept POST, PUT, and DELETE requests in our server side application.

## Challenge
- Enable CORS in your Cat API

[Go to next lesson: Cat Tinder Fetching Cats](../connecting/fetch.md)

[Back to Cat Tinder API Validations](./validations.md)

[Back to Syllabus](../../README.md)
