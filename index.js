import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link, useRouteMatch} from 'react-router-dom';
import Hello from './Hello';
// import Profile from './profile';
import Dash from './dash';
import './style.css';

function Profile(){
  return (<div> Profile </div>)
}
function Dash(){
  return <div>Dash</div>
}
function Topics(){
  let path = useRouteMatch();
  console.log("path",path);
  return(
    <div>
      <ul>
        <li><Link to={`${path.url}/react`}>Topic</Link></li>
        <li><Link to={`${path.url}/angular`}>Topic name</Link></li>
      </ul>
     {/* use of switch: switch is unique that render a route exclusively (ie., if we handle this without switch "/name" and "/:id" both component will render but if we use switch then only particular component render..) see below code: */}
      <Switch>
        <Route exact path={`${path.url}/name`} component={Profile} />
        <Route exact path={`${path.url}/:id`} component={Dash} />
      </Switch>
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
