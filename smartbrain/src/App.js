import React, { Component } from 'react';

import './App.css';
import 'tachyons'
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Photo from './components/photo/Photo';
import LinkForm from './components/linkForm/LinkForm';



class App extends Component {

	constructor(){
  	super();
  	this.state={
  		input : '',
  	}
   }

onInputSubmit=(event)=>{
	console.log(this.state.input);
};

 onInputChange=(event)=>{
  this.setState({input:event.target.value });
 };

  render() {
    return (
      <div className="App">
       <Navigation></Navigation>
       <Logo></Logo>
       <LinkForm onInputChange={this.onInputChange} onInputSubmit={this.onInputSubmit}></LinkForm>
       <Photo imgLink={this.state.input} ></Photo>
      </div>
    );
  }
}


export default App;
