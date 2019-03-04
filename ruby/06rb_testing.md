# Test Driven Development

## Objectives
<!--- 
* Test Driven Development
* Installing testing tools in React 
* Unit tests
* Jest
* Enzyme
* Testing a component 
--->

* Test Driven Development
* Unit tests

As you begin to write more complicated applications, you'll quickly come to realize that bugs in your code can find their way into your code in very unexpected places.  You make a small change in one place, and something seemingly unrelated breaks because of it.  Without a good set of tests for your code, you may never know it, but users always find those bugs, and that causes stress, and a rush to fix the problem, which is never a good way to develop.

The most important tool you have to assure that your code well written, and as free of bugs as possible is automated tests.  An automated test is one that runs without any input from you.  You start it up, and it exercises your code just as a user would.  Automated tests can be run over and over again, every single time you make a change, and every time they pass, you can rest assured that your code is solid, and users will have a great experience.

Over time, as you test every single piece of code that you write, you'll always have the confidence to ship your code.  If something does break, and it will, you'll know it right away and fix it before your code goes into production.

There is another, and even more powerful benefit to writting tests for your code as well.  When we write our tests first, then write the code required to make them pass, we as developers, are think about our code in a different, more logical way.  Breaking the code into a series of tests helps us break the big problem down into much smaller ones, and smaller problems are easier to solve, so we write dramatically better code because of it.

If that is not enough to convince you to write great tests for your code, here is one more benefit, which is equally as important.  If you have solid tests, and decide that you want to refactor some part of your application because either the requirements of the application changed, or you have realized a better way, you are free to do so with confidence.  During the entire refactor, you are confident that you aren't braking your app because your tests pass.  Its incredibly liberating!

One of the fastest ways to prove to future employers that you care about your code, and know what you are doing is to write good tests.  Your tests speek volumes about you as a developer, as much or more than the actual code.  Not all developers do this, so you can easily set yourself appart.  Its almost like cheating the job hunt.  Show off your tests and you'll get lots of second interviews.

In short, there is no end to the winning when you write tests for your code.  You win, your coworkers win, your employer wins, your users win, and your future self wins when you come back to the code in 6 months.

### Benefits of testing
* Better Code
* Less Bugs
* Confidence when you refactor
* Help your job hunt

## What is TDD

### TDD VS BDD
<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/fsSMuqIpu_c?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>

### TDD In Depth
<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/H4Hf3pji7Fw?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>


### Uncle Bob
Here is a discussion lead by Robert Martin, also known as "Uncle Bob".  He's a legend in the programming world who has written extensively about software design and architecture.  This video is just a small taste of his work.  I encourage you to seek out his videos and books as you dive deeper into software.

<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/GvAzrC6-spQ?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>


<!--- ## Testing in React
Rogelio Guzman, a core team member for Jest
<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/HAuXJVI_bUs?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>
--->

### Extra Credit
Uncle Bob loves astronomy, and often uses it in his examples.  Are you wondering how the moon was formed?  If so, he'll explain that, and a lot about testing as well.

<div style="position:relative;height:0;padding-bottom:75.0%"><iframe src="https://www.youtube.com/embed/K7yR--yL0bc?ecver=2" width="480" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>

[Go to Ruby Task List Challenge](./07_tasklist_challenge.md)


[Back to Ruby Testing with Rspec](./05rb_rspec.md)
