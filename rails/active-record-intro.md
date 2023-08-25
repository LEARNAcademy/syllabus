# Active Record Introduction

#### Overview
Active Record is the interface between a Rails application and the database. Rails has specific commands to create new tables in the database and to edit existing tables. Active Record has its own syntax to query a database. The syntax is similar to SQL queries with a Ruby-flavor.

#### Previous Lecture (60 min)
[![YouTube](http://img.youtube.com/vi/hAdHUrW1VT4/0.jpg)](https://www.youtube.com/watch?v=hAdHUrW1VT4)

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
**ORM** (Object-relational mapping) is a programming technique that converts data between incompatible systems by using object-oriented programming languages. ORM is a tool that allows developers to mimic the structure and syntax of SQL queries while maintaining the object-oriented style of the Rails framework.

### Active Record
**Active Record** is a Rails ORM. Active Record allows us to interact with data stored in a database table as though it were a Ruby object.

### Creating Active Record Models
One of the advantages of working with Rails is its collection of **generate commands**. These commands pass information through the command line which prompts Rails to create the relevant file structure. This is especially helpful as Rails is very picky about its naming conventions. We will explore many invaluable generate commands throughout our Rails journey. Today, we will start with the generate command that creates a new model. The generate command for a model accepts the desired name of the model, the names of each column, and the corresponding data types for each column as arguments. The name of the model is uppercase and singular by convention.

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
- `string`: the data type associated with the breed column
- `age`: the name of a column in the model
- `integer`: the data type associated with the age column

Terminal output from the generate command:
```
Running via Spring preloader in process 4913
      invoke  active_record
      create    db/migrate/20200925202130_create_dogs.rb
      create    app/models/dog.rb
```

### Active Record Data types  
Active Record has specific data types that can be used in each column in the table. Below are some commonly used data types:
- string: limited to 255 characters
- text: allows for larger character sets
- integer: whole numbers, positive and negative
- float: includes whole numbers, decimal formats, and scientific notation
- datetime: formatted as YYYY-MM-DD HH:MM:SS
- boolean: true or false value

### Migrations
**Migrations** provide a structured and repeatable process to change the shape of our database over time. Migrations are files that run SQL commands. We will explore migrations extensively in an upcoming section. Our current focus is on employing migrations for the initial setup of our database. Rails maintains a history of the executed migrations and those pending execution.

```
$ rails db:migrate
```

The migration command creates a timestamped file in *db/migrate* of the changes made to the database. In the preceding example, the change is the initial creation of the Dog table.  

Terminal output from the generate command:
```
== 20200925202130 CreateDogs: migrating =======================================
-- create_table(:dogs)
   -> 0.2306s
== 20200925202130 CreateDogs: migrated (0.2307s) ==============================
```

### What Did Rails Create?
After generating a model and running our database migration, we can explore all the files and folders that have been automatically generated. There is now a file inside *app/models* for the **model class**. The file name will be singular and snake_case.

**app/models/dog.rb**
```ruby
class Dog < ApplicationRecord
end
```
It also creates the **database schema**, which is the "shape" of the database: the columns and data types of those columns.

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
Database entries only exist on the computer where they are created. Right now our data base has no entries.

Start the **Rails console** to interact directly with Active Record.
```
$ rails c
```

**Create**  
To add a new instance of our Dog class, we need to use the Active Record command `.create` and provide key:value pairs for each attribute and its value to be stored in each column.
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
Now that we have dogs in our database, we can examine all the dogs as a collection or inspect each dog separately.

Let's start with viewing the Dogs as a collection. We can use the Active Record command `.all` to see an array that holds all the dog objects. Calling `.all` on the class Dog in Active Record is the same as making the SQL query `SELECT * FROM dogs`.
```
> Dog.all
```
Output in the terminal:
```
=> #<ActiveRecord::Relation [#<Dog id: 1, name: "Jax", breed: "German Shorthaired Pointer", age: 4, created_at: "2020-09-25 20:46:49", updated_at: "2020-09-25 20:46:49">, #<Dog id: 2, name: "Bella", breed: "Yellow Lab", age: 12, created_at: "2020-09-25 20:47:55", updated_at: "2020-09-25 20:47:55">, #<Dog id: 3, name: "Baby", breed: "Long Haired Dachshund", age: 11, created_at: "2020-09-25 20:48:02", updated_at: "2020-09-25 20:48:02">]>
```
Notice each Dog has a key:value pair with `id` and a number. This is called a **primary key** and is a unique identifier of each instance. We don't have to assign each Dog an id; Rails will do this automatically.

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

Notice that despite only one dog meeting this condition, the returned result is an array instead of a single item. The expected output for the `.where` clause is always an array or collection of records that satisfy the specified condition.

We can also pass a relational operator to the `.where` method.
```
Dog.where "age > 10"
```

Output in the terminal:
```
=> #<ActiveRecord::Relation [#<Dog id: 2, name: "Bella", breed: "Yellow Lab", age: 12, created_at: "2020-09-25 20:47:55", updated_at: "2020-09-25 20:47:55">, #<Dog id: 3, name: "Baby", breed: "Long Haired Dachshund", age: 11, created_at: "2020-09-25 20:48:02", updated_at: "2020-09-25 20:48:02">]>
```

**Edit**  
We can update the instances in the database by accessing an individual dog and reassigning one of its keys. First, we need to tell Active Record which dog we intend to update. When we find the correct dog, we can save it to a variable.   
***NOTE: This variable is temporary and only exists within the context of this Rails console session. In other words, if you `exit` the console and return, you will no longer have access to the variables you have created.***

```
> bella = Dog.find 2
```
When we call `bella`, we receive the entry that matches the `id` of 2.

Now, using the variable, we can modify George's attributes. After we modify the variable, run `.save` to update the database.
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
We may need to remove an item in the database. Just like edit, when we remove an item, it must be identified first.

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
Now, when we call `Dog.all`, we observe that the instance of Bella is no longer present in the database.

### A Note on Naming Conventions
Naming conventions are a noteworthy aspect of the Rails principle "Convention over Configuration". Following the naming conventions enables Rails to take care of a lot of the heavy lifting needed to set up an application.

- Model class: singular and PascalCase
- Model file name: singular and snake_case
- Database table: plural and snake_case


## Challenge: Rolodex
As a developer, I have been tasked with creating a database model that will be used in a rolodex application. I want to ensure that the database behaves as expected and the necessary actions can be performed on the database instances.

**Set Up**
- Create a new Rails app named 'rolodex_challenge'.
- Create the database. The output in the terminal should look like this:
```
Created database 'rolodex_development'
Created database 'rolodex_test'
```
- Generate a model called Person with first_name, last_name, and phone attributes. **All data types should be strings.**
- Run a migration to set up the database.
- Open up Rails console.

**Actions**
- Add five family members into the Person table using the Rails console.
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
