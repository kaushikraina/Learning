const Block = require('../blockchain/block');

const block = new Block("hello","how","are","you");

console.log(block.toString());
console.log(Block.genesis());
console.log(Block.mineBlock(block,"data"));