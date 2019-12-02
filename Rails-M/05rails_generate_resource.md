# Generating a Resource in Rails

We have covered some of the Rails generator commands. As we've seen, generators can save us a lot of time by setting up the files we need in order to say start coding up a response to a server request or to create and connect a model to a table in a database. One of the most useful ones is the resource generator.

Let's have a look at what the resource generator provides for us.

## Creating the app

Here we're gonna create a simple app for tracking different types of guitars.

I've created an app using the usual setup:

```bash
rails new guitar-tracker -T --database=postgresql
rails db:create
```

I happen to know that I want to I want full CRUD functionality for the guitar model. I want to be able to **C**reate **R**ead **U**pdate **D**elete any guitar record I want. This is where the resource generator comes in handy.

I'm going to generate my guitar resource with this command:

```bash
rails generate resource Guitar strings:integer manufacturer:string model:string color:string
```

Rails does some work for me and I receive this output:

![Generate Resource Output](../assets/generate-resource.png)

With that one command, Rails creates just about everything I need to start working with guitars as a data resource.

It set up both the migration and model that I need to start using guitars as an ActiveRecord class. It created a controller (and a guitar views folder) so that I can start coding up some controller actions. And finally, it plugged in resourced routes for my guitars.

At this point we ought to run our migrations to make our model official:

```bash
rails db:migrate
```

I can use this handy command to see what that `resources :guitars` line does:

```bash
rails routes
```

There's a lot that's output to the screen but lets focus on this section:

![Resource Routes](../assets/resource-routes.png)

What we see is that Rails generated all the routes required for us to build out the CRUD functionality for our guitars. All we really need to do is tell our controller what we want it do for each request.

## Disable Authenticity Token
For static page Rails applications, a check is made to assure that forms submitted to the controller originate from the same website. In most single page applications that consume an API, we don't utilize this feature, and need to disable it.  Add the following to the ```/app/controllers/application_controller.rb```

```Ruby
skip_before_action :verify_authenticity_token
```

## Coding an index response

Let's tell it what we want it to do for a "`get`" to the "`/guitars`" url.

From looking at my `rails routes` output I can see that I need to create an `index` method on my guitars controller.

```ruby
class GuitarsController < ApplicationController

    def index 
        @guitars = Guitar.all
        render json: @guitars
    end
end
```

We're asking the controller to do something that's a little different from what we're used to. Notice I ask it to `render json` instead of a view. All this does is tell the controller to send json objects as the response.

At this point I can run the server and visit '`/guitars`'. But it's not very interesting because I don't have any data in my tables yet.

Since my guitar model is set up though, I can hop into the `rails console` and add one:

```ruby
Guitar.create(strings: 7, manufacturer: 'Ibanez', model: 'RG Premium', color: 'Twilight Black')
```

Now when I visit I should see something like this:

```json
[{"id":1,"strings":7,"manufacturer":"Ibanez","model":"RG Premium","color":"Twilight Black","created_at":"2019-08-26T23:41:14.362Z","updated_at":"2019-08-26T23:41:14.362Z"}]
```

Again, I merely ran `rails g resource`, migrated, and defined my `index` action in my controller.

Let's see one more simple example.

## Coding a show response

Let's focus on the route for retrieving selecting a single guitar object from the database.

Recalling our routes:

![Resource Routes](../assets/resource-routes.png)

We see that Rails set up a route for '`/guitars/:id`' that points to a show method in the guitars controller. We'll build that out to find a guitar based on the id param passed to the controller.

We'll update our `guitars_controller.rb` to have a show method:

```ruby
class GuitarsController < ApplicationController

    #...index method...

    def show
        @guitar = Guitar.find([params[:id]])
        render json: @guitar
    end
end
```

Now if I visit '`/guitars/1`' I should get that first guitar back.

If I hop into the rails console and add another guitar:

```ruby
Guitar.create(strings: 6, manufacturer: 'Fender', model: 'Stratocaster', color: 'Sunburst')
```

I can now visit '`/guitars/2`' and see the guitar I just created:

```json
[{"id":2,"strings":6,"manufacturer":"Fender","model":"Stratocaster","color":"Sunburst","created_at":"2019-08-27T17:40:34.155Z","updated_at":"2019-08-27T17:40:34.155Z"}]
```

Additionally, if I visit '`/guitars`', I will see all the guitars in the database.

The key here is that after generating the resource, I really only needed to define the method that a particular route requires to work.

Next we'll tackle some more involved CRUD methods and how to interact with them using Postman.
