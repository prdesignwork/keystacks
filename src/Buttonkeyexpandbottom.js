import React, { Component } from 'react';
import './App.css';
import img_elMask from './images/Buttonkeyexpandbottom_elMask.png';
import img_elButtonkeyexpanded from './images/Buttonkeyexpandbottom_elButtonkeyexpanded.png';


export default class Buttonkeyexpandbottom extends Component {

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
    const style_buttonkeyexpanded = {
        backgroundImage: 'url('+img_elButtonkeyexpanded+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_label = {
        fontSize: 12.2,
        fontFamily: "'ArialNarrow-Bold', sans-serif",
        color: 'rgba(166, 167, 171, 0.9000)',
        textAlign: 'right',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Buttonkeyexpandbottom" style={baseStyle}>
        <div className="compContent">
          <div className='elMask' style={style_mask} />
          <div className='elButtonkeyexpanded' style={style_buttonkeyexpanded} />
          <div className='elLabel' style={style_label}>
            <div>{this.props.locStrings.buttonkeyexpandbottom_label_866384}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
