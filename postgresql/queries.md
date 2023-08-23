# PostgreSQL Queries

## Video
[![YouTube](http://img.youtube.com/vi/H5JOXnkHfls/0.jpg)](https://www.youtube.com/watch?v=H5JOXnkHfls)  
***Note: This recording contains both lectures `Intro to Database and PostgreSQL`. Discussion for `PostgreSQL` begins at 17:45 of this recording.***

## Overview
- PostgreSQL is a object-relational database management system.
- A query is code that requests particular information from a database.
- Creating efficient queries improves the speed and performance of your application. 

## Learning Objectives
- Familiarization with the syntax of a query statement
- Exploring PGAdmin
- Analyzing a data set and extracting the necessary information through a query

## Vocabulary
- query
- database table
- subquery
- aggregate function

## Additional Resources
- [ Here ](http://www.stat.fi/worldinfigures) is the country database source
- [ PGAdmin docs ](https://www.pgadmin.org/)

## PGAdmin Setup
- Open PGAdmin (command + spacebar for spotlight search)
- On the lefthand sidebar click the Servers icon
- Close the prompt for a password 
- Make sure that the localhost icon is selected
- Go to horizontal menu bar for pgAdmin4 near the apple icon: Object >> Register >> Server
- General >> name: localhost
- Click on connection tab
- Host name/address: `127.0.0.1` or `localhost`
- Change username from postgres to `learnacademy`
- Password: SDlearn123
- Select to save password
- Click save

## Connect to Server
- On the lefthand sidebar click the Servers icon
- Prompt to unlock saved passwords will require master password: SDlearn123
- If error statement, select to reset master password
- Master Password: SDlearn123
- Click OK
- Prompt to connect to server wil require a re-entry of password
- Click OK

## Running a Query
- Select the correct database:
  - On the lefthand side select: Servers >> localhost >> Databases
  - Click on countries
- Tools >> Query Tool
- Type a query in the Query Editor
- Click on play button to run query

### Database Queries
In this section we'll create some generic `database queries` using common keywords and SQL-based syntax. The word **query** simply means a question. Therefore, this syntax is  used to ask questions from the database to hopefully get the data we want.

***NOTE: The key to working with databases is asking the right questions. Take time to examine Look this syntax to discover different types of questions you can ask the database.***

Though queries appear somewhat closer to regular English words than certain other programming languages, it's still important to follow the specific syntax required by each keyword.

***NOTE: The Postgres program is not case sensitive. However, it is best practice to write the Postgres keywords in uppercase. It is also convention to allow each section of the query its own line.***

### SELECT and FROM
Every query will have a `SELECT` statement that specifies at a minimum:
- the **database table**, which is a structured collection of data organized into rows and columns 
- the specified columns to use from that database table.

The `SELECT` clause indicates which columns will be included in the query. 

The `FROM` clause indicates the database table from which information will be extracted.
***

The simplest query we can execute is to retrieve all the information from a specific table. We will use the `*` symbol as shorthand for "all items" within our SELECT statement.
```sql
SELECT *       <-- means all columns
FROM country;
```
![simple select](./assets/querying/simple-select.png)

To choose specific columns, enter the column names separated by commas. Any column required in the query should be used in the SELECT statement.
```sql
SELECT name, population, surfacearea
FROM country;
```

**What's up with that order?**
At first glance, the order of the items may seem pretty random. Databases are not ordered by the content. They are ordered by the primary key. Hence, arranging the order of the contents within the query is the developer's responsibility.

### WHERE
A `WHERE` clause is a comparison operator and accepts the following:

`=`, `!=`, `>`, `<`, `>=`, `<=`,
`BETWEEN`, `LIKE`, and `IN`,
`NOT`, `AND`, `OR`.

````sql
SELECT code, name, population, gnp
FROM country
WHERE gnp > 1e+6
````
![Set Result](./assets/querying/set-result.png)


```sql
SELECT name, population, surfacearea
FROM country
WHERE surfacearea < 100000;
```

More complex conditions can be incorporated by using special SQL-based keywords called operators. These operators can be combined with parentheses to make a group of values.

The `IN` operator refers to a set of values.
```sql
SELECT name, population, governmentform
FROM country
WHERE governmentform
IN('Republic', 'Monarchy');
```

The `LIKE` operator refers to a pattern within the given characters. This operator also accepts the `%` symbol as a wildcard, enabling it to represent any placement of the pattern rather than requiring an exact characters match. For example:
- `%onarchy`: matches any value that ends with "onarchy".
- `Monar%`: matches any value that begins with "Monar".
- `%onarchy%`: matches any value that contains "onarchy".


```sql
SELECT name, population, governmentform
FROM country
WHERE governmentform
LIKE '%onarchy';
```

The `NOT` operator excludes a set of values.
````sql
SELECT *        <-- means all columns
FROM country
WHERE
NOT(continent = 'North America');
````

The `OR` operator allows for values that meet either condition.
````sql
SELECT code, name, population, gnp
FROM country
WHERE population > 1e+8
OR gnp > 1e+6;
````

The `AND` operator allows for only the values that meet both conditions.
````sql
SELECT code, name, population, gnp
FROM country
WHERE population > 1e+8
AND gnp > 1e+6;

SELECT name, population, surfacearea
FROM country
WHERE surfacearea
BETWEEN 100000
AND 500000;
````

### ORDER BY
We can order the result set of a query by adding an `ORDER BY` clause after the `WHERE` clause.

```sql
SELECT name, population, governmentform
FROM country
WHERE governmentform IN ('Republic', 'Monarchy')
ORDER BY population;
```
We can append `ASC` or `DESC` to make the order ascending or descending.
```sql
SELECT name, population, governmentform
FROM country
WHERE governmentform IN ('Republic', 'Monarchy')
ORDER BY population DESC;
```

### LIMIT
A `SELECT` clause always return all the items that meet a particular condition. To reduce the number of items returned, we can pass the `LIMIT` clause after the `WHERE` clause.

The following example reduces the number of items returned to ten rows:
```sql
SELECT name, population, governmentform
FROM country
WHERE population < 100000
LIMIT 10;
```

### Working with NULL
`NULL` is a special value used to denote the absence of a value, similar to `nil` in Ruby and `null` or `undefined` in Javascript.

The strange thing about `NULL` is that it is not equal to anything, *including itself*.
Therefore, when accounting for `NULL` in a `WHERE` clause, we can use any of the following operators:
- `IS NULL`
- `IS NOT NULL`
- `COALESCE` which returns first non-`NULL` value.

### AS
The `AS` clause will create an additional column for the query. The `AS` clause requires a custom name for the alias of the column.  

````sql
SELECT name, population,
gnp / population AS gnp_per_capita   <-- alias
FROM country
WHERE population > 1e+8;
````

### WITH
The `WITH` clause allows a developer to create a **subquery**, which is a query embedded within another query. The subquery is created by defining a `SELECT` statement with an alias. The results of a subquery are used by referencing the alias in the main query. 

In this example, we create an alias called `populated_countries` for the subquery that eliminates any countries that have a population of 0 and a gnp of 0. Next, we query the alias `populated_countries` to extract 10 countries that have the lowest gnp.
``` sql
WITH populated_countries AS (
	SELECT name, population, gnp
	FROM country
	WHERE population > 0
	AND gnp > 0
	)
SELECT name, population, gnp
FROM populated_countries
ORDER BY gnp
LIMIT 10;
```

## Aggregate Functions
So far, we've stored items into tables and extracted a list of items from them. What if we wanted to do more than generate a list of items? In PostgreSQL, we can also perform calculations like addition or computing the average. **Aggregated functions** like `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX` perform an action on a particular set of data and returns a calculated value.

In this example, `COUNT` allows us to see the most common form of government and how many rows meet that criteria.
```sql
SELECT governmentform, COUNT(*)
FROM country
GROUP BY governmentform
ORDER BY count DESC
LIMIT 1;
```

In this example, `SUM` returns the total population for every entry in the database.
```SQL
SELECT SUM(population)
FROM country;
```

### GROUP BY
The `GROUP BY` clause is used to arrange rows with matching values in specified columns into condensed summaries.

Aggregate functions like `COUNT` or `AVG` can also be used with `GROUP BY`.

The following example uses `AVG` performs a calculation on the specified column and then returns the summarized data grouped into rows based on the region.
```sql
SELECT region, AVG(lifeexpectancy)
FROM country
GROUP BY region;
```

Here we can see how many countries are in a particular region using `COUNT` and `GROUP BY`.
```sql
SELECT region, COUNT(name)
FROM country
WHERE region='South America'
GROUP BY region
```

## Challenges: SQL Country Database
Save your queries in a file if you want to keep them for posterity (future reference).

#### WHERE
- What is the population of the US? (HINT: 278357000)
- What is the area of the US? (HINT: 9.36352e+06)
- Which countries gained their independence before 1963?
- List the countries in Africa that have a population smaller than 30,000,000 and a life expectancy of more than 45? (HINT: 37 entries)
- Which countries are something *like* a republic? (HINT: Are there 122 or 143?)
- Which countries are some kind of republic and achieved independence after 1945? (HINT: 92 entries)
- Which countries achieved independence after 1945 and are *not* some kind of republic? (HINT: 27 entries)

#### ORDER BY
- Which fifteen countries have the lowest life expectancy? (HINT: starts with Zambia, ends with Sierra Leonne)
- Which fifteen countries have the highest life expectancy? (HINT: starts with Andorra, ends with Spain)
- Which five countries have the lowest population density (density = population / surfacearea)? (HINT: starts with Greenland)
- Which countries have the highest population density?(HINT: starts with Macao)
- Which is the smallest country by area? (HINT: .4)
- Which is the smallest country by population? (HINT: 50)?
- Which is the biggest country by area? (HINT: 1.70754e+07)
- Which is the biggest country by population? (HINT: 1277558000)
- Who is the most influential head of state measured by population? (HINT: Jiang Zemin)

#### Subqueries: WITH
- Of the countries with the top 10 gnp, which has the smallest population? (HINT: Canada)
- Of the 10 least populated countries with permament residents (a non-zero population), which has the largest surfacearea? (HINT: Svalbard and Jan Mayen)

#### Aggregate Functions: GROUP BY
- Which region has the highest average gnp? (HINT: North America)
- Who is the most influential head of state measured by surface area? (HINT: Elisabeth II)
- What is the average life expectancy for all continents?
- What are the most common forms of government? (HINT: use `count(*)`)
- How many countries are in North America?
- What is the total population of all continents?

## Stretch Challenges
- Which countries have the letter ‘z’ in the name? How many?
- Of the smallest 10 countries by area, which has the biggest gnp? (HINT: Macao)
- Of the smallest 10 countries by population, which has the biggest per capita gnp?
- Of the biggest 10 countries by area, which has the biggest gnp?
- Of the biggest 10 countries by population, which has the biggest per capita gnp?
- What is the sum of surface area of the 10 biggest countries in the world? The 10 smallest?
- What year is this country database from? Cross reference various pieces of information to determine the age of this database.

---
[Back to Syllabus](../README.md#unit-five-intro-to-postgres-and-ruby-on-rails-models)
