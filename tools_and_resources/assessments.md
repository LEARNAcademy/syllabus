# ASSESSMENTS

## Procedure for obtaining and submitting assessments

### Github Classroom
* The instructors will send a link via Slack to your assessment in Github Classroom
* Click on the link and accept the assignment and GitHub Classroom will create a repository in your cohort's organization
* Click the link to see your repository
* Click the green button `Clone or download`
* Click the clipboard icon on the side of the dropdown

### Open AWS
* Log in and go to Cloud 9
* Create environment
* Name the environment something descriptive so you can keep track of each assignment, click `Next step`
* On the Configure Settings page, change the Platform to Ubuntu Server 18.04 LTS, click `Next step`
* Click `Create environment`

### In the AWS Terminal
* Type `git clone` and paste the link you copied from the repository
* cd into the assessment folder
* You should see the full name of the assessment followed by your github handle followed by (master) in the terminal file path
* This means you are on the master branch of your repository
* Type `git checkout -b` followed by your name (no quotes or spaces in your branch name)
* Terminal will say `Switched to a new branch your-name`

### Code!
* Complete both files in your assessment
* This is a chance for you to learn as well as for the instructors to see your code
* Leave comments or questions about your code if you want specific feedback

### Ready to Submit
* Make sure you are in the correct folder
* `git add .`
* `git commit -m "completed assessment"`
* `git push`
* May have to enter your github username (handle) and password (the password will not show up as you type)
* Terminal will give you a more specific push command `git push --set-upstream origin branch-name` copy and paste the command
* After you push, terminal will generate a github URL that will take you to your pull request
* Follow the URL and click the green `Compare & pull request` button
* Leave any note you feel will be prudent for the instructors and click the green `Create pull request` button

### After your code has been reviewed
* An instructor will review your code, leave you comments, and either approve your merge or ask for request changes be made

### If your code is not approved
* Go back to your code in AWS and make any necessary changes
* `git add .`
* `git commit -m "requested changes made"`
* `git push`
* May have to enter your github username (handle) and password (the password will not show up as you type)
* This process will update your existing pull request so the rest of the process is not necessary
* Send a Slack message to the instructor who left you comments notifying them of your updated pull request

### If your code is approved
* Open your pull request and click the green `Merge pull request button`
* After the merge is successful there will be an option to delete your branch
* When your code is merged and your branch is deleted your assessment is DONE!!

### Continued Work
* These assessments will be valuable to you as reference and interview question prep
* If you revisit your assessment and want to save your changes on github...
* `git add .`
* `git commit -m "updates"`
* `git push`
* This will push directly to your master branch and update your code
