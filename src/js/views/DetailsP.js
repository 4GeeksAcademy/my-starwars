import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsP = props => {

    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {

        actions.getPlanetDetails(params.uid)

    }, [])

    const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`;

    return (

        
        <div className="jumbotron mx-5 my-5">


            <div className="card mb-3 border border-1  rounded-start  border border-warning-subtle" style={{ width: "1260px", height: "555px", background: "black", color: "#FFEB1F" }}>

                <div className="d-flex ">
                    <div className="col-md-4">
                        <img src={imageUrl} className="img-fluid rounded-start object-fit-cover" alt="..." onError={(e) => e.target.src = 'fallback-image.jpg'} style={{ marginRight: "20px" }} />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">

                            <div className="d-flex">
                                <ul>

                                    <li className="p-3" ><h6 style={{ color: "#FFEB1F" }}>"climate":
                                        <span>{store?.planetsdetails?.climate}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6 style={{ color: "#FFEB1F" }}>"created":
                                        <span>{store?.planetsdetails?.created}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6 style={{ color: "#FFEB1F" }}>"diameter":
                                        <span>{store?.planetsdetails?.diameter}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6 style={{ color: "#FFEB1F" }}>"edited":
                                        <span>{store?.planetsdetails?.edited}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6 style={{ color: "#FFEB1F" }}>"films":
                                        <span>{store?.planetsdetails?.films}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6 style={{ color: "#FFEB1F" }}>"gravity":
                                        <span>{store?.planetsdetails?.gravity}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6 style={{ color: "#FFEB1F" }}>"name":
                                        <span>{store?.planetsdetails?.name}</span>
                                    </h6>
                                    </li>

                                    <li className="p-2"><h6 style={{ color: "#FFEB1F" }}>"orbital_period":
                                        <span>{store?.planetsdetails?.orbital_period}</span>
                                    </h6>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="p-3"><h6 style={{ color: "#FFEB1F" }}>"population":
                                        <span>{store?.planetsdetails?.population}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6 style={{ color: "#FFEB1F" }}>"residents":
                                        <span>{store?.planetsdetails?.residents}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6 style={{ color: "#FFEB1F" }}>"rotation_period":
                                        <span>{store?.planetsdetails?.rotation_period}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6 style={{ color: "#FFEB1F" }}>"surface_water":
                                        <span>{store?.planetsdetails?.surface_water}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6 style={{ color: "#FFEB1F" }}>"terrain":
                                        <span>{store?.planetsdetails?.terrain}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6 style={{ color: "#FFEB1F" }}>"url":
                                        <span>{store?.planetsdetails?.url}</span>
                                    </h6>
                                    </li>

                                </ul>
                            </div>/
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