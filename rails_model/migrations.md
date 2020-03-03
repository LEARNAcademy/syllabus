# Rails Migrations

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
- $ rails db:migrate

## Additional Resources
- <a href="https://edgeguides.rubyonrails.org/active_record_migrations.html" target="blank">Rails documentation on Migrations</a>
- <a href="https://edgeguides.rubyonrails.org/active_record_migrations.html#using-the-change-method" target="blank">Change Method</a>

## Set Up

#### Creating a new Rails app:
```
rails new user -d postgresql -T
cd user
rails db:create
rails server
```

In a browser navigate to:
`http://localhost:3000`
or
`127.0.0.1:3000`

## Naming Conventions
- Migration names are PascalCased or snake_cased
- Migration names start with an action that describes the purpose of the migration (i.e. create, add, remove, etc)
- The migration name ends with the name of the table and should be plural (add_name_to_users)

## Generating a Migration
In this example, we'll be adding first_name and last_name columns to a User table.

```
$ rails generate migration add_name_to_users
```

A new file is added to the migrate directory with the starter code for the migration.

**db/migrate**
```ruby
class AddNameToUsers < ActiveRecord::Migration[6.0]
  def change
  end
end
```

## Add New Columns
Here's what our migration looks like:

```ruby
class AddNameToUsers < ActiveRecord::Migration[6.0]
  def change
    #add_column :table_name, :new_column, :new_column_data_type
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
  end
end
```
$ rails db:migrate

The database schema is now updated!
