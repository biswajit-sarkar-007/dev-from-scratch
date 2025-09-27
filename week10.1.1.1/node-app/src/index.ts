// // write a function to create a users table in your database.

// import { Client } from 'pg'
// const client = new Client({
//   connectionString: "postgresql://username:password@host/database"
// })
// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result)
// }
// createUsersTable();


 


// import { Client } from "pg";
// async function insertData(){
//     const client = new Client({
//         connectionString:" postgresql://username:password@host/database"
//     })
//     try {
//         await client.connect();
//           const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
//         const res = await client.query(insertQuery);
//         console.log('Insertion scuess:',res);
//     } catch ( error) {
//         console.error("Error during the insection:", error)

//     }finally{
//         await client.end(); // close the client connection
//     }
// }
// insertData()




// this is an insecure way to store data in your tables.
// When you expose this functionality eventually via HTTP, someone can do an SQL INJECTION to get access to your data and delete your data.




// import { Client } from "pg";
// async function insertData(username:string, email:string,password:string){
//     const client = new Client({
//         connectionString:" postgresql://username:password@host/database"
//     })
//     try {
//         await client.connect();
//           const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1,$2,$3);";
//         const res = await client.query(insertQuery,[username, email, password]);
//         console.log('Insertion scuess:',res);
//     } catch ( error) {
//         console.error("Error during the insection:", error)
//     }finally{
//         await client.end(); // close the client connection
//     }
// }
// insertData("username007","usename007@gmail.com", "user007")





// import { Client } from "pg";
// async function getUser(email: string) {
//   const client = new Client({
//     connectionString:
//       " postgresql://username:password@host/database",
//   });
//   try {
//     await client.connect();
//     const query = "SELECT * FROM users WHERE email = $1";
//     const result = await client.query(query,[email]);
//     if (result.rows.length > 0) {
//       console.log("user found:", result.rows[0]);
//       return result.rows[0];
//     } else {
//       console.log("No user found with this gmail");
//       return null;
//     }
//   } catch (error) {
//     console.log("Error during search user", error);
//   } finally {
//     await client.end();
//   }
// }
// getUser("usename007@gmail.com").catch(console.error);



