import React, { Component } from 'react';
import './App.css';
import img_elMask from './images/Buttonstack_elMask.png';
import img_elButtonstack from './images/Buttonstack_elButtonstack.png';


export default class Buttonstack extends Component {

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
    const style_buttonstack = {
        backgroundImage: 'url('+img_elButtonstack+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_title = {
        fontSize: 15.4,
        fontFamily: "'Helvetica-Bold', sans-serif",
        color: 'rgba(166, 167, 171, 0.8000)',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Buttonstack" style={baseStyle}>
        <div className="compContent">
          <div className='elMask' style={style_mask} />
          <div className='elButtonstack' style={style_buttonstack} />
          <div className='elTitle' style={style_title}>
            <div>{this.props.locStrings.buttonstack_title_282944}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
