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
  access_key_id: <Your Key>
  secret_access_key: <Your Secret Key>
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
