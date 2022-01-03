import React from "react";
import Forms from './form.js';
import Home from './Home.js';
import {Routes, Route,Navigate} from 'react-router-dom';

function Main(){
    return(
        <div>
        <Routes>
        <Route path="/createnewnubagent" element={<Forms />} />
        <Route path="/home" element={<Home />} />
       <Route path="/" element={<Navigate to="/home" />} />
       </Routes>
        </div>
    );
}

export default Main