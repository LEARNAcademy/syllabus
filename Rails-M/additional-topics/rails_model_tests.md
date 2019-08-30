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

Then, we'll set up `rspec` as our spec framework. To do this we'll add the `rspec-rails` gem to our `:development, :test` group in our **Gemfile**:

```ruby
group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'rspec-rails', '~> 3.8' # <--- Added this gem
end
```

Then we'll run a couple of commands:

```bash
bundle install
rails generate rspec:install
```

That will bundle `rspec-rails` in with our app and generate the files we'll need to start writing our tests.

## The Initial Requirements

We are building an application for storing the contact information of our users. That said it, is crucial for our app to have a name and email on record for each user.

What we need to build:
- Contact model
- Cannot be created without a name
- Cannot be created without an email

The requirements may change, so we may need to add some additional tests. But this is enough to get started.

