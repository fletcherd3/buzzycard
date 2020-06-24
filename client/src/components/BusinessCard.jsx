import React, { Component } from 'react';
import axios from 'axios';
import QueryString from 'query-string';
import FacebookButton from './FacebookButton'
import InstagramButton from './InstagramButton';

class BusinessCard extends Component {
  constructor(props) {
    super(props)
    const params = QueryString.parse(this.props.location.search)
    this.state = {
      id: params.id,
      user: null,
      recResult: false,
      newUser: false,

      name: '',
      cardID: null,
      bio: '',
      snapchat: '',
      facebook: '',
      tikTok: '',
      email: ''
    }
  }

  componentDidMount() {
    this.fetchUsers();
  };

  fetchUsers() {
      axios.get(`/users/${this.state.id}`)
          .then((response) => {
            const { user } = response.data;
            console.log(user)
            this.setState({ user: user })
            console.log(this.state.user)
            this.setState({recResult: true})
          })
          .catch(() => {
            this.setState({newUser: true})
            // this.props.history.push({
            //   pathname : '/Form',
            //   state :{id: this.state.id}
            //   } 
            // );
          });
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
        {this.state.user != null ? 
          <div>
            <div>Name: {this.state.user.name}</div>

          </div>
        : <div>
          <FacebookButton user_name={this.state.facebook}/>
          <InstagramButton user_name={this.state.snapchat}/>
          </div>}
      </div>
    );
  }
}

export default BusinessCard;
