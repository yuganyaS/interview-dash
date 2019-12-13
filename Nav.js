import React from 'react';

export default ()=>{
  return(
    <nav className="navbar navbar-expand navbar-light shadow">
      <a className="navbar-brand" href="/" > Dash</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/topics">Topics</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="search" />
          <button type="submit" className="btn btn-outline-success my-2 my-sm-0">Search</button>

        </form>
      </div>
    </nav>
  )
}