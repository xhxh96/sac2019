import API from '../ApiClient';
import { addToAsyncStorage } from '../server/Auth';

export const loginWithEmailAndPassword = async (email: string, password: string, success, failure) => {
  API.call('loginWithEmailAndPassword', { email, password }, (response) => success(response), (error) => failure(error))
}

export const signUpWithEmailAndPassword = (email: string, password: string) => {
  addToAsyncStorage({ email, password });
  return `[Auth] Signup Success for ${email}`;
};
