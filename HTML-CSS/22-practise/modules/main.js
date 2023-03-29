import { getRobots } from "./fetch.js";
import { createTable } from "./createtable.js";
import { createVIPChecbox } from "./createVIPCheckbox.js";

const robots = await getRobots();

createTable(robots);

createVIPChecbox(robots);