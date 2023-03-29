const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");

require("dotevn").config();

const app = express();
const PORT = +process.env.PORT || 5000;
const URI = process.env.URI;
const client = new MongoClient(URI);
const DB = process.env.DB;
const DBCOLLECTION = process.env.DBCOLLECTION;

app.use(express.json());
app.use(cors());

app.get("/orders", async (_, res) => {
    try {
        const connection = await client.connect();
        const data = await connection.db(DB)
            .collection(DBCOLLECTION)
            .find()
            .toArray();
        await connection.close();
        return res.send(data);
    } catch (error) {
        res.status(500).send({ error });
    }
});

app.post("/order", async (req, res) => {
    const { productName, guantity, isInStock, createDate } = req.body || {};

    if (!productName) {
        return res.status(400).send("Product name not provided").end();
    }

    if (typeof productName !== "string") {
        return res.status(400).send(`${productName} is not a string`).end();
    }

    try {
        const connection = await client.connect();
        const dbRes = await connection
            .db(DB)
            .collection(DBCOLLECTION)
            .insertOne({
                productName,
                quantity,
                isInStock,
                createDate: new Date(createDate),
            });

        await connection.close();

        return res.send(dbRes);
    } catch (error) {
        res.status(500).send({ error });
    }
});

app.patch("/order/:id", async (req, res) => {
    const { id } = req.params;
    const { productName, quantity } = req.body;

    try {
        const con = await client.connect();
        const db = con.db(DB);

        const order = await dataBase
            .collection("orders")
            .findOneAndUpdate(
                { _id: ObjectId(id) },
                { $set: { productName, quantity } }
            );

        await con.close();

        res.send(order).end();
    } catch (error) {
        return res.send({ error }).end();
    }
});
