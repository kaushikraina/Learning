const Block = require('../blockchain/block');
const Blockchain = require('../blockchain/blockchain');

describe('Blockchain',()=>{
   let bc;

   beforeEach(()=>{
   	bc= new Blockchain();
      bc.addBlock("data");
   })

   it('Check data',()=>{
      expect(bc.chain[bc.chain.length -1 ].data).toEqual("data");
   });

});