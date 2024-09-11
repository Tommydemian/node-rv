import express from "express";
import "dotenv/config";
import morgan from "morgan";

const port = process.env.PORT || 6700;
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.log("Mongo DB environament variable not set");
  process.exit(1);
}

import { connectDb } from "./config/database";

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Connect to database
connectDb(mongoUri);

// init Server
app.listen(port, () => {
  console.log("Listening on port " + port);
});
