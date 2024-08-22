import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsP = () => {

    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {

        actions.getPlanetsDetails(params.uid)

    }, [])


    return (


        <div className="jumbotron mx-5 my-5">


            <div className="card mb-3 border border-1  rounded-start  border border-warning-subtle" style={{ width: "1260px", height: "555px", background: "black", color: "#FFEB1F" }}>

                <div className="d-flex ">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} className="img-fluid rounded-start object-fit-cover" alt="..." onError={(e) => e.target.src = 'fallback-image.jpg'} style={{ marginRight: "20px" }} />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">

                            <div className="d-flex">
                                <ul>

                                    <li className="p-3" >
                                        <h6>"climate":
                                        <span>{store?.planetsdetails?.climate}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6>"created":
                                        <span>{store?.planetsdetails?.created}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6>"diameter":
                                        <span>{store?.planetsdetails?.diameter}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6>"edited":
                                        <span>{store?.planetsdetails?.edited}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6>"films":
                                        <span>{store?.planetsdetails?.films}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6>"gravity":
                                        <span>{store?.planetsdetails?.gravity}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6>"name":
                                        <span>{store?.planetsdetails?.name}</span>
                                    </h6>
                                    </li>

                                    <li className="p-2"><h6>"orbital_period":
                                        <span>{store?.planetsdetails?.orbital_period}</span>
                                    </h6>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="p-3"><h6>"population":
                                        <span>{store?.planetsdetails?.population}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6>"residents":
                                        <span>{store?.planetsdetails?.residents}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6>"rotation_period":
                                        <span>{store?.planetsdetails?.rotation_period}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6>"surface_water":
                                        <span>{store?.planetsdetails?.surface_water}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6>"terrain":
                                        <span>{store?.planetsdetails?.terrain}</span>
                                    </h6>
                                    </li>

                                    <li className="p-3"><h6>"url":
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