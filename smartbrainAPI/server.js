const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');

const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));



const database ={
	"user":[
	{
        "id": "1",
        "name": "kaushik",
        "email": "kaushik@gmail.com",
        "password": "$2a$10$pQP.luJLdO9rMVIi5/KU3OOW3qoMd6HuEtwbkmKj.bhVlkaZsp76."
    },
     {
        "id": "2",
        "name": "kaushik",
        "email": "kaushik@gmail.com",
        "password": "$2a$10$S5znjcuVFLxX90hTMbPfTOSUSidxcJszcM0ho3jtd9XlN4EXmqWGy"
    }
	]
}


app.get('/',(req,res)=>{
	res.send(database.user);
});


app.post('/signin',(req,res)=>{  

	database.user.forEach(user=>{
		bcrypt.compare(req.password, user.password, function(err, result) {
			if(result===true){
				res.send("success");
				return;
			}else{
				res.send("failed");
			}

		});
	})
});


app.post('/register',(req,res)=>{

	bcrypt.hash(req.body.password, null, null, function(err, hash) {
		req.body.password=hash;
	});

	database.user.push(req.body);
	res.send(req.body);
});

app.post('/profile/:id',(req,res)=>{  

	const { id } = req.params;
	database.user.forEach(user=>{
		if(user.id===id){
			res.send("found");
			return;
		}
	})
	res.send("not found");

});

app.listen(3000,(req,res)=>{
	console.log('Server running on 3000');
});



// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });