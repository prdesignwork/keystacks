import React, { Component } from 'react';
import './App.css';
import img_elKeystacks01 from './images/N04KeysexpandedScreen_elKeystacks01.jpg';
import Button2 from './Button2';
import Button1 from './Button1';
import img_elHeaderlogin from './images/N01HomeScreen_elHeaderlogin.png';
import Keystackslogostacked from './Keystackslogostacked';


export default class N01HomeScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      password: '',
      username: '',
    };
  }

  onClick_elButton1 = (ev) => {
    // Go to screen '02-Stacks'
    this.props.appActions.goToScreen('n02stacks', { ...this.props, transitionId: 'fadeIn' });
  
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
    const style_button1 = {
        cursor: 'pointer',
     };
    const style_password = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        color: '#39434d',
     };
    const style_username = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        color: '#39434d',
     };
    const style_label = {
        fontSize: 11.3,
        fontFamily: "'Helvetica', sans-serif",
        color: '#b4b6b9',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    const style_headerlogin = {
        backgroundImage: 'url('+img_elHeaderlogin+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    
    return (
      <div className="AppScreen N01HomeScreen" style={baseStyle}>
        <div className="background">
          <div className='elKeystacks01' style={style_keystacks01} />
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='hasNestedComps elButton2'>
              <Button2 appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elButton1' style={style_button1} onClick={this.onClick_elButton1} >
              <Button1 appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <input className='baseFont elPassword' style={style_password} type="password" placeholder={this.props.locStrings.n01home_password_912055} onChange={this.textInputChanged_password} value={this.state.password}  />
            <input className='baseFont elUsername' style={style_username} type="text" placeholder={this.props.locStrings.n01home_username_652148} onChange={this.textInputChanged_username} value={this.state.username}  />
            <div className='elLabel' style={style_label}>
              <div>{this.props.locStrings.n01home_label_939367}</div>
            </div>
            <div className='elHeaderlogin' style={style_headerlogin} />
            <div className='hasNestedComps elKeystackslogostacked'>
              <Keystackslogostacked appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
