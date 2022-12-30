import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getSingleCharacter(params.id);
  }, []);

  return (
    <div className="col">
    <div className="horizontal-section" key={store.character.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{store.character.name}</h5>
            <p className="card-text1">
              <strong>Status: </strong>
              {store.character.status}
            </p>
            <Link to={`/`}>Home</Link>
            <br></br>
          </div>
        </div>
      </div>
      </div>
  );
};

Details.propTypes = {
  match: PropTypes.object,
};
