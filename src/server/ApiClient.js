import axios from 'axios';
import _ from 'lodash';

class APIClient {
  constructor() {
    this.path = 'http://localhost:3000/api';
  }
  call(method, args, success, failure) {
    console.log(args);
    return new Promise((resolve, reject) => {
      axios
        .post(this.path + '/' + method, args)
        .then(response => {
          if (typeof success == 'function') success(response.data);
          resolve(response.data);
        })
        .catch(error => {
          const err = _.assign({}, error);
          const data = err && err.response ? err.response.data : null;
          const status = err && err.response ? err.response.status : null;
          if (typeof failure == 'function') failure(data, status);
          else console.error(error);
          reject(error);
        });
    });
  }
}

const API = new APIClient();
export default API;
