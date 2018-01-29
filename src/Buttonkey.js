import React, { Component } from 'react';
import './App.css';
import img_elMask from './images/Buttonkey_elMask.png';
import img_elButtonkey from './images/Buttonkey_elButtonkey.png';
import img_elIconexpand from './images/Buttonkeyexpandtop_elIconexpand.png';


export default class Buttonkey extends Component {

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
    const style_buttonkey = {
        backgroundImage: 'url('+img_elButtonkey+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_label = {
        fontSize: 14.6,
        fontFamily: "'Helvetica-Bold', sans-serif",
        color: 'rgba(166, 167, 171, 0.8000)',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    const style_iconexpand = {
        backgroundImage: 'url('+img_elIconexpand+')',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Buttonkey" style={baseStyle}>
        <div className="compContent">
          <div className='elMask' style={style_mask} />
          <div className='elButtonkey' style={style_buttonkey} />
          <div className='elLabel' style={style_label}>
            <div>{this.props.locStrings.buttonkey_label_513900}</div>
          </div>
          <div className='elIconexpand' style={style_iconexpand} />
        </div>
      </div>
    )
  }
  

}
