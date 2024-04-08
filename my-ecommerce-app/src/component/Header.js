import React, {useContext} from "react";
import { Link } from "react-router-dom"
import { Context } from "../App";

function Header() {
	const [loginStatus] = useContext(Context)

	return (
		<>
			<div class="logoName">
				<img src="./images/logo.png" alt="" />
				<h1>Company Name</h1>
			</div>
            <nav className = "nav">
                <Link to="/Homepage">Home</Link>
                <Link to={loginStatus ? "/Productpage" : "/login"}>Products</Link>
                <Link to="/login">Login</Link>
				<div className = {loginStatus? "logged-in" : "not-logged-in"}>{loginStatus? "Logged in" : "Not Logged In"}</div>
            </nav>
		</>
	);
}

export default Header;
