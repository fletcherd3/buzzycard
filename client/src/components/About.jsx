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
            <Lottie options={defaultOptions}
              height={200}
              width={200}/>
          </Card>
        </div>
    )
  }
}

export default AboutPage