# Active Record Introduction

#### Overview
Active Record is the interface between a Rails application and the database. Rails has specific commands to create new tables in the database and to edit existing tables. Active Record has its own syntax to query a database. The syntax is similar to SQL queries with a Ruby-flavor.

#### Previous Lecture (47 min)
[![YouTube](http://img.youtube.com/vi/2NzIDFx2Q3c/0.jpg)](https://www.youtube.com/watch?v=2NzIDFx2Q3c)

#### Learning Objectives
- can define ORM
- can differentiate between a database and an ORM
- can visualize a database as a collection of rows and columns
- can recall the command to generate a model
- can differentiate between terminal and Rails console
- can recall basic Active Record data types
- can equate models with classes
- can recognize that the schema cannot be updated directed
- can use appropriate Active Record syntax to perform CRUD actions on a model

#### Vocabulary
- ORM
- Active Record
- Generate commands
- Model class
- Migrations
- Database schema
- Rails console
- Primary key

#### Additional Resources
- [ Rails Naming Conventions ](https://gist.github.com/iangreenleaf/b206d09c587e8fc6399e)

### Useful Commands
- $ rails c
- $ rails generate model ModelName
- $ rails db:migrate

### Set Up

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

#### Troubleshooting Tips
- Did you create your database?
- Did you migrate?
- Errors? Always look at the first error in the list.

---
### Object-Relational Mapping
**ORM** (Object-relational mapping) is a programming technique for converting data between incompatible systems using object-oriented programming languages. ORM is a tool that allows developers to write SQL queries using Rails.

### Active Record
**Active Record** is a Rails ORM. Active Record takes data which is stored in a database table and lets you interact with the data like a Ruby object.

### Creating Active Record Models
One of the great things about working with Rails is that we are provided with a collection of **generate commands** that allows us to pass information through the command line which tasks Rails with setting up the corresponding file structure. This is particularly helpful as Rails is very picky about its naming conventions. We will explore many wonderful generate commands throughout our time working with Rails. Today we will start with the generate command that will allow us to create a new model. The generate command for model takes the name of the model we intend to create, the name of each column, and the data type of each column as arguments. The name of the model is uppercase and singular by convention.

```
$ rails generate model Dog name:string breed:string age:integer
```

Anatomy of the command:
- `rails generate`: the setup command passed to Rails
- `model`: what we are generating
- `Dog`: name of the model, uppercase and singular
- `name`: the name of a column in the model
- `string`: the data type associated with the name column
- `breed`: the name of a column in the model
- `string`: the data type associated with the name column
- `age`: the name of a column in the model
- `integer`: the data type associated with the name column

Terminal output from the generate command:
```
Running via Spring preloader in process 4913
      invoke  active_record
      create    db/migrate/20200925202130_create_dogs.rb
      create    app/models/dog.rb
```

**Active Record Datatypes**  
Active Record has specific data types that can be used in each column in the table. Below are some commonly used data types:
- string - limited to 255 characters
- text - allows for larger character sets
- integer
- float
- datetime - formatted as: YYYY-MM-DD HH:MM:SS
- boolean

### Migrations
**Migrations** are a tool that allows you to change the shape of your database over time. We will explore migrations in detail in a later section, but for now we need migrations to establish the initial setup of our database. Migrations are files that run SQL commands. Rails maintains a history with the migrations that have already run, and those that need to be run.

```
$ rails db:migrate
```

Terminal output from the generate command:
```
== 20200925202130 CreateDogs: migrating =======================================
-- create_table(:dogs)
   -> 0.2306s
== 20200925202130 CreateDogs: migrated (0.2307s) ==============================
```
The migration command creates a timestamped file in *db/migrate* with the changes made to the database. In this case, the change is the initial creation of the Dog table.

### What Did Rails Create?
Once we have generated a model and run our database migration, we can take a look at all the good stuff that was created for us. There is now a file inside *app/models* for the **model class**. The file name will be singular and snake_case.

**app/models/dog.rb**
```ruby
class Dog < ApplicationRecord
end
```
It also creates the **database schema**. This is the "shape" of the database: the columns and data types of those columns.

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

### Active Record in Rails Console
Database entries only live on the computer where they are created. Right now our data base has no entries.

Start the **Rails console** to interact directly with Active Record.
```
$ rails c
```

**Create**  
To add a new instance of our Dog class, we need to use the Active Record command `.create` and pass in key:value pairs of each column and the value to be stored in that column.
```
> Dog.create name: "Jax", breed: "German Shorthaired Pointer", age: 4
```
Output in the terminal:
```
Dog Create (27.7ms)  INSERT INTO "dogs" ("name", "breed", "age", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5) RETURNING "id"  [["name", "Jax"], ["breed", "German Shorthaired Pointer"], ["age", 4], ["created_at", "2020-09-25 20:46:49.788800"], ["updated_at", "2020-09-25 20:46:49.788800"]]
   (12.5ms)  COMMIT
 => #<Dog id: 1, name: "Jax", breed: "German Shorthaired Pointer", age: 4, created_at: "2020-09-25 20:46:49", updated_at: "2020-09-25 20:46:49">
```
Great! We successfully added content to the database.

We can repeat this process to add more instances of the class Dog.
```
> Dog.create name: "Bella", breed: "Yellow Lab", age: 12
> Dog.create name: "Baby", breed: "Long Haired Dachshund", age: 11
```

**Read**  
Now that we have dogs in our database we can look at all the dogs as a collection, or look at each individual dog.

Let's start with viewing the Dogs as a collection. We can use the Active Record command `.all` to see an array that holds all the dog objects. Calling `.all` on the class Dog in Active Record is the same as making the SQL query `SELECT * FROM dogs`.
```
> Dog.all
```
Output in the terminal:
```
=> #<ActiveRecord::Relation [#<Dog id: 1, name: "Jax", breed: "German Shorthaired Pointer", age: 4, created_at: "2020-09-25 20:46:49", updated_at: "2020-09-25 20:46:49">, #<Dog id: 2, name: "Bella", breed: "Yellow Lab", age: 12, created_at: "2020-09-25 20:47:55", updated_at: "2020-09-25 20:47:55">, #<Dog id: 3, name: "Baby", breed: "Long Haired Dachshund", age: 11, created_at: "2020-09-25 20:48:02", updated_at: "2020-09-25 20:48:02">]>
```
Notice each Dog has a key:value pair that is `id` and a number. This is called a **primary key** and is a unique identifier of each instance. We don't have to assign each Dog an id, Rails will do this automatically.

There are many ways to retrieve just one dog from the database. We can use `.first` and `.last` to access the first and last entry respectively. We can also use the primary key to access a particular dog with the `.find` method.

```
> Dog.find 2
```
Output in the terminal:
```
=> #<Dog id: 2, name: "Bella", breed: "Yellow Lab", age: 12, created_at: "2020-09-25 20:47:55", updated_at: "2020-09-25 20:47:55">
```

We can also retrieve a subset of dogs that meet a particular qualification using the Active Record `where` clause.

```
> Dog.where age: 11
```
Output in the terminal:
```
=> #<ActiveRecord::Relation [#<Dog id: 3, name: "Baby", breed: "Long Haired Dachshund", age: 11, created_at: "2020-09-25 20:48:02", updated_at: "2020-09-25 20:48:02">]>
```

Notice that even though only one dog met this qualification, we get back an array rather than a single item. This is the expected output for the `.where` clause.

We can also pass a relational operator to the `.where` method.
```
Dog.where "age > 10"
```

Output in the terminal:
```
=> #<ActiveRecord::Relation [#<Dog id: 2, name: "Bella", breed: "Yellow Lab", age: 12, created_at: "2020-09-25 20:47:55", updated_at: "2020-09-25 20:47:55">, #<Dog id: 3, name: "Baby", breed: "Long Haired Dachshund", age: 11, created_at: "2020-09-25 20:48:02", updated_at: "2020-09-25 20:48:02">]>
```

**Edit**  
We can update the instances in the database by accessing an individual dog and reassigning one of its keys. First we need to tell Active Record which dog we intend to update. When we find the correct dog we can save it to a variable. This variable is temporary and only exists within the context of this Rails console session. In other words, if you `exit` the console and return you will no longer have access to the variables you create.

```
> bella = Dog.find 2
```
Then when we call `bella` we get back the entry that matches the id of 2.

Now using the variable, we can modify George's attributes. After we modify the variable, run `.save` to update the database.
```
> bella.age = 13
> bella.save
```

Output in the terminal:
```
(0.3ms)  BEGIN
Dog Update (27.9ms)  UPDATE "dogs" SET "age" = $1, "updated_at" = $2 WHERE "dogs"."id" = $3  [["age", 13], ["updated_at", "2020-09-25 21:32:00.722843"], ["id", 2]]
(7.3ms)  COMMIT
=> true
```

**Delete**  
We may need to remove an item in the database. Just like edit, when we remove an item it first must be identified.

```
> bella = Dog.find 2
> bella.destroy
```

Output in the terminal:
```
(1.4ms)  BEGIN
Dog Destroy (0.5ms)  DELETE FROM "dogs" WHERE "dogs"."id" = $1  [["id", 2]]
(12.3ms)  COMMIT
=> #<Dog id: 2, name: "Bella", breed: "Yellow Lab", age: 13, created_at: "2020-09-25 20:47:55", updated_at: "2020-09-25 21:32:00">
```
Now when we call `Dog.all` we see the instance of Bella is no longer in the database.

### A Note on Naming Conventions
Naming conventions are a noteworthy aspect of the Rails principle convention over configuration. If you follow the naming conventions, Rails will take care of a lot of the heavy lifting needed to set up an application.

- Model class - singular and PascalCase
- Model file name - singular and snake_case
- Database table - plural and snake_case


## Challenge: Rolodex
As a developer, I have been tasked with creating a database model that will be used in a rolodex application. I want to ensure that the database behaves as expected and the necessary actions can be performed on the database instances.

**Set Up**
- Create a new Rails app named 'rolodex_challenge'.
- Create the database. The output in the terminal should look like this:
```
Created database 'rolodex_development'
Created database 'rolodex_test'
```
- Generate a model called Person with a first_name, last_name, and phone. **All fields should be strings.**
- Run a migration to set up the database.
- Open up Rails console.

**Actions**
- Add five family members into the Person table in the Rails console.
- Retrieve all the items in the database.
- Add yourself to the Person table.
- Retrieve all the entries that have the same last_name as you.
- Update the phone number of the last entry in the database.
- Retrieve the first_name of the third Person in the database.

**Stretch Challenges**
- Update all the family members with the same last_name as you, to have the same phone number as you.
- Remove all family members that do not have your last_name.

---
[Back to Syllabus](../README.md#unit-five-intro-to-postgres-and-ruby-on-rails-models)
