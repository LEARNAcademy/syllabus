# Better Params: Strong Parameters

As part of managing form parameters in Rails, versions of Rails 4+ also have a feature known as "strong parameters" or "whitelisting". It is a way for us to manage exactly what goes into creating new object instances, and helps us keep unwanted information -- usually from malicious hackers -- out of the database.

A controller's strong parameters will be all the way down at the bottom of the file and will look something like this:

controllers/contacts_controller.rb
```ruby
def contact_params
	params.require(:contact).permit(:name, :phone, :email, :address)
end
```

In this method if the application asks for `contact_params`, those parameters will require a Contact object, formatted into a hash. At this step in the process, a new Contact will look something like this:
```
{
  :contact => {

  }
}
```

Inside of that Contact hash, the `contact_params` method allows parameters like name, phone, email, and address. These are the pieces of information that can be saved into the database as part of a Contact.
```
{
  :contact => {
              :name => 'Eleanor',
              :phone => '1-800-WHITE-HOUSE',
              :email => 'eleanor@rooselvelt.com'
  }
}

```

We can safely assume that these parameters correspond to columns in the Contacts table.

In the controller's `create` method, we can see that this list is referenced when making new Contacts:

```ruby
def create
    @contact = Contact.new(contact_params)
	...
end
```

Most of the time, strong parameters are a feature we don't have to think about. If we want to add a new attribute to Contact, however, it's important to remember to add it to the strong parameters list. Otherwise, our form for creating new Contacts will silently drop the information we've told it to ignore. For example, if we created a new column for storing fax numbers without updating our `contact_params` method, the response in the Rails server would look like this:

```
Started POST "/contacts/" for ::1 at 2016-09-14 14:27:56 -0700
Processing by ContactsController#create as HTML
  Parameters: {"contact"=>{"name"=>"test", "phone"=>"555-1212", "email"=>"test1@test.com", "address"=>"123 main st", "fax"=>"123-1234"}}
Unpermitted parameter: fax
```

We can see all of the parameters being sent in, but our controller recognized "fax" as an unpermitted parameter and won't save it to the database. If we update our method:

controllers/contacts_controller.rb
```ruby
def contact_params
	params.require(:contact).permit(:name, :phone, :email, :address, :fax)
end
```

Now the entire Contact, fax number and all, will successfully be saved.

## Validations and Strong Params Challenges

### Challenge 1

Recall the Account model from the validations challenges. Your challenge is to connect that functionality to a form.

#### Stories:

- As a user, I see a form asking for my username, password and email
- As a user, I receive an error message and am asked to try again if my form is incomplete
- As a user, I can see how my form was incomplete
- As a developer, I need to protect my database from sql injections from the user sign up form
- As a user, I see a user creation success page, when I've correctly filled out the form

### Challenge 2: Store Order Scheduler

You have been tasked with creating an application to allow store owners to generate customer accounts and schedule orders for their products (office supplies, restaurant inventory/groceries, video games, food, your choice). You have to make sure that every order is complete with all the required information.

#### Stories:

- As a store owner,  I need to generate customer accounts that require a first name, last name, email, phone number
- As a store owner, I need customer emails to be unique
- As a store owner, I need to generate orders that require belong to a customer
- As a store owner, I need each order to have a product name and quantity

- As a store owner, I see a new customer form
- As a store owner, I can add a customer account through the form
- As a store owner, I can see an error if the form lacks information
- As a store owner, I can see how the form was incomplete

- As a store owner, I see an order form that asks for a product, quantity, customer account, and an estimated shipment date
- As a store owner, I can submit an order
- As a store owner, I can see an error if my order form lacks information
- As a store owner, I can see how my order form was incomplete

#### Super Stretch Challenges
- As a store owner, I can see pending orders
- As a store owner, I can see my pending orders by account