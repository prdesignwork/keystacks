import React, { Component } from 'react';
import './App.css';
import img_elKeystackslogo from './images/Keystackslogo_elKeystackslogo.png';


export default class Keystackslogo extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
  
    const style_keystackslogo = {
        backgroundImage: 'url('+img_elKeystackslogo+')',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Keystackslogo" style={baseStyle}>
        <div className="compContent">
          <div className='elKeystackslogo' style={style_keystackslogo} />
        </div>
      </div>
    )
  }
  

}
