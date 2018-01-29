import React, { Component } from 'react';
import './App.css';
import img_elButton2 from './images/Button2_elButton2.png';


export default class Button2 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
  
    const style_button2 = {
        backgroundImage: 'url('+img_elButton2+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_label = {
        fontSize: 15.4,
        fontFamily: "'Helvetica', sans-serif",
        color: 'rgba(166, 167, 171, 0.8000)',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Button2" style={baseStyle}>
        <div className="compContent">
          <div className='elButton2' style={style_button2} />
          <div className='elLabel' style={style_label}>
            <div>{this.props.locStrings.button2_label_201794}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
