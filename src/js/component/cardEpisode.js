import React from "react";

const CardEpisode = ({ id, name }) => {
  return (
    <div className="horizontal-section">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">
              <strong>Nº{id}</strong>
            </h3>
            <p className="card-text">{name}</p>
            <div className="buttons">
                  <button className="button">Learn more!</button>
                  
                  <button
                    i
                    className="favorite icon fa-regular fa-heart"
                  ></button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardEpisode;
