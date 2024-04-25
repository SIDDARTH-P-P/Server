const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());


//Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/userdatas")
.then(()=> console.log("MongoDB Connected"))
.catch((error)=>console.log(error))


const userroute = require("./Routes/user")
app.use('/user',userroute);

app.listen(3001,(error)=>{
    if(error){
        console.log(error)
    }
    console.log("server start")
})