
import './App.css'

import { useRecoilValue } from 'recoil'
import { Routes ,Route,Navigate} from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import LoginCard from './components/LoginCard.jsx'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SignupCard from './components/SignupCard.jsx'
/* import userAtom from '../atoms/userAtom.js' */
import AuthPage from './components/AuthPage.jsx'
import useCheckAuth from '../hooks/useCheckAuth.js'

import { authAtom } from '../atoms/authScreen.js'
export default function App() {

  const authState = useRecoilValue(authAtom);
  useEffect(() => {
    useCheckAuth();
  }, []);

  return (
    <Routes>
         
         <Route path='/' element={ authState.isAuthenticated ? <HomePage/>:<AuthPage/>}/>
        <Route path='/auth' element={authState.isAuthenticated ? <HomePage/>:<AuthPage/>}/>
      <Route path="/signup" element={<SignupCard />} />
      <Route path="/login" element={<LoginCard />} />
    </Routes>
  );
}

/*   const logStatus = useRecoilValue(authScreen);
  const navigate = useNavigate();
  const user=useRecoilValue(userAtom) */

//!!!!!logStatus changes in loginCRD BUT OUR APP JSX doesnt re render it,hence need useeffect
/*    useEffect(() => {
    if (logStatus === null || !user ) {
      navigate('/auth', { replace: true });
    }else{
      navigate('/', { replace: true });

    }
  }, [logStatus, navigate]);  */