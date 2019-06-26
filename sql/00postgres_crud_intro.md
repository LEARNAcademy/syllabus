# CRUD

In the next few days we will be exploring Postgresql, the SQL style database that we will use as our Relational Database technology.

As we explore Postgresql it is helpful to recognize that Postgresql or whatever database technology you are using is the heart of the CRUD functionality in your web application.

Let's review some terms.

CRUD is an acronym that stands for:

### Create
- Making new records in the application
### Read
- Retrieving or reading out existing records in an application
### Update
- Altering existing records in an application
### Delete
- Removing records from an application

These are really referring to the actions that are required to implement any kind of persistent storage, which is what Postgres will allow us to do.

We will start with learning how to query our Postgres databases, or *Read* from them. Then we'll learn how to run other CRUD operations in Posgresql before moving to using Rails ActiveRecord, the ORM that allows us to run CRUD operations using Ruby code.