import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Timeline from './Components/timeline';
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                 <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/Login' component={Login} />
                    <Route path='/Register' component={Register} />
                    <Route path='/timeline' component={Timeline} />
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
