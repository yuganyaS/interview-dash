import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link, useRouteMatch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';


import Home from './Pages/Home';
import ReactHome from './Pages/React/ReactHome';
import AngularHome from './Pages/Angular/AngularHome';
import JavascriptHome from './Pages/Javascript/JavascriptHome';
import Nav from './Nav';
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
      <ul className="m-4 list-group">
        <li className="list-group-item"><Link to={`${path.url}/react`}>React</Link></li>
        <li className="list-group-item"><Link to={`${path.url}/angular`}>Angular</Link></li>
        <li className="list-group-item"><Link to={`${path.url}/javascript`}>Javascript</Link></li>
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
      <Nav />
       <Router>
            <Route path="/" exact component={Home} />
            <Route path="/topics/react" exact component={ReactHome} />
            <Route path="/topics/angular" exact component={AngularHome} />
            <Route path="/topics/javascript" exact component={JavascriptHome} /> 
            <Route path="/topics" exact component={Topics} />          
       </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
