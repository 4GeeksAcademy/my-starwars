import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsV = props => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getVehiclesDetails(params.uid);
  }, []);

  return (
    <div className="jumbotron mx-5 my-5">
      <div
        className="card mb-3 border border-1  rounded-start  border border-warning-subtle"
        style={{ width: "1260px", height: "555px", background: "black", color: "#FFEB1F" }}
      >
        <div className="d-flex">
          <div className="col-md-4">
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`}
              className="img-fluid rounded-start object-fit-cover"
              alt="..."
              onError={(e) => e.target.src = 'fallback-image.jpg'}
              style={{ marginRight: "20px" }}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <div className="d-flex">
                <ul>
                  <li className="p-3">
                    <h6 style={{ color: "#FFEB1F" }}>"Cargo_capacity": <span>{store?.vehiclesdetails?.cargo_capacity}</span></h6>
                  </li>

                  <li className="p-3">
                    <h6 style={{ color: "#FFEB1F" }}>"consumables": {store?.vehiclesdetails?.consumables}</h6>
                  </li>

                  <li className="p-3">
                    <h6 style={{ color: "#FFEB1F" }}>"cost_in_credits": {store?.vehiclesdetails?.cost_in_credits}</h6>
                  </li>

                  <li className="p-3">
                    <h6 style={{ color: "#FFEB1F" }}>"created": {store?.vehiclesdetails?.created}</h6>
                  </li>

                  <li className="p-3">
                    <h6 style={{ color: "#FFEB1F" }}>"crew": {store?.vehiclesdetails?.crew}</h6>
                  </li>

                  <li className="p-3">
                    <h6 style={{ color: "#FFEB1F" }}>"edited": {store?.vehiclesdetails?.edited}</h6>
                  </li>

                  <li className="p-3">
                    <h6 style={{ color: "#FFEB1F" }}>"length": {store?.vehiclesdetails?.length}</h6>
                  </li>

                  <li className="p-2">
                    <h6 style={{ color: "#FFEB1F" }}>"manufacturer": {store?.vehiclesdetails?.manufacturer}</h6>
                  </li>
                </ul>
                <ul>
                  <li className="p-3">
                    <h6 style={{ color: "#FFEB1F" }}>"max_atmosphering_speed": {store?.vehiclesdetails?.max_atmosphering_speed}</h6>
                  </li>

                  <li className="p-3">
                    <h6 style={{ color: "#FFEB1F" }}>"model": {store?.vehiclesdetails?.model}</h6>
                  </li>

                  <li className="p-3">
                    <h6 style={{ color: "#FFEB1F" }}>"name": {store?.vehiclesdetails?.name}</h6>
                  </li>

                  <li className="p-3">
                    <h6 style={{ color: "#FFEB1F" }}>"passengers": {store?.vehiclesdetails?.passengers}</h6>
                  </li>

                  <li className="p-3">
                    <h6 style={{ color: "#FFEB1F" }}>"pilots": {store?.vehiclesdetails?.pilots}</h6>
                  </li>

                  <li className="p-3">
                    <h6 style={{ color: "#FFEB1F" }}>"films": {store?.vehiclesdetails?.films}</h6>
                  </li>

                  <li className="p-3">
                    <h6 style={{ color: "#FFEB1F" }}>"url": {store?.vehiclesdetails?.url}</h6>
                  </li>

                  <li className="p-3">
                    <h6 style={{ color: "#FFEB1F" }}>"vehicle_class": {store?.vehiclesdetails?.vehicle_class}</h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

	  <Link to="/">
        <span className="btn btn-warning btn-lg" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};