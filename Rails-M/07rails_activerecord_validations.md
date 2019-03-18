Validation can be used in the model `class` to insure incomplete, invalid, or incorrect data from being saved in the database.

Here are a list of validations that can be implemented.

#### Length

```
class Person < ActiveRecord::Base
  validates :name, length: { minimum: 2 }
  validates :bio, length: { maximum: 500 }
  validates :password, length: { in: 6..20 }
  validates :registration_number, length: { is: 6 }
end
```

#### Presence

```
class Person < ActiveRecord::Base
  validates :name, :login, :email, presence: true
end
```

Starting in Rails 5,  belongs_to side of relationships is validated by default
```
class Phone < ActiveRecord::Base
	belongs_to :person  #default validation for belongs to: presence: true
end
```

If you want an optional belongs_to relationship, you can set it up like this:
```
class Phone < ActiveRecord::Base
	belongs_to :person, optional: true
end
```


#### Uniqueness

```
class Account < ActiveRecord::Base
  validates :name, uniqueness: true
  validates :email, uniqueness: { case_sensitive: false }
end
```

## When Validations are Called

The following methods trigger validations, and will save the object to the database only if the object is valid:
```
create
create!
save
save!
update
update!
valid?
invalid?
```

The bang versions (e.g. save!) raise an exception if the record is invalid. The non-bang versions don't, save and update return false, create just returns the object.

To verify whether or not an object is valid, Rails uses the valid? method. You can also use this method on your own. valid? triggers your validations and returns true if no errors were found in the object, and false otherwise.

## To Access Errors

To verify whether or not a particular attribute of an object is valid, you can use errors[:attribute]. It returns an array of all the errors for :attribute. If there are no errors on the specified attribute, an empty array is returned.
```
class Person < ActiveRecord::Base
  validates :name, presence: true
end

>> person = Person.new
>> person.valid? 			# => false
>> peroson.errors[:name] 	# => ["can't be blank"]	# array of error messages for name field
```

## Resource

For more information. See <a href="http://guides.rubyonrails.org/v4.2/active_record_validations.html" target="_blank" >Active Record Validations</a>
