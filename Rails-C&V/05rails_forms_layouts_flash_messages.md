# Simple Forms

https://player.vimeo.com/video/155715320

# Completing the User Interface

## Set Up
Let's start with a simple setup.

### Route

config/routes.rb

```
Rails.application.routes.draw do
  get '/answers' => 'main#answers'
end
```

### Controller

app/controllers/main_controller.rb:
```
class MainController < ApplicationController

  def answers
    if params[:number].to_i.even?
      @result_string = "Even"
    else
      @result_string = "Odd"
    end
    #render "answers.html.erb"
  end

end
```

At this point the URL should work: /answers?number=43

## Using a form to enter data instead of URL

views/main/answers.html.erb:
```
Number was: <%= @result_string %>
<hr/>
<form action="answers" method="get">
  <input type="text" name="number"/>
  <input type="submit" value="Submit Number"/>
</form>
```

Address bar in browser changes to: /answers?number=43
Just as if we had entered it ourselves.

## Adding Data Validation

views/main/answers.html.erb:
```
Number was: <%= @result_string %>
<hr/>
<form action="answers" method="get">
  <input type="number" name="number" min="1" max="100" required/>
  <input type="submit" value="Submit Number"/>
</form>
```

## More data in a form
Adding name to form and cookies

views/main/answers.html.erb:
```
<% if !@user_name.nil? %>
  Hello <%= @user_name %>!
<% end %>
Number: <%= @result_string %>
<hr/>
<form action="answers" method="get">
  <label for="number_id">Number:</label>
  <input type="number" id="number_id" name="number" min="1" max="100" required/>
  </br>
  <label for="user_name_id">Name:</label>
  <input type="text" id="user_name_id" name="user_name" />
  <br/>
  <input type="submit" value="Submit Data"/>
</form>
```

app/controllers/main_controller.rb:
```
class MainController < ApplicationController

  def answers
    if params.has_key?(:user_name) && !params[:user_name].strip.empty?
      cookies[:name] = params[:user_name]
    end
    @user_name = cookies[:name]

    if params[:number].to_i.even?
      @result_string = "Even"
    else
      @result_string = "Odd"
    end
    #render "answers.html.erb"
  end

end
```


<h1>Layout</h1>
<p>Have you noticed how your views actually contain a valid HTML document, but you never write the <code class="prettyprint prettyprinted" style=""><span class="tag">&lt;body&gt;</span></code> and <code class="prettyprint prettyprinted" style=""><span class="tag">&lt;title&gt;</span></code> and other tags like that yourself? That's because they're in the <code class="prettyprint prettyprinted" style=""><span class="pln">app</span><span class="pun">/</span><span class="pln">views</span><span class="pun">/</span><span class="pln">layouts</span><span class="pun">/</span><span class="pln">application</span><span class="pun">.</span><span class="pln">html</span><span class="pun">.</span><span class="pln">erb</span></code> file, which looks something like this:</p>

<div class="filename">app/views/layouts/application.html.erb</div>
<div class="highlight"><pre><code class="language-ruby" data-lang="ruby"><span class="o">&lt;!</span><span class="no">DOCTYPE</span> <span class="n">html</span><span class="o">&gt;</span>
<span class="o">&lt;</span><span class="n">html</span><span class="o">&gt;</span>
<span class="o">&lt;</span><span class="n">head</span><span class="o">&gt;</span>
  <span class="o">&lt;</span><span class="n">title</span><span class="o">&gt;</span><span class="no">Wikipages</span><span class="o">&lt;</span><span class="sr">/title&gt;</span>
<span class="sr">  &lt;%= stylesheet_link_tag    "application", media: "all", "data-turbolinks-track" =&gt; true %&gt;</span>
<span class="sr">  &lt;%= javascript_include_tag "application", "data-turbolinks-track" =&gt; true %&gt;</span>
<span class="sr">  &lt;%= csrf_meta_tags %&gt;</span>
<span class="sr">&lt;/</span><span class="n">head</span><span class="o">&gt;</span>
<span class="o">&lt;</span><span class="n">body</span><span class="o">&gt;</span>

  <span class="o">&lt;%=</span> <span class="k">yield</span> <span class="sx">%&gt;</span>

<span class="sx">&lt;/body&gt;</span>
<span class="o">&lt;</span><span class="sr">/html&gt;</span></code></pre></div>

