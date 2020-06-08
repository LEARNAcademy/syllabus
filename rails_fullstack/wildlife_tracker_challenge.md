# Wildlife Tracker with Nested Resources

The Forest Service is considering a proposal to place in conservancy a forest of virgin Douglas fir just outside of Portland. Before they give the go-ahead, they need to do an environmental impact study. They've asked you to build an app so that the rangers can report wildlife sightings.

## Cloud 9 Users
Be sure and read over the [instructions](./postman.md) on making your app in development available to Postman.

## The API Stories

- **Story**:  As the consumer of the API I can list all animals in a database.
  - *Hint*: Make a few animals using Rails Console

- **Story**:  As the consumer of the API I can create an animal and save it in the database.
An animal has the following information: common name, latin name, kingdom (mammal, insect, etc.).

- **Story**:  As the consumer of the API I can update an animal in the database.

- **Story**:  As the consumer of the API I can destroy a animal in the database.

- **Story**:  As the consumer of the API I can create a sighting of an animal with date (use the *datetime* datatype), latitude and longitude.
  - *Hint*:  An animal has_many sightings.  (rails g resource Sighting animal_id:integer ...)

- **Story**:  As the consumer of the API I can update an animal sighting in the database.

- **Story**:  As the consumer of the API I can destroy an animal sighting in the database.

- **Story**:  As the consumer of the API, when I view a specific animal, I can also see a list sightings of that animal.

- **Story**:  As the consumer of the API, I can run a report to list all sightings during a given time period.

- *Hint*: Your controller can look something like this:
```ruby
class SightingsController < ApplicationController
  def index
    sightings = Sighting.where(start_date: params[:start_date]..params[:end_date])
    render json: sightings
  end
end
```

Remember to add the start_date and end_date to what is permitted in your strong parameters method.

## Stretch Challenges
**Note**:  All of these stories should include the proper RSpec model specs, and the controllers should be tested using Controller specs.

**Spec Documentation**
- [Controller Specs](https://relishapp.com/rspec/rspec-rails/docs/controller-specs)
- [Model Specs](https://relishapp.com/rspec/rspec-rails/docs/model-specs)

- **Story**: As the consumer of the API, I want to see validation errors if a sighting doesn't include: latitude, longitude, or a date.
- **Story**: As the consumer of the API, I want to see validation errors if an animal doesn't include a common name, or a latin name.
- **Story**: As the consumer of the API, I want to see a validation error if the animals latin name matches exactly the common name.
- **Story**: As the consumer of the API, I want to see a validation error if the animals latin name or common name are not unique.
- **Story**: As the consumer, I want to see a status code of 422 when a post request can not be completed because of validation errors.
  - Check out [Handling Errors in an API Application the Rails Way](https://blog.rebased.pl/2016/11/07/api-error-handling.html)

## Super Stretch Challenge
- **Story**: As the consumer of the API, I can submit sighting data along with new animals in 1 api call
	- Look into `accepts_nested_attributes_for`


[Back to Syllabus](../README.md)
