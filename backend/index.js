import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Successfully connected to the database!");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
