# Wildlife Tracker with Nested Resources


The Forest Service is considering a proposal from a timber company to clear-cut an old-growth forest of virgin Douglas fir just outside of Portland. Before they give the go-ahead, they need to do an environmental impact study. They've asked you and your pair to build an app so that the rangers can report wildlife sightings.

- **Story**:  As a ranger I can go to a home page.

- **Story**:  As a ranger I can create an animal and save it in the database.
An animal has the following information: common name, latin name, kingdom (mammal, insect, etc.).

- **Story**:  As a ranger I can list all animals in a database.

- **Story**:  As a ranger I can update an animal in the database.

- **Story**:  As a ranger I can destroy a animal in the database.

- **Story**:  As a ranger I can create a sighting of an animal with date, time, latitude and longitude.

 - *Hint*:   An animal has_many sightings.

- **Story**:  As a ranger I can update an animal sighting in the database.

- **Story**:  As a ranger I can destroy an animal sighting in the database.

- **Story**:  As a ranger I, when I view a specific animal, I can also see a list sightings of that animal.

- **Story**:  As a ranger I, when I view a specific animal, I can add a sighting of that animal.

- **Story**:  The area under consideration has been divided into several regions. As a ranger, when I report a sighting, I can choose the region from a drop-down menu.


## Stretch Goal

- **Story**:  As a ranger, I can run a report to list all sightings during a given time period.

 - *Hint*:  write a form that looks something like this:

```
<form action="/sightings" method="get">
  <label for="start_date">Start date</label>
  <input id="start_date" name="start_date" type="text">
  <label for="end_date">End date</label>
  <input id="end_date" name="end_date" type="text">
  <button>Run report</button>
</form>
```

- then your controller can look something like this:

```
class SightingsController < ApplicationController
  def index
    @sightings = Sighting.where(start_date: params[:start_date]..params[:end_date])
    render('sightings/index.html.erb')
  end
end
```

Remember to add the parameter names to the strong parameter whitelist.

## Super Stretch Goal

- **Story**:  As a ranger, I can run a report to list all sightings during a given time period, narrowed down to a particular region.
