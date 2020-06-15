import React from 'react';
import { Grid, TextField, Button  } from '@material-ui/core';
import "../../App.css";
import {ReactComponent as FacebookLogo} from '../../assets/icons/facebook.svg';


class FacebookButton extends React.Component {
  render() {
    return (
        <div className='display'>
          <Button variant="contained" size="large" color="primary" className='pageButton'>
              <FacebookLogo className='icon'/>
              Facebook
          </Button>
        </div>
    )
  }
}

export default FacebookButton