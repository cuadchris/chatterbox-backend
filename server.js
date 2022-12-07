import express from "express";
import mongoose, { mongo } from "mongoose";
import Messages from "./dbMessages.js";
import Cors from "cors";

//App config
const app = express();
const port = process.env.PORT || 9000;
const connection_url =
  "mongodb+srv://cuadchris:1990112@cluster0.4eenzha.mongodb.net/?retryWrites=true&w=majority";
//Middleware
app.use(express.json());
app.use(Cors());
//DB config
mongoose.connect(connection_url);
//API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello Chris.");
});
app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(data);
  });
});
app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
//Listener
app.listen(port, () => {
  console.log(`Listening on localhost: ${port}`);
});
