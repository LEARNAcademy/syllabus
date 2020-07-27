# Joins and Relations


## Understanding Relations / Foreign Keys
[![YouTube](http://img.youtube.com/vi/QpFPd4tlGoA/0.jpg)](https://www.youtube.com/watch?v=QpFPd4tlGoA)
]


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

Before we link up our tables in the database, we need to think about the kind of relationship the Contacts table has with the Phones table. Is it a one-to-one relationship? No, that would be more like the relationship between a Contact and their date of birth, where one person only ever has one birthday.  Is it a many-to-many relationship? Not quite, our phones don't have multiple owners. In our database, Phones and Contacts have a one-to-many relationship: a Contact has many Phones.

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

## Creating and Using Relationships / Foreign Keys

#### Create Database

```sql
CREATE DATABASE my_contact_database;
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

#### Using Joins

Getting Joe's information - simplest join possible:

```sql
SELECT p.number
FROM contacts c
JOIN phones p ON c.id = p.contact_id
WHERE c.name = 'Joe';
```

## Understanding Joins

`SELECT` referencing two tables:

```sql
SELECT *
FROM contacts c
JOIN phones p ON c.id = p.contact_id;
```

The result includes information from both tables:

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


# Need More?

#### SQL Tutorials with Quizzes
* <a href="http://sqlzoo.net/wiki/SELECT_basics" target="_blank" >SQLZOO</a>

#### Gamification of PostgreSQL
* <a href="https://schemaverse.com/tutorial/tutorial.php?page=Introduction" target="_blank" >Schemaverse</a>

#### Dive Deeper
* <a href="https://www.tutorialspoint.com/postgresql/index.htm" target="_blank" >Tutorials Point</a>
* <a href="http://philip.greenspun.com/sql/" target="_blank" >Philip Greenspun</a>

[Back to SQL CRUD and Foreign Keys](./09rails__sql_crud_foreign_keys.md)

[Back to Syllabus](../README.md)
