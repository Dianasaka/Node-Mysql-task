import express from "express";
import dotenv from "dotenv";
import auth from "./src/auth.js";
import { PORT } from "./src/config.js";
import teamsAuth from "./src/teamsAuth.js";
import gamesAuth from "./src/gamesAuth";
import trophiesAuth from "./src/trophiesAuth";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

app.use(auth);
app.use(teamsAuth);
app.use(gamesAuth);
app.use(trophiesAuth);

app.listen(PORT, () => console.log(`Listening on ${PORT} port.`));
