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

## Making Queries

Now that you have data in your database, let's get it out. Reading data from a database is called querying. Here's a query for you to try:
```
> SELECT name FROM contacts;
```
This gives you a list of all the names in your contacts table.

You can select multiple columns from a table:
```
> SELECT name, birthday FROM contacts;
```
If you want to select all of the columns from a table, there's a shortcut:
```
> SELECT * FROM contacts;
```
You can limit your SELECTs to only return rows that match certain criteria:
```
> SELECT * FROM contacts WHERE age &gt;= 18;
```
This gives us all of the adults in contacts.

A WHERE clauses accepts the following operators: =, !=, >, <, >= , <=, BETWEEN, LIKE, and IN. You can also prepend any operator with NOT. Here are examples of the last couple operators:
```
> SELECT * FROM contacts WHERE age BETWEEN 13 AND 17;
> SELECT * FROM contacts WHERE name BETWEEN 'Judith' AND 'Wilma';
> SELECT * FROM contacts WHERE name LIKE 'We%';
> SELECT * FROM contacts WHERE birthday IN ('1969-01-01', '1999-01-01');
```
For the LIKE operator, the % is a wildcard, meaning it can stand for any number of any characters.

What if we need to change data in our database? There are a lot of fancy ways to do this, but let's focus on the simplest and most common: select a record by its primary key, and update its data:
```
> UPDATE contacts SET name = 'Wes Anderson' WHERE id = 1;
```

## Deleting a Record

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
## Understanding Relations / Foreign Keys

#### The Crude Approach

If I start building a database table meant to contain contact information, the table schema could look something like this:

```sql
Contacts
--------
name:  varchar
email: varchar
phone: varchar
```

Here is Joe's data:

```sql
name	email			phone
----	-----			-----
Joe		joe@home.com	858-555-1212
```

Now Joe gets another phone:

```sql
Joe		joe@home.com	619-222-3333
```

And another:

```sql
Joe		joe@home.com	619-444-5555
```

This leads to replication of data and eventual problems if Joe ever wants to update his email because it is recorded in multiple places.

#### A Better Approach: Adding Columns

One way to address this data replication problem is to add columns for every possible mode of communication:

```sql
Contacts
--------
name:         varchar
email:        varchar
phone:        varchar
fax:          varchar
pager:        varchar
landline:     varchar
cell:         varchar
google_voice: varchar
```

However, this looks like it will be a waste of space -- Joe doesn't have a fax or pager -- and there is no guarantee that we have enough or the right columns. What if someone has a second cell phone?

## Solution --> Foreign Keys

The solution is to add another table, meaning entity, that contains phones.

<center>
<img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/21/original_intro_fkeys1.png?1465252977" height="140px">
</center>

```sql
Contacts
--------
id: integer
name: varchar
email: varchar
```

<center>
<img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/22/original_intro_fkeys2.png?1465252996" height="140px">
</center>

```sql
Phones
------
id: integer
contact_id: integer
number: varchar
description: varchar
```
<center>
<img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/23/original_intro_fkeys3.png?1465253019" height="160px">
</center>

Before we link up our tables in the database, we need to think about the kind of relationshp the Contacts table has with the Phones table. Is it a one-to-one relationship? No, that would be more like the relationship between a Contact and their date of birth, where one person only ever has one birthday.  Is it a many-to-many relationship? Not quite, our phones don't have multiple owners. In our database, Phones and Contacts have a one-to-many relationship: a Contact has many Phones.

<center>
  <img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/24/original_intro_fkeys4.png?1465253034" height="140px">
</center>

```sql
SELECT * FROM contacts;
```

```sql
id		name	email
---		-----	-----
1		Joe		joe@home.com
2		Jenny	jenny@home.com
```

<center>
  <img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/25/original_intro_fkeys5.png?1465253072" height="160px">
</center>

```sql
SELECT * FROM phones;
```

```sql
id	contact_id	   number		description
--	----------	------------	-----------
1		1		858-555-1212	Cell
2		2		8675309			Home
3		1		619-222-3333	Landline
```

Notice that the `contact_id` column in the phones table contains `id` values that correspond to Joe and Jenny in the contacts table.

