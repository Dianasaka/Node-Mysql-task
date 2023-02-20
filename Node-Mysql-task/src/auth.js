import { Router } from "express";
import Joi from "joi";
import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import { MYSQL_CONFIG } from "./config.js";
import { jwt_Secret } from "./config.js";
import jwt from "jsonwebtoken";

const router = Router();

export const playerSchema = Joi.object({
    name: Joi.string(),
    team_id: Joi.string().email().trim().lowercase().required(),
    height: Joi.string().required(),
});

router.post("/register", async (req, res) => {
    let userData = req.body;

    try {
        userData = await playerSchema.validateAsync(userData);

        if (!userData) {
            return res.status(400).send({ error: `Wrong data` });
        }
    } catch (err) {
        return res.status(400).send({ error: `Registration went wrong` }).end();
    }
    try {
        const hashedHeight = bcrypt.hashSync(userData.height);

        const con = await mysql.createConnection(MYSQL_CONFIG);
        const [data] =
            await con.execute(`INSERT INTO users (name, team_id, height) 
      VALUES (${mysql.escape(userData.name)},${mysql.escape(
                userData.team_id
            )}, "${hashedHeight}")`);

        await con.end();

        return res.send(data);
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .send({ error: `Unexpected error: Please try again` })
            .end();
    }
});

router.post("/login", async (req, res) => {
    let userData = req.body;

    try {
        userData = await playerSchema.validateAsync(userData);
    } catch (error) {
        console.error(error);
        return res.status(400).send({ error: "Incorrect data send" }).end();
    }

    try {
        const con = await mysql.createConnection(MYSQL_CONFIG);

        const [data] = await con.execute(
            `SELECT * FROM users WHERE email = ${mysql.escape(userData.team_id)}`
        );

        await con.end();

        if (!data) {
            return res
                .status(400)
                .send({ message: "Please provide a valid team_id or height" })
                .end();
        }
        const isAuthed = bcrypt.compareSync(userData.height, data[0].height);

        if (isAuthed) {
            const token = jwt.sign(
                {
                    id: data[0].id,
                    team_id: data[0].team_id,
                },
                jwt_Secret
            );
            return res.send({ message: `Succesfully logged in ${token}` }).end();
        }
        return res.status(403).send({ error: "Invalid credentials" }).end();
    } catch (error) {
        console.error(error);
        res
            .status(400)
            .send({ error: "There was error with your login information" })
            .end();
    }
});

export default router;