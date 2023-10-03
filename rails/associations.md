# Active Record Associations

### Overview

Active Record models describe the structure of the database. A single model can have as many columns as necessary. However, there are natural limitations on how data can be organized within a single model. Creating multiple database models allows for the option of relationships between datasets. These relationships are called associations. Associations keep our databases well organized by creating a cross-reference between tables using the primary key of one entry to connect one or more entries on another table.

#### Previous Lecture (55 min)

[![YouTube](http://img.youtube.com/vi/wjmzwO71Mp0/0.jpg)](https://youtu.be/wjmzwO71Mp0)

#### Learning Objectives

- can define associations
- can describe the purpose of associations
- can describe the purpose of a has_many belongs_to relationship
- can define foreign key
- can apply the correct naming conventions for generating Rails belongs_to models
- can apply the correct syntax to add content to associated databases in the Rails console

#### Vocabulary

- associations
- foreign key

#### Additional Resources

- [Active Record Association Docs](https://guides.rubyonrails.org/association_basics.html)

### Processes

#### Introductory Phase Documentation:  
During the introductory phase of Ruby on Rails, we will create documentation to keep track of the actions taken to build the Rails application and interactions with the database. This documentation will be saved in a markdown file, which will be uploaded to GitHub. This allows other team members to contribute and access the team's code.

#### Process for GitHub Repository:
- cd into the database-challenges repository
- Create a new branch: $ `git checkout -b associations-initials1-initials2` (ex. associations-sp-cb)
- Create a new markdown file: $ `touch associations-student1-student2.md` (ex. associations-sarah-charlean.md)
- Use the markdown file to document the code commands and process
- Code!  

However, please note that the Rails application itself will not be uploaded to GitHub. Consequently, other team members will not have access to the application or the database through the repository. The application and database will only be available on your local machine. For the duration of the challenges, all team members should create their own Rails applications on their respective local machines. After the challenges are completed, it is important to drop and delete the Rails application from your local machine.  

#### Process for Rails Application on Local Machine:
- cd to your Desktop
- $ `rails new associations -d postgresql -T`
- cd into the project
- $ `rails db:create`
- Open the project in a text editor
- Open a new terminal tab (command + t)
- Begin the rails server: $ `rails server`
- In a browser navigate to: http://localhost:3000

#### Dropping/Deleting a Rails Application
- Drop the database: $ `rails db:drop`
- cd to your Desktop
- Permanently delete the rails app: $ `rm -rf <app-name>`

#### Useful Commands

- `rails db:migrate`

### Troubleshooting Tips

- Did you create your database?
- Did you migrate?
- Did you define your associations in the model class files?
- Errors? Always look at the first error in the list.
- Did you forget your foreign key? Migrations are your friend!

---

### Database Relationships

Data is the foundation of all full-stack applications. Thinking through the organization of the data is an important first step in the development process. When thinking about the optimal structure of data, we must first consider what information the user will need and how the user will interact with that information. Then we have to translate that into the structure of a relational database consisting of columns and rows. Applications often require real-world data that doesn't fit neatly into a single row of a table. To address this problem it is common to create multiple models and assign relationship between them. Relationships between two or more database models are called **associations.**

### A Case For Multiple Models

Think about a situation where we are tracking contact information for people. Perhaps for some kind of HR software or a personal communication management tool. We would want a model for Person that has a column for a name, a column for a phone number, and a column for an email address. This seems straight forward so far and could be handled in a single database Person model.

However, what if many of our people have two email addresses? We could add a second column to store an additional email address. But what if one of our people had three email addresses? Or four? Does it make sense to just keep adding columns? If we have four columns for emails and someone only has one email address, we are left with three empty attributes in that particular database entry. Now our single table doesn't seem to be very effective at solving this problem.

### Has Many Belongs To

In the situation above we can solve the problem by taking the email off the Person model and giving email its own model. Each instance of the Person model would have as many corresponding emails as they need. When creating email addresses, we would want to ensure that every email was attached to a person. Email addresses shouldn't exist independently. We would describe this relationship as a has_many belongs_to association. A person has_many emails. Every email belongs_to a person.

### Types of Relationships

There are three general categories of database relationships:

- one-to-many
- one-to-one
- many-to-many

Within the context of a Rails application, Active Record defines specific types of associations that can be assigned to a given model:

- belongs_to
- has_one
- has_many
- has_many :through
- has_one :through
- has_and_belongs_to_many

For this section we will primarily focus on the has_many belongs_to Active Record associations which falls under the one-to-many category.

### Person and Email Relationship

In the example above, we defined an association between the models for Person and Email. A person has_many emails and email belongs_to a person.

Let's explore how to build this database association in our Rail application.

### Person Model

We'll start by creating the Person model. Our person will have a name and phone number. Naturally the name attribute will be a data type of string. The phone number will also be a string. The reasoning behind this decision comes down to how we interact with the data. While phone numbers are, of course, made up of integers, they aren't used in mathematical operations. Often phone numbers contain non-integer characters such as parentheses and dashes. And when you think about a phone number, it isn't one number. We don't say our phone numbers as 16,194,400,830. Phone numbers are really a collection of individual characters, which happens to sound a lot more like a string.

```bash
$ rails generate model Person name:string phone:string
$ rails db:migrate
```

After running a migration we can look at our schema and see our people table.

**db/schema.rb**

```ruby
ActiveRecord::Schema[7.0].define(version: 2023_09_13_001632) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "people", force: :cascade do |t|
    t.string "name"
    t.string "phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
```

Now, we can add some people to the database in the Rails console.

```
$ rails c
> Person.create(name: "John", phone: "(619)555-3456")
> Person.create(name: "Jane", phone: "(619)555-7890")
> Person.all
```

The output in the Rails console:

```
Person Load (0.9ms)  SELECT "people".* FROM "people"
 =>
[#<Person:0x0000000111f639b8
  id: 1,
  name: "John",
  phone: "(619)555-3456",
  created_at: Wed, 13 Sep 2023 00:21:34.836131000 UTC +00:00,
  updated_at: Wed, 13 Sep 2023 00:21:34.836131000 UTC +00:00>,
 #<Person:0x0000000111f63878
  id: 2,
  name: "Jane",
  phone: "(619)555-7890",
  created_at: Wed, 13 Sep 2023 00:21:39.907732000 UTC +00:00,
  updated_at: Wed, 13 Sep 2023 00:21:39.907732000 UTC +00:00>]
```

### Foreign Key

Remember that whenever we add a new entry to the database, Rails will automatically add a primary key. The primary key column is called id. Every id is assigned an integer that increments with each entry. The primary key is a unique identifier. Since we know that every database entry has a unique id, we can use the primary key to connect an email to its person.

In order to connect a primary key to another database entry we need a column in the model. The column that holds the primary key from another model in order to establish an association is called a **foreign key**. Since we have one person that can have many emails, it makes sense to have the primary key of a person serve as the foreign key on all of the person's emails. This is true of all has*many belongs_to associations. \_The foreign key will ALWAYS live on the belongs_to side.*

### Email Model

Knowing the foreign key must be on the Email model, we can now generate the model for Email. The Email model will have an attribute for address and another one for the foreign key. The name of the foreign key column will ALWAYS be the name of the has_many model appended by underscore id `_id`. Since our model is named Person the foreign key column will be `person_id`. The data type will be an integer as the primary key of all Rails database entries is an integer.

```bash
$ rails generate model Email address:string person_id:integer
$ rails db:migrate
```

After we run the migration we can see the updated schema.

**db/schema.rb**

```ruby
ActiveRecord::Schema[7.0].define(version: 2023_09_13_025129) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "emails", force: :cascade do |t|
    t.string "address"
    t.integer "person_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "people", force: :cascade do |t|
    t.string "name"
    t.string "phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
```

### Model Association Definitions

We now have two models in our application. The Email model has space for a foreign key but there is nothing in the models that describe their relationship. We need to define the associations in the Person model class and the Email model class.

**app/models/person.rb**

```ruby
class Person < ApplicationRecord
  has_many :emails
end
```

Notice that `emails` is plural. This is a Rails convention that is based off the type of association we are creating. A person can have many emails.

**app/models/email.rb**

```ruby
class Email < ApplicationRecord
  belongs_to :person
end
```

Notice that `person` is singular. This is a Rails convention to communicate that every email belongs to one person.

### Creating Emails

Now it is time to create emails in the Rails console. There are two important things to remember:

1. Rails creates all primary keys and developers should never manipulate primary keys, and
2. emails cannot exist without being attached to a person.

Since all emails must be attached to a person, we will start by creating a variable to hold one instance of Person. We have lots of different Active Record methods that allow us to select one Person. For this example, we will use the `.first` method.

```
$ rails c
> john = Person.first
```

We can name the variable whatever we want as long as it communicates intent and follows the Ruby variable casing convention. Since we are working in the Rails console, the variable will only exist while we are in this session. When we exit the Rails console the variable will not persist.

Since we defined the association between Person and Email in the model class files, email is now an attribute on each person.

We can see this by calling `emails` on our `john` variable.

```
> john.emails
```

The output in the Rails console:

```
Email Load (0.7ms)  SELECT "emails".* FROM "emails" WHERE "emails"."person_id" = $1  [["person_id", 1]]
=> []
```

Currently there are no emails connected to John, but the empty array proves that the email connection exist.

Now we can create a new email. We are creating a new email directly on the John person instance. This allows Rails to make the connection between primary key and foreign key. Having Rails in charge of this connection removes all possibility of developer error when it comes to unique identifiers.

```
> john.emails.create(address: "john@exmple.com")
```

The output in the Rails console:

```
TRANSACTION (0.2ms)  BEGIN
Email Create (2.0ms)  INSERT INTO "emails" ("address", "person_id", "created_at", "updated_at") VALUES ($1, $2, $3, $4) RETURNING "id"  [["address", "john@exmple.com"], ["person_id", 1], ["created_at", "2023-09-13 03:10:26.359049"], ["updated_at", "2023-09-13 03:10:26.359049"]]
TRANSACTION (0.9ms)  COMMIT
 =>
#<Email:0x000000014a0570a8
 id: 1,
 address: "john@exmple.com",
 person_id: 1,
 created_at: Wed, 13 Sep 2023 03:10:26.359049000 UTC +00:00,
 updated_at: Wed, 13 Sep 2023 03:10:26.359049000 UTC +00:00>
```

Notice this command adds John's email to the emails database table. Each instance in this emails table has its own primary key. The column `person_id` has an integer value that is the same as John's primary id. We can examine this further by adding more emails for John.

```
> john.emails.create(address: "john-personal@exmple.com")
> john.emails.create(address: "john-work@exmple.com")
```

Each time we add an email for John, the email entry gets a primary id. All emails will connect to John through the `person_id` that will hold John's primary key.

```
> john.emails
```

```
 =>
[#<Email:0x000000014a0570a8
  id: 1,
  address: "john@exmple.com",
  person_id: 1,
  created_at: Wed, 13 Sep 2023 03:10:26.359049000 UTC +00:00,
  updated_at: Wed, 13 Sep 2023 03:10:26.359049000 UTC +00:00>,
 #<Email:0x0000000139f4ba98
  id: 2,
  address: "john-personal@exmple.com",
  person_id: 1,
  created_at: Wed, 13 Sep 2023 03:20:59.182446000 UTC +00:00,
  updated_at: Wed, 13 Sep 2023 03:20:59.182446000 UTC +00:00>,
 #<Email:0x0000000129a5d028
  id: 3,
  address: "john-work@exmple.com",
  person_id: 1,
  created_at: Wed, 13 Sep 2023 03:21:21.831060000 UTC +00:00,
  updated_at: Wed, 13 Sep 2023 03:21:21.831060000 UTC +00:00>]
```

### Adding More Emails

We can add additional emails for the other person in our database.

```
> jane = Person.second
> jane.emails.create(address: "jane@example.com")
```

Now as we look at all the emails in the database we can see that each email has a primary key. The foreign key column `person_id` holds the corresponding primary key of the person.

```
> Email.all
```

The output in the Rails console:

```
Email Load (1.0ms)  SELECT "emails".* FROM "emails"
 =>
[#<Email:0x0000000149cdff10
  id: 1,
  address: "john@exmple.com",
  person_id: 1,
  created_at: Wed, 13 Sep 2023 03:10:26.359049000 UTC +00:00,
  updated_at: Wed, 13 Sep 2023 03:10:26.359049000 UTC +00:00>,
 #<Email:0x0000000149cdfda8
  id: 2,
  address: "john-personal@exmple.com",
  person_id: 1,
  created_at: Wed, 13 Sep 2023 03:20:59.182446000 UTC +00:00,
  updated_at: Wed, 13 Sep 2023 03:20:59.182446000 UTC +00:00>,
 #<Email:0x0000000149cdfbf0
  id: 3,
  address: "john-work@exmple.com",
  person_id: 1,
  created_at: Wed, 13 Sep 2023 03:21:21.831060000 UTC +00:00,
  updated_at: Wed, 13 Sep 2023 03:21:21.831060000 UTC +00:00>,
 #<Email:0x0000000149cdfa38
  id: 4,
  address: "jane@example.com",
  person_id: 2,
  created_at: Wed, 13 Sep 2023 03:30:46.711836000 UTC +00:00,
  updated_at: Wed, 13 Sep 2023 03:30:46.711836000 UTC +00:00>]
```

### Troubleshooting Tip

It is an easy mistake to forget a foreign key when generating a belongs_to model. It is also a common mistake to mislabel the column or to make a mistake when assigning the data type. If this happens, migrations are our friend! Create a migration to update the database.

---

### 💳 Challenge: Banking Application

As a developer, I have been tasked with creating a database to store information for a bank that issues credit cards. The account owner must fill out a bank application that includes their name and address. Then account owners can be issued one or more credit cards. Credit cards must belong to an account owner.

### ✔️ Acceptance Criteria

- The banking application data should be managed by a PostgreSQL database in a Rails application.
- An account owner should have a name and an address.
- There should be at least three owners in the database.
- A credit card has a number and an expiration date.
  - Remember! Credit cards CANNOT exist without an account owner.
  - Think about the purpose of each data type and what characters are necessary in each column. (Example: 02/2023 vs 02-02-2023)
- Each account owner should have at least one credit card.
- At least one account owner should have three credit cards.

### 🏔 Stretch Goals

- Add a credit limit to each card.
- Find the total credit extended to an owner who has multiple credit cards.

---

[Back to Syllabus](../README.md#unit-five-intro-to-postgres-and-ruby-on-rails-models)
