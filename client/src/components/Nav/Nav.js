import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand">
          NYT Article Search
        </a>
        <ul className="navbar-nav" style={{float: 'right'}}>
          <li className="nav-item">
              <Link to="/"><button type="button" className="btn btn-info">Home</button></Link>
          </li>
          <li className="nav-item">
              <Link to="/savedArticles"><button type="button" className="btn btn-info">Saved Articles</button></Link>
          </li>
        </ul> 
      </div>
    </div>
  </nav>;

export default Nav;
