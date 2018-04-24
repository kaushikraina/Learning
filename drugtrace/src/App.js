import React, { Component } from 'react';
import './App.css';
import Signin from './Components/signin/Signin';
import Signup from './Components/Signup/Signup';
import Home from './Components/home/Home';

class App extends Component {
	constructor(){
		super();
		this.state={
			route:'signin',
      sign:'No'
  };
		}

  change=()=>{
  	this.setState({route:'Signup'})
  };

  funcSignin=()=>{
   this.setState({sign:'yes'})
  };
 
  render() {

    if(this.state.sign==='yes')
    {
      return(
        <Home/>
        );

    }else if(this.state.route==='signin'){
      return(
       <div >
       <h1 className='tc Blue'> Drug trace</h1>
       {       
         <Signin change={this.change} funcSignin={this.funcSignin}/>     

       }     
      </div>
      );
   
    }else{
     return(
           <Signup/>
      );
      
    }
  }
}

export default App;
