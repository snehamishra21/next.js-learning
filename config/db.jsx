import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.getConnection()
  .then((conn) => conn.release())
  .catch((err) => console.error("DB connection failed:", err.message));

export { db };
export default db;
