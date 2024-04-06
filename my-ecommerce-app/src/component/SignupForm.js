import React, {useState} from "react";
import LoginForm from "./LoginForm";

function SignupForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [showSignupForm, setShowSignupForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    
    const handleUsernameChange = (event) =>{
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
    }
    
    const handleConfirmPasswordChange = (event) =>{
        setConfirmPassword(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const toggleForm = () => {
        setShowSignupForm(false);
    }
    
    const handleSignup = async (event) =>{
        event.preventDefault();

        if(password !== confirmPassword){
            setErrorMessage("Passwords do not match");
            return;
        }
        else if(!email.includes("@")){
            setErrorMessage("Invalid email");
            return;
        }

        const userData = {
            username: username,
            password: password,
            email: email,
        };

        try{
            const response = await fetch('http://127.0.0.1:5000/signup',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            const data = await response.json();

            if(response.ok){
                setErrorMessage("User created!");
            } else{
                setErrorMessage(data.error || "Signup failed");
            }
        } catch (error){
            setErrorMessage("Signup failed. Please try again.");
            console.error(error);
        }

    }

    

    if(showSignupForm){
        return(
            <>
                <h2>Signup</h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit = {handleSignup}>
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
                            onChange = {handlePasswordChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <input
                            type = "password"
                            id = "confirm-password"
                            value = {confirmPassword}
                            placeholder="Re-enter your password"
                            onChange = {handleConfirmPasswordChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type = "text"
                            id = "email"
                            value = {email}
                            placeholder="Enter your email"
                            onChange = {handleEmailChange}
                            required
                        />
                    </div>
                    <button type = "submit">Signup</button> <br/>
                </form>
                <button onClick={toggleForm}>Switch to login</button>
            </>
        );
    } else{
        return <LoginForm toggleForm = {toggleForm}/>
    }
};

export default SignupForm;