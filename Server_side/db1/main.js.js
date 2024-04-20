const express=require('express');
const app= express();
const cors=require('cors');
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

const routesfunc=require("./routes")


app.use('/api/v1/first',routesfunc)
app.use('/api/v1/check',routesfunc)


app.use('/*',(req,res)=>{
    res.send('Unauthorised Access');
})


app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
})


