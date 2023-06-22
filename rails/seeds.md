# Rails Database Seeds

#### Overview

During development, database information only exist locally. This means that the data in the database is not able to be shared between developers working on different computers. Seed files live in the application structure and hold mock data along with the appropriate Active Record queries that will populate a local database. This allows developers to work on uniform data while on different computers.

#### Learning Objectives

- can define seeds
- can explain the difference between code in a Rails file structure and code in the development database
- can execute the appropriate command to populate a local database with seed data

#### Vocabulary

- seed data

#### Useful Commands

- $ `rails db:seed`
- $ `rails db:drop`

#### Process

- $ `rails new rails-seeds -d postgresql -T`
- $ `cd rails-seeds`
- $ `rails db:create`
- $ `rails server`

#### Troubleshooting Tips

- Did you create your database?
- Errors? Always look at the first error in the list.

---

### Seeds in Rails

During development, databases are created on our local computers. All the code added to the database is only available to that computer. This means we cannot share database content via GitHub. However having uniform data available to the whole development team is important to creating quality code. Luckily, Rails offers us a cool tool to solve this issue.

In our Rails app, there is a file called `seeds.rb` located in the `db` directory. This file is used to store Ruby code that can be executed via a terminal command to populate the database. The code within this file is referred to as **seed data**, and it provides a baseline of database code. Additionally, it guarantees that developers working on different machines have access to the same database information.

### Creating a Model

In order to have seeds, we have to first have a database structure. With these next steps, assume we have already created a Rails application and created a database.

```bash
$ rails generate model HardwareStore item:string price:string
$ rails db:migrate
```

Now we are ready to populate our database with seed data. One way to achieve this goal is to open the Rails console and adding individual items using an Active Record query. But that would require that every developer on the team add the same data by hand. So instead, we can create and execute a seed file.

### Creating Seeds

While there are several ways to create the code in a seed file, ultimately it is just Ruby code that is being passed into an Active Record query.

In this example we are creating an array of hashes. Each key in the hash matches the column name for the `HardwareStore` model.

**db/seeds.rb**

```ruby
hardware = [
  {
    item: 'hammer',
    price: '$7.95',
  },
  {
    item: 'nail',
    price: '$0.05',
  },
  {
    item: 'duct tape',
    price: '$3.95',
  }
]

hardware.each do |attribute|
  HardwareStore.create attribute
  puts "creating #{attribute}"
end
```

We are running an `.each` block on the array of hashes and creating a new Active Record entry for each item in the array.

### Troubleshooting

If something goes awry with the seeds file, we can use a couple commands to simply reset the database. This can be done my dropping the existing database, creating a new one, and running the seeds file.

```bash
$ rails db:drop
$ rails db:create
$ rails db:migrate
$ rails db:seed
```

---

[Back to Syllabus](../README.md#unit-five-intro-to-postgres-and-ruby-on-rails-models)
