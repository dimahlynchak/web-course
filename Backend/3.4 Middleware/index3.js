import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
