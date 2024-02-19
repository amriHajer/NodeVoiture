const  express = require("express");
const  vRouter=require("./routes/voiture");
const app=express();

app.use("/voiture" , vRouter );

app.listen(5000,() =>{
    console.log('Listening on port 5000 ') ;
}) ;