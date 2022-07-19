# Deploying Rails on Heroku

1. Add the Heroku tools to your computer.

   ```bash
   $ brew tap heroku/brew && brew install heroku
   ```

2. Verify your installation.

   ```bash
   $ heroku --version
   ```

3. Now we can login to Heroku from the command line. Enter your email and password for your group Heroku account.

   ```bash
   $ heroku login -i
   ```

4. Create a new app on Heroku. The url will be printed in the command line.

   ```bash
   $ heroku create
   ```

5. Ensure that the remote git repo on Heroku was added to your local git config.

   ```bash
   $ git config --list | grep heroku
   ```

6. We need to add the `master.key` to heroku that your app uses to decrypt your `credentials.yml.enc` file.

   - To create your `master.key` and `credentials.yml.enc` file enter the following command in your terminal:

     ```bash
     $ EDITOR="code --wait" rails credentials:edit
     ```

   - To connect your `master.key` to heroku input the following:

     ```bash
     $ heroku config:set RAILS_MASTER_KEY='cat config/master.key'
     ```

     ** _Team members will need the `master.key` to successfully run the server_ **

7. In to enable your app to check for the `master.key` we need to uncomment the following code:

   - `config/environments/production.rb`

     ```ruby
     config.require_master_key = true
     ```

8. We need to add buildpacks to our heroku dashboard, we can do this through the terminal using the following commands:

   - Add Node Buildpack

     ```bash
     $ heroku buildpacks:add --index 1 heroku/nodejs
     ```

   - Add Ruby Buildpack
     ```bash
     $ heroku buildpacks:add --index 2 heroku/ruby
     ```

   ** _Important: Buldpacks must have Javascript run before Ruby_ **

9. Finally, we're ready to push our code.

   ```bash
   $ git push heroku main:main
   ```

10. And once that is done, we can migrate.

    ```bash
    $ heroku run rails db:migrate
    ```

11. You can find your URL to paste into your browser with this command:

    ```bash
    $ heroku apps:info
    ```

12. Afterwards, you can follow your logs, and navigate to your application:

    ```bash
    $ heroku logs --tail
    ```

---

[Back to Syllabus](../README.md#unit-ten-capstone-project-mvp)
