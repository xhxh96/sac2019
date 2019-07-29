import axios from 'axios';
import _ from 'lodash';

class APIClient {
  constructor() {
    this.path = 'http://localhost:3000/api';
  }
  call(method, args, success, failure) {
    axios
      .post(this.path + '/' + method, args)
      .then(response => {
        console.log('this is response');
        console.log(response);
        if (typeof success == 'function') success(response.data);
      })
      .catch(error => {
        const err = _.assign({}, error);
        const data = err && err.response ? err.response.data : null;
        const status = err && err.response ? err.response.status : null;
        if (typeof failure == 'function') failure(data, status);
        else console.error(error);
      });
  }
}

const API = new APIClient();
export default API;
