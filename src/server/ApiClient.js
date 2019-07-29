import axios from 'axios';
import _ from 'lodash';

class APIClient {
  path = '/api';

  call(method, args, success, failure) {
    return new Promise((resolve, reject) => {
      axios
        .post(this.path + '/' + method, args)
        .then(response => {
          console.log(response);
          if (typeof success == 'function') success(response.data);
          resolve(response.data);
        })
        .catch(error => {
          const err = _.assign({}, error);
          console.error(error);
          reject(err);
        });
    });
  }
}

const API = new APIClient();
export default API;
