import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Card from "../component/card";
import CardLocation from "../component/cardLocation";
import CardEpisode from "../component/cardEpisode";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getCharacters();
    actions.getLocations();
    actions.getEpisodes();
  }, []);

  return (
    <div className="row row-cols-10">
      <div className="text-left mx-5 px-5 h-100">
        <div className="element1">
          <h1>Characters</h1>
          <div className="img-fluid">
            <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
              <Card />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="text-left mx-5 px-5 h-100">
          <div className="element2">
            <h1>Location</h1>
            <div className="img-fluid">
              <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
                <CardLocation />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="text-left mx-5 px-5 h-100">
          <div className="element3">
            <h1>Episode</h1>
            <div className="img-fluid">
              <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
                <CardEpisode />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
