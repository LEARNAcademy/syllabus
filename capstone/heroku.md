# Deploying Rails on Heroku

Deployment will require that you are on your main branch, that the app is working correctly and has no errors. 

## Getting set up with Heroku 
1. Add the Heroku tools to your computer.
```bash
$ brew tap heroku/brew && brew install heroku
```

2. Verify your installation.
```bash
$ heroku --version
```

3. First we'll use Heroku's browser authenticated login in via the command line
  - a. Login to the Heroku website with your groups Heroku credentials.  
  - b. Run the following command 
```bash
$ heroku login 
```
  - c. When the new chrome page opens click the button that says "log in"

4. Once you are logged in find the button that says "create a new app" on the Heroku dashboard. 
  - a. Name your app something similar to your capstone project. Your app name will also be the name of your url
  - b. The new app page will have a a set of command line interface (CLI) prompts. Run the prompts most similar to the following  
```
$ heroku git:remote -a <your-app-name>
$ git commit -am "Making things better"
```
  - c. Your project is now connected to heroku 

## Now we need to install some deployment tools and configurations

5. Run the following command to allow builds of your rails app to happen on intel chip based computers so the build can be sent to Heroku. 
```
$ bundle lock --add-platform x86_64-linux
```

6. Update the bundle packages to support this platform adjustment
```
$ bundle update
$ git add .
$ git commit -m "added x86_64 linux to platforms" 
```

7. If you have the master.key for the project in your config folder file skip to step 8.
  - a. To create a new master.key and credential.yml file run the command
```
$ EDITOR="code --wait" bin/rails credentials:edit
```
  - b. Close the VSCode window that auto populates. This will create a new master.key (if there is none)and it's associated credentials.yml.enc file

```
$ git add .
$ git commit -m "updated credentials"
```


8. We need to add the `master.key` that your app uses to decrypt your `credentials.yml.enc` file. 
 - a. Copy the value in `/config/master.key`, and use it in the following command:
```bash
$ heroku config:set RAILS_MASTER_KEY=<your-master-key-here>
```

9. Now we need to configure the build packs that Heroku will utilize for creating the React on rails application
``` 
$ heroku buildpacks:add --index 1 heroku/nodejs
$ heroku buildpacks:add --index 2 heroku/ruby
```

10. Finally, we're ready to push our code. Double check you are on the main branch of your project.
```bash
$ git push heroku main:main
```

This process may encounter bugs. 
  - The first part of the process is dealing with building your yarn dependencies. Any errors during this section should be handled on the React side of the application. 
  - The second part will build out the Rails section of your project. Once Rails is done building you will see a message that says...

> "compiling..." 
[Relevant Comic - XKCD 303](https://xkcd.com/303/)

11. And once that is done, we can migrate.
```bash
$ heroku run rails db:migrate
```

12. Checkout your website! You can find your URL to paste into your browser with this command:
```bash
$ heroku apps:info
```

13. Afterwards, you can follow your logs, and navigate to your application:
```bash
$ heroku logs --tail
```
---
[Back to Syllabus](../README.md#unit-ten-capstone-project-mvp)

## Clean up

14. Either push all of these changes to origin main OR if origin main is not available checkout a new branch and push of the commits that have been created. 

15. Be sure to share the config/master.key directly to all members of the team who will be pushing the contemporary version of the app to Heroku. 
  - a. have other team members create a file in the config/ folder called master.key
  - b. Copy and paste the value of the master.key into those files.
  - c. Double and triple check that the master.key file is in the right folder or you eisk sharing the key with the whole Internet. 

16. All coworkers on the app who wish to push up to Heroku will alos need to login into heroku (step 3) and set the remote of their repo (step 4). 