
import { atom } from 'recoil';

export  const authAtom = atom({
  key: 'authAtom', // unique ID (with respect to other atoms/selectors)
  default: {
    isAuthenticated: false,
    user: null,
    token: null,
  }, // default value (aka initial value)
});

