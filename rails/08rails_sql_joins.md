# Joins

https://player.vimeo.com/video/137862869

Putting the 'Relational' in 'Relational Databases'

## Table aliases
![Table Aliases](/static-images/sql-lessons/joins/table-aliases.png)

## Aliases in SELECT clauses
![Alias in SELECT](/static-images/sql-lessons/joins/alias-in-select.png)

## Aliases in ON clauses
![Alias in ON Clause](/static-images/sql-lessons/joins/alias-on-clause.png)

## JOINs in FROM
* specifies a table or set
* Join gives us all the fields from all the sets that match the ON clause

![Using ON in FROM](/static-images/sql-lessons/joins/using-on-in-from.png)

![ON In FROM](/static-images/sql-lessons/joins/on-in-from-2.png)

#### Using JOINS in the rest of our query
* The result of a JOIN is a set
* We can use fields from both sides of a join in SELECT, ORDER BY, and many other ways

Join gives us all the fields from all the combinations of rows that match the ON clause

![result of joins](/static-images/sql-lessons/joins/result-of-join.png)

## Three-way JOINs

A join of three tables can be accomplished with:

```sql
SELECT
  *
FROM
  country c_1 JOIN city ct ON c_1.code = ct.countrycode,
  country c_2 JOIN countrylanguage cl ON c_2.code = cl.countrycode
```

## JOINing on WITH
To join with a temporary table created from a WITH clause, use the name assigned to the temporary table. For example:

```sql
WITH populated_countries AS (
	SELECT *
	FROM
		country
	WHERE
		population > 0
)
SELECT *
FROM
  country c_1 JOIN populated_countries c ON c_1.code = c.code
```
The difference between `ON` and `USING` with `JOIN`s

`ON` is the more general of the two. You can join tables `ON` a column, a set of columns and even a condition. For example:
<div class="text-center">
<img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/58/original_JOIN_ON.png?1477430076" style="height: 300px;"/>
</div>
```sql
SELECT
	*
FROM
	country c JOIN
	city cy ON ( cy.countrycode = c.code) JOIN
	countrylanguages cl ON (cl.countrycode = c.code)
WHERE ...
```
`USING` is useful when both tables share a column of the exact same name on which they join. In this case, you can:

<div style="hieght: 100px;">
<img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/59/original_JOIN_USING.png?1477430091" />
</div>
```sql
SELECT
	*
FROM
  customer cust JOIN
	rentals ren USING (customer_id) JOIN
	inventory inv USING (inventory_id) JOIN
	films fil USING (film_id) JOIN
	film_categories fil_cat USING (film_id) JOIN
	category cat USING (category_id)
WHERE ...
```






# More with Joins

https://player.vimeo.com/video/137863295

## Outer Joins

In our countries database, how would we list all countries along with their capital cities?
What happens if some countries don't have a capital city record?

![left outer joins](/static-images/sql-lessons/joins-2/left-outer-join.png)

We can look for sets that specifically are missing the right side of a join

![left outer join with null](/static-images/sql-lessons/joins-2/left-outer-join-null.png)
# Challenges

### Country Database Join Challenge

Start by making a picture showing the tables of the database and how they relate (which columns represent the same information).

### Relatively Simple JOINS

NOTE: You don't actually need a join to get this information - try writing a query for this information once without a join, and once with.

* What languages are spoken in the United States? (12) Brazil? (not Spanish...) Switzerland? (4)
* What are the cities of the US? (274) India? (341)

### Languages

* What are the official languages of Switzerland? (4 languages)
* Which country or countries speak the most languages? (12 languages)
   * Hint: Use `GROUP BY` and `COUNT(...)`
* Which country or countries have the most official languages? (4 languages)
   * Hint: Use `GROUP BY` and `ORDER BY`
* Which languages are spoken in the ten largest (area) countries?
   * Hint: Use `WITH` to get the countries and join with that table
* What languages are spoken in the 20 poorest (GNP/ capita) countries in the world? (94 with GNP > 0)
   * Hint: Use `WITH` to get the countries, and `SELECT DISTINCT` to remove duplicates
* Are there any countries without an official language?
   * Hint: Use `NOT IN` with a `SELECT`
* What are the languages spoken in the countries with no official language? (49 countries, 172 languages, incl. English)
* Which countries have the highest proportion of official language speakers? The lowest?
* What is the most spoken language in the world?

### Cities

* What is the population of the United States? What is the city population of the United States?
* What is the population of the India? What is the city population of the India?
* Which countries have no cities? (7 not really contries...)

### Languages and Cities

* What is the total population of cities where English is the official language? Spanish?
   * Hint: The official language of a city is based on country.
* Which countries have the 100 biggest cities in the world?
* What languages are spoken in the countries with the 100 biggest cities in the world?
* Are there any countries without an official language? Hint: `WHERE ... NOT IN ( SELECT ... FROM ... WHERE ...)`

## DVD Rental Database Challenges
Hint: use `INTERSECT` or `OUTER JOIN` or `INNER JOIN`

* Which customer placed the rentals on the earliest date? What did they rent?
* Which product do we have the most of? Find the rental ids and customer names for all rentals for that item.
* What rentals have there been from Texas? In June 2005?
* How many rentals have we had for sci-fi films? From Texas?
* Which actors have not appeared in a Sci-Fi film?
* Find all customers who have not rented a Sci-Fi film.

## DVD Rental Outer Join Challenges
* What are the categories of the movies that were never rented?
* Which customers did not rent a movie in the second half of 2005?
* What was the total revenue in April 2007? In California?

[Go to SQL CRUD and Foreign Keys](./05rails__sql_crud_foreign_keys.md)

[Back to Intro to Postgres](./03rails_intro_postgres.md)
