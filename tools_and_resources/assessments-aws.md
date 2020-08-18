# Weekly Assessments

## TL;DR
- Accept assignment via Slack
- Clone repository
- Create branch
- Code
- Git add, commit, push
- Create pull request
- Merge code after review

## Overview
- Procedure for obtaining and submitting weekly assessments
- Assessment is accessed through GitHub Classroom
- Assessment is cloned to a local (your machine/local text editor) or AWS Cloud9 environment
- Assessment is submitted as a **pull request**
- Assessments will be valuable to you as reference and interview question prep

## Learning Objectives
- Understanding the flow of accessing a git repository locally and making changes to the code
- Understanding the process of creating a branch and pushing the changes
- Understanding the process of submitting a pull request for review
- Understanding the process of merging approved code
- Learning basic git command line tools

## Vocabulary
- git
- branch
- master branch
- pull request (PR)

## Useful Commands
- `git clone <url>`
- `git checkout -b <branch-name>`
- `git status`
- `git add .`
- `git commit -m "useful information here"`
- `git push origin <branch-name>`

## Troubleshooting
- In Cloud9 if you are getting a weird error as you are trying to run node, double check that you are in the right directory: $ pwd
- Did you save?
- Git add/commit/push happens in the terminal, creating a PR happens in the browser on GitHub
- Did you fully and properly read the instructions?

## Detailed Process

#### GitHub Classroom
- The instructors will send a link via Slack to your assessment in GitHub Classroom
- GitHub Classroom is a tool that allows each student to create their own repository  
- Click on the link and accept the assignment and GitHub Classroom will create a repository in your cohort's organization
- Click the link to see your repository
- Click the green button `Clone or download`
- Click the clipboard icon on the side of the dropdown

#### AWS
- Log in and go to Cloud 9
- Create environment
- Name the environment something descriptive so you can keep track of each assignment, click `Next step`
- On the Configure Settings page, change the Platform to Ubuntu Server 18.04 LTS, click `Next step`
- Click `Create environment`

#### In the AWS Terminal
- AWS provides a text editor and a terminal as well as a layout of the file structure
- Type `git clone` and paste the link you copied from your git repository
- cd into the assessment directory
- You should see the full name of the assessment followed by your GitHub handle followed by (master) in the terminal file path
- This means you are on the master branch of your repository
- Type `git checkout -b <branch-name>` (no quotes or spaces in your branch name)
- Terminal will say `Switched to a new branch <branch-name>`

#### Code!
- Complete all the files in your assessment
- This is a chance for you to learn as well as for the instructors to see your code
- Leave comments or questions about your code if you want specific feedback

#### Ready to Submit
- cd into the correct folder
- `git add .`
- `git commit -m "completed assessment"`
- `git push origin <branch-name>`
- May have to enter your GitHub username (handle) and password (the password will not show up as you type)
- After you push, terminal will generate a GitHub URL that will take you to your pull request
- Follow the URL and click the green `Compare & pull request` button
- Leave any note you feel will be prudent for the instructors and click the green `Create pull request` button

#### After your code has been approved
- An instructor will review your code and leave you comments
- Open your pull request and click the green `Merge pull request button`
- After the merge is successful there will be an option to delete your branch
- When your code is merged and your branch is deleted your assessment is **DONE**!!


[Back to Syllabus](../README.md)
