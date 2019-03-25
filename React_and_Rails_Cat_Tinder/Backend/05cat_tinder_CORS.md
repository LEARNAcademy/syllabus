# CORS
The last bit of housekeeping we need to do on the backend is enable CORS.  Our frontend and backend are running on two different servers.  Browsers have security built in to protect users from submitting their data to servers that they are not intending to, so we have to tell the frontend that the backend is indeed the correct place for it to be communicating with.

You can read more about CORS here:

* [MDN on CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
* [Wikipedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
* [NPM CORS package](https://www.npmjs.com/package/cors)

## Enable CORS in the backend app
When we created the Rails application with the ```--api``` flag, CORS support was automatically added for us, but disabled.  We need to enable it.  In your Gemfile, find this line:

```ruby
# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
#gem 'rack-cors'
```

And uncomment the line beginning with 'gem', so it looks like this:

```ruby
# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem 'rack-cors'
```

Then, we need to enable CORS in the initializer by uncommenting its setup code, and changing what domain it allows requests to be sent from.  We'll use the wildcard '*' because we're in development.  When you take your app to prodution, you'll want to change this the URL that your frontend app is served from.

#### config/initializers/cors.rb
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
Uncomment the config section above

## Bundle install

Finally, we run ```bundle install``` from the command line to install the proper gems

```
$ bundle install
```

That's it!  We can now accept POST, PUT, and DELETE requests in our server side application.
