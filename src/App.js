import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Birthday from './Components/Birthday'



function App() {
  return (
    <div className="App">
    <Router>
    
  
      <Routes>






<Route path='/' element={<Birthday/>}/>




      </Routes>
    </Router>

    
    </div>
  );
}

export default App;