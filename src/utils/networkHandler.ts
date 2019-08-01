import API from '../ApiClient';

export const loginWithEmailAndPassword = (email: string, password: string) =>
  API.call(
    'loginWithEmailAndPassword',
    { email, password },
    token => {
      if (token === 'success') return 'success';
    },
    error => console.log('error in network')
  );
