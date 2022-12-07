import express from "express";
import mongoose, { mongo } from "mongoose";

//App config
const app = express();
const port = process.env.PORT || 9000;
const connection_url =
  "mongodb+srv://cuadchris:1990112@cluster0.4eenzha.mongodb.net/?retryWrites=true&w=majority";
//Middleware
//DB config
mongoose.connect(connection_url);
//API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello Chris.");
});
//Listener
app.listen(port, () => {
  console.log(`Listening on localhost: ${port}`);
});
