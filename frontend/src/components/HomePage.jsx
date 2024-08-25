import React from 'react'
import LogoutButton from './LogOut'
import { Flex,Text } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <Flex >
    <Text>
    HOME</Text>
    <LogoutButton/>
    </Flex>
    
  )
}

export default HomePage