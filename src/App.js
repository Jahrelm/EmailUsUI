// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import CreateMail from './components/CreateMail';
import Mail from './components/Mail';
import CreateRecipient from './components/CreateRecipient';
import Recipient from './components/Recipient';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/CreateMail" element={<CreateMail />} />
          <Route path="/Mail" element={<Mail />} /> 
          <Route path="/CreateRecipient" element={<CreateRecipient />} />     
          <Route path="/Recipient" element={<Recipient />} />
        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
