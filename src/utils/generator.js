import CryptoJS from 'crypto-js';

export const getSafeKey = password => {
  return CryptoJS.MD5(password).toString();
};
