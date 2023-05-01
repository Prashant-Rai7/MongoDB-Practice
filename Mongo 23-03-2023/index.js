const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const username = "prashantrai";
const password = "zCmPag6EQfqlav0I";
const cluster = "mongo-cluster";
const dbname = "myFirstDatabase";

const url = `mongodb+srv://prashantrai:${password}@${cluster}.qsxsrrt.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(url);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () { 
  console.log("Mongo Atlas Connected successfully");
});


const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.send("Hello world")
})

app.use(Router);

app.listen(3000, () => {
    console.log(`server connected on port http://localhost:3000`)
})