import React, { Component } from 'react';
import './App.css';
import img_elKeystackslogostacked from './images/Keystackslogostacked_elKeystackslogostacked.png';


export default class Keystackslogostacked extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
  
    const style_keystackslogostacked = {
        backgroundImage: 'url('+img_elKeystackslogostacked+')',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Keystackslogostacked" style={baseStyle}>
        <div className="compContent">
          <div className='elKeystackslogostacked' style={style_keystackslogostacked} />
        </div>
      </div>
    )
  }
  

}
