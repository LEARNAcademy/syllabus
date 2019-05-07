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

### Configure ActiveStorage

### /config/environments/development.rb, and production.rb

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