<p>The <code class="prettyprint prettyprinted" style=""><span class="pun">&lt;%=</span><span class="pln"> </span><span class="kwd">yield</span><span class="pln"> %&gt;</span></code> bit of code is where your views are inserted. If you ever want to change something on all of your pages - such as adding a logo or nav bar - this layout file is the place to do it.</p>
<p>If we want to make every page have a different <code class="prettyprint prettyprinted" style=""><span class="tag">&lt;title&gt;</span></code> we need a way to set it in each view, and then retrieve it in the layout. Here's how to set it in a view:</p>
<div class="filename">app/views/contacts/show.html.erb</div>
<div class="highlight"><pre><code class="language-rhtml" data-lang="rhtml"><span class="cp">&lt;%</span> <span class="n">content_for</span><span class="p">(</span><span class="ss">:title</span><span class="p">,</span> <span class="s2">"New contact | Wikipages"</span><span class="p">)</span> <span class="cp">%&gt;</span>

<span class="nt">&lt;h1&gt;</span>New contact<span class="nt">&lt;/h1&gt;</span>
...</code></pre></div>

We have seen code wrapped in `<%= %>` before.  That means it is Ruby code that we want to be printed to the page.  When you want to execute code in the view without printing the output, all you need to do is not use the "=" sign like in our `<% %>`-wrapped code snippet above.
  <p>Then, here's how to retrieve it in the layout.</p>
  <div class="filename">app/views/layouts/application.html.erb</div>
<div class="highlight"><pre><code class="language-rhtml" data-lang="rhtml"><span class="nt">&lt;title&gt;</span><span class="cp">&lt;%=</span> <span class="k">yield</span><span class="p">(</span><span class="ss">:title</span><span class="p">)</span> <span class="cp">%&gt;</span><span class="nt">&lt;/title&gt;</span></code></pre></div>
  <p>When your layouts get more complex, such as with nav bars that change depending on what page you're on, you can write longer <code class="prettyprint prettyprinted" style=""><span class="pln">content_for</span></code> 's like this:</p>
<div class="highlight"><pre><code class="language-rhtml" data-lang="rhtml"><span class="cp">&lt;%</span> <span class="n">content_for</span><span class="p">(</span><span class="ss">:navbar</span><span class="p">)</span> <span class="k">do</span> <span class="cp">%&gt;</span>
  <span class="nt">&lt;li&gt;&lt;a</span> <span class="na">href=</span><span class="s">"/"</span><span class="nt">&gt;</span>Home<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;&lt;a</span> <span class="na">href=</span><span class="s">"something/else"</span><span class="nt">&gt;</span>Something else<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
  <span class="nt">&lt;li&gt;&lt;a</span> <span class="na">href=</span><span class="s">"etc"</span><span class="nt">&gt;</span>Etc.<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
<span class="cp">&lt;%</span> <span class="k">end</span> <span class="cp">%&gt;</span></code></pre></div>

#### The Flash
You might be wishing you could add a message to the user after something has been checked, letting them know that the check was successfully made. Rails provides a tool for doing this called flash messages. (This has nothing to do with the Adobe Flash, by the way.)

Here's how it works: you set a flash message in the controller. The flash message is stored as a temporary cookie on the user's browser. (A cookie is a place a site can store information in a user's web browser; every time the user makes a request to that site, the browser sends the cookie's data with the request.) When the next page loads, the server sees the flash message, adds it to the page (it's usually included in the layout), and clears the cookie. If the user reloads the page or browses to a new page, the message disappears.

Let's add a flash to the Password Checker:

*app/controllers/password_controller.rb*
```
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
```
<body>

  <%= flash[:alert] %>
  <%= flash[:notice] %>

  <%= yield %>

</body>
```
If we check a password, we can see our flash message. And if we refresh the page, it disappears.

# Challenge
Check User ID and Password on a Website
* Create a route: /check_password to call a method called check in PasswordController.
* Create a controller: PasswordController with a method called check.
* Create a view for the check method in PasswordController called check.html.erb.

In a browser use /check_password?userid=joe&password=letmein to check the credentials.

##### Inside the method:
* Store the user ID and password in instance variables
* Do some checks for whether they are valid; if they are, return with a meesage 'Credentials are acceptable', otherwise print 'Try again.'

Test the method with the URL above.

##### In the view:
* Show the result String at the top (if there is any)
* Create a form to which uses method GET to the check_password route, and contains two fields with the names of the parameters, and a submit button.

Test that the webpage works the same as using the URL above.

# Challenge

# Rails Hi/Lo with Forms Challenge

 * Create a form which uses the action: GET to the `try` route, and contains one field with the guess parameters, and a submit button.
