const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const dalyviaiRoutes = require("./routes/dalyviai.js");
const renginiaiRoutes = require("./routes/renginiai.js");

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

// Middleware
// Gausim JSON request'uose
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Routes
app.use('/', dalyviaiRoutes);
app.use('/renginiai', renginiaiRoutes);

app.listen(5000, () => console.log("Serveris veikia, klauso 5000 porto"));