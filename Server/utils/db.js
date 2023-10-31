import mysql, { createConnection } from "mysql";

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employees",
});

con.createConnection(function (err) {
  if (err) {
    console.log("connection error");
  } else {
    console.log("connected");
  }
});

export default con;