## In the Terminal Creating and Using Relationships / Foreign Keys

#### Create Database

```sql
CREATE DATABASE contact;
```

Note that the name of the database is singular.

#### Creating Tables

```sql
CREATE TABLE contacts (id serial PRIMARY KEY,
					   name varchar,
					   email varchar);
CREATE TABLE phones (id serial PRIMARY KEY,
				     contact_id integer REFERENCES contacts (id) NOT NULL,
					 number varchar,
					 description varchar);
```

Note that the table names are plural.
The `REFERENCES contacts (id) NOT NULL` means that the `contact_id` has to be provided (not `NULL`) and has to be a value from the `id` column in the `contacts` table. Together these guarantee that the phones are always associated with a contact.

#### Inserting Values

```sql
INSERT INTO contacts (name,    email)
VALUES               ('Joe',   'joe@home.com'),
	   				 ('Jenny', 'jenny@home.com');

INSERT INTO phones (contact_id, number,         description)
VALUES 			   (1,          '858-555-1212', 'Cell'),
	   			   (2,          '8675309',      'Home'),
 	   			   (1,          '619-222-3333', 'Landline');
```

Note that the primary key `id`s are inserted automagically so we do not have to enter them.
However, for the `contact_id` we have to use the `contacts`' `id` for the corresponding person.

## Querying with Foreign Keys

#### The Simple Way

Get all of Joe’s information:

```sql
SELECT id FROM contacts WHERE contacts.name = 'Joe';
SELECT * FROM phones WHERE phones.contact_id = 1; -- value from first SELECT
```

The value for the `contact_id` is the `id` from the first `SELECT`.

#### A Clever Way

Get all of Joe’s phone information:

```sql
SELECT * FROM phones
WHERE contact_id IN (SELECT id FROM contacts WHERE name = 'Joe');
```

#### Using Joins

Getting everybody’s information - simplest join possible:

```sql
SELECT *
FROM contacts, phones
WHERE contacts.id = phones.contact_id;
```

Get only Joe’s phone numbers:

```sql
SELECT phones.number
FROM contacts, phones
WHERE contacts.id = phones.contact_id AND contacts.name = 'Joe';
```

Or using a `JOIN` clause:

```sql
SELECT p.number
FROM contacts c JOIN phones p ON c.id = p.contact_id
WHERE c.name = 'Joe';
```

## Understanding Joins

A simple `SELECT` referencing two table:

```sql
SELECT *
FROM contacts, phones;
```

returns the full cartesian product (every combination of rows) of the tables involved:

```sql
 id | name  |     email      | id | contact_id |    number    | description
----+-------+----------------+----+------------+--------------+-------------
  1 | Joe   | joe@home.com   |  1 |          1 | 858-555-1212 | Cell
  1 | Joe   | joe@home.com   |  2 |          2 | 8675309      | Home
  1 | Joe   | joe@home.com   |  3 |          1 | 619-222-3333 | Landline
  2 | Jenny | jenny@home.com |  1 |          1 | 858-555-1212 | Cell
  2 | Jenny | jenny@home.com |  2 |          2 | 8675309      | Home
  2 | Jenny | jenny@home.com |  3 |          1 | 619-222-3333 | Landline
```

Note: The first `id` column is from the `contacts` table, and the second is from the `phones` table.
This result set is not really useful because, for instance, Jenny has nothing to do with Joe's landline (last row).
We are really only interested in records where all the information belongs to the same person. That is what we specify with the `ON` clause:

```sql
SELECT *
FROM contacts c JOIN phones p ON c.id = p.contact_id;
```

The result is a much smaller table:

```sql
 id | name  |     email      | id | contact_id |    number    | description
----+-------+----------------+----+------------+--------------+-------------
  1 | Joe   | joe@home.com   |  1 |          1 | 858-555-1212 | Cell
  2 | Jenny | jenny@home.com |  2 |          2 | 8675309      | Home
  1 | Joe   | joe@home.com   |  3 |          1 | 619-222-3333 | Landline
```

Notice how the contacts' `id` and the `contact_id` are the same in each row; signifying that the data belongs together.

