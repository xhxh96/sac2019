import _ from 'lodash';
import { AsyncStorage } from 'react-native';

export const addToAsyncStorage = async user => AsyncStorage.setItem(user.email, JSON.stringify(user));

export const removeFromAsyncStorage = user => AsyncStorage.removeItem(user);

export const clearAsyncStorage = () => AsyncStorage.clear();

export const isSignedIn = user => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(user)
      .then(res => {
        if (res != null) resolve(true);
        else resolve(false);
      })
      .catch(err => reject(err));
  });
};

export const printAsyncStorage = async () => {
  const keys = await AsyncStorage.getAllKeys();
  const items = await AsyncStorage.multiGet(keys);
  console.log(items);
};
