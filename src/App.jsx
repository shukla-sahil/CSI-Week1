import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Components/Form';
import Submission from './Components/Submission';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/submission" element={<Submission />} />
      </Routes>
    </Router>
  );
};

export default App;
