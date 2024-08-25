
import { Button } from '@chakra-ui/react'


import {FiLogOut} from "react-icons/fi";

export default function LogoutButton(){


    const handleLogout=async()=>{
        try {

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

