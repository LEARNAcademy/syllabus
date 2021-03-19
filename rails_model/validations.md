# Active Record Validations

### Overview
- Validations are used to ensure that only clean and valid data is saved into the database.
- There are lots of ways to validate data, in this section we will talk about model validations.

### Learning Objectives
- Exploring the implementation of model validations
- Practicing with validation syntax

### Vocabulary
- Model validations

### Additional Resources
- <a href="https://guides.rubyonrails.org/active_record_validations.html#acceptance" target="blank">Active Record Validations</a>

### Set Up

#### Creating a new Rails app:
```
$ rails new contact_app -d postgresql -T
$ cd contact_app
$ rails db:create
$ rails generate model Person name:string email:string
$ rails generate model Phone phone_number:string person_id:integer
$ rails db:migrate
$ rails server
```

In a browser navigate to:
`http://localhost:3000`

### Troubleshooting Tips
- Did you create your database?
- Did you migrate?
- Errors? Always look at the first error in the list.

### Validations
Validations are used to ensure that only valid data is saved into your database. When content is added to the database, Rails runs the validations on the model. If these validations produce any errors, the content will not be saved.

Because validations are a common necessity there are many built in validation helper methods available. We will explore some of those validations here.

#### Validates Presence

One of the most basic validations is ensuring all the columns contain data. The validation of presence tells Active Record that a new instance of Person will not be valid without a name and an email. The validation goes into the model class file.

*app/models/person.rb*
```ruby
class Person < ApplicationRecord
  validates :name, :email, presence: true
end
```

#### Validates Length

The length validation can be used to create a minimum number of characters, a maximum number of characters, a range of characters, or a specific number of characters.

*app/models/person.rb*
```ruby
class Person < ApplicationRecord
  validates :name, length: { minimum: 2 }
  validates :bio, length: { maximum: 500 }
  validates :password, length: { in: 6..20 }
  validates :registration_number, length: { is: 6 }
end
```

#### Validates Uniqueness

Often there is data in a database that should be unique. For example login information, credit card numbers, or email address. To ensure data is not duplicated a uniqueness validation can be added to the column.

*app/models/person.rb*
```ruby
class Person < ApplicationRecord
  validates :name, uniqueness: true
  validates :email, uniqueness: { case_sensitive: false }
end
```

#### Validates belongs_to
Starting in Rails 5 the `belongs_to` side of relationships is validated by default.

*app/models/phone.rb*
```ruby
class Phone < ApplicationRecord
  belongs_to :person  #default validation for belongs to presence: true
end
```

If you want an optional `belongs_to` relationship, you can set it up like this:

*app/models/phone.rb*
```ruby
class Phone < ApplicationRecord
  belongs_to :person, optional: true
end
```

### When Validations are Called

The following Active Record query methods trigger validations, and will save the object to the database only if the object is valid.
```
create
create!
save
save!
update
update!
```

The bang versions (e.g. save!) raise an exception if the record is invalid. `save` and `update` will return `false`, `create` just returns the object the method was called on if it is invalid.

### Valid?
To verify whether or not an object is valid, Rails uses the `.valid?` method. You can also use this method on your own. `valid?` triggers your validations and returns true if no errors were found in the object, and false otherwise.

#### To Access Errors

To verify whether or not a particular attribute of an object is valid, you can use errors[:attribute]. It returns an array of all the errors for :attribute. If there are no errors on the specified attribute, an empty array is returned.

*app/models/person.rb*
```ruby
class Person < ApplicationRecord
  validates :name, presence: true
end
```
```
> person = Person.new
> person.valid?         # => false
> person.errors[:name]  # => ["can't be blank"] array of error messages for name field
```


## Challenges

You have been tasked to set up an Account model for a your company. The application must be secure.

### Stories for Account:
- As a developer, I need to generate a model called Account that has a username, a password, and an email.
- As a developer, I need username, password, and email to be required.
- As a developer, I need every username to be at least 5 characters long.
- As a developer, I need each username to be unique.
- As a developer, I need each password to be at least 6 characters long.
- As a developer, I need each password to be unique.

### Stories for Address:
- As a developer, I want my Account model to have many associated Addresses.
- As a developer, I want Address to have street_number, street_name, city, state, and zip attributes.
- As a developer, I want to validate the presence of all fields on Address.


### Stretch Challenges
Implementing [ Custom Validations ](https://guides.rubyonrails.org/active_record_validations.html#performing-custom-validations):

- As a developer, I need each Account password to have at least one number.
- As a developer, I want to validate that Address street_number, street_name, zip are unique for within an account. **Hint**: Read about :scope in the Rails validation docs.
- As a developer, I want to validate that the Address street_number and zip are numbers. **Hint**: Read about [ Numericality ](https://edgeguides.rubyonrails.org/active_record_validations.html#numericality) in the Rails validation docs.
- As a developer, I want to see a custom error message that says "Please, input numbers only" if street_number or zip code are not numbers. **Hint**: Read about [ message ](https://edgeguides.rubyonrails.org/active_record_validations.html#message) in the Rails validation docs.
- As a developer, I want to validate associated addresses on accounts. **Hint**: Read about [ validates_associated ](https://apidock.com/rails/ActiveRecord/Validations/ClassMethods/validates_associated) in the Rails validation docs.

[ Go to next lesson: Rails Routes, Controllers and Views ](../rails_fullstack/routes_controllers_views.md)

[ Back to Active Record Associations ](./associations.md)

[ Back to Syllabus ](../README.md#ruby-on-rails)
