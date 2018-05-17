const Block = require('../blockchain/block');
const Blockchain = require('../blockchain/blockchain');

describe('Blockchain',()=>{
   let bc,bc2;

   beforeEach(()=>{
   	bc= new Blockchain();
      bc2=new Blockchain();
      bc2.addBlock("data");
   })

   it('Check data',()=>{
      //expect(bc.chain[bc.chain.length -1 ].data).toEqual("data");
   });

    it('Check Longest chain',()=>{
      expect(bc.replaceChain(bc2.chain)).toEqual(true);
   });

});