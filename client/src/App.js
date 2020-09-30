import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BusinessCard from './components/BusinessCard';
import Form from './components/Form';
import { NotFound } from './components/notfound';
import { Header } from './components/header';
import './App.css';
import AboutPage from './components/About';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
          <Route path="/" exact
            render={(props) => <BusinessCard {...props} />}
            />
            <Route path="/form" exact
            render={(props) => <Form {...props} />}
            />
            <Route path="/about" exact
            render={(props) => <AboutPage {...props} />}
            />
            <Route path ="*" exact component={NotFound} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
