import React, {useState} from "react";
import SignupForm from "./SignupForm";

function LoginForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showLoginForm, setShowLoginForm] = useState(true);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const toggleForm = () => {
        setShowLoginForm(!showLoginForm);
    }

    
    if(showLoginForm){
        return(
            <>
                <h2>Login</h2>
                <form>
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
                            type = "text"
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