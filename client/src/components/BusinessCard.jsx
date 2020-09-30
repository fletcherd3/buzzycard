import React, { Component } from 'react';
import axios from 'axios';
import QueryString from 'query-string';
import "../App.css";
// Import Button components
import FacebookButton from './FacebookButton'
import InstagramButton from './InstagramButton';
import SnapchatButton from './SnapchatButton';
import GithubButton from './GithubButton';
import CustomSiteButton from './CustomSiteButton';
import EmailButton from './EmailButton';
import TikTokButton from './TikTokButton';
import GoogleDriveButton from './GoogleDriveButton';


class BusinessCard extends Component {
  constructor(props) {
    super(props)
    const params = QueryString.parse(this.props.location.search)
    // Initialise state variables
    this.state = {
      id: params.id,     // Id value from URL parameter
      user: null,        // Store the user date JSON response
      userError: false,  // True when the user cannot be found
      dev: false
    }
  }

  fetchUser() {
    // Fetch user with UserId = params.id
    axios.get(`/users/${this.state.id}`)     // Send Get request to /users/:UserId
        .then((response) => {
          const { user } = response.data;    // Store response
          this.setState({ user: user })
        })
        .catch(() => {
          this.setState({ userError: true }) // User doesn't exist
        });
  };

  componentDidMount() {
    // When the page has mounted fetch the user
    this.fetchUser();
  };


  render() {
    // New User returned, redirect to the /form page
    if (this.state.user != null && this.state.user.name === undefined) {
      this.props.history.push({
        pathname : '/form',
        state : {id: this.state.user._id}  // Pass the users Id to the form page
      });
    }

    // Could not find user
    if (this.state.id === undefined || (this.state.userError && !this.state.dev)) {
      // Redirect invalid request to the /about page
      this.props.history.push({
        pathname : '/about'
      });
    }

    // Valid user returned :) Time to display data
    return (
      <div>
        {this.state.user != null ? 
          // Return user page
          <div className="display">
            <h1 className="h1">{this.state.user.name}</h1>
            <span style={{whiteSpace: "pre-line"}}>
              <h2 className="h2">
                {this.state.user.bio}
              </h2>
            </span>
            
            <GithubButton user_name={this.state.user.github}/>
            <GoogleDriveButton url={this.state.user.googleDrive} />
            <CustomSiteButton name={this.state.user.site_name} url={this.state.user.site_link} />
            <EmailButton email={this.state.user.email} />
            <FacebookButton user_name={this.state.user.facebook}/>
            <InstagramButton user_name={this.state.user.instagram}/>
            <SnapchatButton user_name={this.state.user.snapchat}/>
            <TikTokButton user_name={this.state.user.tikTok} />
            
          </div>
        : null  // TODO: Send redirect to /about page
        }
      </div>
    );
  }
}

export default BusinessCard;
