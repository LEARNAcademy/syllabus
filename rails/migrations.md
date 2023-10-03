# Active Record Migrations

### Overview

A migration is used to change the database schema in a Rails application. Database changes can take many forms such as adding or deleting columns, changing the name of the column, or changing the data type of a column. These actions are often collectively referred to as changing the shape of a database.

#### Previous Lecture (41 min)

[![YouTube](http://img.youtube.com/vi/tzNvLB65NS0/0.jpg)](https://youtu.be/tzNvLB65NS0)

### Learning Objectives

- can describe the purpose of a migration
- can correctly generate a migration in the terminal
- can determine when a migration should be used
- can apply correct naming conventions to terminal commands and migration files

### Vocabulary

- migrations

### Useful Commands

- $ `rails generate migration action_on_table`
- $ `rails db:migrate`
- `add_column :table_name, :column_name, :datatype`
- `change_column :table_name, :column_name, :datatype`
- `rename_column :table_name, :old_column, :new_column`
- `remove_column :table_name, :column_name`

### Additional Resources

- [Official Rails documentation on Migrations](https://edgeguides.rubyonrails.org/active_record_migrations.html)
- [Overview of Migrations](https://stackify.com/rails-migration-a-complete-guide/)
- [Change Method Options](https://edgeguides.rubyonrails.org/active_record_migrations.html#using-the-change-method)

### Processes

#### Introductory Phase Documentation:  
During the introductory phase of Ruby on Rails, we will create documentation to keep track of the actions taken to build the Rails application and interactions with the database. This documentation will be saved in a markdown file, which will be uploaded to GitHub. This allows other team members to contribute and access the team's code.

#### Process for GitHub Repository:
- cd into the database-challenges repository
- Create a new branch: $ `git checkout -b migrations-initials1-initials2` (ex. migrations-sp-em)
- Create a new markdown file: $ `touch migrations-student1-student2.md` (ex. migrations-sarah-elyse.md)
- Use the markdown file to document the code commands and process
- Code!  

However, please note that the Rails application itself will not be uploaded to GitHub. Consequently, other team members will not have access to the application or the database through the repository. The application and database will only be available on your local machine. For the duration of the challenges, all team members should create their own Rails applications on their respective local machines. After the challenges are completed, it is important to drop and delete the Rails application from your local machine.  

#### Process for Rails Application on Local Machine:
- cd to your Desktop
- $ `rails new migrations -d postgresql -T`
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

### Troubleshooting Tips

- Did you create your database?
- Did you run the migration? Did it error out?
- Is there a syntax error in your migration?
- Remember that the model names are `PascalCase` and singular, table names are `snake_case` and plural.

---

### Migrations

It is very common for requirements of an application to change over time. Those changes often necessitate changes to the structure of the database. Migrations give us a way to modify the database schema within our Rails application using Ruby code that will be translated into the necessary SQL queries.

The schema file cannot be directly edited as it is just a representation of the current state of your database. A **migration** is a file that is generated through a Rails terminal command that allows us to make changes to the database schema. This can include (but not limited to) editing a column's name or data type, adding a new column, or removing an unnecessary column.

### Example Rails Application

To explore how migrations work we will create a new Rails application called `migrations-practice`. This application will have a model called `GroceryList` that will have an attribute called item that is a string.

In the terminal we will run the following commands:

```bash
$ rails new migrations-practice -d postgresql -T
$ cd migrations-practice
$ rails db:create
$ rails generate model GroceryList item:string
$ rails db:migrate
```

It is always a good idea to ensure the application is running correctly by starting the server and navigating in the browser to `http://localhost:3000` or `127.0.0.1:3000`. The only view is the Rails boilerplate code, but that is all we need for now.

```bash
$ rails server
or
$ rails s
```

We can also take a look at the schema file. Currently the schema file has the table we just generated with the `item` column along with the `create_at` and `updated_at` columns automatically assigned by Rails.

Note: It is important to recognize the naming conventions used by Rails to distinguish the model name from the table name. Model names are `PascalCase` and singular as the model is a class. The corresponding table name is `snake_case` and plural.

**db/schema.rb**

```ruby
ActiveRecord::Schema[7.0].define(version: 2023_06_21_210954) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "grocery_lists", force: :cascade do |t|
    t.string "item"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
```

### Generating a Migration

At this point, our Rails app has a table called `grocery_lists` with one column. This works fine but what if we realize there is more data that we want to be able to collect about each item on the grocery list? If we want more columns on the grocery list table we need to use a migration to add an additional column.

Rails offers us a variety of generate commands that will create files and folders in the application structure. Just like models, migration files are generated in the terminal. The names of a generated migration will follow one of two casing conventions. Migrations are either `PascalCased` or `snake_cased`. Either one is fine as Rails will convert the name in the generate command into `snake_case` for the file name. The important thing is that the name of the migration should communicate intent. Typically the name of the migration would start with the action that describes the purpose of the migration (i.e. create, add, remove, etc) and end with the name of the table this action is being performed on.

An example of a generate command using `snake_case`:

```bash
$ rails generate migration add_column_to_grocery_list
```

Alternatively, we can use `PascalCase`:

```bash
$ rails generate migration AddColumnToGroceryList
```

Running the generate command in the terminal will create a new file in the migration directory. For this example, we'll use the `snake_case` naming convention for our migration.

```bash
$ rails generate migration add_column_to_grocery_list
```

This command adds a new file to the migrate directory. When we open the file up we will find the starter code for the migration already built out for us. The code that will describe the change being made to the database will be added to the `def change` method that is automatically generated inside the migration file.

Note: Every migration file has a timestamp in the file name. Rails uses this timestamp to determine which migration should be run and in what order. The timestamp in the file name listed here will be unique to this example.

**db/migrate/20230621164915_add_column_to_grocery_list.rb**

```ruby
class AddColumnToGroceryList < ActiveRecord::Migration[7.0]
  def change
  end
end
```

The changes we want to make will need to be added within the scope of the `def change` method.

### Add New Columns

We can add a column to our GroceryList model named `quantity` that is a data type of an integer. The syntax will look like this:

**db/migrate/20230621164915_add_column_to_grocery_list.rb**

```ruby
class AddColumnToGroceryList < ActiveRecord::Migration[7.0]
  def change
    add_column :grocery_lists, :quantity, :integer
  end
end
```

First we add the change definition, the table name, the column name we want to add, and the data type of the column. All of these are separated by commas. The data type of the table name, the column name, and the data type is a symbol. This means all three values will be preceded by a colon.

Let's break this down to better understand what's going on here:

- **add_column** - this is the change definition that tells Active Record we want to add a new column to the table.
- **:grocery_lists** - this tells Active Record what table we are adding a new column to.
- **:quantity** - this tells Active Record what the name of our new column will be.
- **:integer** - this tells Active Record what our data type the new column will be.

We can use this migration to add a single column if that meets the need of the project. But we also can use this file to add multiple columns to our table. To add multiple columns we can add another line using the same syntax structure. We can add a new column for the brand of our grocery list item. This column will be the data type of string.

The file will now look like this:

**db/migrate/20230621164915_add_column_to_grocery_list.rb**

```ruby
class AddColumnToGroceryList < ActiveRecord::Migration[7.0]
  def change
    add_column :grocery_lists, :quantity, :integer
    add_column :grocery_lists, :brand, :string
  end
end
```

After saving the file we are ready to tell Rails to make the changes by running the migrate command in terminal.

```bash
$ rails db:migrate
```

When the migration is run the `change` method will execute. This will create a new version of the database and update the schema file accordingly. If the migration is successful we will see an output like this in the terminal.

Note: This output includes timestamps that will be unique to each migration.

```bash
== 20230621224503 AddColumnToGroceryList: migrating ===========================
-- add_column(:grocery_lists, :quantity, :integer)
   -> 0.0033s
-- add_column(:grocery_lists, :brand, :string)
   -> 0.0022s
== 20230621224503 AddColumnToGroceryList: migrated (0.0056s) ======================================
```

If there are mistakes in syntax or structure the migration will fail. Ensure the migration succeeded by looking at the schema file. The changes to the shape of the database are reflected in the schema.

**db/schema.rb**

```ruby
ActiveRecord::Schema[7.0].define(version: 2023_06_21_224503) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "grocery_lists", force: :cascade do |t|
    t.string "item"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "quantity"
    t.string "brand"
  end

end
```

Any changes made to the database will be performed with a migration. It is normal to have many migration files in an application. Migrations are like git commits. They show the progression of an application over time.

### More Migrations

Once a migration file is run it will not execute again. If we choose to make more changes to the shape of the database we will need to generate another migration.

Another common change to databases is modifying the data type of a column. For example, we assigned our `quantity` column to be an integer data type. This makes sense in certain circumstance, but what if we need to provide more details in our quantity beyond just a number? For example, `2 8oz cans` vs just `2`. We may want to modify our quantity to be a string.

To do this we need to generate a new migration.

```bash
$ rails generate migration change_quantity_on_grocery_list
```

This will create a new file in the migration folder where we can add code to the `def change` method.

Note: Every migration file has a timestamp in the file name. Rails uses this timestamp to determine which migration should be run and in what order. The timestamp in the file name listed here will be unique to this example.

**db/migrate/20230622173727_change_quantity_on_grocery_list.rb**

```ruby
class ChangeQuantityOnGroceryList < ActiveRecord::Migration[7.0]
  def change
    change_column :grocery_lists, :quantity, :string
  end
end
```

After saving the file we can run the migrate command in terminal.

```bash
$ rails db:migrate
```

The terminal output confirms our success.

```bash
== 20230622173727 ChangeQuantityOnGroceryList: migrating ======================
-- change_column(:grocery_lists, :quantity, :string)
   -> 0.0102s
== 20230622173727 ChangeQuantityOnGroceryList: migrated (0.0102s) =============
```

And the schema is now updated!

**db/schema.rb**

```ruby
ActiveRecord::Schema[7.0].define(version: 2023_06_22_173727) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "grocery_lists", force: :cascade do |t|
    t.string "item"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "quantity"
    t.string "brand"
  end

end
```

---

### 🍿 Challenge: Favorite Movies

As a developer, you are tasked with creating a new Rails application called `favorite-movies` to store data for your cohort. The application will start with just the structure of the database with a model called `Movie`. The `Movie` model will have an attribute for title that is a string.

### 👩‍💻 Developer Tasks

- As a developer, I can add a category to the `Movie` model called `category` that is a string.
- As a developer, I can add a category to the `Movie` model called `rating` that is a string.
- As a developer, I can add a category to the `Movie` model called `run_time` that is a number.
- As a developer, I can add five entries to the database via the Rails console.
- As a developer, I can update the `run_time` column to be a string.
- As a developer, I can update the values of the five existing database entries to include a unit of time on the `run_time` column. (Example: `'165 minutes'` or `'1 hr, 45 minutes'`)
- As a developer, I can rename the column `category` to be named `genre`.

---

[Back to Syllabus](../README.md#unit-five-intro-to-postgres-and-ruby-on-rails-models)
