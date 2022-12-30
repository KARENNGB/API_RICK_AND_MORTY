import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const Card = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCharacters();
  }, []);

  return store.characters.map((character) => {
    return (
      <div className="horizontal-section" key={character.id}>
        <div className="col">
          <div className="card">
            <img src={character.image} className="card-img-top img-fluid" />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text1">
                <strong>Gender: </strong>
                {character.gender}
              </p>
              <p className="card-text2">
                <strong>Species: </strong>
                {character.species}
              </p>
              <div className="buttons">
                <div className="button1">
                  <Link to={`/Details/${character.id}`}>Learn more!</Link>
                </div>
                <br></br>
                <button
                  className="button"
                  onClick={() => actions.handleFav(character.name)}
                >
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

export default Card;
