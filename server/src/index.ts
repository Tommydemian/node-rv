import express from "express";
import "dotenv/config";
import morgan from "morgan";

const port = process.env.PORT || 6700;

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// init Server
app.listen(port, () => {
  console.log("Listening on port " + port);
});
