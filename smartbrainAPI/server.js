const express = require('express');
const bodyParser = require('body-parser');

const database ={
	"user":[
      {
      	"name":"kaushik",
      	"email":"kaushik@gmail.com"
      },
      {
      	"name":"anurag",
      	"email":"anurag@gmail.com"
      }
	]
}

const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res)=>{
  res.send("working");
});

app.post('/signin',(req,res)=>{  
  
  if(req.body.email ===database.user[0].email){
  	res.send("success");
  }else{
    res.send(req.body);
  }

});

app.post('/register',(req,res)=>{
  res.send("register");
});

app.listen(3000,(req,res)=>{
  console.log('Server running on 3000');
});