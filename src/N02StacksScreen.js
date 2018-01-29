import React, { Component } from 'react';
import './App.css';
import img_elKeystacks01 from './images/N04KeysexpandedScreen_elKeystacks01.jpg';
import Buttonnewstack from './Buttonnewstack';
import Buttonstack from './Buttonstack';
import Headerstacks from './Headerstacks';


export default class N02StacksScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButtonnewstack = (ev) => {
    // Go to screen '03-Keys'
    this.props.appActions.goToScreen('n03keys', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
  
    const style_keystacks01 = {
        backgroundImage: 'url('+img_elKeystacks01+')',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        pointerEvents: 'none',
     };
    const style_buttonnewstack = {
        cursor: 'pointer',
     };
    const style_label = {
        fontSize: 16.2,
        fontFamily: "'Helvetica-Bold', sans-serif",
        color: 'rgba(166, 167, 171, 0.7000)',
        textAlign: 'right',
        pointerEvents: 'none',
     };
    const style_separator = {
        background: 'rgba(215, 215, 215, 1.000)',
        border: '1.5px solid #969696',
        pointerEvents: 'none',
     };
    const style_label2 = {
        fontSize: 13.8,
        fontFamily: "'Helvetica-Bold', sans-serif",
        color: '#73748b',
        textAlign: 'right',
        pointerEvents: 'none',
     };
    
    return (
      <div className="AppScreen N02StacksScreen" style={baseStyle}>
        <div className="background">
          <div className='elKeystacks01' style={style_keystacks01} />
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='hasNestedComps elButtonnewstack' style={style_buttonnewstack} onClick={this.onClick_elButtonnewstack} >
              <Buttonnewstack appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButtonstack1'>
              <Buttonstack appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButtonstack2'>
              <Buttonstack appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButtonstack3'>
              <Buttonstack appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButtonstack4'>
              <Buttonstack appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButtonstack5'>
              <Buttonstack appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='elLabel' style={style_label}>
              <div>{this.props.locStrings.n02stacks_label_274449}</div>
            </div>
            <div className='elSeparator' style={style_separator} />
            <div className='elLabel2' style={style_label2}>
              <div>{this.props.locStrings.n02stacks_label2_555474}</div>
            </div>
            <div className='hasNestedComps elHeaderstacks'>
              <Headerstacks appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
