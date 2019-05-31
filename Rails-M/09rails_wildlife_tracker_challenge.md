# Wildlife Tracker with Nested Resources


The Forest Service is considering a proposal to place in conservancy a forest of virgin Douglas fir just outside of Portland. Before they give the go-ahead, they need to do an environmental impact study. They've asked you to build an app so that the rangers can report wildlife sightings. 

### The API Stories


- **Story**:  As the API I can create an animal and save it in the database.
An animal has the following information: common name, latin name, kingdom (mammal, insect, etc.).

- **Story**:  As the API I can list all animals in a database.

- **Story**:  As the API I can update an animal in the database.

- **Story**:  As the API I can destroy a animal in the database.

- **Story**:  As the API I can create a sighting of an animal with date, time, latitude and longitude.

 - *Hint*:   An animal has_many sightings.

- **Story**:  As the API I can update an animal sighting in the database.

- **Story**:  As the API I can destroy an animal sighting in the database.

- **Story**:  As the API I, when I view a specific animal, I can also see a list sightings of that animal.

- **Story**:  As the API I, when I view a specific animal, I can add a sighting of that animal.


## Stretch Goal

- **Story**:  As the API, I can run a report to list all sightings during a given time period.


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


## A note about Cloud 9 and making your app available to Postman

In order to see our app in Postman, we need to expost the running Rails application to the intenet by poking a hole through the AWS firewall.

![ec2](https://content.screencast.com/users/mclark8/folders/Jing/media/de3baa8a-4304-45fe-98a1-bbe4b48f40a2/00000517.png)

![intance](https://content.screencast.com/users/mclark8/folders/Jing/media/0ca8960a-1bdf-45dd-8a18-65a97f5f4f0d/00000518.png)

![security groups](https://content.screencast.com/users/mclark8/folders/Jing/media/fdafc2c0-ec17-47df-88f2-c1ee54a2627e/00000519.png)

![edit](https://content.screencast.com/users/mclark8/folders/Jing/media/5a2cdedb-2cef-477c-b192-88bc8ecb43ba/00000520.png)

![Add Rule](https://content.screencast.com/users/mclark8/folders/Jing/media/d638d5f5-9d97-4de7-a4dd-daa62afd3847/00000521.png)
