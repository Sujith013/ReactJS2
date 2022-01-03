import React from 'react';
import './App.css';
import Dashboard from './components/dashboard.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

function App() {
  return (
    <div>
    <div className="top">
    <div className="topbar">
      <p>
      PULSE PTT AGENT MANAGEMENT CONSOLE
      </p>
      </div>
      <div className="tsbar">
        <p style={{paddingTop:"2%"}}>Agent Name</p>
        <p>English&emsp;&emsp;&emsp;&emsp;<Button color="danger">logout</Button></p>
      </div>
      </div>
      <div style={{display:"flex"}}>
       <Dashboard />
      </div>
      </div>
  );
}

export default App;
