const Block = require('../blockchain/block');

describe('Block',()=>{
   let lastBlock,data,newBlock;

   beforeEach(()=>{
   	lastBlock = Block.genesis();
   	data ='Foo';
   	newBlock = Block.mineBlock(lastBlock,data);

   })

   it('Check data',()=>{
      expect(data).toEqual(newBlock.data);
   });

   it('check ;ast hash',()=>{
       expect(newBlock.lastHash).toEqual(lastBlock.hash);
   });

});