import React from 'react';

function PortfolioCard(props)  { 
  return (
  <div className="col-md-4">
      <div data-aos="fade-left" className="min-h max-w mx-auto my-3 portfolio-card rounded"> 
        <img className="image img-fluid max-h-img p-2 rounded" src={props.image} alt="portfolio piece"/>
          <div className="border border-dark middle rounded">
            <div className="text" onClick={() => {props.modalHandler(props.id - 1)}}>
              Check it Out
            </div>
          </div>
        <h3 className="p-2 portfolio-card-font">{props.name}</h3>
        <p className="p-2">{props.description}</p>
      </div>
  </div>
  );
};

export default PortfolioCard;