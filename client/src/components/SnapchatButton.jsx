import React from 'react';
import { Button  } from '@material-ui/core';
import "../App.css";
import {ReactComponent as SnapchatLogo} from '../assets/icons/snapchat.svg';
import OpenApp from "react-open-app";


class SnapchatButton extends React.Component {
  render() {
    if (this.props.user_name === "") {
      return null
    }
    return (
        <div className='display'>
          <OpenApp 
            href={`https://www.snapchat.com/add/${this.props.user_name}`}
            android={`intent://add/${this.props.user_name}#Intent;scheme=snapchat;package=com.snapchat.android;end;`}
            ios={`snapchat://add/${this.props.user_name}`}
            style={{textDecoration: "none"}}
          >
            <Button variant="contained" size="large" className='pageButton snapchat'>
                <SnapchatLogo className='white_icon'/>
                Snapchat
            </Button>
          </OpenApp>
        </div>
    )
  }
}

export default SnapchatButton