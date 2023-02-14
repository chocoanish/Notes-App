const express = require("express");
const app = express();
const path = require("path");

const hostname = "127.0.0.1";
const port = 3000;

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/Login/signup.html"));
});

app.use(express.static('public')); 

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
