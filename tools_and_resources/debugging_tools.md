# Debugging Tools and Techniques
Debugging is both an important skill and fundamental process in software development.

## Goal of debugging:
- Identifying the error and its location
- Analyzing the error
- Fixing the erroneous behavior

## Tools
There are many debugging tools available for free on the internet. The following are just a few of the ones we’ll be using throughout the cohort. 
For Javascript and React debugging, we’ll primarily use Chrome Developer Tools.
To see how to open Chrome Developer Tools: https://developer.chrome.com/docs/devtools/open/



### console.log()
`console` object: Provides access to debugging console from within your code. The most common method called on console is log().
console.log() is often use to see the state of variables at the time of code execution. 
Anytime you have Javascript code that is executed by the browser, console.log() will log values into the Console tab within Chrome Dev Tools.
< IMG CONSOLE >

Benefit of using console:
- It is very easy to use

Drawbacks of using console:
- It can clutter up code and the console very easily, if console statements are not cleaned up and can be difficult to discern the different values being logged if data is not prefixed
- Limits the amount of analysis that can happen within a context 

Notes: Unless there’s a very good reason for needing to log something (e.g. rare error scenarios), console.log statement generally should not be committed into source code. Also, if you’re really into logging to the Console, check this article out: https://thenewstack.io/tutorial-getting-creative-with-console-statements/

Sources: 
https://developer.chrome.com/docs/devtools/console/



### debugger;
`debugger` is a reserve word that allows the program execution to pause at the location where debugger is placed. It acts as a “break point”. 

The benefits of using `debugger` is so that you have full access to the context where the program is paused. Often, with `debugger`, you can access all variables within the scope through a debugger panel (in Chrome Developer Tools).

<IMG>

Benefits:
- There is the ability to do a fuller analysis on context
- A developer can deeply interact with data within the context

Drawbacks:
- Requires more explicit and careful management because it will pause program execution
- Requires learning how to use debugging interface

Source: https://developer.chrome.com/docs/devtools/javascript/breakpoints/



### Break Points in Chrome Dev Tools:
Break points work similar to debugger but they are applied through a UI. In this case, through Chrome Dev Tools, you can apply a break point by clicking the line number of code you’d like the program execution to pause at. You can access the loaded source code in the Sources tab and should see a marker indicated on the line upon click. To remove break points, click the marker again.

<IMG> 

Benefits:
- No code change is necessary to use this debugging feature.
- Full debugging functionality is available to you

Drawbacks:
- There is a minor learning curve to getting use to debugging UI

## General techniques:

- Brute force logging: Log output at various points through your app to and verifying expected behavior so that you can eliminate areas where the defect is not located.
- Backtracking: Start at the point where the program provides incorrect outcomes, then follow where the data came from to determine when the data first yielded an unexpected value.
- Through testing: Try to reproduce the defect through testing by using mock data similar to that which is associated with the defect. Then write tests to assert on expected/favorable outcomes.
