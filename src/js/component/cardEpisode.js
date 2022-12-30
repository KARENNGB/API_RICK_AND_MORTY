import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const CardEpisode = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getEpisodes();
  }, []);

  return store.episodes.map((episode) => {
    return (
      <div className="horizontal-section1" key={episode.id}>
        <div className="col">
          <div className="card">
            <img
              src="https://www.gamerevolution.com/wp-content/uploads/sites/2/2022/10/rick-and-morty-season-6-episode-7-release-date-time-adult-swim.jpg"
              className="card-img-top img-fluid"
            />
            <div className="card-body">
              <h3 className="card-title">
                <strong>Nº{episode.id}</strong>
              </h3>
              <p className="card-text">{episode.name}</p>
              <div className="buttonfav">
              <button className="button" onClick={() => actions.handleFav(locations.name)}>
                  <i className="favorite icon fa-regular fa-heart"></i>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default CardEpisode;
