import React from 'react';
import { Button  } from '@material-ui/core';
import "../App.css";
import {ReactComponent as MailLogo} from '../assets/icons/mail.svg';
import OpenApp from "react-open-app";


class EmailButton extends React.Component {
  render() {
    if (this.props.email === "") {
      return null
    }
    return (
        <div className='display'>
          <OpenApp 
            href={`mailto:${this.props.email}`}
            ios={`mailto:${this.props.email}`}
            android={`mailto:${this.props.email}`}
            style={{textDecoration: "none"}}
          >
            <Button variant="contained" size="large" className='pageButton mail'>
                <MailLogo className='white_icon'/>
                Mail
            </Button>
          </OpenApp>
        </div>
    )
  }
}

export default EmailButton