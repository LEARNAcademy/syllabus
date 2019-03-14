# SQL in the Terminal

https://player.vimeo.com/video/73994505

## Starting Off

To access the Postgres server, open a terminal and run $ psql. You should have a prompt that looks something like this:
```
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


# SQL Insert, Update and Delete

https://player.vimeo.com/video/156315890

We have already seen how to read data using select statements, so in this section we will treat how to input, update and finally delete data.

## Inserting Data
We can add information to a table like this:

```sql
INSERT INTO
	persons (given_name, last_name, dob, address, email)
VALUES
	('Korben', 'Dallas', '2097-06-01', '97 Main City, 987142', 'korbendallas@gmail.com'),
    ('Leloo',  'Dallas', '2097-04-16', '97 Main City, 987142', 'ldallas@gmail.com');
```

## Update
We can update data that is already in a table like this:

```sql
    UPDATE
      persons
    SET
      family_name = 'Granthem'
    WHERE
      family_name = 'Dallas';
```
SQL queries affect as many rows that match in the WHERE clause.  In this case, we change all last names of 'Dallas' to 'Granthem'.

## Delete
We can delete one or more rows of data from a table like this:

```sql
  DELETE FROM
    persons
  WHERE
    family_name = 'Granthem';
```

And now they are gone.


## Creating a Database

```sql
CREATE DATABASE contact;
```

Note that the name of the database is singular.

Check that the database was created:
```
\db
```

#### Connect to database
```
\c contact
```
## Creating Tables

To store information in a database, first we need tables to store them in. Let's make a table called "contacts":

```sql
CREATE TABLE contacts (
	id serial PRIMARY KEY,
	given_name varchar,
	last_name varchar,
	dob date,
	address varchar,
	email varchar);
```
This line is doing a few things. It is creating columns with values like given_name, dob, and email, and saying that only things like "varchars" -- or text of varying characters -- or dates can be stored in them.

#### Primary Key

The `id serial PRIMARY KEY` portion creates a numeric ID for every new entry, starting at the number 1 and incrementing with each entry. ID's are useful because they are unique; if we have two contacts with the same name, we can use their different ID's to tell them apart in our code. For more on primary key see <a href="https://www.postgresql.org/docs/9.5/static/ddl-constraints.html" target="_blank">5.3.4. Primary Keys</a>_

#### Viewing the Schema

In Postgres you can examine the tables schema by issuing the following commands:

#### `\d`
```
\d contacts

                                Table "public.contacts"
   Column   |       Type        |                       Modifiers
------------+-------------------+-------------------------------------------------------
 id         | integer           | not null default nextval('contacts_id_seq'::regclass)
 given_name | character varying |
 last_name  | character varying |
 dob        | date              |
 address    | character varying |
 email      | character varying |
Indexes:
    "contacts_pkey" PRIMARY KEY, btree (id)

```

You can also examine the database schema, which allows you to see all the tables within your particular database

#### `\dt`

```
\dt

         List of relations
 Schema |   Name   | Type  | Owner
--------+----------+-------+-------
 public | contacts | table | postgres
(1 row)

```

## Inserting Data
Now that we've decided on the *kind* of information we're going to store in our table, let's create some information. We can add information to a table like this:

```sql
INSERT INTO contacts (given_name, last_name, dob, address, email)
VALUES ('Korben', 'Dallas', '2097-06-01', '97 Main City, 987142', 'korbendallas@gmail.com'),
       ('Leloo',  'Dallas', '2097-04-16', '97 Main City, 987142', 'ldallas@gmail.com');
```

In order to see all of our new information, type `SElECT * FROM contacts;` into the terminal.


## Altering Tables

We can add new columns to a table after the fact, as well:

```
ALTER TABLE contacts ADD adult boolean;
```
Here we are specifying the table that we want to change, and then naming the new column along with its type.

To see the change use `\d contacts` and you will see the new column in the table schema.
```
\d contacts

                                Table "public.contacts"
   Column   |       Type        |                       Modifiers
------------+-------------------+-------------------------------------------------------
 id         | integer           | not null default nextval('contacts_id_seq'::regclass)
 given_name | character varying |
 last_name  | character varying |
 dob        | date              |
 address    | character varying |
 email      | character varying |
 adult      | boolean           |
Indexes:
    "contacts_pkey" PRIMARY KEY, btree (id)

```

If we decide that a particular column is unnecessary or not very useful, we can also remove it:

```
ALTER TABLE contacts DROP adult;
```
Like adding a column, the `ALTER TABLE` command also takes a `DROP` parameter, followed by the name of the column we want to drop.

## Removing Tables

```
DROP TABLE contacts;
```

will delete a table and all the data in it (with one caveat, this will only happen if the data can be deleted which may not be possible due to foreign key constraints).

To see the table was dropped use `\dt` to check the contact database.

```
\dt
No relations found.
```
