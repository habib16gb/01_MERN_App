import express from "express";
import dotenv from "dotenv";

import router from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", router);

app.get("/", (req, res) => {
  res.status(200).send("server ready");
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`server started on http://localhost:${PORT}`)
);
