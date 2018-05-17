const Block =require('./block.js');

class Blockchain{
	constructor(){
		this.chain=[Block.genesis()];
	}

	addBlock(data,difficulty){
		const preBlock = this.chain[this.chain.length-1];
        const newBLock=Block.mineBlock(preBlock,data,difficulty);

        this.chain.push(newBLock);
        return newBLock;
	}


    isValidChain(chain){
       
       if(JSON.stringify(chain[0])!==JSON.stringify(Block.genesis())){
         return false;
       }

       for(var i=1;i<chain.length;i++){

       	if(chain[i].lastHash!==chain[i-1].hash)
           return false;
       }
        
        return true;
    }

    replaceChain(chain){
    	if(this.chain.length < chain.length){
    		this.chain=chain;
    		console.log("new chain is bigger that local chain");
    		return true;
    	}else{
    		console.log("new chain is smaller that local chain");
    		return false;
    	}

    	return false;
    }

}


module.exports= Blockchain;