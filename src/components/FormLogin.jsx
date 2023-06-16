import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/authSlice';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import imgSide from '../assets/img/icon_bg.png';
import imgBg from '../assets/bg-logreg.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { PersonCircle, Eye, EyeSlash, LockFill } from 'react-bootstrap-icons';
import { getUserFromApi } from '../utils/api';
import { setCurrentUser, getCurrentUser} from '../utils/localStorage';
const MySwal = withReactContent(Swal);

const LoginForm = () => {
  const error = useSelector((state) => state.auth.error);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const currentUserId = getCurrentUser();
    if (currentUserId) {
      // Fetch data user dari mockAPI menggunakan currentUserId
      getUserFromApi(currentUserId)
        .then((user) => {
          if (user) {
            dispatch(login(user));
          }
        })
        .catch((error) => {
          console.log('Terjadi kesalahan:', error);
        });
    }
  }, [dispatch]);

  const handleLoginSuccess = (user) => {
  setEmail('');
  setPassword('');
  MySwal.fire({
    icon: 'success',
    title: 'Login Successful',
    showConfirmButton: false,
    timer: 1500
  }).then(() => {
    // Simpan data user sebagai string JSON di local storage
    const userData = JSON.stringify(user);
    localStorage.setItem('loggedInUser', userData);
    setCurrentUser(user.id);
    dispatch(login(user));
    navigate('/');
  });
};


  const handleLogin = (event) => {
    event.preventDefault();
    getUserFromApi(email, password)
      .then((user) => {
        if (user) {
          console.log('Login berhasil:', user);
          handleLoginSuccess(user);
        } else {
          console.log('Login gagal: email atau password salah');
          MySwal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Email or password is incorrect',
          });
        }
      })
      .catch((error) => {
        console.log('Terjadi kesalahan:', error);
      });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex flex-col-reverse md:flex-row items-center justify-around min-h-screen font-sans'>
      <div className='w-full max-w-md flex overflow-hidden'>
        <div className='w-full p-8 mx-auto md:mx-0'>
          <div className='text-center mb-8'>
          </div>
          <div className='flex pb-8'>
            <NavLink
              to="/login"
              className="text-3xl font-bold flex-1 pl-10 underline"
              style={{ color: "rgba(17, 118, 143, 255)" }}
            >
              Masuk
            </NavLink>
            <NavLink
              to="/register"
              className="text-3xl font-bold flex-1 opacity-50"
              style={{ color: "rgba(17, 118, 143, 255)" }}
            >
              Daftar
            </NavLink>
          </div>
          <form onSubmit={handleLogin} className='px-0'>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className='mb-6 pb-4'>
              <div
                className='flex items-center bg-white rounded-full p-2 pl-4 shadow-lg'
                style={{ boxShadow: '-4px 4px 6px 0px rgba(200,235,229,255)' }}
              >
                <div className='mr-3 text-gray-400'>
                  <PersonCircle color="rgba(17, 118, 143, 255)" />
                </div>
                <input
                  type='email'
                  id='email'
                  className='w-full bg-transparent focus:outline-none'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Masukkan email kamu'
                  required
                />
              </div>
            </div>
            <div className='mb-6 pb-4'>
              <div
                className='flex items-center bg-white rounded-full p-2 pl-4 shadow-lg'
                style={{ boxShadow: '-4px 4px 6px 0px rgba(200,235,229,255)' }}
              >
                <div className='mr-3 text-gray-400'>
                  <LockFill color="rgba(17, 118, 143, 255)" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  className='w-full bg-transparent focus:outline-none'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Masukkan password'
                  required
                />
                <div
                  className='cursor-pointer'
                  onClick={toggleShowPassword}
                  style={{ padding: '4px' }}
                >
                  {showPassword ? <EyeSlash color="rgba(17, 118, 143, 255)" /> : <Eye color="rgba(17, 118, 143, 255)" />}
                </div>
              </div>
            </div>
            <div className='flex pb-4'>
              <h2 className='text-1xl font-bold text-gray-800 flex-1' style={{ color: '#377389' }}>
                Lupa password?
              </h2>
              <button
                type='submit'
                className='w-full text-white font-bold py-1 px-3 rounded-full flex-1'
                style={{ backgroundColor: 'rgba(17, 118, 143, 255)' }}
              >
                Masuk
              </button>
            </div>
            <p className="text-center text-gray-800 mb-4">
              Belum punya akun?{" "}
              <NavLink
                to="/register"
                className="text-1xl font-bold text-gray-800"
                style={{ color: '#377389' }}
              >
                Daftar
              </NavLink>
              {" "}atau <br></br>
              <NavLink
                to="/"
                className="text-1xl font-bold text-gray-800"
                style={{ color: '#377389' }}
              >
                Kembali ke halaman utama
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      <div className='w-full max-w-md flex bg-none overflow-hidden'>
        <div className='w-full mx-auto md:mr-0'>
          <h1
            className="p-2 text-3xl font-bold mb-8"
            style={{ color: 'rgba(17, 118, 143, 255)' }}
          >
            Bergabunglah dengan Stunting Center dan temukan solusi bersama
          </h1>
          <img src={imgSide} alt='Side Image' className='w-full' />
        </div>
      </div>
      <div
        className='fixed inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${imgBg})`, zIndex: '-1' }}
      ></div>
    </div>
  );
};

export default LoginForm;