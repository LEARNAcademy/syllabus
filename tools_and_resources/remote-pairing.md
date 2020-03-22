# Remote Pairing Protocol

An important part of being successful in a remote dev team is effective pair programming.

### Pair Programming Process
Pairs or mobs will be determined by instructors. Instructors will assign the teams to a breakout room in Zoom.

#### Step 1: Planning
Once in the breakout room, take a few minutes to read through the necessary material. Make sure everyone on the team understands the full objective of the challenge. Discuss the technologies needed to accomplish the goal at hand. If the project has a larger scope, utilize wireframes in your planning session.

#### Step 2: Technology Set Up
After your team has decided on the technology to be used, select who will be the first driver and who will be the first navigator. With the navigators direction, the driver will:
- share his/her screen
- create a new repo in the cohort's GitHub organization.
- clone the empty repo to his/her local machine or Cloud 9
- cd into the repo
- create the new project file structure (e.g. create a new Rails or React app)
- cd into the project and perform basic set up procedures

Once the set up is complete and **before any coding takes place**, the driver will:
- $ git add .
- $ git commit -m "initial commit"
- $ git push origin master

#### Step 3: Team Set Up
After the initial commit, switch roles. With the navigators direction, the new driver will:
- share his/her screen
- clone the repo to his/her local machine or Cloud 9
- run any necessary commands to get the environment functional, such as:
  - $ yarn
  - $ bundle
  - $ rails db:create

**Note:** If working in a group of three, repeat **Step 3** for the third member of the group. This should not be done simultaneously.

#### Step 4: Take a quick break!

#### Step 5: Coding
Once everyone has technology set up and the plan has been established, begin first pairing session.

**If you are coding, your screen is shared with your team. If you are not sharing your screen, you are not coding.**

Establish a schedule that works for your team. We recommend the Pomodoro method: [Tomato Timer](https://tomato-timer.com/)

When a driver's shift comes to an end:
- $ git add .
- $ git commit -m "meaningful message"
- $ git push origin master

When a new driver's shift begins:
- $ git pull

Communicate constantly. Stay engaged. Work hard. Build awesome things.