And from this we can further select, for instance, only rows associated with Joe:

```sql
SELECT *
FROM contacts c JOIN phones p ON c.id = p.contact_id
WHERE name = 'Joe';
```

The result is an even smaller table:

```sql
 id | name  |     email      | id | contact_id |    number    | description
----+-------+----------------+----+------------+--------------+-------------
  1 | Joe   | joe@home.com   |  1 |          1 | 858-555-1212 | Cell
  1 | Joe   | joe@home.com   |  3 |          1 | 619-222-3333 | Landline
```
# Challenges

### Create, Update, Insert, DELETE

* Create a rolodex database.
* Connect to the database.
* Create a persons table with a `serial PRIMARY KEY`, given_name, family_name, address, dob, email using appropriate datatypes found <a href="https://www.postgresql.org/docs/9.5/static/datatype.html#DATATYPE-TABLE" target="_blank">here</a>.
* Add five or more family members to the persons table.
* How many have the same family_name as you?
* Add yourself into the persons table.
* Update all family members with the same family_name as you, to live at the same address.
* Delete all family members not with your family_name.

# Country Club Challenge

### Epic 1 Create the Database

<div class="text-center">
<p><img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/41/original_country_club_database_schema.jpg?1472241500" /></p>
</div>

#### Set Up

* Create a new database called country_club and connect to it

#### Create a Members table

* A serial primary key, an incrementing unique ID value for each row. Each row represents a member.
* Surname, such as 'Smith'.
* Firstname, such as 'Dan'.
* Address, such as '23 Highway Way, Boston'.
* Zipcode, such as 23423
* Telephone, such as '123-344-2332'.
* Recommended by, which references the members id who refered them, so that we can keep track of who recommends the most people
* Join Date, to keep track of the longest standing members.


```sql
CREATE TABLE members (
  id serial PRIMARY KEY,
  surname varchar,
  first_name varchar,
  address varchar,
  zipcode integer,
  telephone varchar,
  recommended_by integer REFERENCES members(id),
  join_date timestamp without time zone
  );
```

#### Create Facilities table

* A serial primary key, an incrementing unique ID value for each row. Each row represents a facility.
* Name, such as 'Tennis Court 1'.
* Members Cost, such as 25.
* Guest Cost, such as 1000.
* Initial Out Lay, such as 10000, to show how much it cost to build.
* Monthly Maintenance, such as 500, to show cost of maintaining.

#### Create Bookings table

* A serial primary key, an incrementing unique ID value for each row. Each row represents booking.
* Foreign Key reference to the facility table (see an example of how to do this in the Members table hint).
* Foreign Key reference to the members table.
* Start time, to let the member know when the session begins.
* Slots, to show how many open spots there are for the session.

#### Import Data Into the Database

Now that the database is created and tables are in place, we need to fill those tables with some data so we have something to query.

1. Go to the <a href="https://github.com/LEARNAcademy/wiki" target="_blank" >LEARN wiki</a> and clone the repository onto the desktop.
2. Open with Atom and find the club_data.sql file.
3. Copy the first set of data labeled members (starts at line 4063) Include the `\.` at the end.
4. Open up a terminal, make sure you are connected to the country_club database through psql, and paste in the copied data.
5. Hit Enter and the data will fill in the members table.
6. Do the same thing for the facilities data and then the bookings data.

## Epic 2 Query the Database using `JOIN`s on the Foreign Keys

1. Produce a list of start times for bookings by members named 'David Farrell'?

* Hint: Remember that a `JOIN` is selecting all records from Table A and Table B, where the join condition is met.
<p><img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/33/original_sql_1.jpg?1472166134" /><p>
(34 rows)
<hr>

1. Produce a list of the start times for bookings for tennis courts, for the date '2012-09-21'? Return a list of start time and facility name pairings, ordered by the time.

* Hint: In the `WHERE` clause use `BETWEEN` and specify the date (with time as HR:MN:SC).
<p><img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/34/original_sql_2.jpg?1472167751" /><p>

<hr>

1. Produce a list of all members who have used a tennis court? Include in your output the name of the court, and the name of the member formatted as first name, surname. Ensure no duplicate data, and order by the first name.

