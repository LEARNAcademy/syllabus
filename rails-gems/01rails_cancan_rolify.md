# CanCanCan and Rolify

## Authorization

In our context _authentication_ is about establishing or verifying a person's identity. See: <a href="https://en.wikipedia.org/wiki/Authentication" target="_blank">Wikipedia: Authentication</a>
And, _authorization_ is about determining if a person has permission to perform a given operation (such as access in a web page). See: <a href="https://en.wikipedia.org/wiki/Authorization" target="_blank">Wikipedia: Authorization</a>.

Rules for authorization is varied and complex, but usually depends on being authenticated first. In other words, we need to know who you are before we can determine what you are allowed to do.

A good example of authorization in action is the sharing of Google Documents.  Some are available for everyone to read, some are available for only certain people to edit, and some are available for everyone within certain communities (like a company) to both read and edit.

## Create app

Let's get started with our new app:

`rails new gradecentral -d postgresql -T`

## Set up Devise

Now, to let's add Devise to the `Gemfile` outside of any scope:

```ruby
gem 'devise'
```

Then

```ruby
bundle
```

## Install Devise

Next we install Devise:

```rails g devise:install```

And to create the Devise User:

```rails g devise User```

Update database:
```rake db:create db:migrate```

And we follow steps 2 and 3 of the Devise instructions. Right now we don't have a view to set as our root, just the views Devise gives us, so this set up will be temporary.

For now, let's set the log-in page as our root in `config/routes.rb` by adding these lines after `devise_for :users`:

```ruby
...
devise_scope :user do
  root "devise/sessions#new"
end
```

Finally, let's check that the app works: `http://localhost:3000/`

Let's also display the user's email on each page; in `app/views/layouts/application.html.erb` add:

```ruby
<p>
  <%= if !current_user.nil?
        current_user.email
      end
  %>
</p>
```

## The Model

Now we create the model class for storing grades:
```rails g scaffold Grade letter_grade:string comment:string course:string user:references```

#### Relations and Validations

Users have many grades:

*models/user.rb*
```ruby
class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :grades # add this
```  

Each grade belongs to one user, and always belong to a user:

*models/grade.rb*
```ruby
class Grade < ActiveRecord::Base
  belongs_to :user

  validates :user, presence: true # add this
end
```

We have a new controller, so we need to include it in the Devise authentication.

*controllers/grades_controller.rb*
```ruby
class GradesController < ApplicationController
  before_action :authenticate_user!
```

We'll want to change `routes.rb` to go to the grades list by default:
```ruby
  devise_scope :user do  # delete this line
    root "devise/sessions#new" # delete this line
  end # delete this line

  root "grades#index" # add this line
```

After typing `rake db:migrate` into your terminal, test the app by registering a user and creating a grade for said user:
`http://localhost:3000/user/sign_up` and create a user.
`http://localhost:3000/grades/new` with user ID 1 in the "User" field.

## Add CanCanCan and Rolify

Let's add the new gems to our Gemfile:

```
gem 'cancancan'
gem 'rolify'
```

Bundle and restart the server.

Next, we'll create an ability in CanCanCan:
```
rails g cancan:ability
```

And then we'll run the generator to create rolify roles:
```
rails g rolify Role User
```

If you're running a Rails 5 app, you can move on to the Authorize Domain Objects step.

If you're running a Rails 4 app, open the following file and comment out/delete a few lines that are incompatible with Rails 4:

*models/role.rb*
```ruby
class Role < ApplicationRecord
  has_and_belongs_to_many :users, :join_table => :users_roles

  belongs_to :resource,
             :polymorphic => true, # delete this comma
             :optional => true # comment out this line

  validates :resource_type,
            :inclusion => { :in => Rolify.resource_types },
            :allow_nil => true

  scopify
end
```

#### Authorize Domain Objects

Mark the class that we are trying to protect:

*models/grade.rb*
```ruby
class Grade < ActiveRecord::Base
  belongs_to :user
  validates :user, presence: true

  resourcify 	# add this line
end
```

#### Authorize Controllers

We want to update our controllers with some built-in authorization methods from our newly-added gems:

*controllers/grades_controller*
```ruby
class GradesController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource 	# add this line
```

#### Define Abilities

Let's define the abilities of different users:

* Admins can do anything and everything
* Teachers can create, update, read, and delete grades
* Non-teachers can only read their own grades

*models/ability.rb*
```ruby
class Ability
  include CanCan::Ability

  def initialize(user)
    if user.nil?
      # if no user logged in, use a dummy user, see later
      user = User.new
    end
    if user.has_role? :admin
      can :manage, :all
    elsif user.has_role? :teacher
      can :manage, Grade
    elsif user.has_role? :student
      can :read, Grade, user_id: user.id
    end
  end
end
```

Now we can clear out the session cookies, and sign in with our existing user, then try:
http://localhost:3000/grades/new

Which should display an ugly, red "CanCan::Access Denied" page.
In fact, almost all views should be stopped by CanCan because our user is role-less. That's not a whole lot of fun -- let's fix that.

## Roles

Each user is assigned one role which is checked before each operation in Ability.

## Using Roles in Console

#### Manually giving a user a role.

First, let's find our role-less User and see what their permissions are according to Ability in `rails c`:

```ruby
user = User.last
ability = Ability.new(user)
ability.can? :manage, :all
 => false
ability.can? :manage, Grade
 => false
grade = Grade.last
ability.can? :read, grade, user_id: user.id # notice grade, the object
 => false                                   # depending on the grade
```

