# Rails Active Record Validations

## Overview
- Validations are used to ensure that only valid data is saved into your database.
- There are lots of ways to validate data, in this section we will talk about model validations.

## Learning Objectives
- Exploring the implementation of model validations
- Practicing with validation syntax

## Vocabulary
- validations

## Additional Resources
- <a href="https://guides.rubyonrails.org/active_record_validations.html#acceptance" target="blank">Active Record Validations</a>
## Set Up

#### Creating a new Rails app:
```
$ rails new myapp -d postgresql -T
$ cd myapp
$ rails db:create
$ rails server
```

In a browser navigate to:
`http://localhost:3000`

## Validates Presence
```
class Person < ApplicationRecord
  validates :name, :login, :email, presence: true
end
```

## Validates Length
```
class Person < ApplicationRecord
  validates :name, length: { minimum: 2 }
  validates :bio, length: { maximum: 500 }
  validates :password, length: { in: 6..20 }
  validates :registration_number, length: { is: 6 }
end
```

## Validates belongs_to
Starting in Rails 5 the belongs_to side of relationships is validated by default.
```
class Phone < ApplicationRecord
	belongs_to :person  #default validation for belongs to: presence: true
end
```

If you want an optional belongs_to relationship, you can set it up like this:
```
class Phone < ApplicationRecord
	belongs_to :person, optional: true
end
```


## Validates Uniqueness

```
class Account < ApplicationRecord
  validates :name, uniqueness: true
  validates :email, uniqueness: { case_sensitive: false }
end
```

## When Validations are Called

The following methods trigger validations, and will save the object to the database only if the object is valid:
```
create
create!
save
save!
update
update!
valid?
invalid?
```

The bang versions (e.g. save!) raise an exception if the record is invalid. The non-bang versions don't, save and update return false, create just returns the object.

To verify whether or not an object is valid, Rails uses the valid? method. You can also use this method on your own. valid? triggers your validations and returns true if no errors were found in the object, and false otherwise.

## To Access Errors

To verify whether or not a particular attribute of an object is valid, you can use errors[:attribute]. It returns an array of all the errors for :attribute. If there are no errors on the specified attribute, an empty array is returned.
```
class Person < ApplicationRecord
  validates :name, presence: true
end

>> person = Person.new
>> person.valid? 			# => false
>> person.errors[:name] 	# => ["can't be blank"]	# array of error messages for name field
```


## Challenges

You have been tasked to set up an Account model for a your company. The application must be secure.

### Stories for Account:
- As a developer, I need to generate a model called Account that has a username, a password, and an email
- As a developer, I need username, password, and email to be required
- As a developer, I need every username to be at least 5 characters long
- As a developer, I need each username to be unique
- As a developer, I need each password to be at least 6 characters long
- As a developer, I need each password to be unique

### Stories for Address:
- As a developer, I want my Account model to have many associated Addresses
- As a developer, I want Address to have street_number, street_name, city, state, and zip attributes
- As a developer, I want to validate all fields on Address


### Stretch Challenges
Implementing [Custom Validations](https://guides.rubyonrails.org/active_record_validations.html#performing-custom-validations):

- As a developer, I need each Account password to have at least one number
- As a developer, I need each Account password to have at least one special character
- As a developer, I want to validate that Address street_number, street_name, zip are unique for within an account
	- **Hint:** Read about :scope in the Rails validation docs
- As a developer, I want to validate associated addresses on accounts
	- **Hint:** Read about validates_associated in the Rails validation docs

  [Go to next lesson: Rails Active Record Query Syntax](./active_record_query_syntax.md)

  [Back to Rails Active Record Associations](./active_record_associations.md)

  [Back to Syllabus](../README.md)
