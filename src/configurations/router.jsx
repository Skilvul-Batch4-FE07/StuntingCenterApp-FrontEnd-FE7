import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "../components/FormLogin";
import Register from "../components/FormRegister";
import ArticlePage from "../pages/ArticlePage";
import ArticleDetail from "../pages/ArticleDetail";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
