/**
 * Generic API client to query API calls.
 */
import axios from 'axios';
import _ from 'lodash';
import APIError from './server/APIError';

class APIClient {
  constructor() {
    this.path = 'http://localhost:3000/api';
  }
  call(method, args, success, failure) {
    return new Promise((resolve, reject) => {
      axios
        .post(this.path + '/' + method, args)
        .then(response => {
          console.log(new APIError(404, 'hello') instanceof APIError);
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
