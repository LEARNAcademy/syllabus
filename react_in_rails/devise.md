# Devise
[![YouTube](http://img.youtube.com/vi/ypXAYSn4PqY/0.jpg)](https://www.youtube.com/watch?v=ypXAYSn4PqY)

## Overview
Using the Devise gem to create authentication and authorization for a React in Rails application

## Learning Objectives
- Understanding the difference between authorization and authentication
- Interacting with the Devise generated User model

## Vocabulary
- authentication
- authorization

## Additional Resources
- [Authentication vs Authorization](./authentication-vs-authorization.md)
- [Devise](https://github.com/plataformatec/devise)
- [Devise Github Repo](https://github.com/plataformatec/devise#getting-started)


### Set Up Devise
- $ rails new devise_app -d postgresql -T
- $ cd devise_app
- $ bundle add devise
- $ rails generate devise:install
- $ rails generate devise User
- $ rails db:create
- $ rails db:migrate


- navigate to `http://localhost:3000/users/sign_in` and see a log in page
- navigate to `http://localhost:3000/users/sign_up` and see a sign up page

### Adding mailer settings 
You’ll need to set up the default URL options for the Devise mailer in each environment. In the config/environments/development.rb file, add the following code at the end of the previous code inside the file:
```config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }```
### Controller Filters and Helpers

Devise will create some helpers to use inside your controllers and views. To set up a controller with user authentication, just add this before_action (assuming your devise model is 'User'):

### Add a resource

```
- $ rails generate resource Bike brand:string model_year:integer model:string user_id:integer
- $ rails db:migrate
```

```
 app
 ├── assets
 ├── channels
 ├── controllers
 │   ├── application_controller.rb
 │   ├── bikes_controller.rb
 │   └── concerns
 ├── helpers
 │   ├── application_helper.rb
 │   └── bikes_helper.rb
 ├── jobs
 ├── mailers
 ├── models
 │   ├── application_record.rb
 │   ├── bike.rb
 │   ├── concerns
 │   └── user.rb
 └── views
     ├── bikes
     └── layouts
         ├── application.html.erb
         ├── mailer.html.erb
         └── mailer.text.erb

 13 directories, 12 files
```

### Set root to "bikes#index"
**config/routes.rb**
```ruby
1	Rails.application.routes.draw do
2	  resources :bikes
3	  devise_for :users
4	  root to: 'bikes#index'
5	end
```

### Fire up application and make sure its working

```
rails s
```

### Protect All Bike Routes

**app/controllers/bikes_controller.rb**
```ruby
1	class BikesController < ApplicationController
2	  before_action :set_bike, only: [:show, :edit, :update, :destroy]
3	  before_action :authenticate_user!
```

### Assign New Bikes to current_user

Associate Bikes to Users:
**app/models/bike.rb**
```ruby
	class Bike < ApplicationRecord
	  belongs_to :user
	end
```

### Assign Users to Bikes:
**app/models/user.rb**
```ruby
	class User < ApplicationRecord
	  # Include default devise modules. Others available are:
	  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
	  devise :database_authenticatable, :registerable,
	         :recoverable, :rememberable, :validatable

	  has_many :bikes
	end
```
Then, in the create method of the controller, we can assign it to the current user with the help of a Devise helper method.

**app/controllers/bikes_controller.rb**
```ruby
	  def create
	    @bike = current_user.bikes.new(bike_params)

	    respond_to do |format|
	      if @bike.save
	        format.html { redirect_to @bike, notice: 'Bike was successfully created.' }
	        format.json { render :show, status: :created, location: @bike }
	      else
	        format.html { render :new }
	        format.json { render json: @bike.errors, status: :unprocessable_entity }
	      end
	    end
	  end
```

### 10) Now when we test it out, we can see in the console that Bikes are assigned to the user


[Go to next lesson: Devise and React in Rails](./devise_and_react_in_rails.md)

[Back to React Routing in Rails](./react_routing_in_rails.md)

[Back to Syllabus](../README.md)
