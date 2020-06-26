import React from 'react';
import { Button  } from '@material-ui/core';
import "../App.css";
import {ReactComponent as SnapchatLogo} from '../assets/icons/snapchat.svg';
import OpenApp from "react-open-app";


class TikTokButton extends React.Component {
  render() {
    if (this.props.user_name === "") {
      return null
    }
    return (
        <div className='display'>
          <OpenApp 
            href={`https://www.tiktok.com/@${this.props.user_name}`}
            android={`tiktok://user/${this.props.user_name}`}
            ios={`tiktok://user/${this.props.user_name}`}
            style={{textDecoration: "none"}}
          >
            <Button variant="contained" size="large" className='pageButton github'>
                <SnapchatLogo className='white_icon'/>
                TikTok
            </Button>
          </OpenApp>
        </div>
    )
  }
}

export default TikTokButton