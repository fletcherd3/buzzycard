import React from 'react';
import { Button  } from '@material-ui/core';
import "../App.css";
import {ReactComponent as InstagramLogo} from '../assets/icons/instagram.svg';
import OpenApp from "react-open-app";


class InstagramButton extends React.Component {
  render() {
    return (
        <div className='display'>
          <OpenApp href={`https://www.instagram.com/${this.props.user_name}/`}>
            <Button variant="contained" size="large" color="primary" className='pageButton instagram'>
                <InstagramLogo className='icon'/>
                Instagram
            </Button>
          </OpenApp>
        </div>
    )
  }
}

export default InstagramButton