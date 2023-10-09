import React from 'react';
import UsersView from './components/Home';
import UserInfoView from './components/User';
import './styles/Home.css'
import './styles/User.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersView />} />
        <Route path="/user/:id" element={<UserInfoView />} />
      </Routes>
    </Router>
  );
}

export default App;