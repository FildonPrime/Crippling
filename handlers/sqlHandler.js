const mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "botdb"
})

con.connect(err => {
    if(err) {
        throw err
    }
    console.log("Connected to the database"); 
    con.query("SHOW TABLES", console.log);
})

