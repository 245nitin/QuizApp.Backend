const express = require('express')

const app = express(); //creating a server

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello Geeks");
})

app.listen(process.env.PORT || PORT, () => {
    console.log("server started......");
    
})