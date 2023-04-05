import {useAppSelector} from './storeHooks';
import {useSignup} from './useSignup';
const createMobilePhoneNumber = require('random-mobile-numbers');

export const useMyPage = () => {
  const {user, email} = useAppSelector(state => state.user);
  const {signOutUser} = useSignup();
  return {
    user,
    email,
    signOutUser,
    createMobilePhoneNumber,
  };
};
