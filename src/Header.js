import React, { Component } from 'react';
import './App.css';


export default class Header extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
  
    const style_header = {
        background: 'rgba(43, 51, 61, 0.700)',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Header" style={baseStyle}>
        <div className="compContent">
          <div className='elHeader' style={style_header} />
        </div>
      </div>
    )
  }
  

}
