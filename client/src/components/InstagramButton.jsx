import React from 'react';
import { Button  } from '@material-ui/core';
import "../App.css";
import {ReactComponent as InstagramLogo} from '../assets/icons/instagram.svg';


class InstagramButton extends React.Component {
  render() {
    return (
        <div className='display'>
          <Button variant="contained" size="large" color="primary" className='pageButton instagram'>
              <InstagramLogo className='icon'/>
              Instagram
          </Button>
        </div>
    )
  }
}

export default InstagramButton