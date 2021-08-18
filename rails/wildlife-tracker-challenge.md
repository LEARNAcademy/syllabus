# Wildlife Tracker Challenge

### Additional Resources
- [Controller Specs](https://relishapp.com/rspec/rspec-rails/docs/controller-specs)
- [Model Specs](https://relishapp.com/rspec/rspec-rails/docs/model-specs)
- [Handling Errors in an API Application the Rails Way](https://blog.rebased.pl/2016/11/07/api-error-handling.html)

### Set Up

#### Creating a new Rails app:
```
$ rails new wildlife_tracker -d postgresql -T
$ cd wildlife_tracker
$ rails db:create
$ bundle add rspec-rails
$ rails generate rspec:install
$ rails server
```

### Troubleshooting Tips
- Did you create your database?
- Did you migrate?
- Is your server running?
- Are you requesting the correct route?
- Errors? Always look at the first error in the list.

## The API Stories

The Forest Service is considering a proposal to place in conservancy a forest of virgin Douglas fir just outside of Portland, Oregon. Before they give the go-ahead, they need to do an environmental impact study. They've asked you to build an API the rangers can use to report wildlife sightings.

- **Story**:  As a developer I can create an animal model in the database. An animal has the following information: common name, latin name, kingdom (mammal, insect, etc.).
- **Story**:  As the consumer of the API I can see all the animals in the database.
  - *Hint*: Make a few animals using Rails Console
- **Story**:  As the consumer of the API I can update an animal in the database.
- **Story**:  As the consumer of the API I can destroy an animal in the database.
- **Story**:  As the consumer of the API I can create a new animal in the database.
- **Story**:  As the consumer of the API I can create a sighting of an animal with date (use the *datetime* datatype), a latitude, and a longitude.
  - *Hint*:  An animal has_many sightings.  (rails g resource Sighting animal_id:integer ...)
- **Story**:  As the consumer of the API I can update an animal sighting in the database.
- **Story**:  As the consumer of the API I can destroy an animal sighting in the database.
- **Story**:  As the consumer of the API, when I view a specific animal, I can also see a list sightings of that animal.
  - *Hint*: Checkout the [ Ruby on Rails API docs ](https://api.rubyonrails.org/classes/ActiveModel/Serializers/JSON.html#method-i-as_json) on how to include associations.
- **Story**:  As the consumer of the API, I can run a report to list all sightings during a given time period.
  - *Hint*: Your controller can look like this:
```ruby
class SightingsController < ApplicationController
  def index
    sightings = Sighting.where(date: params[:start_date]..params[:end_date])
    render json: sightings
  end
end
```

Remember to add the start_date and end_date to what is permitted in your strong parameters method.

## Stretch Challenges
**Note**:  All of these stories should include the proper RSpec tests. Validations will require specs in `spec/models`, and the controller method will require specs in `spec/requests`.

- **Story**: As the consumer of the API, I want to see validation errors if a sighting doesn't include: latitude, longitude, or a date.
- **Story**: As the consumer of the API, I want to see validation errors if an animal doesn't include a common name, or a latin name.
- **Story**: As the consumer of the API, I want to see a validation error if the animals latin name matches exactly the common name.
- **Story**: As the consumer of the API, I want to see a validation error if the animals latin name or common name are not unique.
- **Story**: As the consumer, I want to see a status code of 422 when a post request can not be completed because of validation errors.
  - Check out [Handling Errors in an API Application the Rails Way](https://blog.rebased.pl/2016/11/07/api-error-handling.html)

## Super Stretch Challenge
- **Story**: As the consumer of the API, I can submit sighting data along with a new animal in a single API call.
	- *Hint*: Look into `accepts_nested_attributes_for`

---
[Back to Syllabus](../README.md#unit-six-ruby-on-rails)
