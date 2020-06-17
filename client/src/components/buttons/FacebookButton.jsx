import React from 'react';
import { Grid, TextField, Button  } from '@material-ui/core';
import "../../App.css";
import {Linking} from 'react-native';
import {ReactComponent as FacebookLogo} from '../../assets/icons/facebook.svg';




class FacebookButton extends React.Component {

  openApp() {
    Linking.openURL('snapchat://add/fletcher.dick');
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