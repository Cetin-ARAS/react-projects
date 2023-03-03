const express = require('express');
const app = express();
const mysqli = require('mysql2');
const port = 8001;

// app.get("/", (req, res) => {
//     res.send("server start");
// });

app.listen(port, ()=>{
    console.log("server starts at port no: " + port);
})