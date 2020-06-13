import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import QueryString from 'query-string';

class BusinessCard extends Component {
  constructor(props) {
    super(props)
    const params = QueryString.parse(this.props.location.search)
    this.state = {
      id: params.id,
      users: [],
      newUser: false,

      name: '',
      cardID: null,
      bio: '',
      snapchat: '',
      facebook: '',
      tikTok: '',
      email: ''
    }
    // if (isNaN(this.state.CardID)) {
    //   this.props.history.push('/')
    // }
  }

  componentDidMount() {
    this.fetchUsers();
  };

  fetchUsers() {
      axios.get(`/users/${this.state.id}`)
          .then((response) => {
          const { users } = response.data;
          console.log(users)
          // this.setState({ users: [...this.state.users, ...users] })
          })
          // console.log(this.state.users)
          .catch(() => this.setState({newUser: true}));
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  submit = e => {
    e.preventDefault();
    const { name, cardID, bio, snapchat, facebook, tikTok, email } = this.state;
    axios({
      url: '/add',
      method: 'POST',
      data: {
        name,
        cardID,
        bio,
        snapchat,
        facebook,
        tikTok,
        email
      }
    })
      .catch(() => alert('Failed uploading data'))
  };
  render() {
    return (
      <div>
        {this.state.newUser ? 
      
        <form className="form noValidate" autoComplete="off" onSubmit={this.submit}>
          <h2>Tell us about yourself</h2>
          <TextField
            id="standard-dense"
            value={this.state.name}
            label="Name"
            name="name"
            onChange={this.handleChange}
          />

          <TextField
            name="bio"
            value={this.state.bio}
            id="standard-dense"
            onChange={this.handleChange}
            label="Bio"
          />

          <TextField
            name="snapchat"
            value={this.state.snapchat}
            id="standard-dense"
            onChange={this.handleChange}
            label="Snapchat"
          />

          <TextField
            name="facebook"
            value={this.state.facebook}
            id="standard-dense"
            onChange={this.handleChange}
            label="Facebook"
          />

          <TextField
            name="tikTok"
            value={this.state.tikTok}
            id="standard-dense"
            onChange={this.handleChange}
            label="TikTok"
          />

          <TextField
            name="email"
            value={this.state.email}
            id="standard-dense"
            onChange={this.handleChange}
            label="Email"
          />

          <TextField
            id="standard-dense"
            value={this.state.cardID}
            label="Card ID"
            name="cardID"
            onChange={this.handleChange}
          />

          <Button variant="contained" color="primary" onClick={this.submit}> Submit </Button>

        </form>
        : <div> Welcome {this.state.users.name}</div>}
      </div>
    );
  }
}

export default Form;
