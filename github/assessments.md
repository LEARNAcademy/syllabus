# Weekly Assessments

## TL;DR
- Accept assignment via Slack
- Clone repository
- Create branch with the week and your name, e.g `week-1-sarah-proctor`
- Code and pseudo code
- Git add, commit, push
- Create pull request and leave open for review!
- Merge code after review

#### Overview
- Procedure for obtaining and submitting weekly assessments
- Assessment is accessed through GitHub Classroom
- Assessment is cloned to a local machine
- Assessment is submitted as a **pull request**
- Assessments will be valuable to you as reference and interview question prep

#### Requirements and Expectations
Completing all assessments on time is required to be eligible for internship. A student must make reasonable effort on every question in the assessment. If any questions are left blank, the assessment will not be reviewed.  
An assessment is not complete until the assessment is reviewed by an instructor, and the working branch is merged into the main branch.

#### Useful Commands
- $ `git clone <url>`
- $ `git checkout -b <branch-name>`
- $ `git status`
- $ `git add .`
- $ `git commit -m "useful information here"`
- $ `git push origin <branch-name>`

#### Troubleshooting
- Did you save?
- Are you in the correct directory?
- Git add/commit/push happens in the terminal, creating a PR happens in the browser on GitHub
- Did you fully and properly read the instructions?

### Detailed Process

#### GitHub Classroom
- The instructors will send a link via Slack to your assessment in GitHub Classroom
- GitHub Classroom is a tool that allows each student to create their own repository  
- Click on the link and accept the assignment and GitHub Classroom will create a repository in your cohort's organization
- Click the link to see your repository
- Click the green button `Code`
- Click the clipboard icon on the side of the dropdown

#### In Terminal
- cd into an appropriate location
- Type $ `git clone` and paste the link you copied from your git repository
- cd into the assessment directory
- You should see the full name of the assessment followed by your GitHub handle
- Checkout a branch: $ `git checkout -b <branch name>`
  - No quotes or spaces in your branch name
  - Use the naming convention `<week-number-your-name>` e.g. week-1-sarah-proctor
- Terminal will say `Switched to a new branch <branch-name>`

#### Code!
- COMPLETE all the files in your assessment
- This is a chance for you to learn as well as for the instructors to see your code
- Leave comments or questions about your code if you want specific feedback
- Pseudo coding is required

#### Ready to Submit
- cd into the correct folder
- $ `git add .`
- $ `git commit -m "completed assessment"`
- $ `git push origin <branch-name>`
- On GitHub refresh the page and find the green `Compare & pull request` button
- Leave any note you feel will be prudent for the instructors and click the green `Create pull request` button

**You have successfully submitted your assessment!**

#### Next Steps
- An instructor will review your code and leave you comments
- Open your pull request and click the green `Merge pull request button`
- After the merge is successful there will be an option to delete your branch
- When your code is merged and your branch is deleted your assessment is **DONE**!!


---
[Back to Syllabus](../README.md#github)
