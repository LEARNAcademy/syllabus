# Introduction to Active Record

[![YouTube](http://img.youtube.com/vi/3D_JwWoJKm4/0.jpg)](https://www.youtube.com/watch?v=3D_JwWoJKm4)
]

## Active Record Details

[![YouTube](http://img.youtube.com/vi/R5vpRwpWctY/0.jpg)](https://www.youtube.com/watch?v=R5vpRwpWctY)
] 

## Set Up Rails App

Keep psql running and open a new tab in terminal so you can create a new Rails application:
```
rails new mydbapp -T --database=postgresql
```
* Note: We type `-T` so that we don't include Rails' own test environment

Test that it works:
```
cd mydbapp
rails s
```

Not quite:
```
FATAL: database "mydbapp_development" does not exist
```

## Create Database

In Rails we use migrations to manage the shape of our database .....

In the terminal, run the command `rails db:create`.

This command creates two databases, one for our application's information and another to store any information that gets created while running tests. We can find those databases' names in `config/database.yml`. For example, the application's database might look something like this:

config/database.yml
```
development:
  <<: *default
  database: mydbapp_development
```

After running the rake command, try to start the server again:
```
rails s
```

We should be able to connect to localhost and connect to mydbapp_development in psql.

## Create Table using Migtations

In a Rails app, we create tables using migrations. Migrations are files that run SQL commands for us.  Rails maintains a history for us of the migrations that have already run, and those that need to be run.  This is how Rails is able to maintain consistency between the database you run locally for development, and the one that runs in production.  You want them to stay the same, and Rails gives you the tools to do that.

[Rails Migration Documentation](https://api.rubyonrails.org/v5.2.0/classes/ActiveRecord/Migration.html)

Rails has a generator to create migrations for us.  Inside of our Rails app run:
```bash
bundle exec rails generate migration CreateContacts
```
```ruby
class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
    end
  end
end
```

** The name of the migration is important.  When we name it "Create<Something>", Rails knows that we intend to create a new table in the database, and sets that up for us.

Starting with that template migration file, we can fill in the details:
```ruby
class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.timestamps
    end
  end
end
```

Then, we can run that migration from the command line:
```bash
bundle exec rails db:migrate
```

### Read the Docs!
There is a lot to ActiveRecord migrations.  Have a read of the documentation to learn more about [how they can help you](https://api.rubyonrails.org/v5.2.0/classes/ActiveRecord/Migration.html).


## Create a Model with Active Record

Create a file within app/models named `contact.rb` and in it create the class called `Contact`:

```rb
class Contact < ApplicationRecord
end
```

Note:
* The class name is CamelCase
* The file name is snake_case
* And the file name and class name are both **singular**

## Using the Database from Rails
Start the Rails console:
```
rails c
```

Let's see what we if we can find some contacts:
```
Contact.create(name: "Joe", email: "Joe@home.com", dob: 30.years.ago)
Contact.all

Contact Load (0.6ms)  SELECT "contacts".* FROM "contacts"
=> #<ActiveRecord::Relation [#<Contact id: 1, name: "Joe", email: "Joe@home.com", dob: "1990-05-01 00:00:00">]>
```
* Note: Contact is a class, therefore starts with a capital letter.
Also, every instance object of the class Contact corresponds to a row in the contacts table.

Let's create a new contact:
```
2.2.2 :002 > c = Contact.new
 => #<Contact id: nil, name: nil, email: nil, dob: nil>

2.2.2 :003 > c.name = "Jenny"
 => "Jenny"

2.2.2 :004 > c.email = "jenny@phone.com"
 => "jenny@phone.com"

2.2.2 :005 > c.dob = 10.years.ago
 => Fri, 24 Feb 2006 03:53:59 UTC +00:00

2.2.2 :006 > c
 => #<Contact id: nil, name: "Jenny", email: "jenny@phone.com", dob: "2006-02-24 03:53:59">

2.2.2 :007 > c.save
   (0.2ms)  BEGIN
  SQL (0.5ms)  INSERT INTO "contacts" ("name", "email", "dob") VALUES ($1, $2, $3) RETURNING "id"  [["name", "Jenny"], ["email", "jenny@phone.com"], ["dob", "2006-02-24 03:53:59.346107"]]
   (6.5ms)  COMMIT
 => true
```

Check the database from psql:
```
select * from contacts;

 id | name  |      email      |            dob
----+-------+-----------------+----------------------------
  1 | Joe   | joe@home.com    | 1990-05-01 00:00:00
  2 | Jenny | jenny@phone.com | 2006-02-24 03:53:59.346107
```

Other examples:
```
2.2.2 :010 > contact = Contact.find(2)

  Contact Load (0.6ms)  SELECT  "contacts".* FROM "contacts" WHERE "contacts"."id" = $1 LIMIT 1  [["id", 2]]
 => #<Contact id: 2, name: "Jenny", email: "jenny@phone.com", dob: "2006-02-24 03:53:59">

2.2.2 :011 > contact.name
 => "Jenny"
```

```
2.2.2 :013 > contacts = Contact.where(email: 'joe@home.com')
  Contact Load (0.6ms)  SELECT "contacts".* FROM "contacts" WHERE (email='joe@home.com')
 => #<ActiveRecord::Relation [#<Contact id: 1, name: "Joe", email: "joe@home.com", dob: "1990-05-01 00:00:00">]>

2.2.2 :014 > contacts.first
 => #<Contact id: 1, name: "Joe", email: "joe@home.com", dob: "1990-05-01 00:00:00">

2.2.2 :015 > contacts.first.name
 => "Joe"
```
* Note: With `where` methods we are returned a collection of contact**s**, whereas `find` methods never selects more than one contact and therefore does not return a collection.

Find methods (see with autocomplete by hitting tab):
```
Contact.find                          Contact.find_each
Contact.find_by                       Contact.find_in_batches
Contact.find_by!                      Contact.where(email: 'joe@joe.com').first_or_create
Contact.find_by_sql
Contact.find_by_statement_cache       Contact.find_or_initialize_by
Contact.find_by_statement_cache=      Contact.finder_needs_type_condition?
Contact.find_by_statement_cache?
```

Rails magic (don't see a find_by_email? not to worry):
```
2.2.2 :016 > Contact.find_by_email("joe@home.com")

  Contact Load (0.4ms)  SELECT  "contacts".* FROM "contacts" WHERE "contacts"."email" = $1 LIMIT 1  [["name", "Joe"]]
 => #<Contact id: 1, name: "Joe", email: "joe@home.com", dob: "1990-05-01 00:00:00">
```
## Making Changes to the Table

Finally - getting rid of contacts:
```
2.2.2 :018 > c.destroy

   (0.2ms)  BEGIN
  SQL (0.3ms)  DELETE FROM "contacts" WHERE "contacts"."id" = $1  [["id", 2]]
   (0.4ms)  COMMIT
 => #<Contact id: 2, name: "Jenny", email: "jenny@phone.com", dob: "2006-02-24 03:53:59">
```
*Do not use `delete`* - it probably doesn't do what you want.

Check the database:
```
select * from contacts;

 id | name |    email     |         dob
----+------+--------------+---------------------
  1 | Joe  | joe@home.com | 1990-05-01 00:00:00
```
