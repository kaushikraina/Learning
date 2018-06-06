const express = require('express');
const Blockchain = require('../blockchain/blockchain');
const Wallet = require('../transaction/wallet.js');
const transactionPool = require('../transaction/transactionPool.js');
const bodyParser = require('body-parser');
const P2pserver = require('./p2pserver');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

HTTP_PORT = process.env.HTTP_PORT || 3001;
P2P_PORT = process.env.P2P_PORT || 5001;
peers = process.env.peers || [];
difficulty =2;


const bc = new Blockchain();
const p2pServer=new P2pserver(bc);
const tPool= new transactionPool();
const wallet = new Wallet();



app.get('/blocks',(req , res)=>{
  res.json(bc.chain);

});

app.get('/transactions',(req , res)=>{
  res.json(tPool.transacPool);

});

app.post('/transacted',(req , res)=>{
	  
 const { recipient, amount } = req.body;
 const transaction= wallet.createTransaction(recipient,amount,tPool);

  res.redirect('/transactions');  
  });

app.post('/mine',(req , res)=>{
	  console.log(req.body);
  const block = bc.addBlock(req.body.data,difficulty);
  res.redirect('/blocks');
  //p2pServer.syncChain();

  
  });


app.listen(HTTP_PORT, ()=> console.log(`listening to port ${HTTP_PORT}`));
p2pServer.listen();