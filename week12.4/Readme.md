# SQL

#### why not sql:

You might’ve used MongoDB 
It’s schemaless properties make it ideal to for bootstraping a project fast.
But as your app grows, this property makes it very easy for data to get curropted

#### What is schemaless?
Different rows can have different schema (keys/types)

#### Problems?
 - Can lead to inconsistent database
 - Can cause runtime errors 
 - Is too flexible for an app that needs strictness

#### Why SQL?
SQL databases have a strict schema. They require you to
>  1.Define your schema
>  2.Put in data that follows that schema
>  3.Update the schema as your app changes and perform  migrations

#### Creating a database
You can start a Potgres database in a few ways - 
 - Using neondb
 - Using docker loaclly

**postgresql://usrname:password@host/database**

#### Using a library that let's you connect and put data in it.

1. psql
psql is a terminal-based front-end to PostgreSQL. It provides an interactive command-line interface to the PostgreSQL (or TimescaleDB) database. With psql, you can type in queries interactively, issue them to PostgreSQL, and see the query results.

**psql -h p-broken-frost-69135494.us-east-2.aws.neon.tech -d database1 -U biswa007**

2. pg
pg is a Node.js library that you can use in your backend app to store data in the Postgres DB (similar to mongoose). We will be installing this eventually in our app.


### Schema
### Tables in SQL:
```
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

```
#### How to do queries from a Nodejs app?

 - In the end, postgres exposes a protocol that someone needs to talk to be able to send these commands (update, delete) to the database.

 - psql  is one such library that takes commands from your terminal and sends it over to the database.

 - To do the same in a Node.js , you can use one of many Postgres clients.

##### pg library

#### SQL injection
```

const result = await client.query(`
        INSERT INTO users2 (username, password, email)
        VALUES (' ', ' ', ' ')
        `);  DELETE * FROM user
        console.log(result);       

insertUserData(
     "; DELETE * FROM users",
     " ",
     " "
)
```

#### Solution of sql injection:

```
 const result = await client.query(`
        INSERT INTO users2 (username, password, email)
        VALUES ($1, $2, $3)
        `, [username, password, email]);


```

#### Relationship  

Relationships let you store data in different tables and relate it with each other.

##### Relationships in Mongodb
Since mongodb is a NoSQL database, you can store any shape of data in it. 
If I ask you to store a users details along with their address, you can store it in an object that has the address details.

##### Relationships in SQL
Since SQL can not store objects as such, we need to define two different tables to store this data in.

```
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

```

#### Joins

Defining relationships is easy.
What’s hard is joining  data from two (or more) tables together.

```
SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
JOIN addresses ON users.id = addresses.user_id
WHERE users.id = '1';

```

```
SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
FROM users u
JOIN addresses a ON u.id = a.user_id
WHERE u.id = YOUR_USER_ID;

```