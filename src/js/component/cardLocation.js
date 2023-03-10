import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const CardLocation = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getLocations()
  },[])

  return store.locations.map((locations) => {
  return (
    <div className="horizontal-section2" key={locations.id}>
      <div className="col">
        <div className="card">
          <img src="https://i.pinimg.com/originals/05/f4/54/05f45421c953aba9b17c2d3a710f33dd.png" className="card-img-top img-fluid"/>
          <div className="card-body">
            <h5 className="card-title"><strong>{locations.name}</strong></h5>
            <p className="card-text"><strong>Type: </strong>{locations.type}</p>
            <p className="card-text"><strong>Nº of characters inside: </strong>{locations.residents.length}</p>
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
})
};

export default CardLocation;
