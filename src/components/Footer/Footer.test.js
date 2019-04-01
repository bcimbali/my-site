import { cleanup, render } from "react-testing-library";

import Footer from "./Footer";
import React from "react";

afterEach(cleanup);

test("<Footer /> links", () => {
  const { getByTestId } = render(<Footer />);
  expect(getByTestId("github").href).toBe("https://github.com/bcimbali");
  expect(getByTestId("linkedin").href).toBe(
    "https://www.linkedin.com/in/brett-cimbalik/"
  );
  expect(getByTestId("resume").href).toBe(
    "https://drive.google.com/file/d/1bVxm7vubNbH8eS0qrormKvvfZagDKLo6/view?usp=sharing"
  );
});
