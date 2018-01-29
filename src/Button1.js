import React, { Component } from 'react';
import './App.css';
import img_elButton1 from './images/Button1_elButton1.png';


export default class Button1 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
  
    const style_button1 = {
        backgroundImage: 'url('+img_elButton1+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_label = {
        fontSize: 19.5,
        fontFamily: "'Helvetica-Bold', sans-serif",
        color: 'rgba(166, 167, 171, 0.8000)',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Button1" style={baseStyle}>
        <div className="compContent">
          <div className='elButton1' style={style_button1} />
          <div className='elLabel' style={style_label}>
            <div>{this.props.locStrings.button1_label_730410}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
