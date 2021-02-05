const express=require("express");
const bodyParser=require("body-parser");
const router=express.Router();
const mysql=require("mysql");
const connection=require("./connection");

const app=express();
app.use(bodyParser.json());

router.get("/",(req,res)=>{
	   let sql="SELECT * FROM products";
	   connection.query(sql,(err,result)=>{
		   if(err) 
		      res.status(500).send("Error fetching data");
		   else
		   res.status(200).send(result);
	   });
});
router.post("/:id",(req,res)=>{
	    let id=req.params.id;
		let sql="SELECT * FROM products WHERE id="+mysql.escape(id);
		connection.query(sql,(err,result)=>{
			if(err)
			   res.status(500).send("Unable to fetch this product data");
			else
			   res.status(200).send(result);
		});	
});	
router.post("/",(req,res)=>{
	   let id=req.body.id;
	   let name=req.body.name;
	   let price=req.body.price;
	   let reviews=req.body.reviews;
	   let value=[[id,name,price,reviews]];
	   let sql="INSERT INTO products VALUES ?";
	   connection.query(sql,[value],(err)=>{
		   if(err)
		       res.status(500).send("Unable to add product");
		   else 
	         res.status(200).send("Product Succesfully added.");
	   });
});
router.post("/update/:id",(req,res)=>{
	     let id=req.params.id;
		 let price=req.body.price;
		 let sql="UPDATE products SET price="+mysql.escape(price) +" WHERE id="+mysql.escape(id);
		 connection.query(sql,(err)=>{
			 if(err)
			   res.status(500).send("Unable to update product price.");
			else
		       res.status(200).send("Product price successfully updated.");
		 });
		 
});
router.delete("/",(req,res)=>{
	      let id=req.body.id;
		  let sql="DELETE FROM products WHERE id="+mysql.escape(id);
		  connection.query(sql,(err)=>{
			  if(err)
			    res.status(500).send("Unable to delete selected product");
			  else
		        res.status(200).send("Selected Product Successfully deleted.");
		  });
});
module.exports=router;