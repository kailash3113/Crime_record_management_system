const express=require('express');
const app= express();
const cors=require('cors');
require('dotenv').config();
const axios = require('axios');


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

const routesfunc=require("./routes")


app.use('/api/v1/second',routesfunc)


app.post('/api/v1/chatbot',(req,res)=>{
    
    console.log(req.body.ques)
    axios.post(`http://www.tinyurl.com/SKGPT/prompt?text=mention+the+articles+and+sections+and+description+for+${req.body.ques}+in+indian+constitution`)
    .then(response => {
        
        res.send(response.data.data.Response)
    })
})
        


app.use('/*',(req,res)=>{
    res.send('Unauthorised Access');
})


app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
})


