

## Overview




## Strong Params
Along with validation, strong params provide control over over what information is being allowed into a database. Strong params can dictate what attributes can be created and updated by setting restrictions on the controller methods.

To implement strong params, we will create a new method in the controller that will be passed as an argument to the create and update methods in place of the individual parameters.

Strong params have two methods: **require** and **permit**. Require does exactly what you think. It requires the attributes passed in to be present in the create or update methods. Permit allows certain items to be present but if they are not present, that is still okay. But attributes that are not listed in the strong params will not be allowed to proceed.

## Private
Private is a keyword in Ruby that restricts the scope of where a method can be called. Since strong params are only meant to be used as arguments to controller methods, we can list them as `private` to the controller class. That way there is no chance they can be called from somewhere else in the program.

Once the keyword `private` is implemented, everything below the keyword is included in its protection. So params are typically the last methods inside the controller.

## Strong Params for APIs
When creating an API, the controller's strong parameters will be all the way down at the bottom of the file and will look something like this:

**controllers/blog_posts_controller.rb**
```ruby
private

def blog_post_params
  params.require(:blog_post).permit(:title, :content)
end
```

In this method if the application asks for `blog_post_params`, those parameters will require a BlogPost object, formatted into a hash. At this step in the process, a new instance of BlogPost will look something like this:
```ruby
{
  :blog_post => {

  }
}
```

Inside of that BlogPost hash, the `blog_post_params` method allows parameters like title and content. These are the pieces of information that can be saved into the database as part of a BlogPost.
```ruby
{
  :blog_post => {
    :title => 'Rails!',
    :content => 'Learning Rails is super fun.',
  }
}
```

We can safely assume that these parameters correspond to columns in the BlogPost table.

In the controller's `create` method, we can see that this list is referenced when making a new BlogPost:

```ruby
def create
  @blog_post = BlogPost.create(blog_post_params)
end
```

Or alternatively

```ruby
def create
  @blog_post = BlogPost.new(blog_post_params)
  @blog_post.save
end
```

`.new` will create a new object, while `.create` will create it and save it to the database. If you use `.new`, you need to follow up with `.save` for it to actually be saved. If you have actions you wish to do before putting the object into the database, consider using `.new` instead.


## Permitting Parameters
Most of the time, strong parameters are a feature we don't have to think about. If we want to add a new attribute to BlogPost, however, it's important to remember to add it to the strong parameters list. Otherwise, our form for creating new BlogPost will silently drop the information we've told it to ignore. For example, if we created a new column for storing comments without updating our `blog_post_params` method, the response in the Rails server would look like this:

```
Started POST "/blog_posts/" for ::1 at 2016-09-14 14:27:56 -0700
Processing by BlogPostController#create as HTML
  Parameters: {"blog_post"=>{"title"=>"Rails!", "content"=>"Learning Rails is super fun.", "comments"=>"Sure is."}}
Unpermitted parameter: comments
```

We can see all of the parameters being sent in, but our controller recognized "comments" as an unpermitted parameter and won't save it to the database. If we update our method:
