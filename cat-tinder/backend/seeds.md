# Cat Tinder API Seeds

### Overview
- Seeds are mock data that developers can load into the backend database and used during for scaffolding an application.
- Seeds will live with the application file structure rather than on each developer's computer.

### Learning Objectives
- Recognize the similarity between Rails seeds and React mock data
- Effectively add seeds to the database

### Vocabulary
- seeds
- idempotent

### Useful Commands
- $ rails db:seed
- $ rails db:drop

### Additional Resources
- [ Idempotentcy ](http://whatis.techtarget.com/definition/idempotence)

### Troubleshooting Tips
- Did you create your database?
- Did you migrate?
- Errors? Always look at the first error in the list.

### Seeds
One of the files that gets created in a new rails application is the `seeds.rb` file. It is located in the db directory. Seeds is a place to store mock data during development. Adding seeds allows us to populate our database with one command rather than manually importing data through the Rails console.

**db/seeds.rb**
```ruby
cats = [
  {
    name: 'Felix',
    age: 2,
    enjoys: 'Long naps on the couch, and a warm fire.'
  },
  {
    name: 'Homer',
    age: 12,
    enjoys: 'Food mostly, really just food.'
  },
  {
    name: 'Jack',
    age: 5,
    enjoys: 'Furrrrociously hunting bugs.'
  }
]

cats.each do |attributes|
  Cat.create attributes
  puts "creating cat #{attributes}"
end
```
Notice that this is just plain old Ruby code. The format is a variable containing an array of objects. Seeds are very similar to the mock data created in our React application with one exception. In React, we had to give each cat an id attribute. In Rails, the seeds get added to the database which adds an id.

The advantage to using seeds is with this approach the content of the development database is in a file in the codebase rather than on each developer's computer. This allows us to clone a project and populate the database with a command rather than manually adding test data.

## Managing Seeds
To add seeds to the database, first we must create a database, create a model or resource, and run a migration.

To add seeds run the command `$ rails db:seed` in the terminal.

From there you can drop into the Rails console `$ rails c` and look for the cats with `Cat.all`. There will be a collection of cat hashes with unique ids, created_at timestamps, and updated_at timestamps.

## Troubleshooting
If something goes awry with the seeds file, we can use a couple commands to simply reset the database.

```
$ rails db:drop
$ rails db:create
$ rails db:migrate
$ rails db:seed
```

## Idempotent
One thing to keep in mind is that every time your run `$ rails db:seed` the code will execute and add data to your database.

Creating a task that updates instead of creates new records every time after the first time is called [ idempotent ](http://whatis.techtarget.com/definition/idempotence) and it is an interesting concept in programming and mathematics.

## Challenge: Cat Tinder API Seeds
As a developer, I have been commissioned to create an application where a user can see cute cats looking for friends. As a user, I can see a list of cats. I can click on a cat and see more information about that cat. I can also add cats to the list of cats looking for friends. If my work is acceptable to my client, I may also be asked to add the ability to remove a cat from the list as well as edit cat information.

- As a developer, I can add cat seeds to the `seeds.rb` file
- As a developer, I can run the rails command to add cats to database

---
[Back to Syllabus](../../README.md#cat-tinder-backend)
