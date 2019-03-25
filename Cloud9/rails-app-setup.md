PG setup steps:
sudo yum install postgresql
sudo yum install postgresql-server
sudo yum install postgresql-devel
sudo service postgresql92 initdb
sudo service postgresql92 start

For Rails:
```gem install rails```

Then we can create a new Rails application:
```
rails new wildlife_tracker -T -d postgresql
```

Add ‘rspec-rails’ to the Gemfile, around line 39
```
group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'rspec-rails'
end
```
then ‘bundle’

Next, we need to add the user we’re logged in as to Postgres:

```
sudo su postgres
psql
```
Inside the PSQL cli, run the following query:
```
CREATE USER "ec2-user" SUPERUSER;
```

At this point, we’re ready to create our Database in our rails application:

```
bundle exec rails db:create
```
