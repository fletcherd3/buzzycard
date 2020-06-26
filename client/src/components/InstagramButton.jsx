import React from 'react';
import { Button  } from '@material-ui/core';
import "../App.css";
import {ReactComponent as InstagramLogo} from '../assets/icons/instagram.svg';
import OpenApp from "react-open-app";


class InstagramButton extends React.Component {
  render() {
    if (this.props.user_name === "") {
      return null
    }
    return (
        <div className='display'>
          <OpenApp 
            href={`https://www.instagram.com/${this.props.user_name}`}
            style={{textDecoration: "none"}}
          >
            <Button variant="contained" size="large" color="primary" className='pageButton instagram'>
                <InstagramLogo className='white_icon'/>
                Instagram
            </Button>
          </OpenApp>
        </div>
    )
  }
}

export default InstagramButton