import React, { Component } from 'react';
import axios from 'axios';
import QueryString from 'query-string';
import FacebookButton from './FacebookButton'
import InstagramButton from './InstagramButton';
import SnapchatButton from './SnapchatButton';
import GithubButton from './GithubButton';
import CustomSiteButton from './CustomSiteButton';
import "../App.css";

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
      bio: '',
      snapchat: '',
      facebook: '',
      tikTok: '',
      email: '',
      instagram: '',
      github: '',
      site_link: '',
      site_name: ''
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
    const { name, bio, snapchat, facebook, tikTok, email, instagram, github, site_link, site_name} = this.state;
    axios({
      url: '/add',
      method: 'POST',
      data: {
        name,
        bio,
        snapchat,
        facebook,
        tikTok,
        email,
        instagram,
        github,
        site_link,
        site_name
      }
    })
      .catch(() => alert('Failed uploading data'))
  };
  render() {
    return (
      <div>
        {this.state.user != null ? 
          <div className="display">

            <h1 className="h1">{this.state.user.name}</h1>

            <FacebookButton user_name={this.state.user.facebook}/>
            <InstagramButton user_name={this.state.user.instagram}/>
            <SnapchatButton user_name={this.state.user.snapchat}/>
            <GithubButton user_name={this.state.user.github}/>
            <CustomSiteButton name={this.state.user.site_name} url={this.state.user.site_link} />
          </div>
        : null}
      </div>
    );
  }
}

export default BusinessCard;
