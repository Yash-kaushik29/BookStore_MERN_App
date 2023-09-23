import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import booksRoute from "./routes/booksRoute.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGODB connected");
  })
  .catch((err) => {
    console.log(`db err: ${err.message}`);
    process.exit(-1);
  });

app.use("/books", booksRoute);

app.listen(process.env.PORT || 5000, console.log("Server running"));

//6ca2T6cX7mHxuVDt
