import React, { Component } from 'react';
import './App.css';
import img_elHeaderlogin from './images/Homeheader_elHeaderlogin.png';
import img_elShape from './images/Homeheader_elShape.png';
import img_elShape2 from './images/Homeheader_elShape2.png';
import img_elShape3 from './images/Homeheader_elShape3.png';
import img_elShape4 from './images/Homeheader_elShape4.png';
import img_elShape5 from './images/Homeheader_elShape5.png';
import img_elShape6 from './images/Homeheader_elShape6.png';
import img_elShape7 from './images/Homeheader_elShape7.png';
import img_elShape8 from './images/Homeheader_elShape8.png';
import img_elShape9 from './images/Homeheader_elShape9.png';
import img_elShape10 from './images/Homeheader_elShape10.png';
import img_elShape11 from './images/Homeheader_elShape11.png';
import img_elShape12 from './images/Homeheader_elShape12.png';
import img_elShape13 from './images/Homeheader_elShape13.png';
import img_elGroup from './images/Homeheader_elGroup.png';
import img_elShape14 from './images/Homeheader_elShape14.png';
import img_elGroup2 from './images/Homeheader_elGroup2.png';
import img_elGroup3 from './images/Homeheader_elGroup3.png';


export default class Homeheader extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
  
    const style_ASimpleFlashCard = {
        fontSize: 11.3,
        fontFamily: "'Helvetica', sans-serif",
        color: 'white',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    const style_headerlogin = {
        backgroundImage: 'url('+img_elHeaderlogin+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_shape = {
        backgroundImage: 'url('+img_elShape+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_shape2 = {
        backgroundImage: 'url('+img_elShape2+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_shape3 = {
        backgroundImage: 'url('+img_elShape3+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_shape4 = {
        backgroundImage: 'url('+img_elShape4+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_shape5 = {
        backgroundImage: 'url('+img_elShape5+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_shape6 = {
        backgroundImage: 'url('+img_elShape6+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_shape7 = {
        backgroundImage: 'url('+img_elShape7+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_shape8 = {
        backgroundImage: 'url('+img_elShape8+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_shape9 = {
        backgroundImage: 'url('+img_elShape9+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_shape10 = {
        backgroundImage: 'url('+img_elShape10+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_shape11 = {
        backgroundImage: 'url('+img_elShape11+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_shape12 = {
        backgroundImage: 'url('+img_elShape12+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_shape13 = {
        backgroundImage: 'url('+img_elShape13+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_group = {
        backgroundImage: 'url('+img_elGroup+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_shape14 = {
        backgroundImage: 'url('+img_elShape14+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_group2 = {
        backgroundImage: 'url('+img_elGroup2+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_group3 = {
        backgroundImage: 'url('+img_elGroup3+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Homeheader" style={baseStyle}>
        <div className="compContent">
          <div className='elASimpleFlashCard' style={style_ASimpleFlashCard}>
            <div>{this.props.locStrings.homeheader_asimpleflashcard_212165}</div>
          </div>
          <div className='elHeaderlogin' style={style_headerlogin} />
          <div className='elShape' style={style_shape} />
          <div className='elShape2' style={style_shape2} />
          <div className='elShape3' style={style_shape3} />
          <div className='elShape4' style={style_shape4} />
          <div className='elShape5' style={style_shape5} />
          <div className='elShape6' style={style_shape6} />
          <div className='elShape7' style={style_shape7} />
          <div className='elShape8' style={style_shape8} />
          <div className='elShape9' style={style_shape9} />
          <div className='elShape10' style={style_shape10} />
          <div className='elShape11' style={style_shape11} />
          <div className='elShape12' style={style_shape12} />
          <div className='elShape13' style={style_shape13} />
          <div className='elGroup' style={style_group} />
          <div className='elShape14' style={style_shape14} />
          <div className='elGroup2' style={style_group2} />
          <div className='elGroup3' style={style_group3} />
        </div>
      </div>
    )
  }
  

}
