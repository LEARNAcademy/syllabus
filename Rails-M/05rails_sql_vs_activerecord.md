# SQL vs. Active Record

Active Record is a Rails-specific wrapper for SQL queries. It's shorter, easier to type, and often looks nicer, but under the hood it's the same old SQL. While we could have jumped straight into using Active Record, it is important to know the SQL underneath these methods so that we can write efficient code that makes the best use of our database possible.

Here are some examples of how SQL and Active Record map to each other:

<table>
  <thead>
    <tr>
    <th>SQL</th>
    <th>ActiveRecord</th>
    <th>Comments</th>
    <thead>
    </tr>
  <tbody>
    <tr>
      <td>SELECT * FROM users
        WHERE (id = 1);
      </td>
      <td>User.find(1)</td>
      <td>Model.find will only work on an ID or a list of ID's</td>
    </tr>
    <tr>
      <td>SELECT * FROM users
        WHERE (name = 'John');
      </td>
      <td>User.find_by_name("John")
      </td>
      <td>Model.find_by returns only the first result</td>
    </tr>
    <tr>
      <td>SELECT * FROM users;</td>
      <td>User.all</td>
      <td></td>
    </tr>
    <tr>
      <td>SELECT * FROM users
        WHERE (last_name = 'Smith');
      </td>
      <td>User.where(last_name: "Smith")
      </td>
      <td>Model.where returns a collection</td>
    </tr>
    <tr>
      <td>SELECT name, number </br>
        FROM phones <br/>
        JOIN users ON <br/>
        phones.user_id = users.id;
      </td>
      <td>User.all.phones.numbers
      </td>
      <td>Returns a collection</td>
    </tr>
    <tr>
      <td>INSERT INTO users <br/>
        (first_name, last_name) <br/>
        VALUES ('John', 'Jones');
      </td>
      <td>user = User.new(first_name: "John", last_name: "Jones") <br/>
        user.create
      </td>
      <td></td>
    </tr>
    <tr>
      <td>UPDATE users <br/>
        SET last_name = 'Jones', <br/>
        WHERE last_name = 'Smith';
      </td>
      <td>User.update(id, last_name: "Smith")</td>
      <td></td>
    </tr>
    <tr>
      <td>DELETE FROM users <br/>
        WHERE id = 15;
      </td>
      <td>User.find(15).destroy</td>
      <td></td>
    </tr>
  <tbody>
</table>

Similarly, in place of SQL methods that involve directly manipulating the database -- such as CREATE TABLE -- Rails gives us generators to run in the console.  These create migration files that do the work for us. Just like Active Record, they break down into SQL.

<table>
  <thead>
    <tr>
    <th>SQL</th>
    <th width="40%">Migrations</th>
    <th>Comments</th>
    <thead>
    </tr>
  <tbody>
  <tr>
    <td>CREATE TABLE users <br/>
      (id serial PRIMARY KEY, <br/>
      first_name varchar, last_name varchar, <br/>
       dob date);
    </td>
    <td>create_table(:users) <br/>
        t.string :first_name, <br/>
        t.string :last_name, <br/>
        t.date :dob <br/>
    </td>
    <td>Rails automatically generates an integer ID field as a primary key for its tables</td>
  </tr>
  <tr>
    <td>ALTER TABLE users ADD adult boolean;</td>
    <td>add_column :users, :adult, :boolean</td>
    <td></td>
  </tr>
  <tr>
    <td>ALTER TABLE users drop adult;</td>
    <td>remove_column :users, :adult</td>
    <td></td>
  </tr>
  <tr>
    <td>DROP TABLE users;</td>
    <td>drop_table :users</td>
    <td></td>
  </tr>
  <tr>
    <td>CREATE TABLE phones <br/>
      (id serial PRIMARY KEY,<br/>
      contact_id integer REFERENCES contacts(id), <br/>
      number varchar, description varchar);
    </td>
    <td>create_table(:phones) <br/>
      t.string :number <br/>
      t.string :description <br/>
      t.references :contact, index: true
    </td>
    <td></td>
  </tr>
  <tbody>
</table>
