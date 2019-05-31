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
