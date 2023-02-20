import { Router } from "express";
import { jwt_Secret, MYSQL_CONFIG } from "./config";
import { isLoggedIn } from "./teamsAuth";
import jwt from "jsonwebtoken";
import mysql from "mysql2/promise";

const router = Router();

router.post("/games", isLoggedIn, async (req, res) => {
    const team_id = +req.body.team_id;
    const token = req.headers.authorization?.split(" ")[1];
    const payload = jwt.verify(token.replace("Bearer ", ""), jwt_Secret);
    const player_id = payload.id;

    if (!team_id || !token) {
        return res
            .status(400)
            .send(
                `Your group_id ${team_id} does not exists or can not find your token ${token}`
            );
    }

    try {
        const con = await mysql.createConnection(MYSQL_CONFIG);
        let result = await con.execute(
            `INSERT INTO games(team_id, player_id) VALUES
      (${mysql.escape(team_id)}, ${mysql.escape(player_id)})`
        );

        await con.end();
        res.send(result).end();
    } catch (error) {
        return res.status(400).send({
            message: `Can not register ${token} in to games`,
        });
    }
});

export default router;