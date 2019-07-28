import _ from 'lodash';

class API {
  path = 'https://apigw.singaporeair.com/api/v3/flightstatus';

  call(method, args, success, failure) {
    return new Promise((resolve, reject) => {
      fetch(this.path + '/' + method, args)
        .then(response => {
          console.log(response);
          resolve(response);
        })
        .catch(error => {
          console.error(error);
          reject(error);
        });
    });
  }
}

const API = new APIClient();
export default API;
