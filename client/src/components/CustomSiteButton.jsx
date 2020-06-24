import React from 'react';
import { Button  } from '@material-ui/core';
import "../App.css";
import {ReactComponent as SiteLogo} from '../assets/icons/slashdot.svg';
import OpenApp from "react-open-app";


class CustomSiteButton extends React.Component {
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
          >
            <Button variant="contained" size="large" className='pageButton site'>
                <SiteLogo className='white_icon'/>
                {this.props.name}
            </Button>
          </OpenApp>
        </div>
    )
  }
}

export default CustomSiteButton