
import './App.css'
import authScreen from '../atoms/authScreen.js'
import { useRecoilValue } from 'recoil'
import { Routes ,Route,Navigate} from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import LoginCard from './components/LoginCard.jsx'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SignupCard from './components/SignupCard.jsx'
import userAtom from '../atoms/userAtom.js'
import AuthPage from './components/AuthPage.jsx'
export default function App() {
  const logStatus = useRecoilValue(authScreen);
  const navigate = useNavigate();
  const user=useRecoilValue(userAtom)

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
         
         <Route path='/' element={user?<HomePage/>:<Navigate to="/auth"/>}/>
        <Route path='/auth' element={!user?<AuthPage/>:<Navigate to="/"/>}/>
      <Route path="/signup" element={<SignupCard />} />
    </Routes>
  );
}