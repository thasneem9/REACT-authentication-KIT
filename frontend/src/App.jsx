
import './App.css'
import { Routes ,Route} from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import LoginCard from './components/LoginCard.jsx'
import SignupCard from './components/SignupCard.jsx'
import AuthPage from './components/AuthPage.jsx'


export default function App() {


  return (
    <Routes>
         
         <Route path='/' element={  <HomePage/>}/>
        <Route path='/auth' element={<AuthPage/>}/>
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