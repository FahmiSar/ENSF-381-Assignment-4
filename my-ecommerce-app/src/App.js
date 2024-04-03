import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from "./component/Homepage";
import Productpage from "./component/Productpage";
import LoginPage from "./component/LoginPage";
import SignupForm from './component/SignupForm';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path ="/" element = {<Homepage/>}/>
        <Route path = "/Homepage" element = {<Homepage/>}/>
        <Route path = "/Productpage" element = {<Productpage/>}/>
        <Route path = "/login" element = {<LoginPage />}/>
      </Routes>
    </div>
  );
}

export default App;
