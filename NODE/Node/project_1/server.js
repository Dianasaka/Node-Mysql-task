const app = express();
const PORT = +process.env.PORT || 5000;
const URI = process.env.URI;
const client = new MongoClient(URI);
const DB = process.env.DB;
const dbCollection = process.env.dbCollection;
const http = require("http");
const port = 5_000;
const randomNumber = Math.round(Math.random());

// http.createServer sukuria ir grąžina serverį. Pasiekia užklausą (req) ir atsakymą (res)
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain"); // panašu, kaip JavaScripte su fetch

  // jei atsitiktinis numeris yra 1, grąžink error (klaidą)
  if (randomNumber) {
    res.statusCode = 200;
    res.end("Puikus ketvirtadienio vakaras!");
  }

  res.statusCode = 200;

  res.end("Hello!");
});

server.listen(port, () => {
    // nurodom portą, ties kuriuo bus klausomasi (laukiama užklausų)
    console.log(`Server is running ${randomNumber}.`);
  });

