'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import authScreen from '../../atoms/authScreen.js'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import authScreenAtom from '../../atoms/authScreenAtom.js'

export default function LoginCard() {
  const setAuthScreen=useSetRecoilState(authScreenAtom)

  let username,password;
  const [logStatus,setLogStatus]=useRecoilState(authScreen)
  const handleUsernameChange=(e)=>{
    username=e.target.value;
    
  }
  const handlePasswordChange=(e)=>{
    password=e.target.value;
    console.log(logStatus)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setLogStatus('LoggedIn')
    console.log(logStatus)
   
    
  }
 
 
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>username</FormLabel>
              <Input type="email" onChange={handleUsernameChange} value={username}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={handlePasswordChange}value={password} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}>
                Sign in
              </Button>

            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Don't have an account? <Link color={'blue.400'}
                onClick={()=>setAuthScreen("signup")}>
                  Signup</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}