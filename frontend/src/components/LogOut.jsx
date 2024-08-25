
import { Button } from '@chakra-ui/react'


import {FiLogOut} from "react-icons/fi";
import { useAuth } from '../contexts/AuthContext.jsx';

export default function LogoutButton(){
  const { setIsAuthenticated } = useAuth();

    const handleLogout=async()=>{
        try {
          setIsAuthenticated(false);
      

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

