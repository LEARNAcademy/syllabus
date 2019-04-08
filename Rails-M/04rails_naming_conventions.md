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
