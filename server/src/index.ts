import express, { urlencoded } from "express";
import taskRouter from "./routes/task.route";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import { errorHandler } from "./utils/errorHandler";

const port = process.env.PORT || 6700;
const mongoUri = process.env.MONGO_URI + "tasks-app";

if (!mongoUri) {
  console.log("Mongo DB environament variable not set");
  process.exit(1);
}

import { connectDb } from "./config/database";

const app = express();

// Middlewares
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.use("/tasks", taskRouter);

app.use(errorHandler);

// Connect to database
connectDb(mongoUri);

// init Server
app.listen(port, () => {
  console.log("Listening on port " + port);
});
