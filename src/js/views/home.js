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
    <div className="row">
      <div className="text-left mx-5 px-5 h-100">
        <div className="element1">
          <h1>Characters</h1>
          <div className="container-fluid">
            <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
              {store.characters.map((item) => {
                return (
                  <Card
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    species={item.species}
                    gender={item.gender}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="element2">
          <h1>Location</h1>
          <div className="container-fluid">
            <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
              {store.locations.map((item) => {
                return (
                  <CardLocation
                    key={item.id}
                    type={item.type}
                    name={item.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="element3">
          <h1>Episode</h1>
          <div className="container-fluid">
            <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
              {store.episodes.map((item) => {
                return (
                  <CardEpisode key={item.id} name={item.name} id={item.id} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
