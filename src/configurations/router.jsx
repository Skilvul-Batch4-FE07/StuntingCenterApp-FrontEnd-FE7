import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "../components/FormLogin";
import Register from "../components/FormRegister";
import ArticlePage from "../pages/ArticlePage";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/article" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
