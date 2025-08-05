// Express is needed to solve the problem that we faced in parsing url and then we would use different conditions like if this is a GET method send this response if its a PUT mathod do this and all.. We had to write these condition for each case in the switch that we used to match the url.pathname 
const express=require('express');

const app=express();
app.get('/about',(req,res)=>{res.end(`Hi ${req.query.name} Welcome to about page`)})
app.get('/',(req,res)=>{res.end(`This is Homepage url is ${req.url}`)})
app.listen(3000,()=>console.log('Server is listening'))