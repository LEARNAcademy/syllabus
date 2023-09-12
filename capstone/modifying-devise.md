# Modifying Devise

#### Overview

When we add the Devise gem to a Rails app it comes preset with a database schema for a User model, forms for your user to sign in and sign up, as well as a bunch of security measures behind the scenes. This overview assumes the developer has created a Rails application and added the necessary installs for Devise.

#### Additional Resources

- [Devise Strong Params](https://github.com/heartcombo/devise#strong-parameters)

---

### Adding Columns to User

It is possible to modify the users table to add additional columns that the user must add when signing up for the application. This should be done with a migration after generating the User model.

In this example we will add a username column to the User model. Start with creating a migration and updating the migration file.

```
$ rails generate migration add_username_to_user
```

**db/migrate/**

```ruby
class AddUsernameToUser < ActiveRecord::Migration[6.0]
  def change
    # add_column :table, :column_name, :data_type
    add_column :users, :username, :string
  end
end
```

```
$ rails db:migrate
```

Now that we have modified the schema, we need to make sure the username is accepted by the Devise strong params. We don't see the Devise strong params directly in the Rails app, but we can have access to all controllers through the `application_controller`.

**app/controllers/application_controller.rb**

```ruby
class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    # pass params for the sign up form
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :email, :password])
    # pass params for the sign in form
    devise_parameter_sanitizer.permit(:account_update, keys: [:username, :email, :password])
  end
end
```

This sets up the necessary code for the model.

### Updating Sign Up Form

Since our sign up form lives inside our React application, we can add an input on the form for the sign up page so the user can add a username.

**src/pages/Signup.js**

```javascript
<form ref={formRef} onSubmit={handleSubmit}>
  Username: <input type="text" name="username" placeholder="username" />
  <br/>
  Email: <input type="email" name="email" placeholder="email" />
  <br/>
  Password: <input type="password" name="password" placeholder="password" />
  <br/>
  Confirm Password: <input type="password" name="password_confirmation" placeholder="confirm password" />
  <br/>
  <input type="submit" value="Submit" />
</form>
```

---

[Back to Syllabus](../README.md#unit-ten-capstone-project-mvp)
