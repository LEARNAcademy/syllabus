# SQL in the Terminal

[![YouTube](http://img.youtube.com/vi/kHwEeimBYEA/0.jpg)](https://www.youtube.com/watch?v=kHwEeimBYEA)

## Starting Off

### Note for Cloud 9 users

We need to create a db in postgres for our user's information first, so before entering the psql cli, let's run:

```bash
$ createdb
```

To access the Postgres server, open a terminal and run:

```bash
$ psql
```

You should then have a prompt that looks something like this:

```bash
learn_sd=#
```
The learn_sd at the beginning of the prompt is the name of the default database we created with our username. To keep things easy to read, I'll shorten the prompt to just:
```
>
```
Let's create a real database of our own. In psql, type:
```
> CREATE DATABASE test_database;
```



This is our first SQL statement. SQL keywords are case insensitive but are conventionally typed in all caps. All SQL statements must end with a semicolon. If you press enter and nothing happens, check to see if the prompt has changed from =# to -# - if so, you forgot to put a semicolon at the end of your statement. Just type one and press enter, and your statement should run.

Let's list out all of the databases in our Postgres server:
```
> \l
```
This is a command to psql, the program that is interacting with our Postgres server, and not a SQL statement. psql commands start with a backslash and don't end with a semicolon.

There are a couple databases used as templates for other databases,  template0 and template1. You shouldn't ever delete those. Postgres also makes a default database called postgres , and if you're on a Mac and created a database with your username, that one will be there, too. And now you should have a database called  test_database.

To create tables and columns in our database, we need to connect to it:
```
> \c test_database
```
Note: Our prompt now shows that we're connected to the test_database
```
test_database=#
```
To see a list of psql commands, we can type # \? . We can press the down arrow to scroll through them, or q to quit before the end.

## Creating a Table

### Note, we never, ever, ever do this in a Rails application.  Rails manages this for us.  We're exploring this because we need to know what Rails is doing under the hood.

```
> CREATE TABLE contacts (name varchar, age int, birthday timestamp);
```
This creates a table called contacts with a column for name, age, and birthday. Just like Ruby objects have a class, SQL columns have a data type. In this case, name has the data type varchar, which is means a varying number of characters (this is more or less the SQL equivalent of a string); age is an int, or integer; and birthday is a timestamp, which includes a date and time.

* Note: the table name is **plural** contact**s**.

SQL has many data types, but here are the most common ones you'll use:  int, float, varchar, text (for long blocks of text), timestamp, and boolean. For a full list, see the PostgreSQL data type documentation .

To list the columns in our new table, type # \d contacts.

To see a list of all the tables in your database, type # \dt.

If you mess something up and need to delete a table, type # DROP TABLE table_name;, where table_name is the name of the table.

## Making Changes to a Table

Here's how to add a column to a table:
```
> ALTER TABLE contacts ADD family boolean;
```
Drop a column like this:
```
> ALTER TABLE contacts DROP family;
```
It's a good idea to always have a unique, automatically-incrementing ID number for each record in your database. Here's how to add such a field:
```
> ALTER TABLE contacts ADD id serial PRIMARY KEY;
```
The serial data type is an autoincrementing integer.


# CRUD Commands

[![YouTube](http://img.youtube.com/vi/otGjamn9Jpo/0.jpg)](https://www.youtube.com/watch?v=otGjamn9Jpo)
]


## Insert
Now that we have tables with columns, let's put some data in them:
```
> INSERT INTO contacts (name, age, birthday) VALUES ('Wes', 43, '1969-05-01');
```
Notice how we need to put quotes around varchars and timestamps, but not around ints. Also, remember that with SQL, we need to use single quotes - double quotes won't work.

Often, we'll need to get back the ID from an insert, so that we know how to find the row we just inserted. Here's how to return the ID from an INSERT statement:
```
> INSERT INTO contacts
(
name
,
age
,
birthday
)
VALUES
(
'Wes'
,
43
,
'1969-05-01'
)
RETURNING id
;
```

## Update
What if we need to change data in our database? There are a lot of fancy ways to do this, but let's focus on the simplest and most common: select a record by its primary key, and update its data:
```
> UPDATE contacts SET name = 'Wes Anderson' WHERE id = 1;
```

## Delete

Now, let's delete a record:
```
> DELETE FROM contacts WHERE id = 1;
```
We're done playing around with this database now, so let's drop it. First, we'll need to connect to our original, default database. If you don't remember what it was called, just type \list. For me, it's called learn_sd:
```
> \c learn_sd
> DROP DATABASE test_database;
```
Finally, to quit psql, just run:
```
> \q
```

## Challenge

### Create, Update, Insert, DELETE

* Create a rolodex database.
* Connect to the database.
* Create a persons table with a `serial PRIMARY KEY`, given_name, family_name, address, dob, email using appropriate datatypes found <a href="https://www.postgresql.org/docs/9.5/static/datatype.html#DATATYPE-TABLE" target="_blank">here</a>.
* Add five or more family members to the persons table.
* How many have the same family_name as you?
* Add yourself into the persons table.
* Update all family members with the same family_name as you, to live at the same address.
* Delete all family members not with your family_name.

[Go to Foreign Keys, Joins & Associations](./10_sql_joins.md)

[Back to Joins](./08rails_sql_joins.md)

[Back to Syllabus](../README.md)
