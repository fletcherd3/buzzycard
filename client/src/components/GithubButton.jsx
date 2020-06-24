import React from 'react';
import { Button  } from '@material-ui/core';
import "../App.css";
import {ReactComponent as GithubLogo} from '../assets/icons/github.svg';
import OpenApp from "react-open-app";


class GithubButton extends React.Component {
  render() {
    if (this.props.user_name === "") {
      return null
    }
    return (
        <div className='display'>
          <OpenApp 
            href={`https://github.com/${this.props.user_name}`}
            android={`https://github.com/${this.props.user_name}`}
            ios={`https://github.com/${this.props.user_name}`}
          >
            <Button variant="contained" size="large" className='pageButton github'>
                <GithubLogo className='white_icon'/>
                Github
            </Button>
          </OpenApp>
        </div>
    )
  }
}

export default GithubButton