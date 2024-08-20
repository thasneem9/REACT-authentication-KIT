
import './App.css'
import authScreen from '../atoms/authScreen.js'
import { useRecoilValue } from 'recoil'
import { Routes ,Route,Navigate} from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import LoginCard from './components/LoginCard.jsx'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SignupCard from './components/SignupCard.jsx'

export default function App() {
  const logStatus = useRecoilValue(authScreen);
  const navigate = useNavigate();
//!!!!!logStatus changes in loginCRD BUT OUR APP JSX doesnt re render it,hence need useeffect
 /*  useEffect(() => {
    if (logStatus === null) {
      navigate('/auth', { replace: true });
    }else{
      navigate('/', { replace: true });

    }
  }, [logStatus, navigate]); */

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<LoginCard />} />
      <Route path="/signup" element={<SignupCard />} />
    </Routes>
  );
}