* Hint: This will require two `JOIN`s
  * Example:
  ```
    FROM
      ... ...
        JOIN ... ...
           ON ... = ...
        JOIN ... ...
           ON ... = ...
	WHERE
	  ... IN ...
  ```
  <p><img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/36/original_sql_4_redo.jpg?1472232882" /><p>

<hr>

1. Produce a number of how many times Nancy Dare has used the pool table facility?

* Hint: Two `JOIN`s
<p><img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/38/original_sql_6.jpg?1472168848" /><p>

<hr>

1. Produce a list of how many times Nancy Dare has visited each country club facility.

* Hint: Two `JOIN`s
<p><img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/40/original_sql_7.jpg?1472169154" /><p>

<hr>

1. Produce a list of all members who have recommended another member? Ensure that there are no duplicates in the list, and that results are ordered by (surname, firstname).

* Hint: SELF `JOIN` The tables we are joining don't have to be different tables. We can join a table with itself.  This is called a self join. In this case we have to use aliases for the table otherwise PostgreSQL will not know which id column of which table instance we mean.
  * Example:
  ```
  FROM tacos ...
      JOIN tacos ...
        ON ... = ...
  ```
  <p><img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/35/original_sql_3.jpg?1472168031" /><p>

<hr>

1. Output a list of all members, including the individual who recommended them (if any), without using any `JOIN`s? Ensure that there are no duplicates in the list, and that member is formatted as one column and ordered by member.

* Hint: To concatenate two columns to look like one you can use the `||`
  * Example: `SELECT DISTINCT ... || ' ' || ... AS ...,`
* Hint: See Subqueries <a href="https://www.techonthenet.com/postgresql/subqueries.php" target="_blank">Here</a> and <a href="http://www.w3resource.com/PostgreSQL/postgresql-subqueries.php" target="_blank" >Here</a>
  * Example:
  ```
  SELECT DISTINCT ... || ' ' ||  ... AS ....,
      (SELECT ... || ' ' || ... AS ....
          FROM ... ...
          WHERE ... = ...
      ) FROM ... ...
  ```
  <p><img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/37/original_sql_5.jpg?1472168321" /><p>

Data licensed under https://creativecommons.org/licenses/by-sa/3.0/

# The Country Club Challenge

# Epic 1 Create the Database

<div class="text-center">
<p><img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/41/original_country_club_database_schema.jpg?1472241500" /></p>
</div>

#### Set Up

* Create a new database called country_club and connect to it

#### Create a Members table

* A serial primary key, an incrementing unique ID value for each row. Each row represents a member.
* Surname, such as 'Smith'.
* Firstname, such as 'Dan'.
* Address, such as '23 Highway Way, Boston'.
* Zipcode, such as 23423
* Telephone, such as '123-344-2332'.
* Recommended by, which references the members id who refered them, so that we can keep track of who recommends the most people
* Join Date, to keep track of the longest standing members.


```sql
CREATE TABLE members (
  id serial PRIMARY KEY,
  surname varchar,
  first_name varchar,
  address varchar,
  zipcode integer,
  telephone varchar,
  recommended_by integer REFERENCES members(id),
  join_date timestamp without time zone
  );
```

#### Create Facilities table

* A serial primary key, an incrementing unique ID value for each row. Each row represents a facility.
* Name, such as 'Tennis Court 1'.
* Members Cost, such as 25.
* Guest Cost, such as 1000.
* Initial Out Lay, such as 10000, to show how much it cost to build.
* Monthly Maintenance, such as 500, to show cost of maintaining.

#### Create Bookings table

* A serial primary key, an incrementing unique ID value for each row. Each row represents booking.
* Foreign Key reference to the facility table (see an example of how to do this in the Members table hint).
* Foreign Key reference to the members table.
* Start time, to let the member know when the session begins.
* Slots, to show how many open spots there are for the session.

#### Import Data Into the Database

Now that the database is created and tables are in place, we need to fill those tables with some data so we have something to query.

