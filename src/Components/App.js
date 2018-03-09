import React, { Component } from 'react';
import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact';
import {BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

let procedures = [
  'General Checkups',
  'Teeth Cleaning',
  'Cavity Screenings',
  'Cavity Fillings',
  'Chipped Tooth Fixings',
  'Tooth Removal',
  'Root Canals'
]

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <nav>
      <Link to='/'>Go to Home Page</Link>{' '}
      <Link to='/procedures'>See Our Procedures</Link>{' '}
      <Link to='/contact'>Go to Contact Page</Link>
      </nav>
          <Route exact path='/' component ={Home} />
          <Route path='/procedures' component ={() => <Procedures ops={procedures} />} />
          <Route path='/contact' component ={Contact} />
      </div>
        </Router>
    );
  }
}

export default App;
