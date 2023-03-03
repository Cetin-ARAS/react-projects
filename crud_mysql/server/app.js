const express = require('express');
const app = express();
const mysqli = require('mysql2');
const cors = require('cors');
require("./db/conn");

const port = 8001;

// app.get("/", (req, res) => {
//     res.send("server start");
// });


// middleware
app.use(express.json());
app.use(cors());


app.listen(port, ()=>{
    console.log("server starts at port no: " + port);
})