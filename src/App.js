import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from "./component/Homepage";
import Productpage from "./component/Productpage";

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path ="/" element = {<Homepage/>}/>
        <Route path = "/Productpage" element = {<Productpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
