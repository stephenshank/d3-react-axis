import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import "bootstrap";
import { scaleLinear } from "d3-scale";
import { AxisBottom } from "d3-react-axis";

import "bootstrap/dist/css/bootstrap.min.css";

function Link(props) {
  return (
    <NavLink className="dropdown-item link" to={props.to}>
      {props.header}
    </NavLink>
  );
}

function Dropdown(props) {
  return (
    <ul className="navbar-nav ">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {props.title}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {props.children}
        </div>
      </li>
    </ul>
  );
}

function NavBar() {
  return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink className="navbar-brand" to="/">
      D3-React-Axis
    </NavLink>
    <Dropdown title="Examples">
      <Link to="/mwe" header="Minimal working example" />
    </Dropdown>
  </nav>);
}

function Home() {
  return <h1>Home</h1>;
}

function MWE() {
  var width = 400,
    height = 50,
    padding = 20;
  var scale = scaleLinear()
    .domain([0, 100])
    .range([padding, width-padding]);

  return (<div>
    <h1>Minimal working example</h1>
    <svg width={width} height={height}>
      <AxisBottom scale={scale} ticks={[5]} transform={`translate(0, ${height-padding})`} />
    </svg>
  </div>);
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <NavBar />
      <div style={{ maxWidth: 1140 }} className="container-fluid">
        <Route exact path="/" component={Home} />
        <Route path="/mwe" component={MWE} />
      </div>
    </div>
  </BrowserRouter>,
  document.body.appendChild(document.createElement("div"))
);

