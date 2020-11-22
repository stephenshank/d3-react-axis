import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch} from "react-router-dom";
import { scaleLinear, scaleLog, scalePow, scaleTime } from "d3-scale";
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
        <NavDropdownItem to="/power">Power scales</NavDropdownItem>
        <NavDropdownItem to="/time">Time scales</NavDropdownItem>
      </NavDropdown>
    </Nav>
  </Navbar>);
}

function Home() {
  return (<div>
    <p>
      <a href='http://github.com/stephenshank/d3-react-axis'>D3-React-Axis</a> is a 
      {" "}<a href='https://reactjs.org/'>React</a> component that is designed to match
      the API and outcome of <a href='https://github.com/d3/d3-axis'>D3 Axis</a>.
    </p>
    <p>
      No more <a href='https://reactjs.org/docs/react-component.html#componentdidmount'>componentDidMount</a> or
      {" "}<a href='https://reactjs.org/docs/hooks-reference.html#useeffect'>useEffect</a> required to have D3
      put an axis on the DOM when React components are finished rendering. Instead, simply create an Axis component
      and render it within a parent component as you normally would.
    </p>
    <p>
      In addition to more concise, readable code when building charts with D3 and React, this additionally facilitates
      features such as <a href='https://jestjs.io/docs/en/snapshot-testing'>snapshot testing</a> that were either
      clunky or impossible without a dedicated Axis component.
    </p>
    <p>
      It has been shown thus far to work with <a href='https://github.com/d3/d3-scale#linear-scales'>linear</a>,
      {" "}<a href='https://github.com/d3/d3-scale#log-scales'>logarithmic</a>, and
      {" "}<a href='https://github.com/d3/d3-scale#power-scales'>power</a> scales... 
      see the <b>Examples</b> menu above.
    </p>
    <p>
      Please refer to the <a href='http://github.com/stephenshank/d3-react-axis'>Github page</a> if
      you wish to use D3-React-Axis in your own code. Thanks for checking this project out... I
      hope you find it useful!
    </p>
  </div>);
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
    <h1>Linear scales</h1>
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
  const long_side = 400,
    short_side = 100,
    padding = 50,
    scale = scaleLog()
      .domain([1, 10000])
      .range([0, long_side-2*padding]),
    border_style = {border: "solid", borderWidth: 1, borderColor: "LightGrey"};

  return (<div>
    <h1>Log scales</h1>
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

function PowerScales() {
  const long_side = 400,
    short_side = 100,
    padding = 50,
    scale = scalePow()
      .exponent(2)
      .domain([1, 100])
      .range([0, long_side-2*padding]),
    border_style = {border: "solid", borderWidth: 1, borderColor: "LightGrey"};

  return (<div>
    <h1>Power scales</h1>
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


function TimeScales() {
  const long_side = 400,
    short_side = 120,
    padding = 60,
    scale = scaleTime()
      .domain([Date.now(), Date.now() + 21 * 60 * 60 * 1000])
      .range([0, long_side-2*padding]),
    border_style = {border: "solid", borderWidth: 1, borderColor: "LightGrey"};

  return (<div>
    <h1>Linear scales</h1>
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
        <Switch>
          <Route path="/time">
            <TimeScales />
          </Route>
          <Route path="/power">
            <PowerScales />
          </Route>
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

