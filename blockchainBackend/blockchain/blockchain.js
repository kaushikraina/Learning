const Block =require('./block.js');

class Blockchain{
	constructor(){
		this.chain=[Block.genesis()];
	}

	addBlock(data){
		const preBlock = this.chain[this.chain.length-1];
        const newBLock=Block.mineBlock(preBlock,data);

        this.chain.push(newBLock);
        return newBLock;
	}
}

module.exports= Blockchain;