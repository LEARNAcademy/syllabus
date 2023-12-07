# Active Record Validations and Model Specs

#### Overview

The power of creating a full-stack application is that we can store and retrieve data from a database. It is very important that the data is both useful and meaningful. Validations ensure that only clean and valid data can be saved into the database. When creating validations, we need to ensure they are working as designed. This can be done with model specs. Implementing a TDD workflow when validating a database will ensure only useful and meaningful data is stored. It also sets up a form of documentation in our app that will tell us much about how the model is intended to function.

#### Previous Lecture (1 hour 11 min)

[![YouTube](http://img.youtube.com/vi/eBkJ2i1lsRQ/0.jpg)](https://www.youtube.com/watch?v=eBkJ2i1lsRQ)

#### Learning Objectives

- can explain the purpose of model validations
- can use the correct syntax for Rails built in validations
- can use the correct syntax for custom validations
- can define test-driven development
- can install RSpec into a Rails application
- can utilize test-driven development to ensure the accuracy of model validations

#### Vocabulary

- validations
- specs
- test-driven development (TDD)

#### Additional Resources

- [ Active Record Validations ](https://guides.rubyonrails.org/active_record_validations.html#acceptance)

### Processes

- Create a new Rails app on the desktop: $ `rails new rails-validations -d postgresql -T`
- $ `cd rails-validations`
- Create a database: $ `rails db:create`
- Add the git remote from GitHub Classroom
- Ensure a main branch exists
- Make an initial commit to the main branch
- Add the dependencies for RSpec:
  - $ `bundle add rspec-rails`
  - $ `rails generate rspec:install`
- Generate the model with appropriate columns and data types
- $ `rails db:migrate`
- Begin the rails server: `$ rails server`
- In a browser navigate to: `http://localhost:3000`

#### Troubleshooting Tips

- Did you create your database?
- Did you migrate?
- Errors? Always look at the first error in the list.

---

### Validations

Data is the core of any full-stack application. One of the most important things we can do to protect our data is to add Active Record validations on the model. **Validations** are used to ensure that only clean and valid data gets saved into the database. Rails will run all model validations before content is added to the database. If these validations produce any errors the content will not be saved.

### Model Specs

Implementing model validations is incomplete without a robust suite of specs. Test specifications, or **specs** help define what pieces of information are crucial for the app's functionality and how the models are intended to be used in the application.

### Validation Helpers

Because validations are a common necessity there are many built in validation helper methods available.

- Validates presence: One of the most basic validations is ensuring the column contains data. Validation of presence tells Active Record that a new model instance will not be valid when empty.
- Validates length: The length validation can be used to create a minimum number of characters, a maximum number of characters, a range of characters, or a specific number of characters.
- Validates uniqueness: Often, there is data in a database that should be unique, such as login information, credit card numbers, or email addresses. A uniqueness validation can be added to the column to ensure that data is not duplicated.

### TDD and Validations

Let's look at how to implement a TDD workflow with model validations. TDD, or **test driven development**, is the process of creating a test, seeing the test fail, then implementing the code that will allow the test to pass.

For this example we will create a model called `Contact` with a column for name, email, phone_number, and a bio. All of these columns will require different types of validations.

#### Creating the Model and Spec Files

Before creating a model, we need to install the RSpec dependencies. By installing the RSpec dependencies first, we will get test files and directories when we generate the model.

```bash
bundle add rspec-rails
rails generate rspec:install
```

Then we need to create the model in the terminal.

```bash
rails g model Contact name:string email:string phone_number:string bio:text
rails db:migrate
```

Because we installed the RSpec dependencies prior to making the model, we got a directory called `spec` with a folder called `model` and files for our tests.

<img src="./assets/model-spec.png" height="400px" alt="model spec file tree" />

Inside the test file, there is some boilerplate code.

**spec/models/contact_spec.rb**

```ruby
require 'rails_helper'


RSpec.describe Contact, type: :model do
pending "add some examples to (or delete) #{__FILE__}"
end
```

#### Spec for Validating Presence

Now, we can replace the boilerplate code with a spec to ensure our database will not accept an entry without a name attribute. The test is making an Active Record query to add a new contact to the database but the name attribute is missing.

**spec/models/contact_spec.rb**

```ruby
RSpec.describe Contact, type: :model do
  it 'is not valid without a name' do
    scully = Contact.create(
      email: 'dscully@fbi.gov',
      phone_number: '(202) 123-4567',
      bio: 'Doctor and FBI agent.'
    )
    expect(scully.errors[:name]).to_not be_empty
  end
end
```

Since we are practicing TDD, we need to see the test fail first. If we run this file we can see that the test will fail since there is no reason a new contact can't be created even if there is no name attribute. Since the contact can be successfully created, there will not be a validation error.

```bash
rspec spec/models/contact_spec.rb
```

```bash
Failures:

1) Contact is not valid without a name
Failure/Error: expect(scully.errors[:name]).to_not be_empty
expected `#<ActiveModel::DeprecationHandlingMessageArray([])>.empty?` to be falsey, got true
# ./spec/models/contact_spec.rb:10:in `block (2 levels) in <top (required)>'

Finished in 0.04395 seconds (files took 1.76 seconds to load)
1 example, 1 failure

Failed examples:

rspec ./spec/models/contact_spec.rb:4 # Contact is not valid without a name
```

Now, we can add a validation to check for the presence of the name attribute by adding code to the model class. This validation will prevent a new entry from being created without a name. The lack of a name attribute will throw an error. The presence of the error will make our test will pass.

**app/models/contact.rb**

```ruby
class Contact < ApplicationRecord
  validates :name, presence: true
end
```

We can repeat this process to ensure no fields are allowed to be empty.

**spec/models/contact_spec.rb**

```ruby
RSpec.describe Contact, type: :model do
  it 'is not valid without a name' do
    scully = Contact.create(
      email: 'dscully@fbi.gov',
      phone_number: '(202) 123-4567',
      bio: 'Doctor and FBI agent.'
    )
    expect(scully.errors[:name]).to_not be_empty
  end

  it 'is not valid without a email' do
    scully = Contact.create(
      name: 'Dana Scully',
      phone_number: '(202) 123-4567',
      bio: 'Doctor and FBI agent.'
    )
    expect(scully.errors[:email]).to_not be_empty
  end
end
```

If we run this file we can see that the second test will fail. There is no reason we can't create a new contact even if the email attribute is missing.

```bash
rspec spec/models/contact_spec.rb
```

Now, we can add a validation to check for the presence of the email attribute by adding code to the model class for Contact. And our test will pass.

**app/models/contact.rb**

```ruby
class Contact < ApplicationRecord
  validates :name, :email, presence: true
end
```

### Spec for Validating Length

Next, we can create a spec to ensure our database will not accept an entry if the email attribute is less than 10 characters.

**spec/models/contact_spec.rb**

```ruby
it 'is not valid if email is less than 10 characters' do
  scully = Contact.create(
    name: 'Dana Scully',
    email: 'd@f.gov',
    phone_number: '(202) 123-4567',
    bio: 'Doctor and FBI agent.'
  )
  expect(scully.errors[:email]).to_not be_empty
end
```

If we run this file we can see that the test will fail.

```bash
rspec spec/models/contact_spec.rb
```

Now, we can add a validation to check for the length of the email attribute by adding code to the model class for Contact. And our test will pass.

**app/models/contact.rb**

```ruby
class Contact < ApplicationRecord
  validates :name, :email, presence: true
  validates :email, length: { minimum: 10 }
end
```

Here are additional options for validating a length attribute.

```ruby
validates :name, length: { minimum: 2 }
validates :bio, length: { maximum: 500 }
# the length must be in a particular range
validates :password, length: { in: 6..20 }
# the length must be exact
validates :phone_number, length: { is: 10 }
```

### Spec for Validating Uniqueness

Next, we can create a spec that will ensure our database will not accept an entry if the email attribute has already been entered into the database. To do this, We can create two contacts with the exact same information. The first contact should be valid. The second contact should not be allowed. We will save the second contact as a variable so that we can test the validity of the second contact.

**spec/models/contact_spec.rb**

```ruby
it 'does not allow duplicate emails' do
  Contact.create(
    name: 'Dana Scully',
    email: 'dscully@fbi.gov',
    phone_number: '(202) 123-4567',
    bio: 'Doctor and FBI agent.'
  )
  scully = Contact.create(
    name: 'Dana Scully',
    email: 'dscully@fbi.gov',
    phone_number: '(202) 123-4567',
    bio: 'Doctor and FBI agent.'
  )
  expect(scully.errors[:email]).to_not be_empty
end
```

If we run this file we can see that the test will fail. At this point there is nothing that will prevent identical information from being saved into the database.

```bash
rspec spec/models/contact_spec.rb
```

Now, we can add a validation to check for the uniqueness of the email attribute by adding code to the model class for Contact. And our test will pass.

**app/models/contact.rb**

```ruby
class Contact < ApplicationRecord
  validates :name, :email, presence: true
  validates :email, length: { minimum: 10 }
  validates :email, uniqueness: true
end
```

Here are some additional options for validating uniqueness.

```ruby
class Contact < ApplicationRecord
  validates :name, uniqueness: true
  validates :email, uniqueness: { case_sensitive: false }
end
```

### Validates Belong To

By default, Rails adds validations to a database's `belongs_to` relationship. If we want an optional `belongs_to` relationship, we can set it up like this:

**app/models/phone.rb**

```ruby
class Phone < ApplicationRecord
  belongs_to :contact, optional: true
end
```

### When Validations are Called

The following Active Record query methods trigger validations, and will save the object to the database only if the object is valid.

```ruby
create
create!
save
save!
update
update!
```

The bang versions (e.g. `save!`) will raise an exception when the record is invalid. The methods `save` and `update` will return `false`, while `create` simply returns the object on which the method was called if it is invalid.

### Valid?

Rails uses the `.valid?` method to verify whether an object is valid. You can also use this method on your own. `valid?` triggers your validations and returns true if no errors were found in the object, and false otherwise.

### To Access Errors

To verify whether or not a particular attribute of an object is valid, you can use `errors[:attribute]`. It returns an array of all the errors for `:attribute`. If there are no errors on the specified attribute, an empty array is returned.

**app/models/contact.rb**

```ruby
class Contact < ApplicationRecord
  validates :name, presence: true
end
```

```
> contact = Contact.new
> contact.valid? # => false
> contact.errors[:name] # => ["can't be blank"] array of error messages for name field
```

---

### 👤 Challenge: Company Contacts

As a developer, I have been tasked with creating a Rails application to store account information for a company. I want to ensure that only valid data can be saved in the database.

All tasks should have accompanying model specs.

### ✔️ Acceptance Criteria

- The application data should be managed by a PostgreSQL database in a Rails application.
- The model should be called Account with username, password, and email attributes.
- Every account should require entries for username, password, and email.
- Every username should be at least five (5) characters long.
- Every username should be unique.
- Every password should be at least six (6) characters long.
- Every password should be unique.
- The Account model has an associated model called Addresses where an account can have many addresses.
- The Address model should have a street_number, street_name, city, state, and zip attributes. The street_number and zip should be integers.
- Every address should require entries for street_number, street_name, city, state, and zip.

### 🏔 Stretch Goals

- Every account password should have at least one number.
  - HINT: Read about [custom validations](https://guides.rubyonrails.org/active_record_validations.html#performing-custom-validations) in the Active Record validation docs.
- Every street_number, street_name, and zip on the address model should be unique within an account.
  - HINT: Read about [:scope](https://guides.rubyonrails.org/active_record_validations.html#uniqueness) in the Active Record validation docs.
- Every street_number and zip should be integers.
  - HINT: Read about [numericality](https://edgeguides.rubyonrails.org/active_record_validations.html#numericality) in the Active Record validation docs.
- If the street_number or zip code are not numbers there should be a custom error message that says "Please input numbers only."
  - HINT: Read about [message](https://edgeguides.rubyonrails.org/active_record_validations.html#message) in the validation docs.

---

[Back to Syllabus](../README.md#unit-five-intro-to-postgres-and-ruby-on-rails-models)
