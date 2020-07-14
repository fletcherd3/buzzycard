import React from 'react';
import "../App.css";
import Card from '@material-ui/core/Card';
import Lottie from 'react-lottie';
import animationData from '../assets/animations/tap.json'
import  { Redirect } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

class AboutPage extends React.Component {

  redirect() {
    return <Redirect to="/dashboard"/>
  }

  render() {

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData
    };

    const theme = createMuiTheme({
      palette: {
        secondary: {
          main: '#D63632'
        }
      },
      typography: {
        useNextVariants: true,
      },  
    });

    return (
        <div className='display' style={{ display:'flex', justifyContent:'center' }}>
          <Card className="formCard">
            <h2>About BuzzyCard</h2>
            BuzzyCard is "Smart Card", a business card alternative created as a project to show my
            skills and interests in building a full-stack web application. <br/>
            The application is a MERN stack (thats MongoDB, Express, React, and Node.js)
            that uses a cards NFC (or QR code) to open a customised profile page for the user.

            <h2>How to use your BuzzyCard</h2>
            It's easy as! Just tap the card on a supported phone, there's no extra app needed!
            If your phone isn't supported then you can easily scan the QR code on the card.
            <Lottie options={defaultOptions}
              height={200}
              width={200}/>
            <MuiThemeProvider theme={theme}>
              <Button variant="contained" className="display" color="secondary" onClick={() => this.props.history.push("/?id=5ef431ea5be3030017e37864")}> See my profile </Button>
            </MuiThemeProvider>
          </Card>
        </div>
    )
  }
}

export default AboutPage