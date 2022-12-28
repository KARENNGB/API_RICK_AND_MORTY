import React from "react";

const CardLocation = ({ type, name }) => {
  return (
    <div className="horizontal-section">
      <div className="col">
        <div className="card">
          <div className="card-body mw-100 mh-100">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">{type}</p>
            <div className="buttons">
              <button className="button">Learn more!</button>
              <br></br>
              <button i className="favorite icon fa-regular fa-heart"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLocation;
