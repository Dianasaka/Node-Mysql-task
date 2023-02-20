import { Router } from "express";
import mysql from "mysql2/promise";
import { MYSQL_CONFIG } from "./config";

const router = Router();

router.get("/trophies/:team_id", async (req, res) => {
    const team_id = +req.body.team_id;

    if (!team_id) {
        return res
            .status(400)
            .send(
                `Please provide a proper team_id, yours ${team_id} does not exists.`
            );
    }
    try {
        const con = await mysql.createConnection(MYSQL_CONFIG);
        const result = await con.execute(
            `SELECT * FROM trophies WHERE team_id = ${mysql.escape(team_id)}`
        );

        await con.end();
        res.send(result).end();
    } catch (error) {
        res
            .status(400)
            .send(`Something went wrong. Can not read ${team_id} team_id.`);
    }
});

router.post("/trophies", async (req, res) => {
    const team_id = +req.body.team_id;
    const title = +req.body.title;
    const year = req.body.year;

    if (!team_id || !title || !year) {
        return res
            .status(400)
            .send(
                `Your team_id ${team_id}, title ${title}, year ${year} is not correct.`
            )
            .end();
    }

    try {
        const con = await mysql.createConnection(MYSQL_CONFIG);
        const result = await con.execute(
            `INSERT INTO trophies (team_id, title, year) VALUES (${mysql.escape(
                team_id
            )}, ${mysql.escape(title)}, ${mysql.escape(year)})`
        );

        await con.end();
        res.send(result).end();
    } catch (error) {
        res
            .status(400)
            .send(`Please provide a proper team_id, title and year`)
            .end();
    }
});

export default router;