import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RecoilRoot} from 'recoil'
import {BrowserRouter} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <RecoilRoot>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </RecoilRoot>
  </BrowserRouter>
)
