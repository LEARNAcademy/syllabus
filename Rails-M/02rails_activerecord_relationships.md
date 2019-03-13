# ActiveRecord One-to-Many Relationships

## Set Up Table

```
create table phones (
	id serial PRIMARY KEY,
	contact_id integer REFERENCES contacts(id) NOT NULL,
	number varchar,
	description varchar);

\d phones

insert into phones (contact_id, number, description) values (1, '555-1212', 'cell');
insert into phones (contact_id, number, description) values (1, '333-2121', 'wife');
```
* Note: the phone**s** table is **plural**

Check foreign key constraint:
```
insert into phones (contact_id, number, description) values (123, '666-7777', 'none');

ERROR:  insert or update on table "phones" violates foreign key constraint "phones_contact_id_fkey"
DETAIL:  Key (contact_id)=(123) is not present in table "contacts"
```

This fails because there is no contact with id 123.  Let's create one!

## Create Model

Create a file within `app/models` folder named `phone.rb` and in it create the class called Phone:
```
class Phone < ActiveRecord::Base
  belongs_to(:contact)
end
```

* Note: contact is **singular**

Change Contact to have many phones:
app/models/contact.rb
```
class Contact < ActiveRecord::Base
  has_many(:phones) # add this line
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

After making your Rails app and creating the database, create tables that reflect the following relationships using `psql`:
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
