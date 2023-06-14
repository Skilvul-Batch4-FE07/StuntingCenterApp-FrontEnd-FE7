import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import Login from '../pages/LoginPage'
import Register from '../pages/RegisterPage'
import HomePages from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import ForumPage from '../pages/ForumDiskusiPage'
import ArticlePage from '../pages/ArticlePage'
import ArticleDetail from '../pages/ArticleDetail'
import DetailDiskusi from '../pages/DetailDiskusi'
import BmiPage from '../pages/BmiPage'
import HistoryBmi from '../pages/HistoryBmi'

const RouterComponent = () => {
  return (
    <Router> 
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<HomePages />} />
        <Route path='/article' element={<ArticlePage />} />
        <Route path="/article/:id" element={<ArticleDetail />} />        
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/forum' element= {<ForumPage/>} />
        <Route path='/bmi' element= {<BmiPage/>} />
        <Route path="/forum/:id" element={<DetailDiskusi />} />
        <Route path="/bmi/history" element={<HistoryBmi/>} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
