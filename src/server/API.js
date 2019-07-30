import _ from 'lodash';

import SIA from './SIA';
import { User1 } from '../../fixtures/Users';

function createHandler(key, def) {
  return async (req, res) => {
    const isGet = req.method.toUpperCase() === 'GET';
    const args = isGet ? _.merge({}, req.params, req.query) : req.body;
    try {
      console.log(`API request at: [${key}]`);
      let result = await def.handler(args);
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };
}

/** List of available API */
export const AppAPI = {
  getFlightStatusByRoute: {
    method: 'post',
    handler: async args => {
      let response = await SIA.getFlightStatusByRoute(args);
      console.log(response);
      return response;
    }
  },

  getFlightStatusByNumber: {
    method: 'post',
    handler: async args => {
      let response = await SIA.getFlightStatusByNumber(args);
      console.log(response);
      return response;
    }
  },

  flightSearch: {
    method: 'post',
    handler: async args => {
      let response = SIA.flightSearch(args);
      console.log(response);
      return response;
    }
  },

  // probably the worst authentication mechanism you'll ever see in your lifetime
  loginWithEmailAndPassword: {
    method: 'post',
    handler: ({ email, password }) => {
      if (User1.email !== email) return 'account not found';

      if (User1.password !== password) return 'wrong password';
      else {
        return 'got a token';
      }
    }
  }
};

/**
 * Method to attach API handler with API listeners
 * Run once each time server instantiates
 */
export default {
  attach: (server, path, definitions) => {
    _.forEach(definitions, (def, key) => {
      const fullPath = `${path}/${key}`;
      server[def.method](fullPath, createHandler(key, def));
      console.log('Registered API [' + def.method.toUpperCase() + '] method @ ' + path + '/' + key);
    });
    console.log('[All API Registered. Happy Coding!]');
  }
};
