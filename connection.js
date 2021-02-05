const mysql=require("mysql");

var db=mysql.createConnection({
	host:"freedb.tech",
	user:"freedbtech_grocoup",
	password:"12345678",
	database:"freedbtech_grocoup"
});

db.connect((err)=>{
	if(err) throw err;
	console.log("Database Connected");
});

module.exports=db;
