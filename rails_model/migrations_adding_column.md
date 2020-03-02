# Adding columns to an existing database.
[![YouTube](http://img.youtube.com/vi/M6Zr-q_2c80/0.jpg)](https://www.youtube.com/watch?v=M6Zr-q_2c80)

Start with the [Rails documentation on Migrations](https://edgeguides.rubyonrails.org/active_record_migrations.html)

We can also use migrations to add columns to an existing table in our database.  The process will feel familiar to creating new tables.

### Creating a new Migration
We start by adding a new migration.  It's good practice to call it something descriptive about what changes it will make.  The name though can be anything you choose.  In this example, we'll be adding first_name and last_name columns to a users table.

```bash
   	$ rails generate migration add_name_to_users
```

### Add New columns

There are many things we can do in migrations to change the shape of our database.  This example adds columns.  Check [this list](https://edgeguides.rubyonrails.org/active_record_migrations.html#using-the-change-method) for the rest of them.

Here's what our migration looks like:

```ruby
class AddNameToUsers < ActiveRecord::Migration[5.2]
  def change
    #add_column :table_name, :new_column, :new_column_type
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
  end
end
```
