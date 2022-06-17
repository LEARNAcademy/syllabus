# Rails Generate Resource

# JavaScript Arrays

#### Overview
We have covered some of the Rails generator commands. As we've seen, generators can save us a lot of time by setting up the files we need in order to say start coding up a response to a server request or to create and connect a model to a table in a database.

#### Previous Lecture (43 min)
[![YouTube](http://img.youtube.com/vi/pzD_tTktq8Y/0.jpg)](https://www.youtube.com/watch?v=pzD_tTktq8Y)

#### Learning Objectives
- can discern RESTful routes associated with views
- can discern RESTful routes associated with database actions
- can discern JSON from HTML
- can match controller methods to the appropriate HTTP action
- can utilize Postman to visualize API data flow
- can implement appropriate model validations and corresponding specs

#### Vocabulary
- resource
- JSON
- Postman

#### Additional Resources
- [Postman Docs](https://www.postman.com/)
- [What is an API?](mulesoft.com/resources/api/what-is-an-api)
- [Controller Specs](https://relishapp.com/rspec/rspec-rails/docs/controller-specs)
- [Model Specs](https://relishapp.com/rspec/rspec-rails/docs/model-specs)
- [Handling Errors in an API Application the Rails Way](https://blog.rebased.pl/2016/11/07/api-error-handling.html)

#### Useful Commands
- $ `rails routes`

#### Process
- `cd` to your Desktop
- $ `rails new rails-api -d postgresql -T`
- $ `cd rails new rails-api -d postgresql -T`
- $ `rails db:create`
- Add the remote from GitHuh
- Create the main branch
- Make an initial commit
- $ `bundle add rspec-rails`
- $ `rails generate rspec:install`
- $ `rails s`
- Open the folder in a text editor
- Code!

#### Troubleshooting Tips
- Did you create your database?
- Did you migrate?
- Is your server running?
- Are you requesting the correct route?
- Errors? Always look at the first error in the list.

---

### Rails Generate Resource
To get the application set up, we can generate a guitar resource.

```
$ rails generate resource Guitar strings:integer manufacturer:string model:string color:string
```

![Generate Resource Output](./assets/generate-resource.png)

With that one command, Rails creates just about everything I need to start working with guitars as a data resource.

It set up both the migration and model that I need to start using guitars as an ActiveRecord class. It created a controller (and a guitar views folder) so that I can start coding up some controller actions. And finally, it plugged in resourced routes for my guitars.

At this point we ought to run our migrations to make our model official:

```
$ rails db:migrate
```

I can use this handy command to see what that `resources :guitars` line does:

```
$ rails routes
```

There's a lot that's output to the screen but lets focus on this section:

![Resource Routes](./assets/resource-routes.png)

What we see is that Rails generated all the routes required for us to build out the CRUD functionality for our guitars. All we really need to do is tell our controller what we want it do for each request.

### Disable Authenticity Token
For static page Rails applications, a check is made to assure that forms submitted to the controller originate from the same website. In most single page applications that consume an API, we don't utilize this feature, and need to disable it. Add the following to the `app/controllers/application_controller.rb`

```ruby
skip_before_action :verify_authenticity_token
```

### Index

Let's tell it what we want it to do for a `get` to the `/guitars` url.

From looking at my `rails routes` output I can see that I need to create an `index` method on my guitars controller.

```ruby
class GuitarsController < ApplicationController

  def index
    guitars = Guitar.all
    render json: guitars
  end

end
```

Notice I ask it to `render json`. All this does is tell the controller to send json objects as the response.

At this point I can run the server and visit `/guitars`. But it's not very interesting because I don't have any data in my tables yet.

Since my guitar model is set up though, I can hop into the `rails console` and add one:

```
> Guitar.create(strings: 7, manufacturer: 'Ibanez', model: 'RG Premium', color: 'Twilight Black')
```

Now when I visit I should see something like this:

```
[
  {
    "id": 1,
    "strings": 7,
    "manufacturer": "Ibanez",
    "model": "RG Premium",
    "color": "Twilight Black",
    "created_at": "2019-08-26T23:41:14.362Z",
    "updated_at": "2019-08-26T23:41:14.362Z"
  }
]
```

### Show

Let's focus on the route for retrieving selecting a single guitar object from the database.

Recalling our routes:

![Resource Routes](./assets/resource-routes.png)

We see that Rails set up a route for '`/guitars/:id`' that points to a show method in the guitars controller. We'll build that out to find a guitar based on the id param passed to the controller.

We'll update our `guitars_controller.rb` to have a show method:

```ruby
class GuitarsController < ApplicationController

  #...index method...

  def show
    guitar = Guitar.find(params[:id])
    render json: guitar
  end

end
```

Now `localhost:3000/guitars/1` returns the first guitar.

Let's hop into the rails console and add another guitar:

```
> Guitar.create(strings: 6, manufacturer: 'Fender', model: 'Stratocaster', color: 'Sunburst')
```

Now `localhost:3000/guitars/2` returns the guitar we just created:

```json
{
  "id": 2,
  "strings": 6,
  "manufacturer": "Fender",
  "model": "Stratocaster",
  "color": "Sunburst",
  "created_at": "2019-08-27T17:40:34.155Z",
  "updated_at": "2019-08-27T17:40:34.155Z"
}
```

Additionally, '`/guitars`', will show all the guitars in the database.

The key here is that after generating the resource, we really only needed to define the method that a particular route requires to work.

### Create

First we'll tackle building the method to create a guitar.

We'll update `guitars_controller.rb` like so:

```ruby
class GuitarsController < ApplicationController

  #...index/show methods...

  def create
    guitar = Guitar.create(guitar_params)
    if guitar.valid?
      render json: guitar
    else
      render json: guitar.errors
    end
  end

  private
  def guitar_params
    params.require(:guitar).permit(:strings, :manufacturer, :model, :color)
  end

end
```

Now we've set up strong params for our controller and we have added a method to create a guitar or render errors.

Let's try out our new endpoint through Postman.

![Post Request in Postman](./assets/postman-post-send.png)

When we click send, given that we've formatted our request correctly, we should see a response like this:

![Post Response in Postman](./assets/postman-create-json.png)

Notice that we get the newly created guitar in the body of our response.

### Destroy

The destroy action is the conventional Rails action for implementing the Delete operation. Let's build out that action.

We'll add a destroy method to our `guitars_controller.rb`:

```ruby
def destroy
  guitar = Guitar.find(params[:id])
  if guitar.destroy
    render json: guitar
  else
    render json: guitar.errors
  end
end
```

Once that's set up, we'll recall our routes or run `rails routes` in my terminal:

![Rails routes](./assets/resource-routes.png)

We see that our delete action is mapped to `/guitars/:id` so that's what we'll attempt to reach in Postman. Let's try to delete the guitar we just created.

We'll build our request like so:

![Delete request in Postman](./assets/postman-delete-send.png)

Notice that we've selected the `DELETE` verb and set up the url with the `id` of the guitar we want delete.

When we hit send, we should get back the item we just deleted:

![Deleted Guitar](./assets/postman-create-json.png)

Now if we try to show the guitar we just deleted, we should receive an error:

![Postman 404](./assets/postman-404.png)

---

### Wildlife Tracker Challenge

The Forest Service is considering a proposal to place in conservancy a forest of virgin Douglas fir just outside of Portland, Oregon. Before they give the go ahead, they need to do an environmental impact study. They've asked you to build an API the rangers can use to report wildlife sightings.

**Story**  
In order to track wildlife sightings, as a user of the API, I need to manage animals.
**Branch**  
animal-crud-actions
**Acceptance Criteria**  
- Create a resource for animal with the following information: common name and scientific binomial
- Can see the data response of all the animals
- Can create a new animal in the database
- Can update an existing animal in the database
- Can remove an animal entry in the database

**Story**  
In order to track wildlife sightings, as a user of the API, I need to manage animal sightings.
**Branch**  
sighting-crud-actions
**Acceptance Criteria**  
- Create a resource for animal sightings with the following information: latitude, longitude, date
  - Hint: An animal has_many sightings (rails g resource Sighting animal_id:integer ...)
  - Hint: Date is written in Active Record as `yyyy-mm-dd` (“2022-07-28")
- Can create a new animal sighting in the database
- Can update an existing animal sighting in the database
- Can remove an animal sighting in the database

**Story**  
In order to see the wildlife sightings, as a user of the API, I need to run reports on animal sightings.
**Branch**  
animal-sightings-reports
**Acceptance Criteria**  
- Can see one animal with all its associated sightings
  - Hint: Checkout [this example](https://github.com/learn-co-students/js-rails-as-api-rendering-related-object-data-in-json-v-000#using-include) on how to include associated records
- Can see all the all sightings during a given time period
  - Hint: Your controller can use a range to look like this:
```ruby
class SightingsController < ApplicationController
  def index
    sightings = Sighting.where(date: params[:start_date]..params[:end_date])
    render json: sightings
  end
end
```

  - Hint: Be sure to add the start_date and end_date to what is permitted in your strong parameters method
  - Hint: Utilize the params section in Postman to ease the developer experience
  - Hint: [Routes with params](./controllers-routes-views.md)

**Story**  
In order to see the wildlife sightings contain valid data, as a user of the API, I need to include proper specs.
**Branch**  
animal-sightings-specs
**Acceptance Criteria**  
## Stretch Challenges
Validations will require specs in `spec/models` and the controller methods will require specs in `spec/requests`.
- can see validation errors if an animal doesn't include a common name and scientific binomial
- can see validation errors if a sighting doesn't include latitude, longitude, or a date
- can see a validation error if an animal's common name exactly matches the scientific binomial
- can see a validation error if the animal's common name and scientific binomial are not unique
- can see a status code of 422 when a post request can not be completed because of validation errors
  - Hint: [Handling Errors in an API Application the Rails Way](https://blog.rebased.pl/2016/11/07/api-error-handling.html)

**Story**  
In order to increase efficiency, as a user of the API, I need to add an animal and a sighting at the same time.
**Branch**  
submit-animal-with-sightings
**Acceptance Criteria**  
- can create new animal along with sighting data in a single API request
	- Hint: Look into `accepts_nested_attributes_for`

---
[Back to Syllabus](../README.md#unit-six-ruby-on-rails)
