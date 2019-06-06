## Organizing your tests

One of the great things about Jest is how easy it makes it for us to organize our files. Most tests will be testing code in one file, so we want to keep them as close to each other as possible in our directory.  With Jest, we can create a directory anywhere we like, and if we name it '__tests__', Jest will look in there and run any tests it fines.

Imagine, as an example our 'jest-example' application.  It's file structure currenlty looks like this:

![react-files](https://s3.amazonaws.com/learn-site/curriculum/testing-react/react-directory.png)

We can add a '__tests__' directory to '/src', and move 'App.test.js' into there.  That keeps things organized, and as the numbrer of test files we write grows, they stay tucked away, but easily findable.  We can add this special directory anywhere we like in our app, and Jest will know what to do.

![tests dir](https://s3.amazonaws.com/learn-site/curriculum/testing-react/tests-dir.png)

So, when you want Jest to find your tests, the rule is:

1) use a filename with '.test' in it, "App.test.js" for example.
2) Make a '__tests__' directory, and put your tests in there

#### Where to go from here

[Go to React Interaction Testing](./03react_testing_interactions.md)

[Back to React Testing with Jest and Enzyme](./01react_testing_jest_enzyme)

[Back to Syllabus](../../README.md)
