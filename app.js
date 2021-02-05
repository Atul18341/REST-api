const express=require("express");
const bodyParser=require("body-parser");
const connect=require("./connection");
const PORT=process.env.PORT ||4000;
const mysqlAdmin = require('node-mysql-admin');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let productRoute=require("./product.js");
app.use("/",productRoute);


app.listen(PORT,()=>{
	     console.log(`Connected at port ${PORT}`);
});
