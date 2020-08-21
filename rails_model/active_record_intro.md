# Active Record Introduction

## Video: Active Record Details
[![YouTube](http://img.youtube.com/vi/R5vpRwpWctY/0.jpg)](https://www.youtube.com/watch?v=R5vpRwpWctY)

## Video: Rails Model (Older Video)
[![YouTube](http://img.youtube.com/vi/3D_JwWoJKm4/0.jpg)](https://www.youtube.com/watch?v=3D_JwWoJKm4)

## Overview
- Active Record is the interface between a Rails application and the database.
- Rails has specific commands to create new tables in the database and to edit existing tables.
- Active Record has its own syntax to query a database. The syntax is similar to SQL queries with a Ruby-flavor.

## Learning Objectives
- Exploring the model layer of the MVC paradigm in a Rails application
- Understanding the difference between SQL and Active Record
- Using a Rails generate command to create a database table
- Following the Rails naming conventions for creating models

## Vocabulary
- Active Record
- ORM
- generate commands
- migrations
- model class
- rails console

## Useful Commands
- $ rails c
- $ rails generate model ModelName
- $ rails generate migration ModificationOnModel
- $ rails db:migrate

## Additional Resources
- <a href="https://api.rubyonrails.org/v5.2.0/classes/ActiveRecord/Migration.html" target="blank">Active Record Migrations</a>
- <a href="https://gist.github.com/iangreenleaf/b206d09c587e8fc6399e" target="blank">Rails Naming Conventions</a>

## Set Up

#### Creating a new Rails app:
```
$ rails new dog_app -d postgresql -T
$ cd dog_app
$ rails db:create
$ rails server
```

In a browser navigate to:
`http://localhost:3000`
or
`127.0.0.1:3000`

## Object-Relational Mapping
ORM (Object-relational mapping) is a programming technique for converting data between incompatible systems using object-oriented programming languages. ORM is a tool that allows developers to write SQL queries using Rails.

## Active Record
Active Record is a Rails ORM. Active Record takes data which is stored in a database table and lets you interact with the data like a Ruby object.

## Create a Model with Active Record
To create a new table in the Postgres database Rails provides a convenient command: `rails generate model`

The generate command takes the name of the table, the name of each column, and the datatype of each column as arguments. The name of the table is uppercase and singular by convention.

$ rails generate model Dog name:string breed:string age:integer

#### Active Record Datatypes
Active Record has specific data types that can be used in each column in the table. Below are some commonly used data types:
- primary_key - the unique identifier of each entry, Rails provides this automatically
- string - limited to 255 characters
- text - allows for larger character sets
- integer
- float
- datetime - formatted as: YYYY-MM-DD HH:MM:SS
- boolean

#### Rail Generate Model Command
The generate model command creates a lot of good stuff for us. It creates a file inside *app/models* for the model class. The file name will be singular and snake_case.

**app/models/dog.rb**
```ruby
class Dog < ApplicationRecord
end
```
It also creates the database schema. This is the "shape" of the database: the columns and data types of those columns. The database columns you just created will not appear in the schema until you've migrated your changes.

**db/schema.rb**
```ruby
  create_table "dogs", force: :cascade do |t|
    t.string "name"
    t.string "breed"
    t.integer "age"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end
```
Rails creates all this for us. The schema represents the current shape of the database and should not be modified directly.

## Naming Conventions
Naming conventions are a noteworthy aspect of the Rails principle convention over configuration. If you follow the naming conventions, Rails will take care of a lot of the heavy lifting needed to set up an application.

- Model Class - Singular and PascalCase
- Model file name - Singular and snake_case
- Database Table - Plural and snake_case

## Migrations
Now that we have created the initial shape of the database we need to run a migration. Migrations are files that run SQL commands. Rails maintains a history with the migrations that have already run, and those that need to be run.

$ rails db:migrate

Output in the terminal:
```
== 20200303020724 CreateDogs: migrating =======================================
-- create_table(:dogs)
   -> 0.0308s
== 20200303020724 CreateDogs: migrated (0.0308s) ==============================
```
The migration command creates a timestamped file in *db/migrate* with the changes made to the database. In this case, the change is the initial creation of the Dog table.

**app/migrate/2020030320724_create_dogs.rb**
```ruby
class CreateDogs < ActiveRecord::Migration[6.0]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :breed
      t.integer :age

      t.timestamps
    end
  end
end
```

## Interacting with the Database in Rails Console
Start the Rails console:

$ rails c

#### Insert an Entry

Right now our data base has no entries. We can add data to the application in the Rails console.

**.create**
```
> Dog.create name: "Fido", breed: "Lab", age: 7
```
Output in the terminal:
```
Dog Create (27.8ms)  INSERT INTO "dogs" ("name", "breed", "age", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5) RETURNING "id"  [["name", "Fido"], ["breed", "Lab"], ["age", 7], ["created_at", "2020-03-03 02:43:48.167973"], ["updated_at", "2020-03-03 02:43:48.167973"]]
   (6.0ms)  COMMIT
=> #<Dog id: 1, name: "Fido", breed: "Lab", age: 7, created_at: "2020-03-03 02:43:48", updated_at: "2020-03-03 02:43:48">
```
Great! We successfully added content to the database.

We can repeat this process to add more Dogs.
```
> Dog.create name: "George", breed: "Lab", age: 3
```
Terminal output:
```
=> #<Dog id: 2, name: "George", breed: "Lab", age: 3, created_at: "2020-03-03 02:56:50", updated_at: "2020-03-03 02:56:50">
```
Notice each Dog has an id number. We don't have to assign each Dog an id, Rails will do this automatically.

#### Access and Update an Entry
We may need to update an item in the database. To access one Dog entry we can create a variable.

**.find**
```
> george = Dog.find 2
```
Then when we call `george` we get back the entry with the id of 2:
```
=> #<Dog id: 2, name: "George", breed: "Lab", age: 3, created_at: "2020-03-03 02:56:50", updated_at: "2020-03-03 02:56:50">
```
Now using the variable, we can modify George's attributes. After we modify the variable, run `.save` to update the database.
```
> george.age = 6
=> 6
> george.save

Dog Update (0.5ms) UPDATE "dogs" SET "age" = $1, "updated_at" = $2 WHERE "dogs"."id" = $3  [["age", 6], ["updated_at", "2020-03-03 03:07:42.658145"], ["id", 2]] (1.3ms) COMMIT
```
Now calling `Dog.all` will return updated information.
```
> Dog.all
=> #<ActiveRecord::Relation [#<Dog id: 1, name: "Fido", breed: "Lab", age: 7, created_at: "2020-03-03 02:43:48", updated_at: "2020-03-03 02:43:48">, #<Dog id: 2, name: "George", breed: "Lab", age: 6, created_at: "2020-03-03 02:56:50", updated_at: "2020-03-03 03:07:42">]>
```

**.where**
```
> Dog.where age:6
```
Terminal output:
```
Dog Load (0.6ms) SELECT "dogs".* FROM "dogs" WHERE "dogs"."age" = $1 LIMIT $2 [["age", 6], ["LIMIT", 11]]
=> #<ActiveRecord::Relation [#<Dog id: 2, name: "George", breed: "Lab", age: 6, created_at: "2020-03-03 02:56:50", updated_at: "2020-03-03 03:07:42">]>
```
**Note:** `where` methods returns a collection of entries, whereas `find` never selects more than one contact

#### Access and Remove an Entry
We may need to remove an item in the database. To remove an item it first must be identified.

**.destroy**
```
> george = Dog.find 2
> george.destroy
```
```
(1.1ms) BEGIN Dog Destroy (1.0ms)  DELETE FROM "dogs" WHERE "dogs"."id" = $1 [["id", 2]] (6.1ms)  COMMIT
=> #<Dog id: 2, name: "George", breed: "Lab", age: 6, created_at: "2020-03-03 02:56:50", updated_at: "2020-03-03 03:07:42">
```
Now when we call `Dog.all` there is only one entry.



## Challenges
Create, Update, Insert, Delete with Active Record in the Rails console.

**Set Up**
- Create a new Rails app named 'rolodex'.
- Create the database, the outcome should look like this:
```
Created database 'rolodex_development'
Created database 'rolodex_test'
```
- Generate a Person model with a first_name, last_name, and phone. All fields should be strings.
- Run a migration to set up the database.
- Open up Rails console.

**Actions**
- Add five family members into the Person table in the Rails console.
- Retrieve all the items in the database.
- Add yourself to the Person table.
- Retrieve all the entries that have the same last_name as you.
- Update the phone number of the last entry in the database.
- Retrieve the first_name of the third Person in the database.


## Stretch Challenges
- Update all the family members with the same last_name as you, to have the same phone number as you.
- Remove all family members that do not have your last_name.


[ Go to next lesson: Active Record Migrations ](./migrations.md)

[ Back to Ruby on Rails Introduction ](./intro.md)

[ Back to Syllabus ](../README.md#ruby-on-rails)
