# Joins and Relations


## Understanding Relations / Foreign Keys
[![YouTube](http://img.youtube.com/vi/QpFPd4tlGoA/0.jpg)](https://www.youtube.com/watch?v=QpFPd4tlGoA)
]


#### The Crude Approach

If I start building a database table meant to contain contact information, the table schema could look something like this:

```sql
Contacts
--------
name:  varchar
email: varchar
phone: varchar
```

Here is Joe's data:

```sql
name	email			phone
----	-----			-----
Joe		joe@home.com	858-555-1212
```

Now Joe gets another phone:

```sql
Joe		joe@home.com	619-222-3333
```

And another:

```sql
Joe		joe@home.com	619-444-5555
```

This leads to replication of data and eventual problems if Joe ever wants to update his email because it is recorded in multiple places.

#### A Better Approach: Adding Columns

One way to address this data replication problem is to add columns for every possible mode of communication:

```sql
Contacts
--------
name:         varchar
email:        varchar
phone:        varchar
fax:          varchar
pager:        varchar
landline:     varchar
cell:         varchar
google_voice: varchar
```

However, this looks like it will be a waste of space -- Joe doesn't have a fax or pager -- and there is no guarantee that we have enough or the right columns. What if someone has a second cell phone?

## Solution --> Foreign Keys

The solution is to add another table, meaning entity, that contains phones.

<center>
<img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/21/original_intro_fkeys1.png?1465252977" height="140px">
</center>

```sql
Contacts
--------
id: integer
name: varchar
email: varchar
```

<center>
<img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/22/original_intro_fkeys2.png?1465252996" height="140px">
</center>

```sql
Phones
------
id: integer
contact_id: integer
number: varchar
description: varchar
```
<center>
<img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/23/original_intro_fkeys3.png?1465253019" height="160px">
</center>

Before we link up our tables in the database, we need to think about the kind of relationship the Contacts table has with the Phones table. Is it a one-to-one relationship? No, that would be more like the relationship between a Contact and their date of birth, where one person only ever has one birthday.  Is it a many-to-many relationship? Not quite, our phones don't have multiple owners. In our database, Phones and Contacts have a one-to-many relationship: a Contact has many Phones.

<center>
  <img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/24/original_intro_fkeys4.png?1465253034" height="140px">
</center>

```sql
SELECT * FROM contacts;
```

```sql
id		name	email
---		-----	-----
1		Joe		joe@home.com
2		Jenny	jenny@home.com
```

<center>
  <img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/25/original_intro_fkeys5.png?1465253072" height="160px">
</center>

```sql
SELECT * FROM phones;
```

```sql
id	contact_id	   number		description
--	----------	------------	-----------
1		1		858-555-1212	Cell
2		2		8675309			Home
3		1		619-222-3333	Landline
```

Notice that the `contact_id` column in the phones table contains `id` values that correspond to Joe and Jenny in the contacts table.