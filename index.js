import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route, Switch, link, useRouteMatch} from 'react-router-dom';
import Hello from './Hello';
import Profile from './profile';
import Dash from './dash';
import './style.css';
function Topics(){
  let path = useRouteMatch();
  console.log("path",path);
  return(
    <div>
      <ul>
        <li><Link to="">Topic</Link></li>
        <li><Link >Topic name</Link></li>
      </ul>
    </div>
  )
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       <Router>
            <Route path="/" exact component={Hello} />
            <Route path="/profile" component={Profile} />
            <Route path="/dash" component={Dash} />
            <Route path="/topics" component={Topics} />          
       </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
