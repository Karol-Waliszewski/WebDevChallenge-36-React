import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Layout Parts
import Nav from './layout/Nav';
import Header from './layout/Header';
import Discount from './layout/Discount';
import Footer from './layout/Footer';

// Components
import App from './App.js';

class Layout extends Component {
  render() {
    return (<div>
      <Nav/>
      <Header/>

      <Router>
        <Switch>
          <Route path="/:page?" exact={true} component={App}/>
          <Route path="/" render={() => (<p style={{
                margin: '2rem',
                textAlign: 'center'
              }}>404 Missing url.</p>)}/>
        </Switch>
      </Router>

      <Discount/>
      <Footer/>
    </div>);
  }
}

export default Layout;
