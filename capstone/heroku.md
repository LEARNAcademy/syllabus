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

6. We need to add the `master.key` that your app uses to decrypt your `credentials.yml.enc` file.  Copy the value in `/config/master.key`, and use it in the following command:
```bash
$ heroku config:set RAILS_MASTER_KEY=<your-master-key-here>
```

7. Finally, we're ready to push our code.
```bash
$ git push heroku main:main
```

8. And once that is done, we can migrate.
```bash
$ heroku run rails db:migrate
```

9. You can find your URL to paste into your browser with this command:
```bash
$ heroku apps:info
```

10. Afterwards, you can follow your logs, and navigate to your application:
```bash
$ heroku logs --tail
```
---
[Back to Syllabus](../README.md#unit-ten-capstone-project-mvp)
