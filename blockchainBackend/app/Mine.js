

const Transac = require('../transaction/transaction.js');


class Mine{
	

 constructor(blockChain,transactionPool,wallet,p2pserver){
    
    this.blockChain =blockChain;
    this.transactionPool=transactionPool;
    this.wallet =wallet;
    this.p2pserver =p2pserver;
 }


 mine(){
 	const validTransactions= this.transactionPool.getValidTransactions(); 
 	validTransactions.push(
 		Transac.rewardTransac(this.wallet,Wallet.getBlockchainWallet())
 		);
 	this.p2pserver.syncChain();
    this.transactionPool.clear();
 	//clear pool using broadcast
 }

 

}

module.exports =Mine;