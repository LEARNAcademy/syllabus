# White Boarding Steps

White-boarding is daunting and having steps to follow are helpful to accomplish the main goal: **to ensure you're always on the same page as the interviewer**.

There are a variety of white-boarding formats. This guide is more for the kind of format that involves being given a prompt with the expectation of developing pseudocode. How much time you spend on each step will depend on how much time you're given over all so *be time-conscious*.

For example, if the white-boarding session is only 30 minutes, spend 3-5 minutes in steps 1 & 2 (don't skip them!) and allow yourself 15-20 minutes for steps 3 & 4. And the remaining time, leave room for steps 5 & 6. If you're experiencing a lot of difficulty with the problem, check in the last five minutes to see how the interviewer(s) would like to handle the remaining time.

#### How to use this guide:
- **Do not skip steps.** **Especially the first two steps.** These steps are structured in a way that will best allow you to create dialogue with your interviewer(s).
- **Hidden Goals** are the real *thing* you should really be striving for. It's possible to not be able to solve the problem but if the hidden goal is achieved, both you and the interviewer should have a decent understanding of what it's like to work together.

### Step 1: Verify constraints/requirements
This is where you ask questions about what inputs and outputs of your function should look like.

For example:
For inputs, if the prompt involves being given an array of values, some questions you can ask are:
 - Will all the items in the array be unique?
 - Will all the values always be of the same data type?
 - (Array of numbers) Will all the values be positive?

For outputs:
- Will there always be a "proper" outcome?
- If not, what would the interviewer like to have returned?

#### Hidden Goal: Demonstrate that you're trying to identify edge cases but more importantly, that you're not afraid to ask questions!

### Step 2: Write tests to verify the expected outcomes
This is where you put in writing what some expected outcomes should be.

 - It can be as simple as writing a conditional to check for the best case scenario:
 `someFunction([0, 1, 4, 5, 6]) === 4`
 - For edge cases or when there's no desired outcome (and your interview has told you what to return based on questions asked in Step 1):
 `someFunction([0, 0, 0]) === null `

#### Hidden Goal: It's crucial to have a clear agreement on what is being built. These tests will serve as your contract. Demonstrate that you have a system in place for developing confidence in your code.

### Step 3: Figure out a solution without code
Pseudocode every line of instruction and talk it out as you write them out.
- Keep with plain English.
- **NO CODE!**
- When you're done with the pseudocode, walk through the logic and possibly use real values to talk about justify the logic.
- Work with feedback. Do your very best to work with it. If their feedback doesn't make sense, ask questions to build your understanding and learn something new!
- Do not ignore feedback (...might as well just leave the room if that happens).
- This is not to say you can't question feedback. You absolutely can. You just need to be mindful of how to question it.
#### Hidden Goal: Demonstrate that you can work with feedback given to you.

### Step 4: Write out the solution using code
This is where you implement actual code and discuss the use of built-in methods and language features.

- By this step, you might have an understanding of which language has built-in features that would allow you to do things efficiently.
- Usually you'll be allowed to choose a language of your preference but ask if your preferred language is okay anyway.
- The interviewer might not be familiar with your preferred language, so be prepared to talk about built-in methods (their inputs and outputs).
- Do not get hung up on too much syntax. It's more a loose translation from your pseudocode to some what working code.
- If you foresee two ways to do a task, present that information to the interviewer and ask if there is a preference for one path over the other. (Bonus: You present the pros and cons for each path.)
#### Hidden Goal: Demonstrate your ability to communicate in a technical manner and have some working knowledge of your preferred language.

### Step 5: Test your code
- Run through your code line by line using actual values and indicate expected values as statements are evaluated.
- Use/run tests you wrote in Step 2.
#### Hidden Goal: Demonstrate attention to detail.

### Step 6: Talk about how you would refactor your code
Your first go at a solution is not likely to be the most optimal. This is your opportunity to talk about things you would do to make it better. Focus less about formatting (because that can be easily resolved in the working environment).
- Main question here is: What logical things would you refactor and why?
- Consider things like:
	- Is unneeded iteration happening?
	- Are there unneeded variables? Or are there variables that can be used to make the code more legible?
	- Can there be better function or variable naming for legibility?
	- Is there another data structure that can be used to help solve the problem?
	- Are there other built-in methods that might be better suited for a specific task?
#### Hidden Goal: Technical interviewers generally know this is not the ideal situation for producing amazing code. They want to know what you look for in developing good code. Legibility of code (outside of formatting) is a very good place to start.
