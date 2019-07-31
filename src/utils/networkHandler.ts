import API from '../ApiClient';

export const loginWithEmailAndPassword = (email: string, password: string) =>
  API.call(
    'loginWithEmailAndPassword',
    { email, password },
    token => {
      if (token === 'got a token') console.log('authenticated');
    },
    error => console.log(error)
  );
