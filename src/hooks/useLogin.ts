import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {authentication} from '../../firebase/firebase-config.js';
import {addEmail} from '../features/user/userSlice';
import {useAppDispatch} from './storeHooks';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigned, setIsSigned] = useState(false);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const registerUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(re => {
        console.log('Success', re);
        setIsSigned(true);
        dispatch(addEmail(email));
        navigation.navigate('BottomTabNavigator');
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
    isSigned,
    setIsSigned,
    navigation,
    registerUser,
  };
};
