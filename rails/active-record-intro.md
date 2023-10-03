# Active Record Introduction

#### Overview

The fundamental purpose of a full-stack application is to allow users to store, view, and manipulate data. This functionality requires both Rails and a PostgreSQL database. Rails and PostgreSQL are two different technologies with different syntax and functionality. How do we get Rails and PostgreSQL to communicate? That is what Active Record is for. Active Record uses Ruby-like syntax that will query the PostgreSQL database allowing the two different technologies to work together.

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
- can recognize that the schema cannot be updated directly
- can use appropriate Active Record syntax to perform CRUD actions on a model

#### Vocabulary

- model class
- generate commands
- ORM
- Active Record
- migrations
- database schema
- rails console
- primary key

#### Additional Resources

- [Rails Naming Conventions](https://gist.github.com/iangreenleaf/b206d09c587e8fc6399e)
- [Active Record Basics](https://guides.rubyonrails.org/active_record_basics.html)

### Processes

#### Introductory Phase Documentation:  
During the introductory phase of Ruby on Rails, we will create documentation to keep track of the actions taken to build the Rails application and interactions with the database. This documentation will be saved in a markdown file, which will be uploaded to GitHub. This allows other team members to contribute and access the team's code.

#### Process for GitHub Repository:
- cd into the database-challenges repository
- Create a new branch: $ `git checkout -b active-record-initials1-initials2` (ex. active-record-sp-ts)
- Create a new markdown file: $ `touch active-record-student1-student2.md` (ex. active-record-sarah-trish.md)
- Use the markdown file to document the code commands and process
- Code!  

However, please note that the Rails application itself will not be uploaded to GitHub. Consequently, other team members will not have access to the application or the database through the repository. The application and database will only be available on your local machine. For the duration of the challenges, all team members should create their own Rails applications on their respective local machines. After the challenges are completed, it is important to drop and delete the Rails application from your local machine.  

#### Process for Rails Application on Local Machine:
- cd to your Desktop
- $ `rails new active-record -d postgresql -T`
- cd into the project
- $ `rails db:create`
- Open the project in a text editor
- Open a new terminal tab (command + t)
- Begin the rails server: $ `rails server`
- In a browser navigate to: http://localhost:3000

#### Dropping/Deleting a Rails Application
- Drop the database: $ `rails db:drop`
- cd to your Desktop
- Permanently delete the rails app: $ `rm -rf <app-name>`

#### Useful Commands

- $ `rails c`
- $ `rails generate model ModelName`
- $ `rails db:migrate`

#### Troubleshooting Tips

- Did you create your database?
- Did you migrate?
- Errors? Always look at the first error in the list.

---

### Data Data Data

"Data data data! I can't make bricks without clay," Arthur Conan Doyle, The Adventures of Sherlock Holmes (1892)

The foundation of every full-stack application is data. It is the first and most important decision to make when starting a project. Developers must think about what information is needed (data), what the information should be called in order to communicate intent (column names), what kind of information is needed (data types), as well as many other decisions about how the information will be used (relationships).

Every Rails application must have a database. Creating a database is one of the first things we do after building a new Rails application. The command `rails db:create` will create an empty named storage space on our local computer. It is now our job as developers to define the data that will be held in our database and used by our application.

### Rails Models

Data in the database is structured in a table. Tables are made up of columns and rows. The table columns define the data. The rows in the table are data entries.

PostgreSQL databases follow the philosophy of object-oriented programming. We can think of the column structure of the table as a class. Classes are a template (or blueprint) for the data. When we are working in databases, these classes are referred to as model classes. A database **model class** is the description of the structure of the columns and the data type of each column.

Each row in the table is an instance of data. We can think of each row as an object.

### Creating Rails Models

Once we have thought through the data needs of our application we can create the structure of the database table. In other words, we can define the model.

To define the model we need to know the name and data type of every column. In this example we will create a very simple application to be used at a veterinary clinic. The model will allow us to store basic information about the dog patients at the vet. The model will be called Dog (PascalCase and singular) and the columns will have the dog's name, breed, and age. The name and breed will be the data type of string and the age will be an integer.

As we know, Rails is very opinionated. "Convention over configuration." To ensure the conventions are followed consistently and correctly, Rails offers a collection of tools that perform common actions and create new directories and file structures in the Rails application. These tools are called generators. One of the things we can generate is a new model.

### Rails Generate

**Generate commands** are run through the terminal command line and prompt Rails to perform common actions, create relevant directory and file structures, and populate code with correct naming conventions and syntax. We will explore many invaluable generate commands throughout our Rails journey. Today, we will start with the generate command that creates a new model.

We will generate a model class for our Dog. Within the generate command we will include all the column names as well as the data types of each column. Like all terminal commands, the Rails generate commands require precision and attention to detail. Note the spacing, or lack of spacing, between the column name and data type in the command.

```bash
$ rails generate model Dog name:string breed:string age:integer
```

Let's break this down and talk about each piece.

- `rails generate`: the terminal command that will create new directories and file
- `model`: what we are generating
- `Dog`: name of the model, PascalCase and singular
- `name`: the name of the column in the model
- `string`: the data type associated with the name column
- `breed`: the name of the column in the model
- `string`: the data type associated with the breed column
- `age`: the name of the column in the model
- `integer`: the data type associated with the age column

Terminal output from the generate command:

```bash
invoke  active_record
create    db/migrate/20230905225404_create_dogs.rb
create    app/models/dog.rb
```

The generate command produced two new files in the Rails application structure. Each of the files is automatically populated with the necessary code. The first file is a migration, which we will address shortly. The second file is the model class.

**app/models/dog.rb**

```ruby
class Dog < ApplicationRecord
end
```

### Model vs Table

We have two new files in the Rails application. However, we don't have a data base table just yet. Since we don't have a table, we can't store dog entries at this point in the process. Remember, models are the template (or blueprint). Just like all classes, we have to instantiate our model class.

This is the point in our process where the we start to enter the world of PostgreSQL. Rails and PostgreSQL are two completely different languages with different syntax. However, they do share an object-oriented approach to programming. We can use this commonality to create communication. This is called object-relational mapping.

### Object-Relational Mapping

**ORM** (Object-relational mapping) is a programming technique that converts data between incompatible systems by using object-oriented programming languages. Basically, ORM serves as a translator between two different languages.

### Active Record

Rails is written in the Ruby programming language. PostgreSQL uses SQL syntax for querying data. **Active Record** is a Rails ORM. Active Record allows us to interact with data stored in a database table as though it were a Ruby object. Active Record allows developers to mimic the structure and syntax of SQL queries while maintaining the object-oriented style of the Rails framework.

Notice the first line in the terminal output when we ran the Rails generate command for our Dog model.

```bash
invoke  active_record
```

Active Record is facilitating communication between the Rails application and the PostgreSQL database.

### Active Record Data Types

Just like all programming technologies, Active Record has specific data types. The Active Record data types describe the different types of information that can be stored in a database. Every time we create a column in a database we have to indicate the type of data that will be held in that column. Below are some commonly used Active Record data types:

- string: limited to 255 characters
- text: allows for larger character sets
- integer: whole numbers, positive and negative
- float: includes whole numbers, decimal formats, and scientific notation
- date: formatted as YYYY-MM-DD
- datetime: formatted as YYYY-MM-DD HH:MM:SS
- boolean: true or false value

### Migrations

When we left off of our veterinary application, we had generated a model for Dog. The generate command produced two files. But we were still one step away from actually having a database table.

The first file that was generated is called a migration. A **migration** provides a structured and repeatable process for making changes to the database. Migration files allow the Rails application to maintain a history of the changes that are made to the database. This allows developers to see the evolution of the Rails application in a manner that is similar to looking back on the history of a project in GitHub.

Migrations create a buffer between the developer and the manipulation of the database. The generate command creates a migration. Executing the migration file will change the database. In this case, executing the migration will create our dog table in the database.

Executing the migration is done with the following command:

```bash
$ rails db:migrate
```

After this migration command is executed, Rails creates a timestamped file in directory `db/migrate` of the changes made to the database.

Terminal output from the migrate command:

```bash
== 20230905225404 CreateDogs: migrating =======================================
-- create_table(:dogs)
   -> 0.0102s
== 20230905225404 CreateDogs: migrated (0.0103s) ==============================
```

Now we have a table in the database for our dogs.

Migrations are incredible useful. We will explore migrations extensively in an upcoming section. Our current focus is to use migrations for the initial setup of our database.

### Database Schema

Prior to the migration, all we had was a description of the database structure. Executing the migration will instantiate the model class. When the migration is executed it creates the database schema. The **database schema** is a file that contains a representation of the "shape" of the database. The shape of the database is all the columns and data types described by the model class.

**db/schema.rb**

```ruby
create_table "dogs", force: :cascade do |t|
  t.string "name"
  t.string "breed"
  t.integer "age"
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
end
```

The schema file is created by the Rails migration. It is VERY important to note that this is a visual representation of the database and not the database itself. This file cannot and should not be modified directly. The only way to affect change in the database is through a migration.

### Rails Console

Now that our dog table exists we can start to add entries. Adding dog entries will add instances (rows) in the database. In a full-stack application the user would be able to add entries to the database through a form. Since we are only working with the model layer we don't have that ability. Instead we will use a tool called the Rails console to add content directly to the database. The **Rails console** is a command line tool that uses IRB (interactive Ruby) in the development environment allowing direct interactions with a Rails application.

To access the Rails console in the terminal, we must first ensure we are in the directory of the Rails application. The Rails console can be accessed by typing `rails console`, or `rails c` for short.

```bash
$ rails console
--OR--
$ rails c
```

Returning to the regular terminal can be done by typing exit in the Rails console.

```bash
> exit
```

Just like IRB, while we are in the Rails console, we do not have access to the file structure of the Rails application. We CANNOT run any regular terminal commands or Rails generate commands inside the Rails console.

Also like IRB, the Rails console is a session. Database changes will be saved but variables will not persist once we leave the session.

### Active Record in the Rails Console

The Rails console allows us to write Active Record queries that interact with the database. Active Record queries are structured in a way that feel familiar to Ruby developers as it gives us methods to be called on the Dog model. Active Record will translate the query into SQL to affect change in the database.

To explore how Active Record queries are structured, we will work through the CRUD actions on our Dog model.

### Create

Currently our database has a table called dogs. However, the table is empty. So the first step is to create a new instance of our Dog class. We will do this by calling the Active Record method `.create` on `Dog`. The create method takes an argument. The argument will be a collection of key-value pairs. The key is the name of the column and the value is the information that is specific to our dog.

Note: this command will only work in the Rails console and not in the normal terminal.

```
> Dog.create(name: "Baby Dog", breed: "Long Haired Dachshund", age: 12)
```

The output in the Rails console will look something like this:

```
TRANSACTION (0.2ms)  BEGIN
Dog Create (1.7ms)  INSERT INTO "dogs" ("name", "breed", "age", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5) RETURNING "id"  [["name", "Baby Dog"], ["breed", "Long Haired Dachshund"], ["age", 12], ["created_at", "2023-09-11 21:04:53.715296"], ["updated_at", "2023-09-11 21:04:53.715296"]]
TRANSACTION (0.5ms)  COMMIT
 =>
#<Dog:0x0000000115c227c8
 id: 1,
 name: "Baby Dog",
 breed: "Long Haired Dachshund",
 age: 12,
 created_at: Mon, 11 Sep 2023 21:04:53.715296000 UTC +00:00,
 updated_at: Mon, 11 Sep 2023 21:04:53.715296000 UTC +00:00>
```

There are two important parts of ths output. The first part is Active Recording translating the create action into a SQL query. Then we see the new instance of our Dog model that was added to the database.

We can add more dogs to the database with the Active Record create method.

```
> Dog.create name: "Scully", breed: "Labradoodle", age: 6
> Dog.create name: "Lola", breed: "Pitbull mix", age: 1
```

### Primary Keys

Notice each new instance of dog has a key-value pair with `id` and a number. This id is the primary key for our dogs table. The **primary key** is the unique identifier of each instance in the database.

```
#<Dog:0x0000000115c227c8
 id: 1,   <---
 name: "Baby Dog",
 breed: "Long Haired Dachshund",
 age: 12,
 created_at: Mon, 11 Sep 2023 21:04:53.715296000 UTC +00:00,
 updated_at: Mon, 11 Sep 2023 21:04:53.715296000 UTC +00:00>
```

The id is a column on the database table. However, it is a column that we didn't define when we generated our Dog model. And notice that we didn't include an id in the Active Record create method. This is something that Rails handles automatically. Primary keys are incredible important and Rails will remove the risk of human error by handling the creation and assignment of primary keys internally.

### Read

Now that we have dogs in our database, we can examine all the dogs as a collection or inspect each dog separately.

Let's start with viewing the Dogs as a collection. We can use the Active Record method `.all` to see an array of all the dog instances. When we call `.all` on Dog Active Record will translate that method to the SQL query `SELECT * FROM dogs`.

```
> Dog.all
```

The output in the Rails console:

```
Dog Load (0.5ms)  SELECT "dogs".* FROM "dogs"
 =>
[#<Dog:0x0000000135ce5640
  id: 1,
  name: "Baby Dog",
  breed: "Long Haired Dachshund",
  age: 12,
  created_at: Mon, 11 Sep 2023 21:04:53.715296000 UTC +00:00,
  updated_at: Mon, 11 Sep 2023 21:04:53.715296000 UTC +00:00>,
 #<Dog:0x0000000135cdfe20
  id: 2,
  name: "Scully",
  breed: "Labradoodle",
  age: 6,
  created_at: Mon, 11 Sep 2023 21:24:05.490694000 UTC +00:00,
  updated_at: Mon, 11 Sep 2023 21:24:05.490694000 UTC +00:00>,
 #<Dog:0x0000000135cdee30
  id: 3,
  name: "Lola",
  breed: "Pitbull mix",
  age: 1,
  created_at: Mon, 11 Sep 2023 21:24:14.498462000 UTC +00:00,
  updated_at: Mon, 11 Sep 2023 21:24:14.498462000 UTC +00:00>]
```

We can now see all the dogs that are in the database.

### Just One Dog

Now that we can see all the dogs in the database, we can start to refine our Active Record query.

There are many ways to retrieve just one dog from the database. Since Active Record is very Ruby-like, we have some great methods like `.first` and `.last` that will access the first and last entry respectively. These methods fall under the category of READ actions.

```
> Dog.last
```

The output in the Rails console:

```
Dog Load (0.5ms)  SELECT "dogs".* FROM "dogs" ORDER BY "dogs"."id" DESC LIMIT $1  [["LIMIT", 1]]
 =>
#<Dog:0x00000001160a2d70
 id: 3,
 name: "Lola",
 breed: "Pitbull mix",
 age: 1,
 created_at: Mon, 11 Sep 2023 21:24:14.498462000 UTC +00:00,
 updated_at: Mon, 11 Sep 2023 21:24:14.498462000 UTC +00:00>
```

Notice the SQL query is using `ORDER BY`, `DESC`, and `LIMIT` to achieve the output of the last dog.

We can also use the primary key to access a particular dog with the `.find` method. The `.find` method takes an argument of the id and returns the dog that matches that id.

```
> Dog.find(2)
```

The output in the Rails console:

```
Dog Load (0.2ms)  SELECT "dogs".* FROM "dogs" WHERE "dogs"."id" = $1 LIMIT $2  [["id", 2], ["LIMIT", 1]]
 =>
#<Dog:0x00000001161f29a0
 id: 2,
 name: "Scully",
 breed: "Labradoodle",
 age: 6,
 created_at: Mon, 11 Sep 2023 21:24:05.490694000 UTC +00:00,
 updated_at: Mon, 11 Sep 2023 21:24:05.490694000 UTC +00:00>
```

Notice the SQL query is using `WHERE` to achieve the output of the given dog.

### Subset of Dogs

We can also retrieve a subset of dogs that meet a particular qualification using the Active Record `.where` method. The `.where` method takes an argument of a key-value pair. This methods fall under the category of READ actions.

```
> Dog.where(age: 12)
```

The output in the Rails console will return all instances in the database where the condition of `age: 12` is true.

```
Dog Load (0.5ms)  SELECT "dogs".* FROM "dogs" WHERE "dogs"."age" = $1  [["age", 12]]
 =>
[#<Dog:0x00000001162fd688
  id: 1,
  name: "Baby Dog",
  breed: "Long Haired Dachshund",
  age: 12,
  created_at: Mon, 11 Sep 2023 21:04:53.715296000 UTC +00:00,
  updated_at: Mon, 11 Sep 2023 21:04:53.715296000 UTC +00:00>]
```

Notice that output of this method is an array instead of a single database instance. The `.where` method returns a collection records that satisfy the specified condition. Even if only one dog meets this condition, the result will still be an array.

Another option for the `.where` method is to pass a relational operator.

```
> Dog.where("age < 10")
```

The output in the Rails console:

```
Dog Load (3.0ms)  SELECT "dogs".* FROM "dogs" WHERE (age < 10)
 =>
[#<Dog:0x000000013082cce8
  id: 2,
  name: "Scully",
  breed: "Labradoodle",
  age: 6,
  created_at: Mon, 11 Sep 2023 21:24:05.490694000 UTC +00:00,
  updated_at: Mon, 11 Sep 2023 21:24:05.490694000 UTC +00:00>,
 #<Dog:0x000000013082cc20
  id: 3,
  name: "Lola",
  breed: "Pitbull mix",
  age: 1,
  created_at: Mon, 11 Sep 2023 21:24:14.498462000 UTC +00:00,
  updated_at: Mon, 11 Sep 2023 21:24:14.498462000 UTC +00:00>]
```

Notice the dog instances that meet this condition are returned in an array.

### Update

We can also update the instances in the database. To update an instance we have to identify which instance needs to be updated. We can use any of the above READ methods in order to gain access to just one dog.

When we find the correct dog, we can save it to a variable. This will make the update action easier to format.

It is important to note that the variable we create is temporary. It will only exist within the context of the current Rails console session. In other words, if we `exit` the console and return, we will no longer have access to the variables we have created.

Just like with all variables, we can name the variable whatever we want as long as it communicates intent. The variables in the Rails console are just regular Ruby code so we will use the Ruby conventions when creating a variable.

```
> scully = Dog.find(2)
```

The `scully` variable now holds a single instance of dog. We can see this by entering `scully` into the Rails console.

```
> scully
```

The output in the Rails console:

```
 =>
#<Dog:0x00000001319e22d0
 id: 2,
 name: "Scully",
 breed: "Labradoodle",
 age: 6,
 created_at: Mon, 11 Sep 2023 21:24:05.490694000 UTC +00:00,
 updated_at: Mon, 11 Sep 2023 21:24:05.490694000 UTC +00:00>
=> true
```

Now we can make updates to the instance using the `.update` method. We will pass in the key-value pair of the column we want to update and the new value.

```
> scully.update(age: 7)
```

The output in the Rails console:

```
TRANSACTION (1.8ms)  BEGIN
Dog Update (5.4ms)  UPDATE "dogs" SET "age" = $1, "updated_at" = $2 WHERE "dogs"."id" = $3  [["age", 7], ["updated_at", "2023-09-11 22:10:47.739537"], ["id", 2]]
TRANSACTION (1.0ms)  COMMIT
 => true
```

### Delete

The last of the CRUD actions is delete. Deleting will remove an item in the database. Just like update, when we remove an item, it must be identified first.

Don't worry, no dogs are harmed by database CRUD actions!

```
> lola = Dog.find(3)
> lola.destroy
```

The output in the Rails console:

```
TRANSACTION (0.4ms)  BEGIN
Dog Destroy (0.8ms)  DELETE FROM "dogs" WHERE "dogs"."id" = $1  [["id", 3]]
TRANSACTION (2.1ms)  COMMIT
 =>
#<Dog:0x000000012719df70
 id: 3,
 name: "Lola",
 breed: "Pitbull mix",
 age: 1,
 created_at: Mon, 11 Sep 2023 21:24:14.498462000 UTC +00:00,
 updated_at: Mon, 11 Sep 2023 21:24:14.498462000 UTC +00:00>
```

Now, when we call `Dog.all`, we observe that there are only two dog instances in the database.

```
Dog Load (1.1ms)  SELECT "dogs".* FROM "dogs"
 =>
[#<Dog:0x0000000116337c70
  id: 1,
  name: "Baby Dog",
  breed: "Long Haired Dachshund",
  age: 12,
  created_at: Mon, 11 Sep 2023 21:04:53.715296000 UTC +00:00,
  updated_at: Mon, 11 Sep 2023 21:04:53.715296000 UTC +00:00>,
 #<Dog:0x0000000116337ba8
  id: 2,
  name: "Scully",
  breed: "Labradoodle",
  age: 7,
  created_at: Mon, 11 Sep 2023 21:24:05.490694000 UTC +00:00,
  updated_at: Mon, 11 Sep 2023 22:10:47.739537000 UTC +00:00>]
```

### A Note on Naming Conventions

Naming conventions are a noteworthy aspect of the Rails principle "convention over configuration." Following the naming conventions enables Rails to handle a lot of the heavy lifting needed to set up an application.

- Model class: singular and PascalCase
- Model file name: singular and snake_case
- Database table: plural and snake_case

---

### 📇 Challenge: Rolodex

Note: A rolodex is a collection of paper cards that contain people's names and contact information. They were a common household and office item in the pre-digital age.

As a developer, I have been tasked with creating a database model to store friends and family contact information. I want to ensure the database behaves as expected and the necessary information can be retrieved, added, updated, and deleted.

All tasks should be performed in order as listed below.

### ✔️ Acceptance Criteria

- The rolodex application data should be managed by a PostgreSQL database in a Rails application.
- The model should be called Person with first_name, last_name, and phone attributes. **All data types should be strings.**
- Add five friends and family members to the people table using the Rails console.
- Retrieve all the people in the database.
- Retrieve the third person in the database.
- Retrieve only the first name of the first person in the database.
- Remove the last person from the database.
- Add yourself to the people table.
- Retrieve all the people that have the same last name as you.
- Retrieve only the first person from the list of people that have the same last name as you.
- Update the phone number of the second person in the database.
- Retrieve the last name of the third person in the database.

### 🏔 Stretch Goals

- Update all the family members with the same last name as you to have the same phone number as you.
- Remove all family members that do not have your last name.

---

[Back to Syllabus](../README.md#unit-five-intro-to-postgres-and-ruby-on-rails-models)
