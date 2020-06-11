import React from 'react';
import { Grid, TextField, Button  } from '@material-ui/core';

export const BusinessCard = () => (
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
              CardID: {this.props.match.params.id}
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
);
