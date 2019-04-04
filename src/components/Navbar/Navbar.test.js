import { cleanup, render } from "react-testing-library";

import Navbar from "./Navbar";
import React from "react";

afterEach(cleanup);

/** Makes sure navbar links display correctly */
test("<Footer /> links", () => {
  const { getByTestId, debug } = render(<Navbar />);
  expect(getByTestId("brett-cimbalik").getAttribute("href")).toBe("#section1");
  expect(getByTestId("about").getAttribute("href")).toBe("#section2");
  expect(getByTestId("portfolio").getAttribute("href")).toBe("#section3");
  expect(getByTestId("contact").getAttribute("href")).toBe("#section4");
});
