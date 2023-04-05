import {useState} from 'react';
import {signOut} from 'firebase/auth';
import {authentication} from '../../firebase/firebase-config.js';
import {signOutUser} from '../features/user/userSlice';
import {useAppDispatch} from './storeHooks';

export const useSignOut = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const dispatch = useAppDispatch();

  const signOutUser = () => {
    signOut(authentication)
      .then(re => {
        console.log('Success', re);
        //setIsSignedIn(false);
        dispatch(signOutUser());
      })
      .catch(re => {
        console.log('Error: ', re);
      });
  };

  return {
    signOutUser,
  };
};
