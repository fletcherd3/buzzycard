import React from 'react';
import { Button  } from '@material-ui/core';
import "../App.css";
import {ReactComponent as GoogleDriveLogo} from '../assets/icons/googledrive.svg';
import OpenApp from "react-open-app";


class GoogleDriveButton extends React.Component {
  render() {
    if (this.props.url === "") {
      return null
    }
    return (
        <div className='display'>
          <OpenApp 
            href={this.props.url}
            ios={this.props.url}
            android={this.props.url}
            style={{textDecoration: "none"}}
          >
            <Button variant="contained" size="large" className='pageButton googleDrive'>
                <GoogleDriveLogo className='white_icon'/>
                My CV
            </Button>
          </OpenApp>
        </div>
    )
  }
}

export default GoogleDriveButton