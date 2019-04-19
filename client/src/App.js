import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Navbar2 from './Components/Navbar2';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Timeline from './Components/timeline';
import Details1 from './Components/Details1';
import Details2 from './Components/Details2';
import Details3 from './Components/Details3';
import Art from './Components/Art';
import Painting from './Components/Painting';
import Photography from './Components/Photography';
import Poems from './Components/Poems';
import Dance from './Components/Dance';
import Singing from './Components/Singing';
import './App.css';

// main component uses react-router-dom that lets the app to render components as soon as there is a request for new page
// BrowserRouter wraps all the Route components
// Route is used to specify the path on which a certain component has to be rendered. Thus we can give different paths to different pages.
// 'exact' attribute is used here as without this, path="/" would also match "/about", since / is contained in the route.

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                 <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/Login' component={Login} />
                    <Route path='/Navbar2' component={Navbar2} />
                    <Route path='/Register' component={Register} />
                    <Route path='/timeline' component={Timeline} />
                    <Route path='/Details1' component={Details1} />
                    <Route path='/Details2' component={Details2} />
                    <Route path='/Details3' component={Details3} />
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