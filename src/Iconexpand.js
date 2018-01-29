import React, { Component } from 'react';
import './App.css';
import img_elIconexpand from './images/Iconexpand_elIconexpand.png';


export default class Iconexpand extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
  
    const style_iconexpand = {
        backgroundImage: 'url('+img_elIconexpand+')',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Iconexpand" style={baseStyle}>
        <div className="compContent">
          <div className='elIconexpand' style={style_iconexpand} />
        </div>
      </div>
    )
  }
  

}
