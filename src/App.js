import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Timeline from './Components/timeline';
import Details from './Components/Details';
import Art from './Components/Art';
import Painting from './Components/Painting';
import Photography from './Components/Photography';
import Poems from './Components/Poems';
import Dance from './Components/Dance';
import Singing from './Components/Singing';
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
                    <Route path='/Details' component={Details} />
                    <Route path='/Art' component={Art} />
                    <Route path='/Painting' component={Painting} />
                    <Route path='/Photography' component={Photography} />
                    <Route path='/Poems' component={Poems} />
                    <Route path='/Dance' component={Dance} />
                    <Route path='/Singing' component={Singing} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;