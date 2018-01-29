import React, { Component } from 'react';
import './App.css';
import Button2 from './Button2';
import Button1 from './Button1';


export default class Homelogin extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      password: '',
      username: '',
    };
  }

  textInputChanged_password = (event) => {
    this.setState({password: event.target.value});
  }
  
  textInputChanged_username = (event) => {
    this.setState({username: event.target.value});
  }
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
  
    const style_password = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_username = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    
    return (
      <div className="Homelogin" style={baseStyle}>
        <div className="compContent">
          <div className='hasNestedComps elButton2'>
            <Button2 appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
          <div className='hasNestedComps elButton1'>
            <Button1 appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
          <input className='baseFont elPassword' style={style_password} type="text" placeholder={this.props.locStrings.homelogin_password_771633} onChange={this.textInputChanged_password} value={this.state.password}  />
          <input className='baseFont elUsername' style={style_username} type="text" placeholder={this.props.locStrings.homelogin_username_429373} onChange={this.textInputChanged_username} value={this.state.username}  />
        </div>
      </div>
    )
  }
  

}
