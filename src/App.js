import './App.css';
import Homepage from "./component/Homepage"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path ="/" element = {<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
