const SHA256 = require('crypto-js/sha256');


class Block{
	

 constructor(timestamp,lastHash,hash,data,nonce){

 	this.timestamp =timestamp;
 	this.lastHash=lastHash;
 	this.hash=hash;
 	this.data=data;
    this.nonce = nonce;
 }

 toString(){
 	return ` Block-
 	timestamp:${this.timestamp},
 	lastHash: ${this.lastHash},
 	hash: ${this.hash},
 	data: ${this.data},
 	nonce : ${this.nonce}

 	`
 }

 static genesis(){
 	return new this('genesis','-----','first hash',[],0);
 }

 static mineBlock(lastBlock,data,difficulty){
    let nonce = 0;
    let timestamp=Date.now();
    const lastHash=lastBlock.hash;
    let hash=Block.hash(timestamp,lastHash,data,nonce);

    do{
     nonce++;
     timestamp =Date.now();
     hash=Block.hash(timestamp,lastHash,data,nonce);
    }while(hash.substring(0,difficulty) !== '0'.repeat(difficulty))

    return new this(timestamp,lastHash,hash,data,nonce) 
 }


 static hash(timestamp,lastHash,data,nonce){
 	return SHA256(`${timestamp} + ${lastHash} + ${data} + ${nonce}`).toString();
 }


}

module.exports=Block;