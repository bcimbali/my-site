import React from "react";

/** Holds each portfolio piece, generated from portfolio_pieces.json */
function PortfolioCard({ description, id, image, modalHandler, name }) {
  return (
    <div className="col-md-4">
      <div
        data-aos="fade-left"
        className="min-h max-w mx-auto my-3 portfolio-card rounded"
      >
        <img
          className="image img-fluid max-h-img p-2 rounded"
          data-testid="portfolio-image"
          src={image}
          alt="portfolio piece"
        />
        <div className="border border-dark middle rounded">
          <div
            className="text"
            onClick={() => {
              modalHandler(id - 1);
            }}
          >
            Check it Out
          </div>
        </div>
        <h3 className="p-2 portfolio-card-font" data-testid="portfolio-name">
          {name}
        </h3>
        <p className="p-2">{description}</p>
      </div>
    </div>
  );
}

export default PortfolioCard;
