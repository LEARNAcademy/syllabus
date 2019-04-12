# Single Page App Authentication

This example takes a look at how we log users into an application.  We start off with a discussion of a few concepts around authentication and authorization.  It's important to make the distinction clearly.

## Start Here
* [Authentication vs. Authroization](./01-authentication-vs-authorization.md) (independent reading)
* [Authentication](./02-authentication.md) (independent reading)

## Devise
We turn our attention to a base install of Devise, a popular Rails authentication gem, and explore how Devise works in an app that doesn't use React.

#### Group Work
This example is intended to be done as a group exercise.

* [Devise Example](./devise-example) (Group Exercise)

#### Exercises

* [Challenge Devise Database Authenticatable](https://classroom.github.com/g/ZjiQBXDO) (Pair Exercise)

## Devise and a Single Page App

#### Group Work
This example, meant to be done as a group exercise brings all the concepts together.  We build an app with authenticated Devise routes, and a single page application.

* [Devise Single Page App](./devise-single-page-app)(Group Exercise)


#### Exercises

* [Complete Skateboard App](https://classroom.github.com/a/c02lHbCC)(Pair Exercise)

### Apartment App

#### Git Repo
Please use this Git Repo to manage your work.  It is a Github classroom, which will allow the instructors to give you feedback.

* [Git Repo](https://classroom.github.com/a/QXbYImaf)

#### User Stories
#####Part 1
Story: As an un-registered guest on the website, I can go to a web page and see a list of available apartments.

Apartments have: two street designations, a city, postal code, state, and country, in a addition to a building manager's contact info, which includes: name, phone number, and hours to contact

Story: As an un-registered guest on the website, I can click on an apartment to view its details

Story: As an un-registered guest on the website, I can see a header element at the top of each page containing navigation to the other pages

** IMPORTANT NOTE **
Remember that your rails app needs to be an API and should use a postgres database. You can include all of these requirements in your rails new command

Hint: Only use one table in your database.
Hint: Divide the story into smaller tasks and commit to git when each task is complete.

##### Part 2
Story: As a un-registered guest, I can go to registration page with a form and register as a new user. Once I have registered, I should be redirected to the index view of all apartments

Story: As a logged in user, I can go to a new apartment page with a form and create a new apartment

Story: As a logged in user, I can edit the information for any apartment I have created, but I cannot edit the information for apartments that belong to someone else

Story: As a logged in user, I should be able to log out

Story: As a registered user who has not logged in, I can go to a login page
