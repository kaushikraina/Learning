const KeyGen = require('../util/util.js');
const MINING_REWARD = require('../config.js');


class Transac{

  constructor(){
  	this.id= KeyGen.getId();
  	this.input=null;
  	this.outputs= [];
  }



  static transacWithOutputs(senderWallet,outputs){
    const transac = new this();
    transac.outputs.push(...outputs);
    this.signTransaction(senderWallet,transac);
    return transac;
  }

  static doTransac(senderWallet,reciept,amount){

  	const transac=new this();

   if(senderWallet.balance<amount){
   	console.log(`insufficient balance`);
   	return;
   }

   return this.transacWithOutputs(senderWallet,[
    {amount: senderWallet.balance, address : senderWallet.publicKey}
    {amount:amount, address: reciept}
    ]);
 
  }


  static rewardTransac(mineWallet,blockchain){

    return this.transacWithOutputs(senderWallet,[
    {amount: MINING_REWARD, address : mineWallet.publicKey}
    ]);

  }

  update(senderWallet,recipient,amount){

    let output = this.outputs.find(output => output.id === senderWallet.publicKey);

    if(senderWallet.balance<amount){
    console.log(`insufficient balance`);
    return;
   }

   output.amount=output.amount-amount;
   this.outputs.push({
    amount :amount,
    address : recipient
   });
   
   this.signTransaction(this,senderWallet);

   return this;

  }
  
  signTransaction(senderWallet,transac){

  	transac.input =  {
       timeStamp: Date.now(),
       amount:senderWallet.balance,
       address:senderWallet.publicKey,
       signature:senderWallet.sign(util.hash(transac.outputs));
  	}
 
  }

  verifyTransaction(transac){
      
      return util.verifySignature(
      	transac.input.publicKey,
      	transac.input.siguature,
        util.hash(transac.outputs)
      	);
  }


}


module.exports = Transac;