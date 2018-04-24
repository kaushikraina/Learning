import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Demo2 from './Demo2'

const Demo = ()=>{
 
  const nav=()=>{
    browserHistory.push("/Home");
  }

    return (
     
     
     <Router>
     <div>
        
          <Link to={'/Demo2'}>Login</Link>
          <Switch>

           <Route path='/Demo2' Component={Demo2}></Route>

         </Switch>
         </div>
      </Router>
      


        );
  }

export default Demo;
