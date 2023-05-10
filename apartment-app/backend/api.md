# Apartment App API Endpoints and Validations

#### Overview

The Apartment App API needs appropriate endpoints and validations to ensure the data is protected and able to be accessed by the React app when the time comes.

#### Previous Lecture (1 hour 7 min)

[![YouTube](http://img.youtube.com/vi/7nHJ2G-FHl0/0.jpg)](https://www.youtube.com/watch?v=7nHJ2G-FHl0)

#### Additional Resources

- [Active Record Validations](https://guides.rubyonrails.org/active_record_validations.html#presence)
-

#### Troubleshooting Tips

- Did you create your database?
- Did you migrate?
- Did you seed your database?
- Errors? Always look at the first error in the list.

---

### API Endpoints

API endpoints are the entry point to getting data from the database. We need to define the ability to get all the apartments and for users to create new apartments.

### Request Specs

First we can write specs that hit our index and create endpoints. Our tests will mock a request and check for the appropriate response.

Since test data exists in a separate database from the development database, it is necessary to create an apartment in the test. Apartments can only be created by a valid user. All tests will require that we have a user in the test database prior to creating our test apartments.

**spec/requests/apartments_request_spec.rb**

```ruby
require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  let(:user) { User.create(
    email: 'test@example.com',
    password: 'password',
    password_confirmation: 'password'
    )
  }

  describe "GET /index" do
    it 'gets a list of apartments' do
      apartment = user.apartments.create(
        street: '4 Privet Drive',
        unit: '2A',
        city: 'Little Whinging',
        state: 'Surrey',
        square_footage: 2000,
        price: '2000',
        bedrooms: 3,
        bathrooms: 2,
        pets: 'yes',
        image: 'https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg'
      )
      get '/apartments'

      apartment = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartment.first['street']).to eq('4 Privet Drive')
    end
  end

  # test for creating a new apartment will live here
end
```

The `let(:user)` code creates a user that is scoped to the entire test file. This means we only have to create the mock user variable once and we can write as many tests as necessary referencing the variable `user`.

Since we are practicing TDD, the test should fail.

### Controller Methods

We need to add the controller methods for index and create as well as the strong params method that helps to protect our data. Once the controller methods are properly defined, the request specs should pass.

**app/controllers/apartments_controller.rb**

```ruby
class ApartmentsController < ApplicationController
  def index
    apartments = Apartment.all
    render json: apartments
  end

  def create
    apartment = Apartment.create(apartment_params)
    if apartment.valid?
      render json: apartment
    else
      render json: apartment.errors, status: 422
    end
  end

  private
  def apartment_params
    params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :image, :user_id)
  end
end
```

### API Validations

Validations are checks that run every time data is created or updated. If the validations are not met the `.create` or `.update` method will fail and the data will be rejected. When the method fails a validation error is returned. Validation errors can be used as assertions in the test expect statement.

Just like the request specs, all validation specs will require the creation of an apartment. Since apartments cannot be created without a valid user, we will need a mock user in the test.

**spec/models/apartment_spec.rb**

```ruby
RSpec.describe Apartment, type: :model do
  let(:user) { User.create(
    email: 'test@example.com',
    password: 'password',
    password_confirmation: 'password'
    )
  }

  it 'should validate street' do
    apartment = user.apartments.create(
      unit: '2A',
      city: 'Little Whinging',
      state: 'Surrey',
      square_footage: 2000,
      price: '2000',
      bedrooms: 3,
      bathrooms: 2,
      pets: 'yes',
      image: 'https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg'
    )
    expect(apartment.errors[:street]).to include("can't be blank")
  end
end
```

The test will fail as there is no expectation for a validation error message of `"can't be blank"`. Adding a validation to the apartment model should make the test pass.

**app/models/apartment.rb**

```ruby
class Apartment < ApplicationRecord
  belongs_to :user
  validates :street, presence: true
end
```

---

### 🏠 Challenge: Apartment App Endpoints and Validations

As a developer, I have been commissioned to create an application where a user can see apartments that are available for rent. As a user, I can see a list of apartments. I can click on an apartment listing and see more information about that apartment. As a user, I can create an account and log in to the application. If I am logged in, I can add an apartment to the list. As a logged in user, I can see a list of all the apartments as well as just the apartments I added. If my work is acceptable to my client, I may also be asked to add the ability to remove an apartment from the list as well as edit the apartment information.

- As a developer, I can add an index request spec to my application.
- As a developer, I can add an index endpoint to my application.
- As a developer, I can add a create request spec to my application.
- As a developer, I can add a create endpoint to my application.
- As a developer, I can add the appropriate model specs that will ensure an incomplete apartment throws an error.
- As a developer, I can add the appropriate model validations to ensure the user submits a street, unit, city, state, square footage, price, number of bedrooms, number of bathrooms, whether the apartment allows pets, and an image.

### 🏔 Stretch Goals

- As a developer, I can add an update request spec to my application.
- As a developer, I can add an update endpoint to my application.
- As a developer, I can add a destroy request spec to my application.
- As a developer, I can add a destroy endpoint to my application.

---

[Back to Syllabus](../../README.md#unit-nine-react-and-rails-with-authentication)
