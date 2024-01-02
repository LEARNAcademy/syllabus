# Ruby Hashes

#### Overview

A hash is a collection of unique keys and their values. A hash is a bit like an array but instead of the values being referenced by an index, the values are reference by their unique key. The class `Hash` falls under the category of enumerable, which means you can use iterable methods on a hash.

#### Previous Lecture (29 min)

[![YouTube](http://img.youtube.com/vi/D3Rxtv0CI9E/0.jpg)](https://youtu.be/D3Rxtv0CI9E)

#### Learning Objectives

- can define the accepted syntax of a Ruby hash
- can define a symbol
- can identify a hash rocket in the output of a hash
- can define duck typing
- can explain the similarities between hashes and JavaScript objects

#### Vocabulary

- Ruby hash
- symbol
- hash rocket
- CRUD
- duck typing
- enumerable module

#### Additional Resources

- [Ruby Hash Docs](https://ruby-doc.org/core-2.7.0/Hash.html)
- [Ruby Hashes for Beginners](http://ruby-for-beginners.rubymonstas.org/built_in_classes/hashes.html)
- [Ruby's Magical Enumerable Module](https://blog.appsignal.com/2018/05/29/ruby-magic-enumerable-and-enumerator.html)

#### Process

- `cd` into the `ruby-challenges` repository
- Create a new branch: `hashes-initials1-initials2` (ex. hashes-aw-sp)
- `touch` a file with no spaces and `.rb` extension: `hashes-student1-student2.rb` (ex. hashes-austin-sarah.rb)
- Open the folder in a text editor
- Code!

---

### Ruby Hashes

A **Ruby hash** is a dictionary-like container for unique keys and their corresponding values. As is common in programming, there are many ways to define the keys and values in a hash.

```ruby
recipe = { flour: '2 1/4 cups', sugar: '1 cup', eggs: 2 }
```

This structure looks very similar to an object in JavaScript. The JavaScript object pattern is widely popular in programming in general and Ruby 2.7 implemented this syntax for hashes. However, if we look at the output of the hash in the terminal we see a different syntax.

```ruby
# output: {:flour=>"2 1/4 cups", :sugar=>"1 cup", :eggs=>2}
```

This output illustrates an older syntax of hashes. While we won't necessarily see this version of hashes used in code there are some important things to note with this particular output.

The first is the data type of the key which is a Ruby symbol. A **symbol** is a unique identifier in a key-value pair that is expressed with the colon on the left side of the variable such as `:flour`.

The second is the hash rocket. A **hash rocket** separates the key and the value using the syntax `=>`. Hash rockets were once the only way to define a value in a hash. With the adoption of the JavaScript-like syntax, that is no longer the case but hash rockets are still valid Ruby code and are used in many situations so it is important to recognize the syntax.

### Operations on a Hash

In programming, there are four general actions that can be performed on data. We can create new data, see data that currently exists, update existing data, and delete or remove data. These four actions have a delightful acronym: CRUD. **CRUD** (create, read, update, delete) is a programmer's checklist describing the complete list of data manipulation. With this in mind, let's look at how we can perform these four actions on hashes.

### Operations on a Hash: Create

There are two basic ways to create a new hash. The first way is to create a variable and list out the desired key-value pairs. Another way is to use some fundamental Ruby principles. As we know, everything in Ruby is a class. So we can call the `.new` method on the class `Hash` to instantiate a new instance of class Hash.

```ruby
# variable with key-value pairs
recipe = { flour: '2 1/4 cups', sugar: '1 cup', eggs: 2 }

p recipe
# output: {:flour=>"2 1/4 cups", :sugar=>"1 cup", :eggs=>2}

# instantiating a new instance of class Hash
recipe = Hash.new

p recipe
# output: {}
```

### Operations on a Hash: Update

We can add values to the hash by providing a key in square braces and assigning that key a value. The key can be named whatever best describes the data it holds and will be a Ruby symbol. The data must be a valid Ruby data type such as strings and integers. This action modifies the existing hash by adding content.

```ruby
# instantiating a new instance of class Hash
recipe = Hash.new

# updating the hash with key-value pairs
recipe[:flour] = "2 1/4 cups"
recipe[:sugar] = "1 cup"
recipe[:eggs] = 1

p recipe
# output: { :flour => '2 1/4 cups', :sugar =>'1 cup', :eggs => 1 }
```

This same syntax can be used to update the existing value in a hash.

```ruby
recipe[:eggs] = 2

p recipe
# output: { :flour => '2 1/4 cups', :sugar =>'1 cup', :eggs => 2 }
```

Now, what if we needed to update the name of a key? That requires a little bit more Ruby code.

```ruby
recipe[:buter] = '1 cup'
```

Oops, we misspelled butter. Let's update that key to be the correct spelling using this format: `hash[:new_key] = hash.delete(:old_key)`

```ruby
recipe[:butter] = recipe.delete(:buter)

p recipe
# output: { :flour => '2 1/4 cups', :sugar =>'1 cup', :eggs => 2, :butter => '1 cup' }
```

### Operations on a Hash: Read

Reading data can be done in a variety of ways. The read action returns existing data. We can return the hash as a whole or just individual values. When we log `recipe` we can see the entire hash.

```ruby
p recipe
# output: { :flour => '2 1/4 cups', :sugar =>'1 cup', :eggs => 2, :butter => '1 cup' }
```

Or we can look at just a single value from the hash by logging the name of hash and the corresponding key.

```ruby
p recipe[:sugar]
# output: '2 cups'
```

We can also look at just the keys or just the values in a given hash. Calling `.keys` will return an array with just the keys and calling `.values` will return an array with only the values

```ruby
p recipe.keys
# output: [:flour, :sugar, :eggs, :butter]

p recipe.values
# output: ['2 1/4 cups', '1 cup', 2, '1 cup']
```

### Operations on a Hash: Delete

To remove a key-value pair from the hash all together we can use the Ruby method `.delete` and pass in the key as an argument. Ruby will return the value from the deleted key as an output of that method. And when calling the variable `recipe` we see the key-value pair has been removed.

```ruby
p recipe.delete(:butter)
# output: '1 cup'

p recipe
# output: { :flour => '2 1/4 cups', :sugar => '2 cups', :eggs => 2 }
```

### Enumerables and Duck Typing

Everything in Ruby is an instance of a class. And each class has certain abilities. For example, instances of class Integer have the ability to perform mathematical operations while that is not true of NilClass.

We know that methods are functions that belong to a class. And Ruby decides which methods belong to which class based on the ability of the class (what it can do) rather than what each class is. This concept of allowing like-data types to share methods is called **duck typing**. "If it looks like a duck and quacks like a duck just go ahead and treat it like a duck."

Duck typing is useful because hashes share abilities with Ruby classes like arrays and ranges. This means the same methods available to those classes can be applied to class Hash.

Methods such as `.each` and `.map` can be applied to instance of class Hash. Since these methods work on all things that are iterable they are grouped together. The group of iterable methods that include `.each` and `.map` is called the **enumerable module.**

When applied to a hash, `.each` can take two possible arguments: the key and the value, in that order. These arguments are simply placeholders used inside the block.

```ruby
recipe = {flour: '2 1/4 cups', sugar: '2 cups', eggs: 2, butter: '1 cup'}

recipe.each do |key, value|
  p "Add #{value} #{key} to the bowl."
end

# output:
'Add 2 1/4 cups flour to the bowl.'
'Add 2 cups sugar to the bowl.'
'Add 2 eggs to the bowl.'
'Add 1 cup butter to the bowl.'
```

`.map` also executes once for each key-value pair and returns an array of the same length.

```ruby
recipe.map do |key, value|
  p "Add #{value} #{key} to the bowl."
end

# output: ['Add 2 1/4 cups flour to the bowl.', 'Add 2 cups sugar to the bowl.', 'Add 2 eggs to the bowl.', 'Add 1 cup butter to the bowl.']
```

---

### ❤️ Challenges

**Personal Data**

- Create a variable called `my_info` and assign it to an empty hash using the `.new` method. (Expected output: {})
- Add the following key-value pairs one at a time to the `my_info` variable: `name: "John", age: 30, city: "San Diego"`.
- Log the value associated with the `name` key from the `my_info` variable.
- Log the value associated with the `city` key from the `my_info` variable.
- Update the value associated with the `age` key in the `my_info` variable to 35.
- Create the code that will calculate and log the number of key-value pairs in the `my_info` variable. (Expected output: 3)
- Create a custom method called `exists` that takes the `my_info` variable and a key as arguments. Return true if the key exists in the hash, otherwise, return false. Use the following method calls to test the functionality.
  - `p exists(my_info, 'name')`
  - `p exists(my_info, 'enjoys')`
  - `p exists(my_info, 'city')`
- Create a custom method called `numeric` that takes the `my_info` variable and returns a hash with only the key-value pairs where the value is numeric.
- Remove the key `age` and its associated value from the `my_info` variable.

**Cohort Student Numbers**

- Create a variable called `learn` and assign it to an empty hash using the `.new` method. (Expected output: {})
- Add the following key-value pairs one at a time to the `learn` variable: `alpha: 20, bravo: 21, charlie: 18, delta: 12, echo: 9, foxtrot: 10`
- Create the code that will iterate through the `learn` variable and log each key and its corresponding value.
- Create the code that will iterate through the `learn` variable and return a hash with only the values that are greater than or equal to 20.
- Create the code that will iterate through the `learn` variable and return the sum of all the values. (Expected output: 90)
- Create a custom method that takes the `learn` variable as an argument and returns an array containing just the values from the hash.
- Create a custom method that takes the `learn` variable as an argument and returns an array containing just the keys from the hash.
- Create a custom method that takes the `learn` variable as an argument and returns only the largest value from the hash. (Expected output: 21)
- Create a custom method that takes the `learn` variable as an argument and returns only the smallest value from the hash. (Expected output: 9)
- Create a custom method that takes the `learn` variable as an argument and returns an array of the values sorted from smallest to largest. (Expected output: [21, 20, 18, 12, 10, 9])
- Create a custom method that takes the `learn` variable as an argument and returns a hash of only the key-value pairs where the key starts with a vowel.

---

[Back to Syllabus](../README.md#unit-four-ruby)
