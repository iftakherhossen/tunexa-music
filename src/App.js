import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthProvider/AuthProvider';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home animate={true} />} />
            <Route path="/home" element={<Home animate={true} />} />
            <Route path="/playlist/:id" element={<Home animate={true} />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;