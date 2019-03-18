# ActiveRecord One-to-Many Relationships

## Read the Docs
There is a lot to ActiveRecord relationships.  Read the documentation to see all the ways that ActiveRecord can [help you leverage the power of SQL relationships](https://guides.rubyonrails.org/association_basics.html)

## Set Up Table

From the Command line:

```bash
bundle exec  rails generate migration CreatePhones
```

Fill out the migration with:

```ruby
class CreatePhones < ActiveRecord::Migration[5.2]
  def change
    create_table :phones do |t|
      t.integer :contact_id
      t.string :number
      t.string :description
      t.timestamps
    end
  end
end
```

* Note: the phone**s** table is **plural**
* Note: contact_id is the foreign key, it always goes on the 'belongs_to' side of a relationship
*
## Create Model

Create a file within `app/models` folder named `phone.rb` and in it create the class called Phone:
```
class Phone < ApplicationRecord
  belongs_to :contact
end
```

* Note: contact is **singular**

Change Contact to have many phones:
app/models/contact.rb
```
class Contact < ApplicationRecord
  has_many :phones  # add this line
end
```
* Note: phone**s** is **plural**

## Access Phones

In rails c, get hold of a contacts's phones:

```ruby
joe = Contact.find_by_email('joe@home.com')
joe.phones
```

Add a phone to the contacts's collection of phones:

```ruby
# Create a new phone
phone = Phone.new
phone.number = "999-8888"
phone.description = "Car Phone"
joe = Contact.find_by_email('joe@home.com')
# Make it Joe's phone
joe.phones << phone
phone.save
```

Now that a phone exists and belongs to a contact, you can access the contact it belongs to by simply:

```ruby
phone = Phone.all.first
phone.contact
```

Notice that we do not have to use any IDs, foreign keys or joins -- life is good!





# Challenges

## Create a Database

After making your Rails app and creating the database, create migrations to generate the following tables: 
A credit card has a number, an expiration date, and an owner. An owner has a name and address, and can have multiple credit cards.

## Manipulating Data

Using ActiveRecord in `rails console`:

* Create an owner and save them in the database
* Create a credit card in the database for that owner
* Create another owner with two other credit cards

Check that everything is in the database from `psql`.

### Stretch Challenge

* Using `psql`, add a credit limit to each card
* Using ActiveRecord in `rails console`, find the total credit extended to the owner with two credit cards
