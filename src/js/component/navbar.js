import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
      <nav className="navbar navbar-expand-lg color container-fluid">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="LogoRickandMorty">
            <Link to="/">
              <img
                id="local-nav-logo-desktop"
                width="182px"
                height="50px"
                className="d-inline-block align-text-top"
                margin-right="3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png"
              ></img>
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/demo">
                <button type="button" className="btn btn-outline-transparent">
                  <div className="text-white bg-transparent text-decoration-none">
                    Character
                  </div>
                </button>
              </Link>
              <Link to="/demo">
                <button type="button" className="btn btn-outline-transparent">
                  <div className="text-white bg-transparent text-decoration-none">
                    Location
                  </div>
                </button>
              </Link>
              <Link to="/demo">
                <button type="button" className="btn btn-outline-transparent">
                  <div className="text-white bg-transparent text-decoration-none">
                    Episode
                  </div>
                </button>
              </Link>
            </ul>
            <div className="dropdown-center btn-group">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites{" "}
              </button>
              <ul className="dropdown-menu">
                {store.favorites.length > 0 ? (
                  store.favorites.map((increaseNumber, i) => (
                    <a className="dropdown-item">
                      <li key={i}>
                      {increaseNumber}
                      <button
                        className="button"
                        onClick={() => actions.handleDel(increaseNumber)}
                      >
                        Learn more! <i className="fa-solid fa-trash"></i>
                      </button>
                    </li></a>

                  ))
                ) : (
                  <li>
                    <span className="increase">empty</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
};
