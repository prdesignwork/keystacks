import React, { Component } from 'react';
import './App.css';
import Backarrow from './Backarrow';
import Keystackslogo from './Keystackslogo';


export default class Headerkeys extends Component {

  // This component doesn't use any properties

  onClick_elBackarrow = (ev) => {
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
  }
  
  
  onClick_elKeystackslogo = (ev) => {
    // Go to screen '01-Home'
    this.props.appActions.goToScreen('n01home', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
  
    const style_header = {
        background: 'rgba(43, 51, 61, 0.700)',
        pointerEvents: 'none',
     };
    const style_backarrow = {
        cursor: 'pointer',
     };
    const style_keystackslogo = {
        cursor: 'pointer',
     };
    
    return (
      <div className="Headerkeys" style={baseStyle}>
        <div className="compContent">
          <div className='elHeader' style={style_header} />
          <div className='hasNestedComps elBackarrow' style={style_backarrow} onClick={this.onClick_elBackarrow} >
            <Backarrow appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
          <div className='hasNestedComps elKeystackslogo' style={style_keystackslogo} onClick={this.onClick_elKeystackslogo} >
            <Keystackslogo appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
        </div>
      </div>
    )
  }
  

}
