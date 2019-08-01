// import _ from 'lodash';

// export const addToAsyncStorage = user => AsyncStorage.setItem(user, 'true');

// export const removeFromAsyncStorage = user => AsyncStorage.removeItem(user);

// export const isSignedIn = user => {
//   return new Promise((resolve, reject) => {
//     AsyncStorage.getItem(user)
//       .then(res => {
//         if (res != null) resolve(true);
//         else resolve(false);
//       })
//       .catch(err => reject(err));
//   });
// };

// export const printLocalStorage = async () => {
//   const keys = await AsyncStorage.getAllKeys();
//   const items = await AsyncStorage.multiGet(keys);
//   console.log(items);
// };
