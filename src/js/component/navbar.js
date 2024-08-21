import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar-light rounded-5 rounded-top border border-warning-subtle bg-white">
  <div className="navbar">
    <div className="Wars">
      <img className="logo" src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo.jpg" width="216" height="120"/>
    </div>

    <div className="dropdown-container d-flex">
      <div className="dropdown">
        <a className="boton-fav btn btn-warning dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Favorites ({store.charactersfavorite.length + store.planetsfavorite.length + store.vehiclesfavorite.length})
        </a>
        <ul className="dropdown-menu bg-warning">
          {store.charactersfavorite.map((item, index) => {
            return (
              <li className="container-name" key={index}>
                <Link to={`/charactersDetails/${item.id}`} className="dropdown-item bg-warning fw-bold">{item.name}</Link>
                <button className="delete" onClick={() => actions.deleteCharacters(item)}><i className="fa-solid fa-trash-can fa-2xl" ></i></button>
              </li>
            )
          })}
          {store.planetsfavorite.map((item, index) => {
            return (
              <li className="container-name" key={index}>
                <Link to={`/planetsDetails/${item.id}`} className="dropdown-item bg-warning fw-bold">{item.name}</Link>
                <button className="delete" onClick={() => actions.deletePlanets(item)}><i className="fa-solid fa-trash-can fa-2xl" ></i></button>
              </li>
            )
          })}
          {store.vehiclesfavorite.map((item, index) => {
            return (
              <li className="container-name" key={index}>
                <Link to={`/vehiclesDetails/${item.id}`} className="dropdown-item bg-warning fw-bold">{item.name}</Link>
                <button className="delete" onClick={() => actions.deleteVehicles(item)}><i className="fa-solid fa-trash-can fa-2xl" ></i></button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  </div>
</nav>
	);
};
