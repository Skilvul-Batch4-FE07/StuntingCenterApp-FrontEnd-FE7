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
import ForumPage from '../pages/ForumPage'

const RouterComponent = () => {
  return (
    <Router> 
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<HomePages />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/forum' element= {<ForumPage/>} />

      </Routes>
    </Router>
  );
};

export default RouterComponent;
