import React from 'react';
import { Button  } from '@material-ui/core';
import "../App.css";
import {ReactComponent as FacebookLogo} from '../assets/icons/facebook.svg';
import OpenApp from "react-open-app";

class FacebookButton extends React.Component {
  constructor(props) {
    super(props)
    if (this.props.user_name === "fletcherd3") {
      this.state = {
        id: "100003950688284"
      }
    } else {
      this.state = {
        id: this.props.user_name
      }
    }
  }

  render() {
    if (this.props.user_name === "") {
      return null
    }
    return (
        <div className='display'>
          <OpenApp 
            href={`https://www.facebook.com/${this.state.id}`}
            style={{textDecoration: "none"}}
          >
            <Button variant="contained" size="large" color="primary" className='pageButton'>
                <FacebookLogo className='white_icon'/>
                Facebook
            </Button>
          </OpenApp>
        </div>
    )
  }
}

export default FacebookButton