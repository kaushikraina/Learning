  import React, { Component } from 'react';
	import 'tachyons';



	const Home = ()=>{
		
      const input=[

      {
      	tranid:"048d8f8gdk3j45k",
      	time: "5"
      },
       {
      	tranid:"4j6903f0g0oh035",
      	time: "15"
      },{
      	tranid:"hd5tgj69hghs5",
      	time: "30"
      }

       ]

       return(

             <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">

             <div>
               {
                  input.map((comp)=>{

                      return (                       
                      	 <div>
                      	 <p>Tansaction Id: {comp.tranid}</p>
                      	 <p>Time:{comp.time} ago</p>
                      	 <p>----------------------------</p>
                      	</div>                      	
                      	);
                    })
                  
                  
                }
             </div>
             <input class="f6 link dim ba ph3 pv2 mb2 dib near-black" type='Button' value='Mine BLocks'/>
            </article>
          
        );
    

	}

	export default Home;
