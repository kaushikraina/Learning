
const WebSocket =require('ws');
const Blockchain =require('../blockchain/blockchain.js');

const P2P_PORT = process.env.P2P_PORT || 5001;
const peers = process.env.peers ? process.env.peers.split(',') :[];

class P2pserver {

	constructor(blockchain){
      this.blockchain =blockchain;
      this.sockets = [];

	}
   
   listen(){
       console.log(`listening on P2P port ${P2P_PORT}`);
       const server =new WebSocket.Server({port:P2P_PORT});
       var i=1;
       server.on('connection', socket => this.connectSocket(socket,i));

       this.connectPeers();

   }

    connectPeers(){
      var i=1;
    peers.forEach(peer=>{        
        
         const socket= new WebSocket(peer);
         socket.on('open', () => {
            this.connectSocket(socket,i)
            console.log(`connecting to peer ${i++}`);
         });
         
         
    });

  }

   connectSocket (socket,i){

      this.sockets.push(socket);
      
      console.log(`Socket ${i} connected`);
      this.messageHandler(socket);      
      this.sendChain(socket,i);

   }

 sendChain(socket,i){
  console.log(`sending chain to ${i} socket`);
  socket.send(JSON.stringify(this.blockchain.chain));
 }

messageHandler(socket){
      
      socket.on('message', chain => {

        console.log(`incoming message`);

                                                                     // Error 
        if(this.blockchain.chain.length < chain.length){
          //this.blockchain.chain=chain;
          //this.blockchain.replaceChain(chain);
          console.log(chain);          
        }
        
      });


   }

syncChain(){
this.sockets.forEach(socket=>{ 
         this.sendChain(socket);
    });

}  

}

module.exports= P2pserver;