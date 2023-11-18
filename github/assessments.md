# Weekly Assessments

#### Process Overview

- Accept assignments via GitHub Classroom link shared in Slack
- Clone repository to your local machine
- Create a branch with the week and your name, e.g `week-1-sarah-proctor`
- Complete all assessment problems
- Git add, commit, push
- Create a pull request and leave the branch open for review!
- Merge code after review is **approved**

#### Requirements and Expectations

Completing all assessments on time is required to continue in the LEARN program. A student must make reasonable effort on every question in the assessment. If any questions are left blank, the assessment will not be reviewed.

An assessment is not complete until the assessment is reviewed by an instructor and the working branch is merged into the main branch.

#### Useful Commands

- $ `git clone <url>`
- $ `git checkout -b <branch-name>`
- $ `git status`
- $ `git add <file-name>`
- $ `git commit -m "useful information here"`
- $ `git push origin <branch-name>`

#### Troubleshooting

- Did you save?
- Are you in the correct directory?
- Git add/commit/push happens in the terminal, creating a PR happens in the browser on GitHub
- What is `git status` telling you?
- Did you fully and properly read the instructions?

---

### GitHub Classroom

GitHub Classroom is a tool that allows each student to create their own repository that contains the assessment. This new repository will be created in the shared cohort GitHub organization. The instructors will send a link to access GitHub Classroom in Slack.

### Accepting Assessment

Click the link and accept the assignment and GitHub Classroom will create a repository in the cohort's GitHub organization. Click the link to see the new repository. Clone the repository by clicking the green `Code` button and copying the url.

### In Terminal

- cd into an appropriate location, we recommend the Desktop
- Type $ `git clone` and paste the url copied from the git repository
- cd into the assessment directory
- You should see the full name of the assessment followed by your GitHub handle in the terminal file structure
- Checkout a branch: $ `git checkout -b <branch-name>`
  - No quotes or spaces in your branch name
  - Use the naming convention `<week-number-your-name>` e.g. week-1-sarah-proctor
- Terminal will say `Switched to a new branch <branch-name>`

### Code!

COMPLETE all questions and all prompts in all files in the assessment!

This is a chance for you to learn as well as for the instructors to see your code and your understanding of the concepts. Leave comments or questions about your code if you want specific feedback.

### Ready to Submit

- cd into the correct directory
- $ `git add <file-name>`
- $ `git commit -m "completed assessment"`
- $ `git push origin <branch-name>`
- On GitHub find the green `Compare & pull request` button
- Leave any note you feel will be prudent for the instructors and click the green `Create pull request` button
- Resist the urge to merge!

**You have successfully submitted your assessment!**

### Next Steps

An instructor will review the assessment code and content and leave comments. Possible instructor responses are:

- Approval: You are clear to merge.
- Comment: There is something that should be changed before approval.
- Request for changes: There is something that needs to be addressed before the assessment can continue being reviewed.

Once the PR has been approved, open the pull request and click the green `Merge pull request` button.

After the merge is successful there will be an option to delete the branch. When your code is merged and the branch is deleted your assessment is **DONE**!!

---

[Back to Syllabus](../README.md#github)
