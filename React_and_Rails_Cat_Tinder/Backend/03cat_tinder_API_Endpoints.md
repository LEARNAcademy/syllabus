# API Endpoints

In the previous steps we generated a controller for Cats, but its pretty bare bones currently.  In fact, it doesn't actually have any routes at all!  Never fear, we're going to take care of that right now.  

```ruby
class CatsController < ApplicationController
end
```

Our app needs two routes to start, and index listing all the cats, and a 'create' route so that users can submit new cat information to the application.

## Routes for Cats

| URL | Method | Controller Method |
| /cats | get | index |
| /cats | post | create |

We can stub these methods into the controller now:

```ruby
class CatsController < ApplicationController
  def index
  end

  def create
  end
end
```

### Convention over Configuration
The name of these routes is important.  Rails knows to route the requests in the table above to the proper methods in our controller.  As long as we name the methods exactly as above, Rails will know what to do, and everything will work great.  If we were to ignore these conventions, our job would get very hard, very quickly, so let's stick with the 'Rails Way' of doing things, and make it easy on ourselves.


## Index route
We start with the index route.  In this endpoint, we want to return all of the cats that the application knows about.  Later on, we may want to add search and/or pagination, but for now we'll keep things simple and just return all the cats.

### Create a spec
We're going to practice Test Driven Development, so let's start with a test.  You, can add specs such as the following in the controller spec file:

```ruby
require 'rails_helper'

describe "Cats API" do
  it "gets a list of Cats" do
    # Create a new cat in the Test Database (not the same one as development)
    Cat.create(name: 'Felix', age: 2, enjoys: 'Walks in the park')

    # Make a request to the API
    get '/cats'

    # Convert the response into a Ruby Hash
    json = JSON.parse(response.body)

    # Assure that we got a successful response
    expect(response).to be_success

    # Assure that we got one result back as expected
    expect(json.length).to eq 1
  end
end
```

When we run that spec, it fails of course, because we don't have any code in the controller to respond to the request correctly.  This failure is a good thing!

```
$ rspec spec/requests/cats_spec.rb
F

Failures:

  1) Cats API gets a list of Cats
     Failure/Error: json = JSON.parse(response.body)

     JSON::ParserError:
       743: unexpected token at ''
     # ./spec/requests/cats_spec.rb:7:in `block (2 levels) in <top (required)>'

Finished in 0.09661 seconds (files took 1.15 seconds to load)
1 example, 1 failure

Failed examples:

rspec ./spec/requests/cats_spec.rb:4 # Cats API gets a list of Cats
```

Now we can write the controller code to make it pass:

```Ruby
def index
  cats = Cat.all
  render json: cats
end
```

Running our spec one more time, we see green!

```
$ rspec spec/requests/cats_spec.rb
.

Finished in 0.12364 seconds (files took 1.29 seconds to load)
1 example, 0 failures
```

### Try it in the browser
If you followed the setup in the last module, then you should already have a cat in your database to return.  You can add as many as you like using the Rails console ```$ rails c``` on the command line.  Start up the application, and navigate a browser to our new endpoint, we should see output similar to this:

![Cat Tinder Index](https://s3.amazonaws.com/learn-site/curriculum/cat-tinder/cat_tinder_index.png)

## The Create Route
Next we'll tackle the 'create' route.  Let's start with adding a new test:

```ruby
  it "creates a cat" do
    # The params we are going to send with the request
    cat_params = {
      cat: {
        name: 'Buster',
        age: 4,
        enjoys: 'Meow Mix, and plenty of sunshine.'
      }
    }

    # Send the request to the server
    post '/cats', params: cat_params

    # Assure that we get a success back
    expect(response).to be_success

    # Look up the cat we expect to be created in the Database
    new_cat = Cat.first

    # Assure that the created cat has the correct attributes
    expect(new_cat.name).to eq('Buster')
  end
```

And once again, this fails because we have no code in the controller to make it pass.  Good!

```
$ rspec spec/requests/cats_spec.rb
.F

Failures:

  1) Cats API creates a cat
     Failure/Error: expect(new_cat.name).to eq('Buster')

     NoMethodError:
       undefined method `name' for nil:NilClass
     # ./spec/requests/cats_spec.rb:24:in `block (2 levels) in <top (required)>'

Finished in 0.11318 seconds (files took 1.3 seconds to load)
2 examples, 1 failure

Failed examples:

rspec ./spec/requests/cats_spec.rb:12 # Cats API creates a cat
```

Adding the controller code for this spec is as follows:

```
  def create
    # Create a new cat
    cat = Cat.create(cat_params)

    # respond with our new cat
    render json: cat
  end

  # Handle strong parameters, so we are secure
  def cat_params
    params.require(:cat).permit(:name, :age, :enjoys)
  end
```

And we're Green!  This isn't quite production ready code, but its enough to get our first test of the endpoint to pass, which is what we're after, so we're happy.  

## Summary
In this section, we've built out our first API endpoint to handle requests for listing and creating cats.  In the next section, we're going to deal with validating that the information passed to the ```create``` route is what we expect and handle situations when its not.

#### Where to go from here

[Go to Cat Tinder: Validations](./04cat_tinder_validations.md)

[Back to Cat Tinder: Seeds](./02cat_tinder_seeds.md)

[Back to Syllabus](../../README.md)
