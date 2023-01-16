const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(require("./src/routes/index"));
app.use(express.static(path.join(__dirname, "public")));
app.get("/",(req,res)=>{
        res.send("Hola")
        })

app.listen(3500,()=>{
    console.log("Server on port 3500")
});
