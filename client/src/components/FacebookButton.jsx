import React from 'react';
import { Button  } from '@material-ui/core';
import "../App.css";
import {Linking} from 'react-native';
import {ReactComponent as FacebookLogo} from '../assets/icons/facebook.svg';




class FacebookButton extends React.Component {

  openApp() {
    setTimeout(function () { window.location = "https://www.facebook.com/"; }, 25);
    window.location = "fb://app";
    // Linking.canOpenURL('fb://app').then(supported => {
    //   if (supported) {
    //     return Linking.openURL('fb://app');
    //   } else {
    //     return Linking.openURL("https://www.facebook.com/");
    //   }
    // })

  
  };

  render() {
    return (
        <div className='display'>
          <Button variant="contained" size="large" color="primary" className='pageButton' onClick={this.openApp}>
              <FacebookLogo className='icon'/>
              Facebook
          </Button>
        </div>
    )
  }
}

export default FacebookButton