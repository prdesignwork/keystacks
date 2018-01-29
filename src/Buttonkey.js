import React, { Component } from 'react';
import './App.css';
import img_elButtonkey from './images/Buttonkey_elButtonkey.png';


export default class Buttonkey extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
  
    const style_buttonkey = {
        backgroundImage: 'url('+img_elButtonkey+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Buttonkey" style={baseStyle}>
        <div className="compContent">
          <div className='elButtonkey' style={style_buttonkey} />
        </div>
      </div>
    )
  }
  

}
