# Testing Models With Rspec

You now know how to harden your Rails models to protect your databases using ActiveRecord validations. With validations, you are building a solid foundation for the core of your application, your data. However, no implementation is complete without a strong suite of tests.

Remember, a good test suite will tell you a great deal about how a piece of code is intended to function. Good model specs help to define what pieces of information are crucial for the functionality of your app and how your models are intended to be used in your application.

To demonstrate setting up model tests, we'll use our familiar contact model example. Additionally, we'll implement the specs using a BDD approach to demonstrate how specs can help you define your objectives.

## The Setup

We'll start with a basic Rails app:

```bash
rails new contact-app -d postgresql -T
rails db:create
```

## The Initial Requirements

We are building an application for storing the contact information of our users. That said it, is crucial for our app to have a name and email on record for each user.

What we need to build:
- Contact model
- Cannot be created without a name
- Cannot be created without an email

The requirements may change, so we may need to add some additional tests. But this is enough to get started.






