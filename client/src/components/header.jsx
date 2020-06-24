import * as React from 'react';
import Logo from '../assets/images/BuzzyBee_Logo.gif';
import "../App.css";

export const Header = () => (
  <React.Fragment>
      <div className="display">
        <div className='logoText'>
          BuzzyCard is Developed and Designed<br/>by <a className="logolink" href="https://github.com/fletcherd3/" target="_blank">Fletcher Dick</a>
        </div>
        <br/>
        <img src={Logo} className="Logo" alt="Buzzy Card Logo"/>
      </div>
  </React.Fragment>
);
