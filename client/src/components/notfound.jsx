import * as React from 'react';
import "../App.css";

export const NotFound = () => (
  <React.Fragment>
    <div className="display">
        <h1 className="h1">Oops! We cant find this page <span role="img" aria-label="detective">🕵️</span>‍</h1>
        <h2 className="h2">Learn more about the web app <a className="logolink" href="/about" rel="noopener noreferrer" target="_blank">here</a></h2>
    </div>
  </React.Fragment>
);
