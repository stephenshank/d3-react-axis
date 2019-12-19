import React from "react";
import { scaleLinear } from "d3-scale";
import renderer from "react-test-renderer";

import { AxisTop, AxisRight, AxisBottom, AxisLeft } from "../src/index";


const width = 500,
  height = 50;

function SVG(props) {
  return (<svg width={width} height={height}>
    {props.children}
  </svg>);
}

const domain = [0, 100],
  range = [0, 400];

it("axis top with linear scale", () => {
  const scale = scaleLinear()
      .domain(domain)
      .range(range),
    axis_top = renderer
      .create(<SVG>
        <AxisTop
          scale={scale}
        />
      </SVG>)
      .toJSON();
  expect(axis_top).toMatchSnapshot();
});

it("axis right with linear scale", () => {
  const scale = scaleLinear()
      .domain(domain)
      .range(range),
    axis_top = renderer
      .create(<SVG>
        <AxisRight
          scale={scale}
        />
      </SVG>)
      .toJSON();
  expect(axis_top).toMatchSnapshot();
});

it("axis bottom with linear scale", () => {
  const scale = scaleLinear()
      .domain(domain)
      .range(range),
    axis_top = renderer
      .create(<SVG>
        <AxisBottom
          scale={scale}
        />
      </SVG>)
      .toJSON();
  expect(axis_top).toMatchSnapshot();
});

it("axis left with linear scale", () => {
  const scale = scaleLinear()
      .domain(domain)
      .range(range),
    axis_top = renderer
      .create(<SVG>
        <AxisLeft
          scale={scale}
        />
      </SVG>)
      .toJSON();
  expect(axis_top).toMatchSnapshot();
});
