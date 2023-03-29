const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const app = express();
const PORT = +process.env.PORT || 5000;
const URI = process.env.URI;
const client = new MongoClient(URI);
const DB = process.env.DB;

app.use(express.json());
app.use(cors());

app.post("/collection", async (req, res) => {
    const { name } = req.body

    try {
        const connection = await client.connect()
        const database = connection.db(DB)

        await database.createCollection(name)

    } catch (error) {
        return res.send({ error }).end()
    }

    res.send({ message: `${name} collection is created` }).end()

});

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})

