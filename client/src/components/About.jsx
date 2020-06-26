import React from 'react';
import "../App.css";
import Card from '@material-ui/core/Card';
import Lottie from 'react-lottie';
import animationData from '../assets/animations/tap.json'

class AboutPage extends React.Component {
  render() {

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData
    };

    return (
        <div className='display' style={{ display:'flex', justifyContent:'center' }}>
          <Card className="formCard">
            <h2>About BuzzyCard</h2>
            BuzzyCard is "SmartCard" business card alternative created as a project to show my
            skills and interests in building a full-stack web application. <br/>
            The application is a MERN stack (thats MongoDB, Express, React, and Node.js)
            that uses a cards NFC (or QR code) to open a customised profile page for the user.

            <h2>How to use your BuzzyCard</h2>
            It's easy as! Just tap the card on a supported phone, there's no extra app needed!
            If your phone isn't supported then you can easily scan the QR code on the card.
            <Lottie options={defaultOptions}
              height={200}
              width={200}/>
          </Card>
        </div>
    )
  }
}

export default AboutPage