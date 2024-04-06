import React, {useState} from "react";
import SignupForm from "./SignupForm";

function LoginForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const toggleForm = () => {
        setShowLoginForm(!showLoginForm);
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        const userData = {
            username: username,
            password: password,
        };
        
        try{
            const response = await fetch("http://127.0.0.1:5000/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }, 
                body: JSON.stringify(userData),
            });
            const data = await response.json();

            if(response.ok){
                console.log("login success");
            } else{
                setErrorMessage(data.error || "Login failed");
            }
        } catch(error){
            setErrorMessage("Login failed. Please try again");
            console.error(error);
        }

    }

    
    if(showLoginForm){
        return(
            <>
                <h2>Login</h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit = {handleLogin}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type = "text"
                            id = "username"
                            value = {username}
                            placeholder = "Enter your username"
                            onChange = {handleUsernameChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type = "password"
                            id = "password"
                            value = {password}
                            placeholder="Enter your password"
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <button type = "submit">Login</button> <br/>
                </form>
                <button onClick = {toggleForm}>Switch to signup</button>
            </>
        );
    } else{
        return <SignupForm toggleForm = {toggleForm} />
    }
};

export default LoginForm;