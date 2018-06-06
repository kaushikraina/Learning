const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const uuidV1 = require('uuid/v1');
const SHA256 = require('crypto-js/sha256');

class KeyGen{

  static genKeyPair(){
  	return ec.genKeyPair();
  }

  static getId(){
  	return uuidV1();
  }

  static hash(data){

  	return SHA256(JSON.Stringify(data)).toString();
  }

  static verifySignature(publicKey,signature,dataHash){
    return ec.keyFromPublic(publicKey,'hex').verify(dataHash,signature);
  }

}


module.exports = KeyGen;