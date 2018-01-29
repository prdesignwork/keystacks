import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Keystackslogo from './Keystackslogo';


export default class Headerstacks extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
  
    
    return (
      <div className="Headerstacks" style={baseStyle}>
        <div className="compContent">
          <div className='hasNestedComps elHeader'>
            <Header appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
          <div className='hasNestedComps elKeystackslogo'>
            <Keystackslogo appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
        </div>
      </div>
    )
  }
  

}
