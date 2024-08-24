import React from 'react'
import { authAtom } from '../atoms/authScreen.js';
import { useRecoilState } from 'recoil';

const useCheckAuth = () => {
    // Optionally, check localStorage for a token
    const token = localStorage.getItem('token');
    const [authState, setAuthState] = useRecoilState(authAtom);
    if (token) {
      // Set authenticated state based on stored token
      // You may also want to validate the token via an API
      setAuthState((prevState) => ({
        ...prevState,
        isAuthenticated: true,
        token,
      }));
    }
  };
export default useCheckAuth