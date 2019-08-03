import CryptoJS from 'crypto-js';

export const getSafeKey = string => {
  return CryptoJS.MD5(string).toString();
};
