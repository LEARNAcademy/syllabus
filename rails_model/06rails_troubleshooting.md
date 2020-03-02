# Troubleshooting

Methods need to be written within `rails c` **NOT** within your Rails model file. Save methods within a separate file from Rails app.

* `rails c` does not connect to the database.

  * Check the `database.yml` file within Rails is the same name as the database you created in `psql`. Refer to the [Active Record Intro](../01intro_active_record.md) tab to setup `database.yml` file.

* `uninitialized constant` error when trying to use Active Record, insure all files match naming convention. Be sure to check table names.

* `relation does not exist` error, after settting up a foriegn key, make sure the column that contains your foreign key matches to the other table's name (ex: `task_id` on your lists table, if the table you want to establish a relationship with is named tasks). For a correct example of setting up a foreign key: <a href="http://guides.rubyonrails.org/association_basics.html#the-belongs-to-association" target="_blank">Rails Doc</a>

* `method name not found` error. Check belongs_to and has_many parameters are singular and plural accordingly.

  * Good Example: belongs_to(:contact), has_many(:phones)
