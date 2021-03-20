import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import { red, yellow } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Lottie from 'react-lottie';
import animationData from '../assets/animations/submitted.json'


class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            nameErrorText: '',
            bio: '',
            snapchat: '',
            facebook: '',
            github: '',
            tikTok: '',
            instagram: '',
            email: '',
            emailErrorText: '',
            site_name: '',
            site_nameErrorText: '',
            site_link: '',
            site_linkErrorText: '',
            existingError: true,
            submitted: false,
            googleDrive: '',
            linkedin: ''
        }
      }

  checkName(name) {
    if (/^[a-zA-Z][a-zA-Z ]*$/.test(name)) {
      this.setState({ nameErrorText: '' })
      return true
    } else {
      this.setState({ nameErrorText: "Enter a proper name!" })
      return false
    }
  }

  checkEmail(email) {
    const emailReEx = /(^|(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))$/;
    if (emailReEx.test(email)) {
      this.setState({ emailErrorText: '' })
      return true
    } else {
      this.setState({ emailErrorText: "Enter a proper email! (or none)" })
      return false
    }
  }

  checkLink(name, url) {
    if (name === "" && url !== "") {
      this.setState({ site_nameErrorText: "Enter a name for your link!" })
      return false
    } else if (name !== "" && url === "") {
      this.setState({ site_linkErrorText: "Enter a URL for your link!" })
      return false
    } else {
      this.setState({
        site_linkErrorText: "",
        site_nameErrorText: ""
      })
      return true
    }
  }

  checkFields() {
    const validName = this.checkName(this.state.name);
    const validEmail = this.checkEmail(this.state.email);
    const validLink = this.checkLink(this.state.site_name, this.state.site_link)
    if (validName && validEmail && validLink && this.props.location.state.id !== undefined) {
      this.setState({ existingError: false })
    } else {
      this.setState({ existingError: true })
    }
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, this.checkFields);
    
  };

  submit = e => {
    e.preventDefault();
    const { name, bio, snapchat, facebook, tikTok, email, instagram, github, site_link, site_name, googleDrive, linkedin } = this.state;
    axios({
      // url: '/add',
      url: `/update/${this.props.location.state.id}`,
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
        site_name,
        googleDrive,
        linkedin
      }
    })
    this.setState({ submitted: true });
  };
  render() {

    const theme = createMuiTheme({
      palette: {
        primary: yellow,
        secondary: red
      },
      typography: {
        useNextVariants: true,
      },  
    });

    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: animationData
    };

    return (
      <div className="display" style={{ display:'flex', justifyContent:'center' }}>
        {this.state.submitted ? 
        <Card className="formCard">
          <h2>Submitted</h2>
          <Lottie options={defaultOptions}
            height={100}
            width={100}/>
          <h3>Tap or scan your card to view your profile</h3>
        </Card>
        : 
          <Card className="formCard">
            <form className="form noValidate" autoComplete="on" onSubmit={this.submit}>
              <MuiThemeProvider theme={theme}> 
                <h2>Tell us about yourself</h2>
                <TextField
                  required
                  error={this.state.nameErrorText !== ""}
                  className="formInput"
                  value={this.state.name}
                  label="👩‍🚀 Name"
                  name="name"
                  onChange={this.handleChange}
                  helperText={this.state.nameErrorText}
                />

                <TextField
                  multiline
                  rows={4}
                  name="bio"
                  value={this.state.bio}
                  className="formInput"
                  onChange={this.handleChange}
                  label="📝 Bio"
                />

                <h3>Add the account names of the places you would like to share</h3>

                <TextField
                  name="snapchat"
                  value={this.state.snapchat}
                  className="formInput"
                  onChange={this.handleChange}
                  label="👻 Snapchat"
                />

                <TextField
                  name="linkedin"
                  value={this.state.linkedin}
                  className="formInput"
                  onChange={this.handleChange}
                  label="📇 LinkedIn"
                />

                <TextField
                  name="facebook"
                  value={this.state.facebook}
                  className="formInput"
                  onChange={this.handleChange}
                  label="💬 Facebook"
                />

                <TextField
                  name="github"
                  value={this.state.github}
                  className="formInput"
                  onChange={this.handleChange}
                  label="👨‍💻 Github"
                />

                <TextField
                  name="tikTok"
                  value={this.state.tikTok}
                  className="formInput"
                  onChange={this.handleChange}
                  label="🎶 TikTok"
                />

                <TextField
                  name="instagram"
                  value={this.state.instagram}
                  className="formInput"
                  onChange={this.handleChange}
                  label="📸 Instagram"
                />

                <TextField
                  name="email"
                  error={this.state.emailErrorText !== ""}
                  value={this.state.email}
                  className="formInput"
                  onChange={this.handleChange}
                  label="📫 Email"
                  helperText={this.state.emailErrorText}
                />      
                
                <h3>Add your own site link to share</h3>
                URL's should start with https://

                <TextField
                  name="site_name"
                  value={this.state.site_name}
                  className="formInput"
                  onChange={this.handleChange}
                  label="🔗 Site Name"
                  error={this.state.site_nameErrorText !== ""}
                  helperText={this.state.site_nameErrorText}
                />

                <TextField
                  name="site_link"
                  value={this.state.site_link}
                  className="formInput"
                  onChange={this.handleChange}
                  label="🔗 Site URL"
                  error={this.state.site_linkErrorText !== ""}
                  helperText={this.state.site_linkErrorText}
                />

                <h3>Add a Google Drive link to youre CV</h3>
                URL's should start with https://

                <TextField
                  name="googleDrive"
                  value={this.state.googleDrive}
                  className="formInput"
                  onChange={this.handleChange}
                  label="📄 CV"
                />

                <Button disabled={this.state.existingError} variant="contained" className="display" color="secondary" onClick={this.submit}> Submit </Button>
              </MuiThemeProvider>
            </form>
          </Card>
        }
        
      </div>
    );
  }
}

export default Form;