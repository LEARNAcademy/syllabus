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

# SQL vs. Active Record

Active Record is a Rails-specific wrapper for SQL queries. It's shorter, easier to type, and often looks nicer, but under the hood it's the same old SQL. While we could have jumped straight into using Active Record, it is important to know the SQL underneath these methods so that we can write efficient code that makes the best use of our database possible.

Here are some examples of how SQL and Active Record map to each other:

<table>
  <thead>
    <tr>
    <th>SQL</th>
    <th>ActiveRecord</th>
    <th>Comments</th>
    <thead>
    </tr>
  <tbody>
    <tr>
      <td>SELECT * FROM users
        WHERE (id = 1);
      </td>
      <td>User.find(1)</td>
      <td>Model.find will only work on an ID or a list of ID's</td>
    </tr>
    <tr>
      <td>SELECT * FROM users
        WHERE (name = 'John');
      </td>
      <td>User.find_by_name("John")
      </td>
      <td>Model.find_by returns only the first result</td>
    </tr>
    <tr>
      <td>SELECT * FROM users;</td>
      <td>User.all</td>
      <td></td>
    </tr>
    <tr>
      <td>SELECT * FROM users
        WHERE (last_name = 'Smith');
      </td>
      <td>User.where(last_name: "Smith")
      </td>
      <td>Model.where returns a collection</td>
    </tr>
    <tr>
      <td>INSERT INTO users <br/>
        (first_name, last_name) <br/>
        VALUES ('John', 'Jones');
      </td>
      <td>user = User.new(first_name: "John", last_name: "Jones") <br/>
        user.create
      </td>
      <td></td>
    </tr>
    <tr>
      <td>UPDATE users <br/>
        SET last_name = 'Jones', <br/>
        WHERE last_name = 'Smith';
      </td>
      <td>User.update(id, last_name: "Smith")</td>
      <td></td>
    </tr>
    <tr>
      <td>DELETE FROM users <br/>
        WHERE id = 15;
      </td>
      <td>User.find(15).destroy</td>
      <td></td>
    </tr>
  <tbody>
</table>

Similarly, in place of SQL methods that involve directly manipulating the database -- such as CREATE TABLE -- Rails gives us generators to run in the console.  These create migration files that do the work for us. Just like Active Record, they break down into SQL.

<table>
  <thead>
    <tr>
    <th>SQL</th>
    <th width="40%">Migrations</th>
    <th>Comments</th>
    <thead>
    </tr>
  <tbody>
  <tr>
    <td>CREATE TABLE users <br/>
      (id serial PRIMARY KEY, <br/>
      first_name varchar, last_name varchar, <br/>
       dob date);
    </td>
    <td>create_table(:users) <br/>
        t.string :first_name, <br/>
        t.string :last_name, <br/>
        t.date :dob <br/>
    </td>
    <td>Rails automatically generates an integer ID field as a primary key for its tables</td>
  </tr>
  <tr>
    <td>ALTER TABLE users ADD adult boolean;</td>
    <td>add_column :users, :adult, :boolean</td>
    <td></td>
  </tr>
  <tr>
    <td>ALTER TABLE users drop adult;</td>
    <td>remove_column :users, :adult</td>
    <td></td>
  </tr>
  <tr>
    <td>DROP TABLE users;</td>
    <td>drop_table :users</td>
    <td></td>
  </tr>
  <tr>
    <td>CREATE TABLE phones <br/>
      (id serial PRIMARY KEY,<br/>
      contact_id integer REFERENCES contacts(id), <br/>
      number varchar, description varchar);
    </td>
    <td>create_table(:phones) <br/>
      t.string :number <br/>
      t.string :description <br/>
      t.references :contact, index: true
    </td>
    <td></td>
  </tr>
  <tbody>
</table>




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

# Naming Convention

Class names are `CamelCase`.

Methods and variables are `snake_case`.

Methods with a `?` suffix will return a boolean.

Database tables use `snake_cases`. Table names are plural.

Column names in the database use `snake_case`, but are generally singular.

Foreign Key columns are named according to the related table name in singular with `_id` appended.

For Example:

Model file will look like:
`to_do.rb`
Class name inside the `to_do.rb` file:
`class ToDo`
Table name will be snake_case plural:
`to_dos`
Foreign key column linking to the `to_dos` table:
`to_do_id`

----
## Resource

<a href="https://gist.github.com/iangreenleaf/b206d09c587e8fc6399e" target="_blank">Rails naming conventions</a>






### Challenge
Create, Update, Insert, DELETE with ActiveRecord and ```Rails c```
1. Create an Rails app named 'rolodex'
- ```rails new rolodex -d postgresql -T```
- ```cd rolodex```

1. Run ```rails db:create``` to setup your database
- ```rails db:create```
1. Create a Person model with a first_name, last_name, and phone. All fields should be strings.  You can generate a model to do this
- ```rails generate model Person first_name:string last_name:string phone:string```

1. Run ```rails db:migrate``` from the command line
- ```rails db:migrate```

2. Open up Rails console
- ``` rails console```

3. Add five or more family members to the persons table.
- ```Person.create(first_name: 'John', last_name: 'Clark', phone: '555-1212')```

4. How many have the same last_name as you? (Look up the information using ActiveRecord queries)
- ```Person.where(last_name: 'Clark').count```

5. Add yourself into the persons table.
- ```Person.create(last_name: 'Clark', first_name: 'Matt', phone: '555-0011')```

6. Update all family members with the same last_name as you,to have the same phone number as you.
- ```Person.where(last_name: 'Clark').map{|person| person.update(phone: '555-0011')}```

7. Delete all family members not with your last_name.
- ```Person.where.not(last_name: 'Clark').destroy_all```
