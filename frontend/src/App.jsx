
import './App.css'
import authScreen from '../atoms/authScreen.js'
import { useRecoilValue } from 'recoil'
import { Routes ,Route,Navigate} from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import LoginCard from './components/LoginCard.jsx'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function App() {
  const logStatus = useRecoilValue(authScreen);
  const navigate = useNavigate();

  useEffect(() => {
    if (logStatus === null) {
      navigate('/auth', { replace: true });
    }
  }, [logStatus, navigate]);

  return (
    <Routes>
      <Route path="/" element={logStatus === 'loggedIn' ? <HomePage /> : <Navigate to="/auth" />} />
      <Route path="/auth" element={<LoginCard />} />
    </Routes>
  );
}