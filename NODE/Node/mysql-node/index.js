const express = require("express");
const mysql = require("mysql2/promise");

require('dotenv').config();

const app = express();
const PORT = 5_000;
const MYSQL_CONFIG = {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port: process.env.port,
    //ssl: process.env.sslmode
}
console.log(MYSQL_CONFIG)

app.use(express.json());

app.post("/table", async (req, res) => {
    try {
        const con = await mysql.createConnection(MYSQL_CONFIG);
        const name = req.body?.name.trim();

        await con.execute(
            `CREATE table ${name} (id int NOT NULL AUTO_INCREMENT, firstName varchar(35), PRIMARY KEY (id))`);
        await con.end();
        // to do used request body
    } catch (err) {
        res.status(500).send(err).end();
        return console.error(err);
    }
    res.status(201).send("Table was created!").end();
});

app.listen(PORT, () => {
    console.log(`server is runing on ${PORT}`)

});