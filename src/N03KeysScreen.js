import React, { Component } from 'react';
import './App.css';
import img_elKeystacks01 from './images/N04KeysexpandedScreen_elKeystacks01.jpg';
import Buttonkey from './Buttonkey';
import Buttonnewkey from './Buttonnewkey';
import Headerkeys from './Headerkeys';


export default class N03KeysScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButtonkeyexpand3 = (ev) => {
    // Go to screen '04-Keys-expanded'
    this.props.appActions.goToScreen('n04keysexpanded', { ...this.props, transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButtonnewkey = (ev) => {
    // Go to screen '04-Keys-expanded'
    this.props.appActions.goToScreen('n04keysexpanded', { transitionId: 'fadeIn' });
  
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
    const style_buttonkeyexpand3 = {
        cursor: 'pointer',
     };
    const style_buttonnewkey = {
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
      <div className="AppScreen N03KeysScreen" style={baseStyle}>
        <div className="background">
          <div className='elKeystacks01' style={style_keystacks01} />
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='hasNestedComps elButtonkeyexpand'>
              <Buttonkey appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButtonkeyexpand2'>
              <Buttonkey appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButtonkeyexpand3' style={style_buttonkeyexpand3} onClick={this.onClick_elButtonkeyexpand3} >
              <Buttonkey appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButtonkeyexpand4'>
              <Buttonkey appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButtonkeyexpand5'>
              <Buttonkey appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButtonkeyexpand6'>
              <Buttonkey appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButtonkeyexpand7'>
              <Buttonkey appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButtonkeyexpand8'>
              <Buttonkey appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButtonkeyexpand9'>
              <Buttonkey appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButtonkeyexpand10'>
              <Buttonkey appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButtonkeyexpand11'>
              <Buttonkey appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButtonnewkey' style={style_buttonnewkey} onClick={this.onClick_elButtonnewkey} >
              <Buttonnewkey appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='elLabel' style={style_label}>
              <div>{this.props.locStrings.n03keys_label_215177}</div>
            </div>
            <div className='elSeparator' style={style_separator} />
            <div className='elLabel2' style={style_label2}>
              <div>{this.props.locStrings.n03keys_label2_741960}</div>
            </div>
            <div className='hasNestedComps elHeaderkeys'>
              <Headerkeys appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
