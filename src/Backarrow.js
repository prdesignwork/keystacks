import React, { Component } from 'react';
import './App.css';
import img_elMask from './images/Backarrow_elMask.png';


export default class Backarrow extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
  
    const style_mask = {
        backgroundImage: 'url('+img_elMask+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_v = {
        fontSize: 17.8,
        fontFamily: "'ArialUnicodeMS', sans-serif",
        color: '#a6a7ab',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Backarrow" style={baseStyle}>
        <div className="compContent">
          <div className='elMask' style={style_mask} />
          <div className='elV' style={style_v}>
            <div>{this.props.locStrings.backarrow_n_852426}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
