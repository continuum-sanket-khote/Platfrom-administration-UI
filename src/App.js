import React from 'react';

import Sample from  './components/sample'
import { HashRouter as Router, Route } from "react-router-dom";

import Table_request from  './components/table_request'
import Table_response from  './components/table_response'

import './App.css';

function App() {
  return (
    
       <div>
   
    <Router >
    <Route exact path="/" component={Sample} />
      <Route path="/table_request" component={Table_request} />
      <Route path="/table_response/:name" component={Table_response} />

    </Router>
    </div>


  );
}

export default App;
