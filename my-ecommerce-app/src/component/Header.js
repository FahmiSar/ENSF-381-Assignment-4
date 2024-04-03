import React from "react";
import { Link } from "react-router-dom"

function Header() {
	return (
		<>
			<div class="logoName">
				<img src="./images/logo.png" alt="" />
				<h1>Company Name</h1>
			</div>
            <nav className = "nav">
                <Link to="/Homepage">Home</Link>
                <Link to="/Productpage">Products</Link>
                <Link to="/login">Login</Link>
            </nav>
		</>
	);
}

export default Header;
