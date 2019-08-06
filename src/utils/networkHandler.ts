import API from '../ApiClient';
import { addToAsyncStorage } from '../server/Auth';

export const loginWithEmailAndPassword = (email: string, password: string) =>
  API.call(
    'loginWithEmailAndPassword',
    { email, password },
    token => {
      if (token === 'success') {
        addToAsyncStorage({ email, password });
        return 'success';
      }
    },
    error => console.log('error in network')
  );

export const signUpWithEmailAndPassword = (email: string, password: string) => {
  addToAsyncStorage({ email, password });
  return `[Auth] Signup Success for ${email}`;
};
