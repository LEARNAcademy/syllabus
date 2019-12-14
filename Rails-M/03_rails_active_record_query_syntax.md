# Active Record Query Syntax

Rails and ActiveRecord have an incredibly rich query syntax to help your code that looks up information in the database readable and maintainable.  We only need to learn a few rules specific to ActiveRecord in order to unlock a powerful tool to interact with the database.

This lecture is going to cover a few methods that we need to complete the ActiveRecord Countries challenge.  There are many, many more.  The best place to go for more information is the Rails [ActiveRecord docs](https://guides.rubyonrails.org/active_record_querying.html) themselves.

## where

### First
Our first example will find the first country in the database with a code of 'RUS' :
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

That opens up a whole new realm of possibilities, doesn't it?  If you can dream up a query you want to run, you can probably do it with ActiveRecord's flexible where method.

### Order, and limit

Want to get the first record based on one column in the database?  We can do that with ActiveRecord like this:

```ruby
country = Country
  .order("surfacearea ASC")
  .limit(1)
  .first

# generates the sql:
# "SELECT \"country\".* FROM \"country\" ORDER BY surfacearea ASC LIMIT 1"

# note: "surfacearea DESC" would reverse that sort over
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


## So much more to discover
ActiveRecord is a crown jewel of the Rails framework.  There is much more to learn and take advantage of here by practicing and exploring the [documentaiton](https://guides.rubyonrails.org/active_record_querying.html).
