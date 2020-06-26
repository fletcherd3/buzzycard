import React from 'react';
import { Button  } from '@material-ui/core';
import "../App.css";
import {ReactComponent as TikTokLogo} from '../assets/icons/tiktok.svg';
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
            // android={`https://www.tiktok.com/@${this.props.user_name}`}
            android={`intent://user/profile/${this.props.user_name}#Intent;package=com.zhiliaoapp.musically;scheme=snssdk1233;end`}
            ios={`snssdk1233://user/profile/${this.props.user_name}`}
            style={{textDecoration: "none"}}
          >
            <Button variant="contained" size="large" className='pageButton github'>
                <TikTokLogo className='white_icon'/>
                TikTok
            </Button>
          </OpenApp>
        </div>
    )
  }
}

export default TikTokButton