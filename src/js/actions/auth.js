import {
  AUTH_SIGN_IN,
  AUTH_SIGN_UP,
} from '../constants/auth';

export const signIn = (userInfo, onSuccess, onError) => ({
  type: AUTH_SIGN_IN,
  userInfo,
  onSuccess,
  onError,
});

export const signUp = (userInfo, onSuccess, onError) => ({
  type: AUTH_SIGN_UP,
  userInfo,
  onSuccess,
  onError,
});
