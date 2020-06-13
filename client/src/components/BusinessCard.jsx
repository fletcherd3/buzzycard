import React from 'react';
import { Grid, TextField, Button  } from '@material-ui/core';
import QueryString from 'query-string';
import axios from 'axios';


class BusinessCard extends React.Component {

  constructor(props) {
    super(props)
    const params = QueryString.parse(this.props.location.search)
    this.state = {
      CardID: parseInt(params.cardId),
      users: []
    }
    console.log(this.state.CardID)
    if (isNaN(this.state.CardID)) {
      this.props.history.push('/')
    }
  }

  componentDidMount() {
      this.fetchUsers();
    };

  fetchUsers() {
      axios.get('/users/123')
          .then((response) => {
          const { users } = response.data;
          console.log(users)
          this.setState({ users: [...this.state.users, ...users] })
          })
          console.log(this.state.users)
          .catch(() => alert('Error fetching new users'));
  };



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
                  CardID: {this.state.CardID} <br/>
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

export default BusinessCard