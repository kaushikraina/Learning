
const {INITIAL_BALANCE} = require('../config.js');
const KeyGen = require('../util/util.js');



class Wallet{
  constructor(){
  	this.balance= INITIAL_BALANCE;
  	this.keyPair=KeyGen.genKeyPair();
  	this.publicKey=this.keyPair.getPublic();
  }

  toString(){
  	return `Wallet
  	 balance= ${this.balance},
  	 keyPair= ${this.publicKey.toString()}
  	 `;
  }

  sign(data){
  	return this.keyPair.sign(data);
  }

  createTransaction(recipient,amount,transactionPool){
    if(amount >this.balance){
      console.log('amount greater than balance');
      return;
    }

    let transaction=transactionPool.searchTransaction(this.publicKey);

    if(transaction){

      transaction.update(this,recipient,amount);

    }else{
         transaction = Transaction.newTrasaction(this,recipient,amount);
         transactionPool.addTransac(transaction);
    }
  }

 static getBlockchainWallet(){
    const blockchainWallet= new this();
    blockchainWallet.address ='blockchain';
    return blockchainWallet;
  }

}


module.exports = Wallet;