import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("server ready");
});

app.listen(PORT, () =>
  console.log(`server started on http://localhost:${PORT}`)
);
