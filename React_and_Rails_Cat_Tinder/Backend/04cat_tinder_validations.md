# Validations
Let's take a look at when things don't go as we expect, when data is submitted to our API this isn't complete, or has something else that causes it to be invalid.  All data that we accept and commit to the database must not have the potential to cause our app to be unstable.  Its our job, no matter what, that our app responds in predictable ways to every request, and over many requests.  The primary tool we have to assure predictable results is to assure that the data we commit to our database is in a form that we expect it to be, and for this we use validations in a Rails application.  When the incoming data looks to be correct, we commit it, when it isn't correct, we reject it, and respond with a reason why it was not accepted.

## Adding our first validation
We've started all of our back end coding with a failing test, and we now have good test coverage of what we expect the api to do when it is passed good data.  What we need now is a test of what we expect it to do when passed bad data.  What happens when a user submits a cat without a name?  Do we accept it, or do we reject.  Same question goes for the cat's age and what he/she enjoys.  It may be acceptable to create a record without the enjoys data, but we should require an age.  Let's write a test for each of these cases.

### A Feature Test for Cat Name

Here's a test to assure that we get the correct response status when we submit a create request without a name for a cat:

#### spec/requests/cats_spec.rb
```
it "doesn't create a cat without a name" do
  cat_params = {
    cat: {
      age: 4,
      enjoys: 'Meow Mix, and plenty of sunshine.'
    }
  }

  post '/cats', params: cat_params

  # This is a new test to make sure that our status is correct when the record can't be created
  # You can read more about HTTP response codes here: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
  expect(response.status).to eq 422

  # We also want to check that the API lets us know what is wrong, so the frontend can prompt the user to fix it.
  json = JSON.parse(response.body)
  # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
  expect(json['name']).to include "can't be blank"
end
```

And the results from running the full test suite give us a failure.  Great!  We expected a 422 response which is the server letting us know that we submitted an "Unprocessable Entity", but that's not what we got back.  So how do we make that test pass?  Let's add a validation.  You can also see in the above test results that we have a Pending test for our Cat model, and we know that validations are added to models, why don't we add another Model test for the validation, and make it pass?

### A model test for our validation

#### spec/models/cat_spec.rb
```
RSpec.describe Cat, type: :model do
  it "should validate name" do
    cat = Cat.create
    expect(cat.errors[:name]).to_not be_empty
  end
end
```

When we run that, we see the test fails, but we can make it pass with one line of code in the model

#### app/models/cat.rb
```
class Cat < ApplicationRecord
  #Here is the new line of code
  validates :name, presence: true
end
```
Green!  But... when we run our request spec, we can see that it is still failing.  What's going on?  Our cat isn't being created any longer, why is the controller action still returning a "success" response?  We still have some more code to write.  We need to check to see if the cat was created in the controller, and respond appropriatly if it wasn't.  We update the controller like this to get our request spec green:

#### app/controllers/cats_controller.rb
```
def create
  cat = Cat.create(cat_params)
  if cat.valid?
    render json: cat
   else
     render json: cat.errors, status: :unprocessable_entity
   end
end
```

And Now, we're Green!

Challenges:
Add the appropriate Validations to make sure that users submit an age, and what the cat enjoys.  
Add a Validation to assure that the enjoys value is at least 10 characters long.

#### Where to go from here

[Go to Cat Tinder: CORS](./05cat_tinder_CORS.md)

[Back to Cat Tinder: API Endpoints](./03cat_tinder_API_Endpoints.md)

[Back to Syllabus](../../README.md)
