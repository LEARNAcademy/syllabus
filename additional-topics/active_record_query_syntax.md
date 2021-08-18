# Rails Active Record Query Syntax

## Overview
- ActiveRecord is a crown jewel of the Rails framework.
- Rails and ActiveRecord have an incredibly rich query syntax to help your code that looks up information in the database readable and maintainable.

## Learning Objectives
- Interacting with Active Record query syntax
- Exploring the differences between SQL queries and Active Record

## Vocabulary
- aggregate
- pluck

## Additional Resources
- <a href="https://guides.rubyonrails.org/active_record_querying.html" target="blank">Active Record Docs</a>

## SQL vs. Active Record
We only need to learn a few rules specific to Active Record in order to unlock a powerful tool to interact with the database.

Active Record is a Rails-specific wrapper for SQL queries. It's shorter, easier to type, and often looks nicer, but under the hood it's the same old SQL.

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
        WHERE (id = 1)
      </td>
      <td>User.find(1)</td>
      <td>Model.find will only work on an ID or a list of ID's</td>
    </tr>
    <tr>
      <td>SELECT * FROM users
        WHERE (name = 'John')
      </td>
      <td>User.find_by_name('John')
      </td>
      <td>Model.find_by returns only the first result</td>
    </tr>
    <tr>
      <td>SELECT * FROM users</td>
      <td>User.all</td>
      <td></td>
    </tr>
    <tr>
      <td>SELECT * FROM users
        WHERE (last_name = 'Smith')
      </td>
      <td>User.where(last_name: 'Smith')
      </td>
      <td>Model.where returns a collection</td>
    </tr>
    <tr>
      <td>INSERT INTO users <br/>
        (first_name, last_name) <br/>
        VALUES ('John', 'Jones')
      </td>
      <td>user = User.new(first_name: 'John', last_name: 'Jones') <br/>
        user.create
      </td>
      <td></td>
    </tr>
    <tr>
      <td>UPDATE users <br/>
        SET last_name = 'Jones', <br/>
        WHERE last_name = 'Smith'
      </td>
      <td>User.update(id, last_name: 'Smith')</td>
      <td></td>
    </tr>
    <tr>
      <td>DELETE FROM users <br/>
        WHERE id = 15
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
    <td>DROP TABLE users</td>
    <td>drop_table :users</td>
    <td></td>
  </tr>
  <tr>
    <td>CREATE TABLE phones <br/>
      (id serial PRIMARY KEY,<br/>
      contact_id integer REFERENCES contacts(id), <br/>
      number varchar, description varchar)
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

## where

### First
Find the first country in the database with a code of 'RUS' :
```ruby
russia = Country.where(code: 'RUS').first
# Generates the following sql:
# "SELECT \"country\".* FROM \"country\" WHERE \"country\".\"code\" = 'RUS'"
```
notice the ```.first``` at the end of that query.  the code ```Country.where(code: 'RUS')``` returns an ActiveRecord Relation, which is a lot like an array.  We only are interested in the first result, so we call ```.first``` and get back the first instance in that arrayish thing.

### Multiple where clauses
We can chain together multiple clauses in our search:

```ruby
countries = Country
  .where(continent: "Asia")
  .where("surfacearea > 100000")
# Generates sql:
"SELECT \"country\".* FROM \"country\" WHERE \"country\".\"continent\" = 'Asia' AND (surfacearea > 100000)"
```

This time we get a set of countries back of course, because there is more than one.  Cool!

### Custom Selects
We can use custom selects too, if we need to do something unique.  Checkout this query:

```ruby
countries = Country
  .where("governmentform LIKE '%Monarchy%'")

# Generates sql:
"SELECT \"country\".* FROM \"country\" WHERE (governmentform LIKE '%Monarchy%')"
```

That opens up a whole new realm of possibilities, doesn't it?  If you can dream up a query you want to run, you can probably do it with Active Record's flexible where method.

### Order, and limit

Want to get the first record based on one column in the database?  We can do that with Active Record like this:

```ruby
country = Country
  .order("surfacearea ASC")
  .limit(1)
  .first

# generates the sql:
# "SELECT \"country\".* FROM \"country\" ORDER BY surfacearea ASC LIMIT 1"

# note: "surfacearea DESC" would reverse that sort order
```

### Pluck

Pluck is a cool tool to get just one attribute of a record returned to you in an array.  We use it like this:

```ruby
countries = Country
  .order(:surfacearea)
  .limit(10)
  .pluck(:name)

# Generates the sql:
# SELECT "country"."name" FROM "country" ORDER BY "country"."surfacearea" ASC LIMIT 10

# and returns
# ["Holy See (Vatican City State)", "Monaco", "Gibraltar", "Tokelau", "Cocos (Keeling) Islands", "United States Minor Outlying Islands", "Macao", "Nauru", "Tuvalu", "Norfolk Island"]
```

### Aggregates like sum

If you need to sum up a column in your query, you can do that as well.  What if we wanted to sum up all the land mass of Asia?  

```ruby
countries = Country
  .where(continent: 'Europe')
  .pluck(:surfacearea)
  .sum
```

## Challenge
Link available via Slack from GitHub Classroom


[Back to Syllabus](../README.md)
