# Deploying Rails on Heroku

### Add the Heroku tools on your server

On a Mac:
```
$ brew tap heroku/brew && brew install heroku
```

On Ubuntu (Cloud 9):
```
$ sudo snap install --classic heroku
```

Afterwards, you can verify your installation (yours may be slightly different):
```bash
ubuntu:~/environment $ heroku --version
heroku/7.24.1 linux-x64 node-v11.14.0
```

### Login to Heroku
Now we can login to Heroku from the command line.  Here's what it looks like for me:
```bash
ubuntu:~/environment/users_app (master) $ heroku login -i
heroku: Enter your login credentials
Email: matt@learnacademy.org
Password: **********
Logged in as matt@learnacademy.org
```

### Create a new app on Heroku
Once logged in, we can create an app.  Your's will be named something different than below.

```bash
ubuntu:~/environment/users_app (master) $ heroku create
Creating app... done, ⬢ warm-fjord-57245
https://warm-fjord-57245.herokuapp.com/ | https://git.heroku.com/warm-fjord-57245.git
```

One more verification step that the remote git repo on Heroku was added to your local git config.

```bash
ubuntu:~/environment/users_app (master) $ git config --list | grep heroku
remote.heroku.url=https://git.heroku.com/warm-fjord-57245.git
remote.heroku.fetch=+refs/heads/*:refs/remotes/heroku/*
```

### Adding your master.key
We need to add the master.key that your app uses to decrypt your `credentials.yml.enc` file.  Copy the value in `/config/master.key`, and use it in the following command:

```
$ heroku config:set RAILS_MASTER_KEY=<your-master-key>
```

### Update the database config
Let's tell the app how to find the database when its running in production. Heroku automatically setup a free postgresql database for us to get started with.  hey also, and helpfully, provided an environment variable with its url for us to use.  We need to update our `/config/database.yml` file to use that environment variable, and we're all set:

```yml
production:
  url: <%= ENV['DATABASE_URL'] %>
```

Finally, we're ready to push our code.

```
$ git push heroku master
```

And once that is done, we can migrate:
```
$ heroku run rails db:migrate
```

You can find your URL to past into your browser with this command:

```
$ heroku apps:info
```

Afterwards, you can follow your logs, and navigate to your application:

```
$ heroku logs --tail
```
---
[Back to Syllabus](../README.md#unit-ten-capstone-project-mvp)
