import React from 'react';
import { Button  } from '@material-ui/core';
import "../App.css";
import {ReactComponent as FacebookLogo} from '../assets/icons/facebook.svg';
import OpenApp from "react-open-app";




class FacebookButton extends React.Component {

  render() {
    return (
        <div className='display'>
          <OpenApp href="https://www.facebook.com/Fletcherd3/">
            <Button variant="contained" size="large" color="primary" className='pageButton'>
                <FacebookLogo className='icon'/>
                Facebook
            </Button>
          </OpenApp>
        </div>
    )
  }
}

export default FacebookButton