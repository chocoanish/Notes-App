const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const Login = require("./Login.js")

const hostname = "127.0.0.1";
const port = 3000;

app.use(express.static('public')); 
app.use(express.static('public/images'));
app.use(express.static('public/CSS'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "/HTML/signup.html"));
});


app.post('/login',(req,res)=>{
        try {
            if(req.body.name == "Anish" && req.body.password == "abc"){
                res.sendFile(path.join(__dirname, "/HTML/index.html"))
            }
            else{
                res.send("Something went wrong 404");
            }
        } catch (error) {
            console.log(error);
        }
})

app.post('/register',(req,res)=>{
    
res.send("register")
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
