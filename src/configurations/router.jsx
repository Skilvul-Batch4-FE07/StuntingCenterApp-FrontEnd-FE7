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
import ForumDiskusiPage from "../pages/ForumDiskusiPage";
import DetailDiskusi from "../pages/DetailDiskusi";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/forum" element={<ForumDiskusiPage />} />
        <Route path="/forum/:id" element={<DetailDiskusi />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
