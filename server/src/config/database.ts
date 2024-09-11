import mongoose from "mongoose";

export const connectDb = (mongoUri: string) => {
  try {
    mongoose.connect(mongoUri);
    console.log("database connection established");
  } catch (error) {
    console.error("database connection error");
    process.exit(1);
  }
};
