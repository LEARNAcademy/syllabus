# Cat Tinder API Seeds

## Overview
- Seeds are scaffolded data that developers can load into the backend database and use to bootstrap the application.
- Mock data is very useful during development to allow developers to test interactions.

## Learning Objectives
- Add seeds to the database

## Vocabulary
- seeds
- idempotent

## Useful Commands
- $ rails db:seed

## Additional Resources
- [Idempotentcy](http://whatis.techtarget.com/definition/idempotence)


## Seeds
Rails comes with a *seed.rb* file in the db directory. Seed is a place to store mock db data during development. Adding seed allow us to populate our database with one command rather than manually importing data.

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
  }
]

cats.each do |attributes|
  Cat.create attributes
end
```
Notice that this is just plain old Ruby code. We can put whatever we like in here, and every time we call `$ rails db:seed` it will be executed.

## Idempotent
One thing to keep in mind is that everytime your run `$ rails db:seed` the code will excute and add data to your database.

Creating a task that updates instead of creates new records every time after the first time is called "idempotent" and it is an interesting concept in programming and mathematics.

## Challenges
- Add cat seed to your Rails API

[Go to next lesson: Cat Tinder API Endpoints](./api_endpoints.md)

[Back to Cat Tinder API Introduction](./api_intro.md)

[Back to Syllabus](../../README.md)
