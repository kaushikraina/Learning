import React, { Component } from 'react';
import './Logo.css';
import Tilt from 'react-tilt'
import brain from './artificial-intelligence.png'


import 'tachyons'
class Logo extends Component {
  render() {
    return (
    <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
        <div className="Tilt-inner"><img alt='logo' src={brain}/></div>
     </Tilt>

    );
  }
}

export default Logo;