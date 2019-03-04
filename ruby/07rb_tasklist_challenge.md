## How To Complete a Story

For each story:
 
1. Copy the story into your rspec file as a comment. 
1. Then write the test(s) that class/method tests must pass. 
1. Then run the test(s) and see that they fail. 
1. Then implement the class/method, with comments, so that it passes the tests one at a time and you understand what you have created.

## Starting User Stories

**Story:**	As a developer, I can create a Task.

**Story:**	As a developer, I can give a Task a title and retrieve it.

**Story:**	As a developer, I can give a Task a description and retrieve it.

**Story:**	As a developer, I can mark a Task done.

**Story:**	As a developer, when I print a Task that is done, its status is shown.


**Story:**	As a developer, I can add all of my Tasks to a TaskList.
**Hint:**   A `TaskList` **has-many** `Task`s

**Story:**	As a developer with a TaskList, I can **get** the **completed items**.

**Story:**	As a developer with a TaskList, I can **get** the **incomplete items**.

## Epic: Due Date

**Story:**	As a developer, I can create a DueDateTask, which **is-a** Task that **has-a** due date.
**Hint:**   Use the built-in Ruby Date class

**Story:**	As a developer, I can print an item with a due date with labels and values.
**Hint:**	When implementing `to_s`, use `super` to call `to_s` on the super class.

**Story:**	As a developer, I can add items with due dates to my TaskList.
**Hint:** 	Consider keeping items with due dates separate from the other items.

**Story:**	As a developer with a TaskList, I can list all the not completed items that are due today.

**Story:**	As a developer with a TaskList, I can list all the not completed items in order of due date.

**Story:**	As a developer with a TaskList with and without due dates, I can list all the not completed items in order of due date, and then the items without due dates.

## Epic: Anniversary

**Story:**	As a developer, I can create a to do item for an anniversary (a yearly recurring event) .
**Hint:**   An Anniversary has a month and a day.
**Hint:**	An Anniversary is a special kind of DueDateTask where the due date changes depending on the current date (override the `due_date` method to return the next annivesary date).

**Story:**	As a developer, I can print an item for an anniversary with field labels and values.

**Story:**	As a developer with a TaskList with and without due dates and yearly recurring dates, I can list all the not completed items in order of due date and yearly dates for the current month.

**Story:**	As a developer with a TaskList with a collection of items with and without due dates and yearly recurring dates, I can list all the not completed items in order of due date and yearly dates for the current month, then the items without due dates.

[Go to Ruby Text Based Story](./08_textbased_story.md)


[Back to Ruby Rspec](./06rb_testing.md)

[Back to Syllabus](../README.md)