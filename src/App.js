// App.js
import React from 'react';
import './App.css';
import Table from './Table'
import KanbanBoard from './Kanban';
import Sidebar from './Sidebar';
import Add from './Add';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
function App() {

  return (
    <div className="App">
     <BrowserRouter>
    <Navbar/>
     <Sidebar/>
      <Routes>
      <Route path="/Active" element={<Table/>} />
      <Route path="/Add" element={<Add/>} />
    </Routes>
      

      </BrowserRouter>
    </div>
  );
}

export default App;
