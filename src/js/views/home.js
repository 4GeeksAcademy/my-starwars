import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCharacters();
    actions.getVehicles();
    actions.getPlanets();
  }, []);

  return (
    <div className="text-center">
      <div className="d-flex flex-wrap justify-content-center">
        <div className="characters col-md-4 mb-4">
          <h2>Characters</h2>
          <div id="carouselCharacters" className="carousel slide rounded-start">
            <div className="carousel-indicators">
              {store.characters.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselCharacters"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {store.characters.map((item, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
                    className="d-block w-100"
                    alt={item.name}
                    onError={(e) => (e.target.src = 'fallback-image.jpg')} // Add fallback image
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <Link to={`/DetailsC/${item.uid}`} className="btn-info">
                      {item.name}
                    </Link>
                    <button
                      onClick={() => actions.addFavoriteCharacters(item.uid, item.name)}
                      className="like"
                    >
                      <i className="fa-solid fa-heart fa-2xl"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselCharacters"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselCharacters"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="vehicles col-md-4 mb-4">
          <h2>Vehicles</h2>
          <div id="carouselVehicles" className="carousel slide rounded-start">
            <div className="carousel-indicators">
              {store.vehicles.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselVehicles"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {store.vehicles.map((item, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <img
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`}
                    className="d-block w-100"
                    alt={item.name}
                    onError={(e) => (e.target.src = 'fallback-image.jpg')} // Add fallback image
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <Link to={`/DetailsV/${item.uid}`} className="btn-info">
                      {item.name}
                    </Link>
                    <button
                      onClick={() => actions.addFavoriteVehicles(item.uid, item.name)}
                      className="like"
                    >
                      <i className="fa-solid fa-heart fa-2xl"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselVehicles"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselVehicles"
              data-bs-slide="next"
            >
              <span               className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="planets col-md-4 mb-4">
          <h2>Planets</h2>
          <div id="carouselPlanets" className="carousel slide rounded-start">
            <div className="carousel-indicators">
              {store.planets.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselPlanets"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {store.planets.map((item, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
                    className="d-block w-100"
                    alt={item.name}
                    onError={(e) => (e.target.src = 'fallback-image.jpg')} // Add fallback image
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <Link to={`/DetailsP/${item.uid}`} className="btn-info">
                      {item.name}
                    </Link>
                    <button
                      onClick={() => actions.addFavoritePlanets(item.uid, item.name)}
                      className="like"
                    >
                      <i className="fa-solid fa-heart fa-2xl"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselPlanets"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselPlanets"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};