import React, { Component } from 'react';
import './App.css';
import img_elMask from './images/Buttonnewkey_elMask.png';
import img_elOval from './images/Buttonnewkey_elOval.png';
import img_elPlus from './images/Buttonnewkey_elPlus.png';


export default class Buttonnewkey extends Component {

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
    const style_oval = {
        backgroundImage: 'url('+img_elOval+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_plus = {
        backgroundImage: 'url('+img_elPlus+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Buttonnewkey" style={baseStyle}>
        <div className="compContent">
          <div className='elMask' style={style_mask} />
          <div className='elOval' style={style_oval} />
          <div className='elPlus' style={style_plus} />
        </div>
      </div>
    )
  }
  

}
