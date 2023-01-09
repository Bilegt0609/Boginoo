import express from "express";
const app = express();
import mongoose from "mongoose";
import linkRouter from "./router/LinkRoute.js";
import cors from "cors";

app.use(express.json());
app.use(cors());

app.use(linkRouter);

const URI =
  "mongodb+srv://tester:test123@cluster0.kjp5agy.mongodb.net/?retryWrites=true&w=majority";

const connection = mongoose.connect;
connection(URI);
mongoose.connection.once("open", () => {
  console.log("succes mongoDV");
});

app.listen(8888, () => {
  console.log("server liston port in 8888");
});
