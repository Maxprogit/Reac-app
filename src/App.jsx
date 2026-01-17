import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Inventory from "./components/Inventory";
import UserRegister from "./components/userRegister";
import ToDo from "./components/To-DoList";
import UserLogin from "./components/userLogin";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<ToDo />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
