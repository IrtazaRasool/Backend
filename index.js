const express = require('express')
require('dotenv').config();

const app = express();


app.get('/', (req, res)=>{
    res.send("HEllo World!")
})

app.listen(process.env.PORT,(req, res)=>{
    console.log(`Server is running on ${process.env.PORT}`);
    
})