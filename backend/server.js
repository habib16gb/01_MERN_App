import express from "express";
import dotenv from "dotenv";

import router from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/api/users", router);
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.status(200).send("server ready");
});

app.listen(PORT, () =>
  console.log(`server started on http://localhost:${PORT}`)
);
