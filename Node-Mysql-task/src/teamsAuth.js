import { Router } from "express";
import Joi from "joi";
import mysql from "mysql2/promise";
import { MYSQL_CONFIG, jwt_Secret } from "./config.js";
import jwt from "jsonwebtoken";

const router = Router();

router.get("teams", async (_, res) => {
    try {
        const con = await mysql.createConnection(MYSQL_CONFIG);
        let result = await con.execute('SELECT * FROM teams_table');

        await con.end();
        res.send(result).end();
    } catch (error) {
        res.status().send({ error: "Can't get the teams table" }).end();
    }
});

export const isLoggedIn = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        const player = jwt.verify(token, jwt_Secret);
        console.log(player);
        next();
    } catch (err) {
        return res.status(400).send(`Incorrect Token`).end();
    }
};

router.post("/teams", isLoggedIn, async (reg, res) => {
    const name = req.body.name.trim();

    if (!name) {
        return res.status(400).send({ message: "Please input name of the team." });
    }
    try {
        const con = await mysql.createConnection(MYSQL_CONFIG);
        const [data] = await con.execute(
            `INSERT INTO teams_table (name) VALUES (${mysql.escape(name)})`
        );

        await con.end();
        res.send(data);
    } catch (error) {
        console.error(error);
        return res
            .status(401)
            .send({ message: "You are not in our base, please register" })
            .end();
    }
});

export default router;
