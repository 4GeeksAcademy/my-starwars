import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = (props) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("");
  };

  useEffect(() => {
    actions.getCharacters();
  }, []);

  console.log(store.characters);

  return (
    <div>
      {store.characters.map((item, index) => {
        return (
          <div key={index} className="card">
            <img
              className="card-img-top"
              src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} 
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content</p>
              <Link to="#" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};