import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useAppDispatch} from './storeHooks';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {authentication} from '../../firebase/firebase-config.js';
import {addUser} from '../features/user/userSlice';

export const useSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const signInUser = (user: any) => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(re => {
        console.log('Success', re);
        setIsSignedIn(true);
        navigation.navigate('BottomTabNavigator');
        dispatch(addUser(user));
        console.log('user: ', user);
      })
      .catch(re => {
        console.log('Error: ', re);
      });
  };

  const signOutUser = () => {
    signOut(authentication)
      .then(re => {
        console.log('Success', re);
        setIsSignedIn(false);
      })
      .catch(re => {
        console.log('Error: ', re);
      });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isSignedIn,
    setIsSignedIn,
    navigation,
    dispatch,
    signInUser,
    signOutUser,
  };
};
