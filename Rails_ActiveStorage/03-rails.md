## ActiveStorage

This tutorial assumes that you have created a new Rails 5.2 or newer application with the Rails Webpacker and React gems installed.

[Rails ActiveStorage Docs](https://edgeguides.rubyonrails.org/active_storage_overview.html)

### DB Setup

From a terminal:
```bash
rails active_storage:install
rails db:migrate
```

#### /config/storage.yml

```yml
amazon:
  service: S3
  access_key_id:  <%= Rails.application.credentials.dig(:aws, :access_key_id) %>
  secret_access_key: <%= Rails.application.credentials.dig(:aws, :secret_access_key) %>
  region: us-east-1
  bucket: <name of your AWS S3 bucket>
```

#### Credentials
[![YouTube](http://img.youtube.com/vi/9CJBvyFGnvo/0.jpg)](https://www.youtube.com/watch?v=9CJBvyFGnvo)
]

Notice the ```Rails.application.credentials.dig(:aws, :access_key_id)``` lines above.  Those refer to a built-in credentials storage system in Rails.  Its purpose is to keep the secret data your app depends on encrypted and secret.  If you look in your ```/config``` directory, you'll notice a file called ```/config/credentials.yml.enc```.  This file is encrypted, and not intended to be edited directly.  Instead, you can edit it with a rails command:

```bash
$ EDITOR=nano bin/rails credentials:edit
```

This will open up a Nano editor inside of your terminal.  Nano is a full featured editor just like Atom or the Cloud9 editor, it just runs inside of your terminal.  Its interface is text based, so it may take a bit of getting used to.  Look for the keyboard shortcuts at the bottom to find your way around.

Inside of this file, we add our credentials, and when we save and close the editor, they are encrypted and saved into the ```credentials.yml.enc``` file, ready for use like in the ```/config/storage.yml``` file above.

EngineYard has a [great article](https://www.engineyard.com/blog/rails-encrypted-credentials-on-rails-5.2) with much more detail on how to use Rails Credentials

### Configure ActiveStorage

#### ```/config/environments/development.rb```, and ```production.rb```

Find this line, and make sure it is uncommented, and changed to ':amazon'

```ruby
config.active_storage.service = :amazon
```

### AWS S3 Gem

```bash
bundle add aws-sdk-s3
```

### Configure models

Finally, we add a line to our ActiveRecord Model to tell it we want it to have an attachment.  In this example a user would have an attachement called 'avatar'

```ruby
class User < ApplicationRecord
  has_one_attached :avatar
end
```

### If you setup Rails as an API
If you setup Rails as an API only by calling ```rails new <app-name> --api```, then you'll want to work around a bug in Rails preventing ActiveStorage from working correctly.  We need to tell the controller specific to ActiveStorage to not verify the authenticity token, just like the rest of our application.

Create a new file: /config/initializers/active_storage.rb

This is the only line you'll need there:
```ruby
ActiveStorage::DirectUploadsController.instance_eval { skip_forgery_protection }
```

### Example Controller

For our controller, we need to setup an endpoint that will accept an update with our user's avatar data.  **Note:** that this has no authentication at all, so it is very insecure.

```ruby
class UsersController < ApplicationController

    def update
        @user = User.find(params[:id]) #probably would be current_user for you
        @user.update_attributes(user_params)
        render :show
    end

    def user_params
        params.require(:user).permit(:avatar)
    end
end
```

The View for :show is JBuilder:
```ruby
json.id @user.id
json.name @user.name
json.avatar_url url_for(@user.avatar)
```
