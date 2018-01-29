import React, { Component } from 'react';
import './App.css';
import img_elKeystacks01 from './images/N04KeysexpandedScreen_elKeystacks01.jpg';
import Buttonkey from './Buttonkey';
import Buttonkeyexpandbottom from './Buttonkeyexpandbottom';
import Buttonkeyexpandtop from './Buttonkeyexpandtop';
import Buttonnewkey from './Buttonnewkey';
import Headerkeys from './Headerkeys';


export default class N04KeysexpandedScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

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
      <div className="AppScreen N04KeysexpandedScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elKeystacks01' style={style_keystacks01} />
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='hasNestedComps elButtonkeyexpand'>
              <Buttonkey appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButtonkeyexpand2'>
              <Buttonkey appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButtonkeyexpand3'>
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
              <Buttonkeyexpandbottom appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButtonkeyexpand12'>
              <Buttonkeyexpandtop appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButtonnewkey'>
              <Buttonnewkey appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elHeaderkeys'>
              <Headerkeys appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='elLabel' style={style_label}>
              <div>{this.props.locStrings.n04keysexpanded_label_777755}</div>
            </div>
            <div className='elSeparator' style={style_separator} />
            <div className='elLabel2' style={style_label2}>
              <div>{this.props.locStrings.n04keysexpanded_label2_255559}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
