# Insert and Select

In this exercise, we are going to ....

## 1. Launch PGAdmin, and connect to Postgres

## 2. Create a new database called 'People'
![New Database](./new-db.png)
![Name it People](./name-people.png)

## 3. Create a new table called 'persons'
![Persons table](./table-persons.png)
![named persons](./named-persons.png)

##4. Add the following columns
![persons columns](./persons-columns.png)

## 5. Add a primary key for persons table
![Primary Key](./add-primary-key.png)
![Name Primary Key](./name-primary-key.png)
![Primary Key](./choose-id-primary-key.png)

## 6. Open SQL Pane and make sure everything looks correct 
![Primary Key](./sql-pane.png)

## 7. Add a new sequence to increment our primary key
![New Sequence](./new-sequence.png)
![Persons Sequence](./persons-seq.png)
![Persons Sequence Properties](./persons-seq-properties.png)


## 8. Set ID column to use persons_seq
![ID Properties](./id-properties.png)

![ID Properties](./id-uses-person-seq.png)

## 9. Notice that No ID column is in the SQL insert statement
![No ID](./no-id.png)

## 10. Its time to insert some persons into the database
![Insert Persons](./insert-persons.png)
![SQL Editor](./sql-editor.png)
