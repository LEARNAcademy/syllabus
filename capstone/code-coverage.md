# Code Coverage

#### Overview

Code coverage in Test Driven Development (TDD) safeguards the requirements of the code within our web applications. Reports associated with code coverage help us determine not only how much of the code our tests are evaluating but also if we need to consider more edge cases to increase confidence in the expected outcome of our web application.

#### Learning Objectives

- can define code coverage
- can define test coverage
- can distinguish the difference between code coverage and test coverage
- can identify the code coverage statics in a React application
- can execute the proper procedure to prevent coverage files from being added to version control
- can create an acceptable percentage of code coverage for Rails backend application

#### Additional Resources

- [Code Coverage](https://www.baeldung.com/cs/code-coverage)
- [SimpleCov](https://www.rubydoc.info/gems/simplecov/0.22.0)

#### Vocabulary

- code coverage
- test coverage

#### Process

This overview assumes the developer has created a full-stack decoupled application with a React and a Rails API backend. It is also assumed that Ruby gem `rspec` and its dependencies have been installed on the Rails application.

#### Useful Commands

- $ `rspec`
- $ `yarn test --coverage --watchAll`

---

### Application Code Coverage

Code coverage is a useful evaluation of how code within a web application is being tested before it is released to a consumer. **Code coverage** is a quantitative measurement of the number of lines of code covered by the testing suite. It helps developers identify defects or bugs earlier in the production process. Fewer bugs helps us obtain more customer satisfaction with the end product. Code coverage also exposes areas of the web application that have not been tested. The more of the web application that is being tested, the more confidence that a developer can have that the web application will deliver the expected output to the consumer.

Code coverage is a very popular testing tool and can often be confused with another evaluation called test coverage. **Test coverage** is a qualitative measurement of each test within the web application. Test coverage evaluates how many features of a web application are being tested before it is released to a consumer.

### React Code Coverage Metric

After creating a React application with `yarn create react-app`, we are automatically given access to code coverage metrics within the Jest testing ecosystem. Running the terminal command `yarn test --coverage --watchAll` outputs a static analysis of the files in the React application. The summary includes analysis of the following:

- Statement coverage: Each line of code executed during the testing.
- Branch coverage: Each branch within a conditional statement executed during testing.
- Function coverage: Each function or method executed during testing.
- Line coverage: Every line including statements and non-executable code like comments.
- Uncovered lines: Displays the line number(s) for any statement that is not covered.

The total code coverage will be displayed on the statement coverage for the `All files` entry.

![React Code Coverage Analysis](./assets/yarn-coverage-term.png)

The terminal command will also create a new directory in our application called `coverage`. This coverage directory will be at the root of the React application. Within this directory, we find a `lcov-report` directory that will have a structure similar to the `src` directory of the React application. Each file will have an equivalent html file that will provide a visual presentation of what code is not covered by our testing files.

The example provided shows the code coverage for the `Header.js` file.

**./coverage/lcov-report/src/components/Header.js.html**

![Header Code Coverage File](./assets/yarn-coverage-file.png)

Because this is a html file, we can open it in the browser to see a visual presentation of the coverage report. Each statement not covered will be highlighted in red.

![Header Code Coverage Report](./assets/yarn-coverage-browser.png)

It is important that the code coverage report does NOT get added into version control (git). We need to ensure the entire coverage directory is added to the `.gitignore` file.

### Rails Code Coverage Metric

SimpleCov is a Ruby gem that can be installed as a code coverage analysis tool. The SimpleCov gem will deliver a quick report of the percentage of Lines of Code (LOC) covered by the RSpec testing in the terminal output. This report is displayed after the results of the testing suite.

![SimpleCov Terminal Output](./assets/rspec-simplecov-term.png)

SimpleCov gathers its data from the built-in coverage library of the Rails application. It also displays a detailed code coverage report on an API, which is located on `coverage/index.html` file.

![SimpleCov File](./assets/simplecov-file.png)

The API can be accessed through the browser. The total code coverage will be displayed in the header.

![SimpleCov API](./assets/simplecov-browser.png)

Selecting any of the Ruby files will show the individual breakdown for the code coverage within that file. Any uncovered lines of code will be highlighted in red.

![SimpleCov Controller File](./assets/simplecov-controller.png)

### SimpleCov Installation Process

Add the following to the Gemfile to add the SimpleCov gem:

**Gemfile**

```ruby
gem 'simplecov', require: false, group: :test
```

Run $ `bundle install` to add appropriate dependencies.

Load and launch SimpleCov at the top of the `spec_helper.rb` file located in the `spec` directory.

**spec/spec_helper.rb**

```ruby
require 'simplecov'
SimpleCov.start
```

Now we can run $ `rspec` to execute the full test suite. This will display the coverage percent for the full Rails application.

We can also see the coverage report by opening the `coverage/index.html` file in the browser.

It is important that the code coverage report does NOT get added into version control (git). We need to ensure the entire coverage directory is added to the `.gitignore` file.

---

[Back to Syllabus](../README.md#unit-ten-capstone-project-mvp)
