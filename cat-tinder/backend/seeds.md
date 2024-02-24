# Cat Tinder API Seeds

#### Overview

Seeds are mock data that developers can load into the backend database and used during for scaffolding an application. Seeds will live with the application file structure rather than on each developer's personal computer.

#### Learning Objectives

- can define seeds
- can recognize the similarities and difference between Rails seeds and React mock data
- can populate a database with mock data

#### Vocabulary

- seeds
- idempotent

### Useful Commands

- $ `rails db:seed`
- $ `rails db:drop`

#### Additional Resources

- [Idempotentcy](http://whatis.techtarget.com/definition/idempotence)

### Troubleshooting Tips

If something goes wrong with your seeds file, just start fresh. Seeds files give us the power to easily drop the database, recreate, migrate, and seed.

- $ `rails db:drop`
- $ `rails db:create`
- $ `rails db:migrate`
- $ `rails db:seed`

---

### Seeds

One of the files that gets created in a new rails application is the `seeds.rb` file. It is located in the db directory. The seed file is a place to store mock data during development. Adding **seeds** allows us to populate our database with one command rather than manually importing cats one by one through the Rails console. It also allows everyone on the development team to have identical data on their individual computers.

**db/seeds.rb**

```ruby
cats = [
  {
    name: 'Felix',
    age: 2,
    enjoys: 'Long naps on the couch, and a warm fire.',
    image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80'
  },
  {
    name: 'Homer',
    age: 12,
    enjoys: 'Food mostly, really just food.',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80'
  },
  {
    name: 'Jack',
    age: 5,
    enjoys: 'Furrrrociously hunting bugs.',
    image: 'https://images.unsplash.com/photo-1492370284958-c20b15c692d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80'
  }
]

cats.each do |each_cat|
  Cat.create each_cat
  puts "creating cat #{each_cat}"
end
```

Notice that this is just plain old Ruby code. The format is a variable containing an array of objects. Seeds are very similar to the mock data created in our React application with one exception. In React, we had to give each cat an id attribute. In Rails, the seeds get added to the database which adds an id.

The advantage to using seeds is with this approach the content of the development database is in a file in the codebase rather than on each developer's computer. This allows us to clone a project and populate the database with a command rather than manually adding test data.

### Managing Seeds

To add seeds to the database, first we must create a database, create a model or resource, and run a migration.

To add seeds run the command $ `rails db:seed` in the terminal.

From there you can drop into the Rails console $ `rails c` and look for the cats with `Cat.all`. There will be a collection of cat hashes with unique ids, `created_at` timestamps, and `updated_at` timestamps.

### Idempotent

One thing to keep in mind is that every time you run $ `rails db:seed` the code will execute and add data to your database.

Creating a task that updates instead of creates new records every time after the first time is called **idempotent** and it is an interesting concept in programming and mathematics.

---

[Back to Syllabus](../../README.md#cat-tinder-backend)
