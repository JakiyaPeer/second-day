import express from 'express';
import cors from 'cors' ; 
import dotenv from 'dotenv';
import productRoute from './Rounters/ProductRounters.js';
dotenv.config();
const app=express();
app.use(cors({
    origin:"*",
    credentials:true,
    methods:["GET","POST","PUT","DELETE"]


}));
app.get("/",(req,res)=>{
    res.status(200).send("welc to our api")
})
app.use('/api/product',productRoute)



const port=process.env.PORT ||5000;
app.listen(port,()=>{
    console.log("serever start");
    
})


