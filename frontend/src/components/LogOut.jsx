
import { Button } from '@chakra-ui/react'
import { useRecoilState } from 'recoil';
import { authAtom } from '../../atoms/authScreen.js';

import {FiLogOut} from "react-icons/fi";

export default function LogoutButton(){


   /*  const setUser=useSetRecoilState(userAtom); */
    const [authState, setAuthState] = useRecoilState(authAtom);
 

    const handleLogout=async()=>{
        try {
      
           /*  localStorage.removeItem("user-instawave"); */  //clear localstorage 
         /*    setUser(null) *///clear the state
         setAuthState({
            isAuthenticated: false,
            user: null,
            token: null,
          });
          // Optionally remove the token from localStorage
          localStorage.removeItem('token');

        } catch(error) {
            console.log(error)
        }
    }
  return (
    
    <Button
     position={"fixed"} 
    top={"30px"}
    right={"30px"}
    size={'sm'} 
        onClick={handleLogout}
    ><FiLogOut size={20}/>
    
    </Button>
  )
}

