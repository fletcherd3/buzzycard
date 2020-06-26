import React, { Component } from 'react';
import axios from 'axios';
import QueryString from 'query-string';
import FacebookButton from './FacebookButton'
import InstagramButton from './InstagramButton';
import SnapchatButton from './SnapchatButton';
import GithubButton from './GithubButton';
import CustomSiteButton from './CustomSiteButton';
import "../App.css";
import EmailButton from './EmailButton';
import TikTokButton from './TikTokButton';

class BusinessCard extends Component {
  constructor(props) {
    super(props)
    const params = QueryString.parse(this.props.location.search)
    this.state = {
      id: params.id,
      user: null,
      userError: false,
      dev: true
    }
  }

  componentDidMount() {
    if (this.state.dev) {
      this.setState({user:{
        "_id":"5ef431ea5be3030017e37864",
        "name":"Fletcher Dick",
        "bio":"👨‍💻 Studying Software Engineering at UC\n📍 Christchurch, NZ\n👶 20 yo",
        "snapchat":"fletcher.dick",
        "facebook":"fletcherd3",
        "tikTok":"fletcher.dick",
        "email":"fletcherjdick@gmail.com",
        "instagram":"fletcher_dick",
        "github":"fletcherd3",
        "site_link":"https://buzzycard.herokuapp.com/about",
        "site_name":"More about BuzzyCard",
        "dateCreated":"2020-06-25T05:11:06.742Z",
        "__v":0
      }})
    }
    this.fetchUser();
  };

  fetchUser() {
      axios.get(`/users/${this.state.id}`)
          .then((response) => {
            const { user } = response.data;
            console.log(user)
            this.setState({ user: user })
          })
          .catch(() => {
            // User doesn't exist
            this.setState({ userError: true })
          });
  };

  render() {
    // New UserAboutPage
    if (this.state.user != null && this.state.user.name === undefined) {
      this.props.history.push({
        pathname : '/form',
        state : {id: this.state.user._id}
      });
    }
    // Could not find user
    if (this.state.userError && !this.state.dev) {
      this.props.history.push({
        pathname : '/about'
      });
    }
    return (
      <div>
        {this.state.user != null ? 
          <div className="display">

            <h1 className="h1">{this.state.user.name}</h1>
            
            <span style={{whiteSpace: "pre-line"}}>
              <h2 className="h2">
                {this.state.user.bio}
              </h2>
            </span>

            <FacebookButton user_name={this.state.user.facebook}/>
            <InstagramButton user_name={this.state.user.instagram}/>
            <SnapchatButton user_name={this.state.user.snapchat}/>
            <TikTokButton user_name={this.state.user.tikTok} />
            <GithubButton user_name={this.state.user.github}/>
            <CustomSiteButton name={this.state.user.site_name} url={this.state.user.site_link} />
            <EmailButton email={this.state.user.email} />
          </div>
        : <div>
            <TikTokButton user_name="fletcherdick" />
          </div>}
      </div>
    );
  }
}

export default BusinessCard;
