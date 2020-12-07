# Testing Models With RSpec

### Overview
- Validations are essential to protecting an application's data.
- Implement specs using a TDD approach to demonstrate how specs can help you define your objectives.

### Learning Objectives

### Vocabulary
- Specs
- TDD

### Set Up

#### Creating a new Rails app:
```
$ rails new contact_app -d postgresql -T
$ cd contact_app
$ rails db:create
$ bundle add rspec-rails
$ rails generate rspec:install
$ rails server
```

In a browser navigate to:
`http://localhost:3000`

### Model Specs
One of the most important things we can do to protect our database is to add Active Record validations. With validations, we are building a solid foundation for the core of the application: **data**. However, the implementation of validations are not complete without a strong suite of tests.

A good test suite will tell you a great deal about how a piece of code is intended to function. Good model specs help to define what pieces of information are crucial for the functionality of the app and how the models are intended to be used in the application.

To demonstrate setting up model tests, we'll use our familiar contact model example.

Additionally, we'll implement the specs using a TDD approach to demonstrate how specs can help you define your objectives.

The install commands for RSpec will bundle `rspec-rails` in with our app and generate the files we'll need to start writing our tests.

### The Initial Requirements

We are building an application for storing the contact information of our users. That said it, is crucial for our app to have a name and email on record for each user.
- Contact cannot be created without a name
- Contact cannot be created without an email

The requirements may change, so we may need to add some additional tests. But this is enough to get started.

### Initial Specs

First we'll set up the model using a generator:

```bash
$ rails generate model Contact name:string email:string
```

Then we can run our migration:

```bash
$ rails db:migrate
```

This is a good point to set up the specs for the contact model. `rspec-rails` provides a command to set up a file for a model spec:

```bash
rails generate rspec:model contact
```

This command will generate our spec file at this path **spec/models/contact_spec.rb**.

To test out our spec setup we can run `rspec`. If it's set up correctly, we'll see pending tests for our contact model:

![Pending Tests](../assets/rspec-models-pending.png)

That pending message is set up in the generated spec file (**spec/models/contact_spec.rb**):

```ruby
require 'rails_helper'

RSpec.describe Contact, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
```

We'll update this file with our first requirement:

```ruby
RSpec.describe Contact, type: :model do
  it "must have a name" do
      contact = Contact.create
      expect(contact.errors[:name]).to_not be_empty
  end
end
```

Here our spec checks that there are errors for the name field if we attempt to create a contact without a name.

When we run our specs we should see it fail as expected, receiving an empty errors array for the name field.

![Failing Name Presence](../assets/rspec-models-failing.png)

We write just enough code for it to pass.

We'll update **contact.rb** with a presence validation:

*app/models/contact.rb*
```ruby
class Contact < ApplicationRecord
  validates :name, presence: true
end
```

When we run our specs again, we'll see it pass.

![Failing Name Presence](../assets/rspec-models-passing.png)

Let's go ahead and apply a presence validation to emails as well.

First we'll add a test case for it:

```ruby
RSpec.describe Contact, type: :model do

  #...name test case...

  it "must have an email" do
      contact = Contact.create
      expect(contact.errors[:email]).to_not be_empty
  end
end
```

When we run `rspec`, that case should fail until we add an email presence validation to our model:

```ruby
class Contact < ApplicationRecord
  validates :name, :email, presence: true
end
```

Here we just added `:email` to our list of required attributes. When we run `rspec` again, we're passing.

## Additional Requirements

We may decide that we need to protect our data from duplicate contact entries. We can start to spec this out in a test.

We'll add this to **contact_spec.rb**:

```ruby
  it "does not allow duplicate contacts" do
      Contact.create(name: "bob", email: "bob@example.com")
      new_contact = Contact.create(name: "bob", email: "bob@example.com")
      expect(new_contact.errors[:email]).to_not be_empty
  end
```

Here we've created a contact and then attempted to create a contact with the same email. Essentially we want to eliminate the possibility of duplicates through a validation on emails.

We'll update our **contact.rb** to pass this test:

```ruby
class Contact < ApplicationRecord
  validates :name, :email, presence: true
  validates :email, uniqueness: true # <--- new validation
end
```

If we run our tests now, we'll see that we're passing.

This is the workflow that we can use to add model tests as the required data for our application evolves. As you are writing specs, it often helps to think of other ways that bad data can break your application. When you can think about your application in this way, you can begin to see the other ways that your data ought to be tested.

## Challenges
