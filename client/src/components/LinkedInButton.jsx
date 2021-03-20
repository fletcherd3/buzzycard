import React from 'react';
import { Button  } from '@material-ui/core';
import "../App.css";
import {ReactComponent as LinkedInLogo} from '../assets/icons/linkedin.svg';
import OpenApp from "react-open-app";


class LinkedInButton extends React.Component {
  render() {
    // If no user_name is provided then return null component
    if (this.props.user_name === "") {
      return null
    }
    return (
        <div className='display'>
          <OpenApp 
            href={`https://www.linkedin.com/in/${this.props.user_name}`}
            android={`https://www.linkedin.com/in/${this.props.user_name}`}
            ios={`https://www.linkedin.com/in/${this.props.user_name}`}
            style={{textDecoration: "none"}}
          >
            <Button variant="contained" size="large" className='pageButton linkedin'>
                <LinkedInLogo className='white_icon'/>
                LinkedIn
            </Button>
          </OpenApp>
        </div>
    )
  }
}

export default LinkedInButton