What if we set the user's role to student?

```ruby
user.add_role :student
ability = Ability.new(user)
```

Check that the user's permissions work according to Ability:

```ruby
ability.can? :manage, :all
 => false
ability.can? :manage, Grade
 => false
ability.can? :read, grade, user_id: user.id
 => true                                    # depending on the grade
```

Or what if we set the user's role to admin:

```ruby
user.add_role :admin
ability = Ability.new(user)
```

Again, we should check that the user's permissions work according to Ability:

```ruby
ability.can? :manage, :all
 => true
ability.can? :manage, Grade
 => true
ability.can? :read, grade, user_id: user.id
 => true                                      # depending on the grade
```

We're going to leave the user as Admin because one user must be able to change other users' roles.

For the rest of our non-admin users, when new users are created we want to make sure that they have a default role.  Let's designate them as students.

*models/user.rb*
```ruby
class User < ActiveRecord::Base
...
  after_create :assign_role

  def assign_role
    add_role(:student)
  end
```


## Implementing User Interface

#### Display User's Role
Let's display the role on every page:

In `app/views/layouts/application.html.erb` add some of this:

```ruby
<p>
  <%= if !current_user.nil?
        current_user.email + ' (' + current_user.roles.pluck(:name).join(",") + ')'
      end
  %>
</p>
```

#### Only Show Usable Links

To only show links that will not be stopped by CanCanCan in the controller, we can use an ability in the views.

In the `GradesController` `index` method create an `Ability` for the current user:
```
  def index
    ...
    @ability = Ability.new(current_user)	# add this line
  end
```

Then in the view we can use that ability to check if certain information should be shown:

```
<% @grades.each do |grade| %>
      <% if @ability.can? :read, grade, user_id: current_user.id %>
        <tr>
          <td><%= grade.subject %></td>
          <td><%= grade.letter %></td>
          <td><%= grade.user.email %></td>
          <td><%= link_to 'Show', grade %></td>
          <% if @ability.can? :manage, Grade %>
            <td><%= link_to 'Edit', edit_grade_path(grade) %></td>
            <td><%= link_to 'Destroy', grade, method: :delete, data: { confirm: 'Are you sure?' } %></td>
          <% end %>
        </tr>
      <% end %>
    <% end %>
```

## Admin Page

To support users assuming differnet roles we can implement the following user story.

Story: As an Admin, I can change the role of other users so that users can become Teachers.

Create a controller and views for displaying users:

```rails g controller Admin index update```

Now let's set up the routes to the controller:
```ruby
get "admin" => "admin#index"
put "admin/:id" => "admin#update"
patch "admin/:id" => "admin#update"
```

Before doing anything in the AdminController, we want to check the roles of the user, and if they are not an admin we want to stop them:

*controllers/admin_controller.rb*
```ruby
class AdminController < ApplicationController
  before_action :authenticate_user!
  before_action :authorize

  # get "admin"
  def index
  end

  # put/patch "admin/:id"
  def update
  end

  private

  def authorize
    if !current_user.has_role? :admin
      render plain:"No access for you!"
    end
  end

end
```

Creating the list of users on the admin index page would look something like this:

Change the `index` method to retrieve all the users:
```ruby
def index
  @users = User.all
end
```

We can update the index view to show all the users with a button to make them teachers:

*admin/index.html.erb*
```html
<h1>Users</h1>
<table>
  <thead>
    <thead>
      <tr>
        <th>Email</th><th>Role</th>
      </tr>
    </thead>
  </thead>
  <tbody>
  <% @users.each do |user| %>
    <tr>
      <td><%= user.email %></td>
      <td><%= user.roles.last.name %></td>
      <td>
        <%= form_tag("/admin/" + user.id.to_s + "?role=teacher", method: :PUT) do %>
          <input type="submit" value="Make Teacher"/>
        <% end %>
      </td>
    </tr>
  <% end %>
  </tbody>
</table>
```

In the `update` method, let's set the role of the user to teacher (and only teacher; we do not allow users to have two roles):

```ruby
def update
    user = User.find(params[:id])
    user.remove_role user.roles.last # user only has one role
    user.add_role(:teacher)
    redirect_to '/admin'
end
```

(Note: this is not safe, admins can create new roles without check)

Go to /admin (while we're logged in as our admin user).  Click on the newly-created button for one of the students and see that the user's role changes to "Teacher".

#### Prevent Students from Entering Grades

Story: As a student, I cannot access the page where teachers enter grades, so I do not encounter an error page.

Log in as a student and click on "New Grade"; we should see an error message from CanCan, because students are not allowed to enter their own grades.
We would like to hide that link from students, bearing in mind that teachers do need it.

In grades/index.html.erb surround the link with an if statement:
```html
<% if current_user.has_role? :teacher %>
  <%= link_to 'New Grade', new_grade_path %>
<% end %>
```

Now, if we refresh the page the link should be gone.
Log in as a teacher, and the link should show again.

#### Prevent a User from seeing other Users' Grades

Story: As a student, I can only see my own grades on the grades index page

In `app/controllers/grades_controller.rb`, let's change the instance variable of grades being passed to `index.html.erb` so that if the user is a student, only the current user's grades are ever displayed:

```ruby
def index
  @grades = Grade.where(user: current_user) unless current_user.has_role?(:admin) || current_user.has_role?(:teacher)
end
```
