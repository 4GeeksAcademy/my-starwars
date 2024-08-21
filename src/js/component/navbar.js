import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container-fluid">
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src="https://i.pinimg.com/736x/b4/b5/fd/b4b5fdf7bf06601ad4bd1cc6f73acff3.jpg" width="100" height="100"/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</nav>
		</div>
	);
};
