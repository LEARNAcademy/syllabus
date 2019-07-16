# Wildlife Tracker with Nested Resources


The Forest Service is considering a proposal to place in conservancy a forest of virgin Douglas fir just outside of Portland. Before they give the go-ahead, they need to do an environmental impact study. They've asked you to build an app so that the rangers can report wildlife sightings.

### The API Stories


- **Story**:  As the consumer of the API I can create an animal and save it in the database.
An animal has the following information: common name, latin name, kingdom (mammal, insect, etc.).

- **Story**:  As the consumer of the API I can list all animals in a database.

- **Story**:  As the consumer of the API I can update an animal in the database.

- **Story**:  As the consumer of the API I can destroy a animal in the database.

- **Story**:  As the consumer of the API I can create a sighting of an animal with date (use the datetime datatype), latitude and longitude.

 - *Hint*:   An animal has_many sightings.

- **Story**:  As the consumer of the API I can update an animal sighting in the database.

- **Story**:  As the consumer of the API I can destroy an animal sighting in the database.

- **Story**:  As the consumer of the API, when I view a specific animal, I can also see a list sightings of that animal.


## Stretch Goal

- **Story**:  As the consumer of the API, I can run a report to list all sightings during a given time period.


- Hint: Your controller can look something like this:

```
class SightingsController < ApplicationController
  def index
    @sightings = Sighting.where(start_date: params[:start_date]..params[:end_date])
    render json: @sightings
  end
end
```

Remember to add the parameter names to the strong parameter whitelist.

## Super Stretch Goals
**Note:  All of these stories should include the proper RSPEC model specs, and the controllers should be tested using Controller specs.

- **Story**: As the consumer of the API, I want to see validation errors if a sighting doesn't include: latitude, longitude, or a date.
- **Story**: As the consumer of the API, I want to see validation errors if an animal doesn't include a common name, or a latin name.
- **Story**: As the consumer of the API, I want to see a validation error if the animals latin name matches exactly the common name.
- **Story**: As the consumer of the API, I want to see a validation error if the animals latin name or common name are not unique.
- **Story**: As the consumer, I want to see a status code of 422 when a post request can not be completed because of validation errors.

### Spec documentation
* [Controller Specs](https://relishapp.com/rspec/rspec-rails/docs/controller-specs)
* [Model Specs](https://relishapp.com/rspec/rspec-rails/docs/model-specs)

## Super duper Stretch Goals
- **Story**: As the consumer of the API, I can submit sighting data along with new animals in 1 api call
	- Look into ```accepts_nested_attributes_for```

### Errors in an API documentation
* [rebased](https://blog.rebased.pl/2016/11/07/api-error-handling.html)


## A note about Cloud 9 and making your app available to Postman

In order to see our app in Postman, we need to expost the running Rails application to the intenet by poking a hole through the AWS firewall.

![ec2](https://content.screencast.com/users/mclark8/folders/Jing/media/de3baa8a-4304-45fe-98a1-bbe4b48f40a2/00000517.png)

![intance](https://content.screencast.com/users/mclark8/folders/Jing/media/0ca8960a-1bdf-45dd-8a18-65a97f5f4f0d/00000518.png)

![security groups](https://content.screencast.com/users/mclark8/folders/Jing/media/fdafc2c0-ec17-47df-88f2-c1ee54a2627e/00000519.png)

![edit](https://content.screencast.com/users/mclark8/folders/Jing/media/5a2cdedb-2cef-477c-b192-88bc8ecb43ba/00000520.png)

![Add Rule](https://content.screencast.com/users/mclark8/folders/Jing/media/d638d5f5-9d97-4de7-a4dd-daa62afd3847/00000521.png)


### Running the Rails App
```bash
bundle exec rails s -b 0.0.0.0
```

Then Looking under the sharing options for the Cloud 9 server, and copy the IP address:

![ip address](https://content.screencast.com/users/mclark8/folders/Jing/media/b2ada5dd-9452-4123-a3c9-d6564a942305/00000522.png)

*Note you will use the application IP plus :8080 (ie, xx.xx.xx.xxx:8080) in the browser and in Postman
