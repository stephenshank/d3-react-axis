import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch} from "react-router-dom";
import { scaleLinear } from "d3-scale";
import { LinkContainer } from "react-router-bootstrap";
import { AxisTop, AxisRight, AxisBottom, AxisLeft } from "../src/index.js";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "bootstrap/dist/css/bootstrap.min.css";

function NavDropdownItem(props) {
  return (<LinkContainer to={props.to}>
    <NavDropdown.Item active={false}>{props.children}</NavDropdown.Item>
  </LinkContainer>);
}

function NavBar() {
  return (<Navbar bg="light">
    <NavLink to="/" className="navbar-brand">
      D3-React-Axis
    </NavLink>
    <Nav>
      <NavDropdown title="Examples">
        <NavDropdownItem to="/linear">Linear scales</NavDropdownItem>
        <NavDropdownItem to="/log">Log scales</NavDropdownItem>
      </NavDropdown>
    </Nav>
  </Navbar>);
}

function Home() {
  return <h1>Home</h1>;
}

function LinearScales() {
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

function LogScales() {
  return (<div>
    <h1>Log scales</h1>
  </div>);
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <NavBar />
      <div style={{ maxWidth: 1140 }} className="container-fluid">
        <Switch>
          <Route path="/linear">
            <LinearScales />
          </Route>
          <Route path="/log">
            <LogScales />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  </BrowserRouter>,
  document.body.appendChild(document.createElement("div"))
);

