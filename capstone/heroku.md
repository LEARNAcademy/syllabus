# Deploying on Heroku

Deployment is a very exciting step in the development process. Deployment is the process of employing a service to store your source code and data on their servers and providing a pathway in the form of the url. Heroku is a deployment service that is built in Ruby on Rails and was originally designed specifically for Rails deployments. They have since expanded their services to include other languages. Heroku offers free deployments for small projects.

It is perfectly normal to deploy an application that is not "finished." Projects are always evolving and require regular deployment updates. The beauty of using a deployment service like Heroku is that you can connect the deployment to your GitHub repository. When there are new features to be deployed, a command from the terminal will update the deployment from the current code on the main branch.

### Prep List

As a team, decide who will run the commands for deploying the application. Typically the tech lead would take on this responsibility.

Prior to deployment we need to ensure the main branch is up to date and the project runs without errors.

Next, we will need access to the username and password for the team's Heroku account.

And finally, the person in charge of deploying the application will need access to the `master.key` credential that lives in the `config` folder. The key is used to encrypt and decrypt your credentials. The `master.key` is not checked in to version control and so will not exist on Github. If the project was cloned from GitHub there will not be a `master.key` file in the `config` folder. If the person deploying the application has a `master.key` file, great! You are ready to go. If not, continue with the following steps in terminal.

```bash
$ EDITOR="vim" bin/rails credentials:edit
$ :wq
```

The first command will create the `master.key` file and a new `config/credentials.yml.enc` file with the Rails secrets. The command will drop you into a `vim` editor in your terminal. The second command will save the changes.

While the `master.key` will not be stored in version control, the `credentials.yml.enc` will be. So be sure that any updates are pushed to GitHub.

### Initial Installs

First we will need to add the Heroku CLI tools using a Mac package manager called Homebrew. Then verify the installation by checking the version of Heroku.

```bash
$ brew tap heroku/brew && brew install heroku
$ heroku --version
```

### Creating a New App

Next we need to login to Heroku. Running the following command in the terminal will return a prompt to open a Heroku browser page as noted below. Enter the team's credentials to login to the browser.

```bash
$ heroku login
heroku: Press any key to open up the browser to login or q to exit:
```

In the Heroku browser page, select `Create new app` from the dropdown menu titled `New` and name your application something similar to your capstone project. This name will create the base url.

### Adding a Remote

Heroku works by connecting a remote to the existing git repository. Next we need to initialize the new remote.

```bash
$ heroku git:remote -a <your-app-name>
```

### Deployment Tools and Configurations

The following command allows compatibility between Mac Rails builds and Heroku.

```bash
$ bundle lock --add-platform x86_64-linux
$ bundle update
```

Now we need to configure the build packs for Heroku to recognize both the React and the Ruby on Rails applications.

```bash
$ heroku buildpacks:add --index 1 heroku/nodejs
$ heroku buildpacks:add --index 2 heroku/ruby
```

Next we need to add the `master.key` to the deployment so that the secrets can be decrypted.

```bash
$ heroku config:set RAILS_MASTER_KEY=cat config/master.key
```

These commands will modify the app structure and will need to be push to GitHub.

### Push to Heroku

Finally, we're ready to push our code. Double check you are on the main branch of your project.

```bash
$ git push heroku main:main
```

This process may encounter bugs.

The first part of the process is dealing with building your `yarn` dependencies. Any errors during this section should be handled on the React side of the application.

The second part will build out the Rails section of your project.

Once that is done, we can migrate.

```bash
$ heroku run rails db:migrate
```

### Live Site

If the deploy finished without errors, checkout the website! We can find the exact URL to paste into your browser with the following command.

```bash
$ heroku apps:info
```

### Sharing Deployment Responsibility

Ensure all team members have access to Heroku by sharing the content in `config/master.key` directly. This can be done by copy and pasting the master key for all members of the team.

---

[Back to Syllabus](../README.md#unit-ten-capstone-project-mvp)
