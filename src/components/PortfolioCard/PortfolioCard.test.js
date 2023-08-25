import { cleanup, render } from "react-testing-library";

import PortfolioCard from "./PortfolioCard";
import React from "react";

// After each test
afterEach(() => {
  cleanup();
});

const portfolioPiece = {
  description: "Test portfolio piece",
  id: "1234",
  image: "test.png",
  name: "Test Piece",
};

test("<PortfolioCard /> with portfolio", () => {
  const { getByTestId, debug } = render(
    <PortfolioCard image={portfolioPiece.image} name={portfolioPiece.name} />
  );
  expect(getByTestId("portfolio-image").getAttribute("src")).toBe(
    portfolioPiece.image
  );
  expect(getByTestId("portfolio-name").textContent).toBe(portfolioPiece.name);
});
