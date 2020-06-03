# Remote Pairing Protocol

An important part of being successful in a remote dev team is effective pair programming.

### Why We Utilize Pair Programming
- Different people have different knowledge and strengths which can lead to better solutions
- Distributing cognitive load and use individualized skills (typing syntax vs. problem solving) when driving and navigating
- Coding can feel overwhelming, so focusing on one aspect of the job at hand can help focus energy on problem solving
- Two sets of eyes makes it easier to catch mistakes and produce high-quality code
- A pair can hold each other accountable so you'll be less likely to be tempted to take shortcuts or jump around without finishing the task you are on
- Partners help keep the focus on coding and not on distractions like texts, emails, etc
- Talking about your code with a partner will deepen your understanding of programming
- Increased specialization requires more collaboration

#### Roles: Driver and Navigator
The **driver** is the one with their hands on the keyboard. They are responsible for entering information and following the instructions given by the **navigator**. This approach requires constant communication. And talking about your code will make you a better developer and a better teammate. It is important to switch roles every 10-20 minutes and take frequent breaks.

#### Step 1: Getting Your Pair
Pairs or mobs will be determined by instructors. Instructors will assign the teams to a breakout room in Zoom.

#### Step 2: Planning
Once in the breakout room, take a few minutes to read through the necessary material. Make sure everyone on the team understands the full objective of the challenge. Discuss the technologies needed to accomplish the goal at hand. If the project has a larger scope, utilize wireframes in your planning session.

#### Step 3: Technology Set Up
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

#### Step 4: Team Set Up
After the initial commit, switch roles. With the navigators direction, the new driver will:
- share his/her screen
- clone the repo to his/her local machine or Cloud 9
- run any necessary commands to get the environment functional, such as:
  - $ yarn
  - $ bundle
  - $ rails db:create

**Note:** If working in a group of three, repeat **Step 4** for the third member of the group. This should not be done simultaneously.

#### Step 5: Take a quick break!

#### Step 6: Coding
Once everyone has technology set up and the plan has been established, begin first pairing session.

**If you are coding, your screen is shared with your team. If you are not sharing your screen, you are not coding.**

Establish a schedule that works for your team. We recommend the Pomodoro method: [Tomato Timer](https://tomato-timer.com/)

When a driver's shift comes to an end:
- $ git add .
- $ git commit -m "meaningful message"
- $ git push origin master

When a new driver's shift begins:
- $ git pull

**Communicate constantly. Stay engaged. Work hard. Build awesome things.**

[Back to Syllabus](../README.md)
