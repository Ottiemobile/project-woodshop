import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
  <div>
    <Router>
      <Homepage></Homepage>
    </Router>
  </div>
  );
}

export default App;
