import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import HomePages from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ForumPage from "../pages/ForumDiskusiPage";
import ArticlePage from "../pages/ArticlePage";
import ArticleDetail from "../pages/ArticleDetail";
import DetailDiskusi from "../pages/DetailDiskusi";

const RouterComponent = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePages />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/forum/:id" element={<DetailDiskusi />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
