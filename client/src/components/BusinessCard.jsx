import React from 'react';
import { Grid, TextField, Button  } from '@material-ui/core';
import QueryString from 'query-string';


class BusinessCard extends React.Component {

  constructor(props) {
    super(props)
    params = QueryString.parse(this.props.location.search)
    this.state = {
      CardID: parseInt(params.userId)
    }
    this.handleClick = this.handleClick.bind(this);
  }



  render() {
    return (
      <React.Fragment>
        <Grid 
          container
          spacing={5}
          direction="column"
          alignItems="center"
          justify="center"
          style={{minHeight: `100vh`, width: '100%'}}
        >
        <Grid 
        item 
        container 
        direction="column"
        justify="center"
        alignItems="center"
        >
            {/* <img src='../assets/logo1.png' style={{width: '85%', maxWidth: 400}} /> */}
            <p style={{textAlign: "center"}}>
                  CardID: {this.props.location.search}
            </p>
        </Grid>
        <Grid 
        item 
        container 
        direction="column"
        justify="center"
        alignItems="center"
        >
            <p style={{textAlign: "center"}}>
                  Whether you're new here or not, get signed in with the Google button below.
            </p>
        </Grid>
  
        </Grid>
      </React.Fragment>
    )
  }

}

export default Slideshow