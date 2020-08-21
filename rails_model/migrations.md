# Active Record Migrations

## Video: Adding Columns to a Database
[![YouTube](http://img.youtube.com/vi/M6Zr-q_2c80/0.jpg)](https://www.youtube.com/watch?v=M6Zr-q_2c80)

## Overview
- Migrations are used to modify the shape of an existing database.
- Changing the shape of the database can include adding or deleting columns, changing the name of the column, or changing the data type of a column.

## Learning Objectives
- Using a Rails generate command to modify the database

## Vocabulary
- migrations

## Useful Commands
- $ rails generate migration file_name_here
- $ rails db:migrate

## Additional Resources
- <a href="https://edgeguides.rubyonrails.org/active_record_migrations.html" target="blank">Official Rails documentation on Migrations</a>
- <a href="https://edgeguides.rubyonrails.org/active_record_migrations.html#using-the-change-method" target="blank">A list of all the change definitions</a>

## What is a migration file?
A migration is a file that is generated through a rails command that will allow you to change the schema. This can include (but not limited to) editing a column's name or data type, adding a new column or removing a column.

When working with projects that utilize databases, your required columns or datatypes may need to change to accomodate new specifications which requires changing the shape of your schema.

Directly editing the schema file is considered bad practice as the file itself is not designed to be edited and is just a representation of the current state of your schema.

## How do we edit the schema with a migration file?

We are able to accomplish edits to the schema by running a rails migration generate command using proper naming conventions that communicate the intent of your changes.

## Naming Conventions
- Migration names are PascalCased or snake_cased
- Migration names start with an action that describes the purpose of the migration (i.e. create, add, remove, etc)
- The migration name ends with the name of the table and should be plural (add_name_to_users)


An example of this using snake_case:
```
$ rails generate migration add_foreign_key_to_products
```

Alternatively, we can use PascalCase:

```
$ rails generate migration AddForeignKeytoProducts
```

Either way is fine, but it is important to make a decision to only use one or the other.

Running this command in your terminal will generate a new file to your migration directory. Editing this file and adding the changes you want within the "def change" method will allow you to change the schema as needed!

## Set up from scratch

In the exercise below, we'll be creating a brand new rails application, but we will do it a bit differently. In the model we create we will leave out all of the columns that we would normally include in the beginning thus requiring us to create a migration file to add them in.


#### Creating a new Rails app:

First, we'll need to set up a brand new rails app, which we will call "migrations_practice"

In our terminal, we will type the following commands:
```
$ rails new migrations_practice -d postgresql -T
$ cd migrations_practice
$ rails generate model User
$ rails db:create
$ rails server
```
We specifically do not assign any columns to this database. We will add those later, via a migration!


For now, lets check to see if the server is running correctly by navigating in our browser to:

`http://localhost:3000`
or
`127.0.0.1:3000`

## Generating a Migration
Now that we have our application up and running, we will need to add the first_name and last_name columns to a User table. For this example, we'll use snake_case for our naming convention.

```
$ rails generate migration add_name_to_user
```

A new file is added to the migrate directory with the timestamp appeneded to the front of the snake_case naming we gave it. Rails uses this timestamp to determine which migration should be run and in what order. When we open the file up, we will find the starter code for the migration already built out for us.

**db/migrate**
```ruby
class AddNameToUsers < ActiveRecord::Migration[6.0]
  def change
  end
end
```

Our changes we want to make will need to be added within the scope of the "def change" method.

## Add New Columns
Now that our migration file is created and we've opened it up, we will need to add our commands in.

Since we want to add the first_name, we will tell it by using the "add_column" change. The synatax will look like this:
Here's what our migration looks like:

```ruby
add_column :users, :first_name, :string
```

First we add our change definition, our table, our column name and our data type, all seperated by commas and preceeded by a colon starting with the table.

Lets break this down to better understand whats going on here:
- **add_column**
  - This part is our change definition that tells rails we want to add a new column to the table.
- **:users**
  - This part tells rails what table we are adding it to.
- **:first_name**
  - This part tells rails what the name of our new column will be.
- **:string**
  - This part tells rails what our datatype for the new column will be.

Note: add_column is not the only change defintion we can use in our migration files. There are a ton of different types we can use to accomplish any changes we might want. To find out more, refer to the <a href="https://edgeguides.rubyonrails.org/active_record_migrations.html" target="blank">Rails documentation on Migrations.</a>

Since we are adding more than one column into our table, we can add another using the same syntax but we will change the column name to last_name.

Our file should now look like this:
```ruby
class AddNameToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
  end
end
```

After we save the file, we are ready to tell rails to make the changes by running the migrate command in terminal.

```
$ rails db:migrate
```

The database schema is now updated!

## Favorite Movies Challenge

### Setup
- Create a new rails application called 'favorite_movies'.
- Create the database
- Generate a Movie model with a title attribute and a category attribute

### Challenges
- Add five entries to the database in Rails console
- Create a migration to add a new column to the database called movie_length
- Update the values of the existing attributes to include a movie_length value
- Generate a migration to rename the column 'category' to 'genre'


## Tasks Challenge

### Setup
- Create a new rails application called 'tasklist'.
- Create the database
- Generate a Task model with a title attribute and a description attribute

### User Stories
- As a programmer, I can add 5 tasks to my application.
- As a programmer, I can list all Task records.
- As a programmer, I can add a 'done' attribute to my Task.
- As a programmer, I can set a Task record to 'done' given the ID of the record.
- As a programmer, I can list all the records that are done.
- As a programmer, I can list all the records that are not done.
- As a programmer, I can update the title and description of a Task record given the ID of the record.
- As a programmer, I can destroy a Task record given the ID of the record.
- As a programmer, I can set a Task record with a due date.
- As a programmer, I can list all the records with a due date.
- As a programmer, I can list all the records with a due date today.
- As a programmer, I can list all the records without a due date.

[ Go to next lesson: Active Record Associations ](./associations.md)

[ Back to Active Record Introduction ](./active_record_intro.md)

[ Back to Syllabus ](../README.md#ruby-on-rails)
