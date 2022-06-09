import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import Radio from './Pages/Radio';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Home animate={true} />} />
            <Route path="/home" element={<Home animate={true} />} />
            <Route path="/radio" element={<Radio animate={true} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;