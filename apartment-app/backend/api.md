# Apartment App API Endpoints and Validations

#### Overview

The Apartment Application API is now configured for user access. The next step is creating the model for apartments and setting up the appropriate endpoints and validations. Each apartment will belong to a user. Users can create many apartments.

#### Previous Lecture (1 hour 2 min)

[![YouTube](http://img.youtube.com/vi/iBFUlbWblpA/0.jpg)](https://www.youtube.com/watch?v=iBFUlbWblpA)

#### Learning Objectives

- can create a relationship between User and Apartment

#### Additional Resources

- [Active Record Validations](https://guides.rubyonrails.org/active_record_validations.html#presence)

#### Troubleshooting Tips

- Did you create your database?
- Did you migrate?
- Did you seed your database?
- Errors? Always look at the first error in the list.

---

### Apartment Resource

For this application, Apartments will have the following fields: a street, a unit number, a city, a state, the square footage, a price, number of bedrooms, number of bathrooms, what pets are allowed, and an image.

We need to ensure there is a relationship between users and apartments. Apartments should only be created by valid, signed in users. A user can add as many apartments as they would like. This means the relationship between users and apartments is the User `has_many` Apartments, Apartment `belongs_to` a User. This relationship is defined in the code first by adding the foreign key of `user_id` to the belongs_to table.

```bash
rails generate resource Apartment street:string unit:string city:string state:string square_footage:integer price:string bedrooms:integer bathrooms:float pets:string image:text user_id:integer
```

Don't forget to migrate!

### Relationship Between User and Apartment

We will also need to define the relationship in both the Apartment and the User model classes.

**app/models/user.rb**

```ruby
class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :validatable, :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist
  has_many :apartments
end
```

**app/models/apartment.rb**

```ruby
class Apartment < ApplicationRecord
  belongs_to :user
end
```

### Apartment Validations

Validations are checks that run every time data is created or updated. If the validations are not met the `.create` or `.update` method will fail and the data will be rejected. When the method fails, a validation error is returned. Validation errors can be used as assertions in the test expect statement.

Since apartments cannot be created without a valid user, we will need a user in the test. In the example below we will create a global user variable. The `let(:user)` code creates a user that is scoped to the entire test file. This means we only have to create the user variable once and we can write as many tests as necessary referencing the variable `user`.

**spec/models/apartment_spec.rb**

```ruby
RSpec.describe Apartment, type: :model do
  let(:user) { User.create(
      email: 'test@example.com',
      password: 'password',
      password_confirmation: 'password'
    )
  }

  it 'is valid with valid attributes' do
    apartment = user.apartments.create(
      street: 'Test Street',
      unit: 'Test Unit',
      city: 'Test City',
      state: 'Test State',
      square_footage: 1000,
      price: '$1000',
      bedrooms: 1,
      bathrooms: 1.0,
      pets: 'Test Pets',
      image: 'https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg',
    )
    expect(apartment).to be_valid
  end

  it 'is not valid without a street attribute' do
    apartment = user.apartments.create(
      unit: 'Test Unit',
      city: 'Test City',
      state: 'Test State',
      square_footage: 1000,
      price: '$1000',
      bedrooms: 1,
      bathrooms: 1.0,
      pets: 'Test Pets',
      image: 'https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg',
    )
    expect(apartment).not_to be_valid
    expect(apartment.errors[:street].first).to eq("can't be blank")
  end
end
```

The second test will fail as there is no expectation for a validation error message of `"can't be blank"`. Adding a validation to the apartment model should make the test pass.

**app/models/apartment.rb**

```ruby
class Apartment < ApplicationRecord
  belongs_to :user
  validates :street, presence: true
end
```

We can continue this pattern for all apartment attributes.

### API Endpoints

API endpoints are the entry point to getting data from the database. First we can write request specs that hit our endpoints for index and create. The tests will mock a get request and post request respectively and check for the appropriate response.

In order to test endpoints for apartments, we must have a valid user in the test database. The user can be created as variable that is scoped to the entire test file. This can then be used to create test apartments.

**spec/requests/apartments_spec.rb**

```ruby
RSpec.describe "Apartments", type: :request do
  let(:user) { User.create(
      email: 'test@example.com',
      password: 'password',
      password_confirmation: 'password'
    )
  }

  describe 'GET #index' do
    it 'returns a list of apartments and http success' do
      apartment = user.apartments.create(
        street: 'Test Street',
        unit: 'Test Unit',
        city: 'Test City',
        state: 'Test State',
        square_footage: 1000,
        price: '$1000',
        bedrooms: 1,
        bathrooms: 1.0,
        pets: 'Test Pets',
        image: 'https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg'
      )
      get apartments_path
      expect(response).to have_http_status(200)
      expect(apartment).to be_valid
    end

  describe 'POST #create' do
    it 'creates a valid apartment with http success' do
      post apartments_path, params: {
        apartment: {
          street: 'Test Street',
          unit: 'Test Unit',
          city: 'Test City',
          state: 'Test State',
          square_footage: 1000,
          price: '$1000',
          bedrooms: 1,
          bathrooms: 1.0,
          pets: 'Test Pets',
          image: 'https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg',
          user_id: user.id
        }
      }
      apartment = Apartment.where(street: 'Test Street').first
      expect(response).to have_http_status(200)
      expect(apartment).to be_valid
    end
    it 'creates a invalid apartment' do
      post apartments_path, params: {
        apartment: {
          street: nil,
          unit: nil,
          city: nil,
          state: nil,
          square_footage: nil,
          price: nil,
          bedrooms: nil,
          bathrooms: nil,
          pets: nil,
          image: nil,
          user_id: nil
        }
      }
      apartment = Apartment.where(street: nil).first
      expect(response).to have_http_status(422)
      expect(apartment).to eq(nil)
    end
  end
end
```

Since we are practicing TDD, the tests should fail.

### Controller Methods

We need to add the controller method for index and create. Once the controller methods are properly defined, the request specs should pass.

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
    params.require(:apartment).permit(:street, :unit, :city, :state, :square_footage, :price, :bedrooms, :bathrooms, :pets, :image, :user_id)
  end
end
```

We can continue this pattern for all apartment endpoints.

### User and Apartment Seeds

At this point we have confidence that our app is working well. Now it is time to add some seed data to the database.

In order to create a user in the database, we need a unique username (email), password, and password confirmation. When this information is successfully submitted to the database, a new instance of the User model will be created.

Seed data has to align with the relationship of our User and Apartment models. Before we have apartments, we must have users.

Devise provides us with some built-in validations. For example, every user in the database must have a unique username (email). To ensure our seeded user data is made correctly, we can use the `.first_or_create` Active Record method. Using the `.where` method, we first query for all emails that match a particular user in the database. The `.where` method will return an array of all matches. The `.first_or_create` method checks whether the first instance in the array is nil or not. If the value is nil, then no user exists. A nil value will trigger the `.create` method which requires password and password confirmation keys with matching password values.

**db/seeds.rb/apartment.rb**

```ruby
user1 = User.where(email: "test1@example.com").first_or_create(password: "password", password_confirmation: "password")
user2 = User.where(email: "test2@example.com").first_or_create(password: "password", password_confirmation: "password")

user1_apartments = [
  {
    street: '129 West 81st Street',
    unit: '5A',
    city: 'NY',
    state: 'NY',
    square_footage: '1000',
    price: '2000',
    bedrooms: 1,
    bathrooms: 1.0,
    pets: 'no pets allowed',
    image: 'https://www.hollywoodreporter.com/wp-content/uploads/2015/06/seinfeld_apt.jpg'
  }
]

user1_apartments.each do |apartment|
  user1.apartments.create(apartment)
  puts "Creating: #{apartment}"
end

```

Once we have user seeds, apartment seeds can be added to the file. Remember that every apartment will `belong_to` a user. Apartments cannot exist without being assigned to a valid user.

To have robust seed data, it is likely we will want to expand the content provided here to create multiple apartments for each user.

---

[Back to Syllabus](../../README.md#unit-nine-react-and-rails-with-authentication)
