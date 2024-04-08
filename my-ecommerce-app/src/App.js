import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from "./component/Homepage";
import Productpage from "./component/Productpage";
import LoginPage from "./component/LoginPage";
import React, {useState, createContext, useContext} from "react";

export const Context = React.createContext();

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <Context.Provider value = {[loginStatus, setLoginStatus]}>
        <div className='container'>
        <Routes>
          <Route path ="/" element = {<Homepage/>}/>
          <Route path = "/Homepage" element = {<Homepage/>}/>
          <Route path = "/Productpage" element = {<Productpage/>}/>
          <Route path = "/login" element = {<LoginPage />}/>
        </Routes>
        </div>
    </Context.Provider>
  );
}

export default App;
