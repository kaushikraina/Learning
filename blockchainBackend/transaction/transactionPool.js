const Transac = require('../transaction/transaction.js') 

class transactionPool{

  constructor(){
  	this.transacPool= [];
  }

  addTransac(transaction){
    let transacWithId= this.transacPool.find(t => t.id===transaction.id);

    if(transacWithId){
    his.transacPool[this.transacPool.indexOf(transacWithId)] = transaction; 
    }else{
      this.transacPool.push(transaction); 
    }


    validTransactions(){

    validList= this.transactions.filter( transaction =>{

           const outputTotal = transaction.outputs.reduce((total,output)
            return total + output.amount;
          ,0);
          
          if(transaction.input.amount !== outputTotal){
            console.log(`transaction ${transaction.input.address} not valid`);
            return ;
          }

          if( !Tranasac.veryfyTransaction(transaction)){
            console.log(`transaction ${transaction.input.address} not valid`);
            return ;
          }

           
        return transaction;    
      });    


    }

    searchTransac(address){
      return this.transacPool.find(t => t.input.address== address);
    }

 clear(){
  this.transacPool=[];
 }

  }

}


module.exports = transactionPool;