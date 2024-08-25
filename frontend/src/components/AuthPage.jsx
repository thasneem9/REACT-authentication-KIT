import { useRecoilState } from "recoil"
import LoginCard from "../components/LoginCard"
import SignupCard from "../components/SignupCard"
import authScreenAtom from '../../atoms/authScreenAtom.js'


const AuthPage=()=>{
    const [authScreenState]=useRecoilState(authScreenAtom)
   console.log(authScreenState)
    return(
        <>
        {authScreenState==="login"?<LoginCard/>:<SignupCard/>}

        </>

    )

}
export default AuthPage;