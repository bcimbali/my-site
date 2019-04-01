import { cleanup, render } from "react-testing-library";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("<App>", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("name-intro").textContent).toBe(
    "Hey, I'm Brett Cimbalik. I'm a front-end developer."
  );
});
