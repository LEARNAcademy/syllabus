# Cat Tinder API Validations

## Overview
- As developers we have to think about what happens when things don't go as we expect. What if data is submitted to our API that isn't complete, or has something else that causes it to be invalid? This could cause harm to our database or affect the user experience.

## Learning Objectives
- Adding validations to our API

## Vocabulary
- model validations
- request validations
- response status
- params

## Additional Resources
-  [Response Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

## Validations
As developers, it is our job to ensure no matter what, that our app responds in predictable ways to every request, and over many requests.

The primary tool we have to assure predictable results is to assure that the data we commit to our database is in a form that we expect it to be, and for this we use validations in a Rails application. When the incoming data looks to be correct, we commit it, when it isn't correct, we reject it, and respond with a reason why it was not accepted.

## Why Validations?
We've started all of our backend coding with a failing test, and we now have good test coverage of what we expect the API to do when it is passed good data. What we need now is a test of what we expect it to do when passed bad data. What happens when a user submits a cat without a name? Do we accept it, or do we reject. Same question goes for the cat's age and what our cat enjoys. It may be acceptable to create a record without the enjoys data, but we should require an age.

Let's write a test for each of these cases.

### Model Specs

**spec/models/cat_spec.rb**
```ruby
RSpec.describe Cat, type: :model do
  it "should validate name" do
    cat = Cat.create
    expect(cat.errors[:name]).to_not be_empty
  end
end
```
$ rspec spec/models

```
1 example, 1 failure

Failed examples:

rspec ./spec/models/cat_spec.rb:6 # Cat should validate name
```

As we run our specs, we see the test fails. But we can make it pass with one line of code in the model.

**app/models/cat.rb**
```ruby
class Cat < ApplicationRecord
  #Here is the new line of code
  validates :name, presence: true
end
```
$ rspec spec/models
```
1 example, 0 failures
```
Green!

### Request Specs
Here's a test to assure that we get the correct response status when we submit a create request without a name for a cat.

**spec/requests/cats_spec.rb**
```ruby
 it "doesn't create a cat without a name" do
   cat_params = {
     cat: {
       age: 2,
       enjoys: 'Walks in the park'
     }
   }
   # Send the request to the  server
   post '/cats', params: cat_params
   # expect an error if the cat_params does not have a name
   expect(response.status).to eq 422
   # Convert the JSON response into a Ruby Hash
   json = JSON.parse(response.body)
   # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
   expect(json['name']).to include "can't be blank"
 end
```

Not only do we want to make sure we are only allowing good data to be added to the database, we want to check that the API lets us know what is wrong, so the frontend can prompt the user to fix it.

$ rspec spec/requests
```
Failures:

1) Cats API doesn't create a cat without a name
  Failure/Error: expect(response.status).to eq 422
    expected: 422
    got: 204
Finished in 0.0172 seconds (files took 1.57 seconds to load)
1 example, 1 failure

Failed examples:

rspec ./spec/requests/cats_spec.rb:43 # Cats API doesn't create a cat without a name
```
And the results from running the full test suite give us a failure. Great! We expected a 422 response which is the server letting us know that we submitted an "Unprocessable Entity", but that's not what we got back. So how do we make that test pass? Let's add a validation.

**app/controllers/cats_controller.rb**
```ruby
def create
  cat = Cat.create(cat_params)
  if cat.valid?
    render json: cat
   else
     render json: cat.errors, status: :unprocessable_entity
   end
end
```

$ rspec spec/requests
```
1 example, 0 failures
```

And now, we're Green!

## Challenges
- Add the appropriate model validations to ensure the user submits a name, an age, and what the cat enjoys
- Add the appropriate request validations to ensure the API is sending useful information to the frontend developer
- Add a validation to assure that the enjoys value is at least 10 characters long

[Go to next lesson: Cat Tinder API CORS](./CORS.md)

[Back to Cat Tinder API Endpoints](./api_endpoints.md)

[Back to Syllabus](../../README.md)
