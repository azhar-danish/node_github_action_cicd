require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get('/',(req,res)=>{
    // res.status(200).send({message : 'welcome back to my api'})

    res.send("hello world")
});

app.listen(PORT,()=>{
    console.log(`Server is running on PORT:${PORT}`)
})