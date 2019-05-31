# Adding Devise
These intstructions were taken from the [Devise Github Repo](https://github.com/plataformatec/devise#getting-started).  Devise is a complicated and powerful piece of software.  You'll want to refer back to this link when you have questions about how it all works.

## Initial Setup
### 1) Add Devise
```bash
bundle add devise
```

### 2) Next, you need to run the generator:

```console
$ rails generate devise:install
```

### 3) Default Mailer URL

```ruby
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

### 4) Add User model

```console
$ rails generate devise User
```

### 5) Migrate
Then run `rails db:migrate`


## Controller filters and helpers

Devise will create some helpers to use inside your controllers and views. To set up a controller with user authentication, just add this before_action (assuming your devise model is 'User'):

### 6) Add a resource

```bash
rails generate scaffold Bike brand:string model_year:integer model:string user_id:integer
rails db:migrate
```
```bash
tree app
```
```result
: app
: ├── assets
: ├── channels
: ├── controllers
: │   ├── application_controller.rb
: │   ├── bikes_controller.rb
: │   └── concerns
: ├── helpers
: │   ├── application_helper.rb
: │   └── bikes_helper.rb
: ├── jobs
: ├── mailers
: ├── models
: │   ├── application_record.rb
: │   ├── bike.rb
: │   ├── concerns
: │   └── user.rb
: └── views
:     ├── bikes
:     │   ├── _bike.json.jbuilder
:     │   ├── _form.html.erb
:     │   ├── edit.html.erb
:     │   ├── index.html.erb
:     │   ├── index.json.jbuilder
:     │   ├── new.html.erb
:     │   ├── show.html.erb
:     │   └── show.json.jbuilder
:     └── layouts
:         ├── application.html.erb
:         ├── mailer.html.erb
:         └── mailer.text.erb
:
: 18 directories, 29 files
```

### 7) Set root to "bikes#index"
```bash
cat -n config/routes.rb
```
```result
:      1	Rails.application.routes.draw do
:      2	  resources :bikes
:      3	  devise_for :users
:      4	  root to: 'bikes#index'
:      5	end
```

### 8) Fire up application and make sure its working

```
rails s
```

### 9) Protect all Bike routes

```bash
cat -n app/controllers/bikes_controller.rb |sed 1,3!d
```
```result
:      1	class BikesController < ApplicationController
:      2	  before_action :set_bike, only: [:show, :edit, :update, :destroy]
:      3	  before_action :authenticate_user!
....
```

### 8) Assign new bikes to current_user

Associate Bikes to Users:
```bash
cat -n app/models/bike.rb
```
```result
:      1	class Bike < ApplicationRecord
:      2	  belongs_to :user
:      3	end
```

And Users to Bikes:
```bash
cat -n app/models/user.rb
```
```result
:      1	class User < ApplicationRecord
:      2	  # Include default devise modules. Others available are:
:      3	  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
:      4	  devise :database_authenticatable, :registerable,
:      5	         :recoverable, :rememberable, :validatable
:      6
:      7	  has_many :bikes
:      8	end
```

We need to remove the "User" input from our generated form for a new bike:

```bash
cat -n app/views/bikes/_form.html.erb
```
```result
:      1	<%= form_with(model: bike, local: true) do |form| %>
:      2	  <% if bike.errors.any? %>
:      3	    <div id="error_explanation">
:      4	      <h2><%= pluralize(bike.errors.count, "error") %> prohibited this bike from being saved:</h2>
:      5
:      6	      <ul>
:      7	      <% bike.errors.full_messages.each do |message| %>
:      8	        <li><%= message %></li>
:      9	      <% end %>
:     10	      </ul>
:     11	    </div>
:     12	  <% end %>
:     13
:     14	  <div class="field">
:     15	    <%= form.label :brand %>
:     16	    <%= form.text_field :brand %>
:     17	  </div>
:     18
:     19	  <div class="field">
:     20	    <%= form.label :model_year %>
:     21	    <%= form.number_field :model_year %>
:     22	  </div>
:     23
:     24	  <div class="field">
:     25	    <%= form.label :model %>
:     26	    <%= form.text_field :model %>
:     27	  </div>
:     28
:     29	  <div class="actions">
:     30	    <%= form.submit %>
:     31	  </div>
:     32	<% end %>
```

Then, in the ```create``` method of the controller, we can assign it to the current user with the help of a Devise helper method.

```bash
cat -n app/controllers/bikes_controller.rb |sed 27,39!d
```
```result
:     27	  def create
:     28	    @bike = current_user.bikes.new(bike_params)
:     29
:     30	    respond_to do |format|
:     31	      if @bike.save
:     32	        format.html { redirect_to @bike, notice: 'Bike was successfully created.' }
:     33	        format.json { render :show, status: :created, location: @bike }
:     34	      else
:     35	        format.html { render :new }
:     36	        format.json { render json: @bike.errors, status: :unprocessable_entity }
:     37	      end
:     38	    end
:     39	  end
```

### 10) Now when we test it out, we can see in the console that Bikes are assigned to the user

## Next Up Single Page App with Devise

[Setup a Single Page React App with Rails and Devise](../devise-single-page-app)
