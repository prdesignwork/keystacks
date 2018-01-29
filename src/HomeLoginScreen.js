import React, { Component } from 'react';
import './App.css';
import img_elKeystacks01 from './images/HomeLoginScreen_elKeystacks01.jpg';
import Homelogin from './Homelogin';
import Homeheader from './Homeheader';


export default class HomeLoginScreen extends Component {

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
    
    return (
      <div className="AppScreen HomeLoginScreen" style={baseStyle}>
        <div className="background">
          <div className='elKeystacks01' style={style_keystacks01} />
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='hasNestedComps elHomelogin'>
              <Homelogin appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elHomeheader'>
              <Homeheader appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