1. Go to the <a href="https://github.com/LEARNAcademy/wiki" target="_blank" >LEARN wiki</a> and clone the repository onto the desktop.
2. Open with Atom and find the club_data.sql file.
3. Copy the first set of data labeled members (starts at line 4063) Include the `\.` at the end.
4. Open up a terminal, make sure you are connected to the country_club database through psql, and paste in the copied data.
5. Hit Enter and the data will fill in the members table.
6. Do the same thing for the facilities data and then the bookings data.

## Epic 2 Query the Database using `JOIN`s on the Foreign Keys

1. Produce a list of start times for bookings by members named 'David Farrell'?

* Hint: Remember that a `JOIN` is selecting all records from Table A and Table B, where the join condition is met.
<p><img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/33/original_sql_1.jpg?1472166134" /><p>
(34 rows)
<hr>

1. Produce a list of the start times for bookings for tennis courts, for the date '2012-09-21'? Return a list of start time and facility name pairings, ordered by the time.

* Hint: In the `WHERE` clause use `BETWEEN` and specify the date (with time as HR:MN:SC).
<p><img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/34/original_sql_2.jpg?1472167751" /><p>

<hr>

1. Produce a list of all members who have used a tennis court? Include in your output the name of the court, and the name of the member formatted as first name, surname. Ensure no duplicate data, and order by the first name.

* Hint: This will require two `JOIN`s
  * Example:
  ```
    FROM
      ... ...
        JOIN ... ...
           ON ... = ...
        JOIN ... ...
           ON ... = ...
	WHERE
	  ... IN ...
  ```
  <p><img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/36/original_sql_4_redo.jpg?1472232882" /><p>

<hr>

1. Produce a number of how many times Nancy Dare has used the pool table facility?

* Hint: Two `JOIN`s
<p><img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/38/original_sql_6.jpg?1472168848" /><p>

<hr>

1. Produce a list of how many times Nancy Dare has visited each country club facility.

* Hint: Two `JOIN`s
<p><img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/40/original_sql_7.jpg?1472169154" /><p>

<hr>

1. Produce a list of all members who have recommended another member? Ensure that there are no duplicates in the list, and that results are ordered by (surname, firstname).

* Hint: SELF `JOIN` The tables we are joining don't have to be different tables. We can join a table with itself.  This is called a self join. In this case we have to use aliases for the table otherwise PostgreSQL will not know which id column of which table instance we mean.
  * Example:
  ```
  FROM tacos ...
      JOIN tacos ...
        ON ... = ...
  ```
  <p><img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/35/original_sql_3.jpg?1472168031" /><p>

<hr>

1. Output a list of all members, including the individual who recommended them (if any), without using any `JOIN`s? Ensure that there are no duplicates in the list, and that member is formatted as one column and ordered by member.

* Hint: To concatenate two columns to look like one you can use the `||`
  * Example: `SELECT DISTINCT ... || ' ' || ... AS ...,`
* Hint: See Subqueries <a href="https://www.techonthenet.com/postgresql/subqueries.php" target="_blank">Here</a> and <a href="http://www.w3resource.com/PostgreSQL/postgresql-subqueries.php" target="_blank" >Here</a>
  * Example:
  ```
  SELECT DISTINCT ... || ' ' ||  ... AS ....,
      (SELECT ... || ' ' || ... AS ....
          FROM ... ...
          WHERE ... = ...
      ) FROM ... ...
  ```
  <p><img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/37/original_sql_5.jpg?1472168321" /><p>

Data licensed under https://creativecommons.org/licenses/by-sa/3.0/

# Need More?

#### SQL Tutorials with Quizzes
* <a href="http://sqlzoo.net/wiki/SELECT_basics" target="_blank" >SQLZOO</a>

#### Gamification of PostgreSQL
* <a href="https://schemaverse.com/tutorial/tutorial.php?page=Introduction" target="_blank" >Schemaverse</a>

#### Dive Deeper
* <a href="https://www.tutorialspoint.com/postgresql/index.htm" target="_blank" >Tutorials Point</a>
* <a href="http://philip.greenspun.com/sql/" target="_blank" >Philip Greenspun</a>

[Back to SQL CRUD and Foreign Keys](./05rails__sql_crud_foreign_keys.md)

[Back to Syllabus](../README.md)
