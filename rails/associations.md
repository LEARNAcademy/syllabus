# Active Record Associations

### Video: Active Record Associations
[![YouTube](http://img.youtube.com/vi/CM520EfUI7k/0.jpg)](https://www.youtube.com/watch?v=CM520EfUI7k)
### Video: Foreign Keys
[![YouTube](http://img.youtube.com/vi/QpFPd4tlGoA/0.jpg)](https://www.youtube.com/watch?v=QpFPd4tlGoA)

### Overview
- In Rails, an association (or relationship) is a connection between two Active Record models.
- Creating associations is a useful way to keep our code DRY and our databases clean and organized.
- A foreign key is a column in a relational database table that provides a link between data in two tables. It acts as a cross-reference between tables because it references the primary key of another table, thereby establishing a link between them.

### Learning Objectives
- Exploring associations between models
- Understanding the purpose of a foreign key

### Vocabulary
- has_many
- belongs_to
- foreign key

### Useful Commands
- rails db:migrate

### Additional Resources
- <a href="https://guides.rubyonrails.org/association_basics.html" target="blank">Active Record Association Docs</a>

### Set Up

#### Creating a new Rails app:
```
$ rails new my_app -d postgresql -T
$ cd my_app
$ rails db:create
$ rails server
```

In a browser navigate to:
`http://localhost:3000`

### Troubleshooting Tips
- Did you create your database?
- Did you migrate?
- Errors? Always look at the first error in the list.

### Types of Relationships
Rails supports six types of associations:
- belongs_to
- has_one
- has_many
- has_many :through
- has_one :through
- has_and_belongs_to_many

The combination of relationships are described as:
- one-to-many
- one-to-one
- many-to-many


### Creating Person and Email Relationship
In this example, we want to create a Person model that stores contact information for all our people. However, it is likely that most people have multiple email addresses. Rather than creating lots of columns for all the possible email addresses our people may have, we can create a new model called Email that has an association with our Person model.

A Person `has_many` Email addresses. An Email address `belongs_to` a Person.


#### Person model
We'll start by creating the Person model. Our person will have a name and phone number.

```
$ rails generate model Person name:string phone:string
$ rails db:migrate
```

*db/migrations/*
```ruby
class CreatePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :people do |t|
      t.string :name
      t.string :phone

      t.timestamps
    end
  end
end
```

Add a couple of entries to the database:

```
$ rails c
> Person.create name: "Joe", phone: "555-3456"
> Person.create name: "Jane", phone: "555-7890"
> Person.all
=> #<ActiveRecord::Relation [#<Person id: 1, name: "Joe", phone: "555-3456", created_at: "2020-03-04 18:52:19", updated_at: "2020-03-04 18:52:19">, #<Person id: 2, name: "Jane", phone: "555-7890", created_at: "2020-03-04 18:52:27", updated_at: "2020-03-04 18:52:27">]>
```
Remember that rails automatically adds a primary key id to each entry in our database.

#### Email model
Now we will create our Email model:

```
$ rails generate model Email address:string person_id:integer
$ rails db:migrate
```

This will provide another file in *app/model*, another migration, and update the schema of our application.

*db/migrations/*
```ruby
class CreateEmails < ActiveRecord::Migration[6.0]
  def change
    create_table :emails do |t|
      t.string :address
      t.integer :person_id

      t.timestamps
    end
  end
end
```
*db/schema.rb*
```ruby
create_table "emails", force: :cascade do |t|
  t.string "address"
  t.integer "person_id"
  t.datetime "created_at", precision: 6, null: false
  t.datetime "updated_at", precision: 6, null: false
end

create_table "people", force: :cascade do |t|
  t.string "name"
  t.string "phone"
  t.datetime "created_at", precision: 6, null: false
  t.datetime "updated_at", precision: 6, null: false
end
```

### Creating the Association
So far, we have two models in our application. But how do we create the association between them?

**Updating the Class**

We need to describe the relationship to each of the model classes.

*app/models/person.rb*
```ruby
class Person < ApplicationRecord
  has_many :emails
end
```
Note: emails is plural

*app/models/email.rb*
```ruby
class Email < ApplicationRecord
  belongs_to :person
end
```
Note: person is singular

**Using the Foreign Key**

To create a new entry of an email, we have to assign it to a person entry. An email entry cannot exist unless it is attached to a person. To give our first contact an email address, create a variable to store the entry of one person.

```
$ rails c
> joe = Person.first
```

Now we can give Joe an email address.
```
> joe.emails.create address: "joe@email.com"
=> #<Email id: 1, address: "joe@email.com", person_id: 1, created_at: "2020-03-04 19:01:15", updated_at: "2020-03-04 19:01:15">
```

Notice that the `person_id` is the same as Joe's primary id. Rails did this for us because we assigned this email to the entry for Joe.

Now Joe can have lots of emails.

```
> joe.emails.create address: "joejoe@email.com"
> joe.emails.create address: "joeswork@email.com"
> joe.emails
=> #<ActiveRecord::Associations::CollectionProxy [#<Email id: 1, address: "joe@email.com", person_id: 1, created_at: "2020-03-04 19:01:15", updated_at: "2020-03-04 19:01:15">, #<Email id: 2, address: "joejoe@email.com", person_id: 1, created_at: "2020-03-04 19:03:48", updated_at: "2020-03-04 19:03:48">, #<Email id: 3, address: "joeswork@email.com", person_id: 1, created_at: "2020-03-04 19:03:56", updated_at: "2020-03-04 19:03:56">]>
```

### Foreign Keys
To create the association between the Person and the Email table we had to assign a foreign key to Email. **The foreign key always goes on the `belongs_to` side.** By convention the foreign key should always be the `modelname_id` and the data type should be integer. The `has_many` model is singular, the `belongs_to` model is plural. A Person (singular) has_many emails (plural).

### Troubleshooting Tip
It is an easy mistake to forget a foreign key. It is also a common beginner mistake to mislabel the column or to make a mistake when assigning the data type. If this happens, [ migrations ](./migrations.md) are your friend! Create a migration to update your database.

## Banking Challenge

### Setup
- Create a new rails application and database
- Create a model for owner
- An owner has a name and address, and can have multiple credit cards
- Create a model for credit card
- A credit card has a number, an expiration date, and an owner

### Challenges
- Create three owners and save them in the database
- Create a credit card in the database for each owner
- Add two more credit cards to one of the owners

### Stretch Challenge
- Add a credit limit to each card
- Find the total credit extended to the owner with multiple credit cards

---
[Back to Syllabus](../README.md#unit-five-intro-to-postgres-and-ruby-on-rails-models)
