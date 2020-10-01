# Layout

Have you noticed how your views actually contain a valid HTML document, but you never write the `<body>` and `<title>` and other tags like that yourself? That's because they're in the `app/views/layouts/application.html.erb` file, which looks something like this:

*app/views/layouts/application.html.erb*

```erb
<!DOCTYPE html>
<html>
<head>
  <title>Wikipages</title>
  <%= stylesheet_link_tag    "application", media: "all", "data-turbolinks-track" => true %>
  <%= javascript_include_tag "application", "data-turbolinks-track" => true %>
  <%= csrf_meta_tags %>
</head>
<body>
<%= yield %>


</body>
</html>
```
The `<%= yield %>` bit of code is where your views are inserted. If you ever want to change something on all of your pages - such as adding a logo or nav bar - this layout file is the place to do it.

If we want to make every page have a different `<title>` we need a way to set it in each view, and then retrieve it in the layout. Here's how to set it in a view:

*app/views/contacts/show.html.erb*

```erb
<% content_for(:title, "New contact | Wikipages") %>
<h1>New contact</h1>
```

We have seen code wrapped in `<%= %>` before.  That means it is Ruby code that we want to be printed to the page.  When you want to execute code in the view without printing the output, all you need to do is not use the "=" sign like in our `<% %>`-wrapped code snippet above.

Then, here's how to retrieve it in the layout.

*app/views/layouts/application.html.erb*

```html
<title><%= yield(:title) %></title>
```

When your layouts get more complex, such as with nav bars that change depending on what page you're on, you can write longer `content_for's` like this:

```erb
<% content_for(:navbar) do %>
  <li><a href="/">Home</a></li>
  <li><a href="something/else">Something else</a></li>
  <li><a href="etc">Etc.</a></li>
<% end %>
```

#### The Flash
You might be wishing you could add a message to the user after something has been checked, letting them know that the check was successfully made. Rails provides a tool for doing this called flash messages. (This has nothing to do with the Adobe Flash, by the way.)

Here's how it works: you set a flash message in the controller. The flash message is stored as a temporary cookie on the user's browser. (A cookie is a place a site can store information in a user's web browser; every time the user makes a request to that site, the browser sends the cookie's data with the request.) When the next page loads, the server sees the flash message, adds it to the page (it's usually included in the layout), and clears the cookie. If the user reloads the page or browses to a new page, the message disappears.

Let's add a flash to the Password Checker:

*app/controllers/password_controller.rb*

```ruby
class PasswordController < ApplicationController
  def check_credentials
    if valid(params[:userid], params[:password]
      flash.now[:notice] = "Your credentials are valid"
    else
      flash.now[:alert] = "Your credentails are not valid"
    end
    render('check_credentials.html.erb')
  end
end
```
The flash acts very much like a hash, and the two keys you're allowed to set are flash[:notice] and flash[:alert] (the latter usually being for errors).

(If we were using `redirect_to`, we would just need `flash[:notice]`.)

Now, let's add the flash message to the layout, right above the page content:

*app/views/layouts/application.html.erb*

```erb
<body>

  <%= flash[:alert] %>
  <%= flash[:notice] %>

  <%= yield %>

</body>
```
If we check a password, we can see our flash message. And if we refresh the page, it disappears.

## Challenges

The goal of these challenges is to get practice coding up forms to send information to your controllers and send information back out to the user based on the form information received.

### Forms and Params Stories

- As a user, I can visit a page at `/quadruple`
- As a user, when I submit a number to `/quadruple` I can see that number quadrupled on the page
- As a user I can visit a `/multiply_by` page
- As a user, when I submit two numbers to `/multiply_by` I can see the result of the two numbers multiplied on the page

### User Forms Stories

- As a user, I can visit a 'Subscribe' page with a `name` and `email` input
- As a user, when I fill out my `name` and `email` and click 'Subscribe', I see a thank you message like this: 'Thanks, **name**! You are subscribed with this email: **email**!'
- As a user, I can go to a 'Sign Up' page
- As a user, when I 'Sign Up' with a `user_name`, `email`, `password`, and `password` confirmation, I am greeted by my `user_name` on the same page
- As a user, I can go to a 'Add Profile' page
- As a user, when I submit my profile with a `first_name`, `last_name`, `blurb`, and `hobbies`, I can see my profile information on the same page
- As a user, I can visit a 'Sign In' page
- As a user, if 'Sign In' with a user_id that is at least 6 characters along and a password that is not the same as my user_id, I am greeted by my `user_id`: 'Welcome, **user_id**!

## Stretch Challenge
- Add some other validations into your 'Sign In' (ie, no numbers in a user_id/special character & number required in password)


[Back to Syllabus](../README.md)
