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
            android={`snapchat://add/${this.props.user_name}`}
            ios={`snapchat://add/${this.props.user_name}`}
          >
            <Button variant="contained" size="large" className='pageButton snapchat'>
                <SnapchatLogo className='black_icon'/>
                Snapchat
            </Button>
          </OpenApp>
        </div>
    )
  }
}

export default SnapchatButton