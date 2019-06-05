## Add some seeds
Seeds are some initial data loaded into the backend database that we can use to bootstrap our application. Rails comes with a seed.rb file, and a rake task that knows how to read that file and follow its instructions.  All we need to do to load up some data is add a few lines to ```db/seeds.rb``` and run ``` $ rake db:seed ``` from the command line.  One thing to keep in mind is that we want to be able to create new records the first time, but also when we run the seed command over and over again and have it update our records instead of creating more and more records.  This will allow us to make updates to our seeds, re-run the rake command, and have updated data in our database.  With a little thought, and by making use of some nifty tools that Rails provides, we can accomplish just this.

**Idempotent**

Btw, creating a task that updates instead of creates new records every time after the first time is called "idempotent" and its an interesting concept in programming and mathematics.  You can learn more about [idempotentcy here](http://whatis.techtarget.com/definition/idempotence)

#### db/seeds.rb
```ruby
cat_attributes = [
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

cat_attributes.each do |attributes|
  Cat.create(attributes)
end
```
Notice that this is just plain old Ruby code, we can put whatever we like in here, and every time we call ```rake db:seed``` it will be executed.

```
$ rails db:seed
```

#### Where to go from here

[Go to Cat Tinder: API Endpoints](./03cat_tinder_API_Endpoints.md)

[Back to Cat Tinder: Seeds](./01cat_tinder_setup.md)

[Back to Syllabus](../../README.md)
