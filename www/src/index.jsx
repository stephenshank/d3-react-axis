import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import "bootstrap";
import { scaleLinear } from "d3-scale";
import { AxisTop, AxisRight, AxisBottom, AxisLeft } from "d3-react-axis";

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
  const long_side = 400,
    short_side = 60,
    padding = 30,
    scale = scaleLinear()
      .domain([0, 100])
      .range([0, long_side-2*padding]),
    border_style = {border: "solid", borderWidth: 1, borderColor: "LightGrey"};

  return (<div>
    <h1>Minimal working examples</h1>
    <h2>AxisTop</h2>
    <svg
      width={long_side}
      height={short_side}
      style={border_style}
    >
      <AxisTop
        scale={scale}
        transform={`translate(${padding}, ${short_side-padding})`}
      />
    </svg>

    <h2>AxisBottom</h2>
    <svg
      width={long_side}
      height={short_side}
      style={border_style}
    >
      <AxisBottom
        scale={scale}
        transform={`translate(${padding}, ${padding})`}
      />
    </svg>

    <h2>AxisLeft</h2>
    <svg
      width={short_side}
      height={long_side}
      style={border_style}
    >
      <AxisLeft
        scale={scale}
        transform={`translate(${padding}, ${padding})`}
      />
    </svg>

    <h2>AxisRight</h2>
    <svg
      width={short_side}
      height={long_side}
      style={border_style}
    >
      <AxisRight
        scale={scale}
        transform={`translate(${padding}, ${padding})`}
      />
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

