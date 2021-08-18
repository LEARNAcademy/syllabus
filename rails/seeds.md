# Rails Database Seeds

## Overview
- During development, database information only lives on the computer where it was created.
- Seed files allow developers to share database information during the development phase of an application.

## Learning Objectives
- Can explain the difference between code in a Rails file structure and code in the database
- Can use the terminal commands to populate a database with seed data

## Vocabulary
- Seed data

## Useful Commands
- $ rails db:seed

## Set Up

#### Creating a new Rails app:
```
$ rails new hardware_app -d postgresql -T
$ cd hardware_app
$ rails db:create
$ rails server
```

### Troubleshooting Tips
- Did you create your database?
- Did you migrate?
- Errors? Always look at the first error in the list.

### Seeds in Rails
During development, databases are created on local machines. All the code added to the database is only available in that database. This means we cannot share database content via GitHub. Luckily, rails offers us a cool tool to help with this problem.

There is a file in the `db` directory in our Rails app called `seeds.rb` where we can store Ruby code that will  populate the database with a terminal command called **seed data**. This gives us a baseline of database code. It also ensures developers working on different machines have access to the same database information.

### Creating a Model
In order to have seeds, we have to first have a database structure. These next steps assume we have already created a Rails application and created a database.

```
$ rails generate model HardwareStore item:string price:string
$ rails db:migrate
```

Now we are ready to populate our database with mock data. We can do this by opening the Rails console and adding individual items. *Or* we can do this by creating and running a seeds file.

### Creating Seeds
While there are several ways to create the code in a seed file, ultimately it is just Ruby code that is being passed into an Active Record method.

In this example we are creating an array of hashes. Each key in the hash matches the column name for the HardwareStore table.

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

```
$ rails db:drop
$ rails db:create
$ rails db:migrate
$ rails db:seed
```

---
[Back to Syllabus](../README.md#unit-five-intro-to-postgres-and-ruby-on-rails-models)
