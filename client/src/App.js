import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Form from './components/Form';
import DisplayUsers from './components/DisplayUsers';
import BusinessCard from './components/BusinessCard';
import { NotFound } from './components/notfound';
import axios from 'axios';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
              <Switch>
              <Route path="/" exact
                render={(props) => <Form {...props} />}
                />
                <Route path="/user" exact
                render={(props) => <BusinessCard {...props} />}
                />
                <Route path="/table" exact
                render={(props) => <DisplayUsers {...props} users={this.state.users} />}
                />
                <Route path ="*" exact component={NotFound} />
              </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
