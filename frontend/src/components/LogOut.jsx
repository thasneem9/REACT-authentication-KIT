
import { Button } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil';
import userAtom from '../../atoms/userAtom';



import {FiLogOut} from "react-icons/fi";

export default function LogoutButton(){


    const setUser=useSetRecoilState(userAtom);
 

    const handleLogout=async()=>{
        try {
      
            localStorage.removeItem("user-instawave");  //clear localstorage 
            setUser(null)//clear the state
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

