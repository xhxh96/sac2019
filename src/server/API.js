import { merge, find, forEach } from 'lodash';

import SIA from './SIA';
import APIError from '../server/APIError';
import { getSafeKey } from '../utils/generator';

import Users from '../../fixtures/Users';

function createHandler(key, def) {
  return async (req, res) => {
    const isGet = req.method.toUpperCase() === 'GET';
    const args = isGet ? merge({}, req.params, req.query) : req.body;
    try {
      console.log(`API request at: [${key}]`);
      let result = await def.handler(args);
      res.send(result);
    } catch (err) {
      console.log(err);
      if (err instanceof APIError) {
        const { code, message } = err;
        res.status(code).send({ message });
      }
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
      const passwordHash = getSafeKey(password);
      const user = find(Users, { email });
      // if the user email does not exist.
      if (!user) throw new APIError(401, 'Account not found');

      if (user && passwordHash === user.password) {
        console.log('[Auth] Login Successful');
        return 'success';
      } else throw new APIError(401, 'Invalid Password');
    }
  }
};

/**
 * Method to attach API handler with API listeners
 * Run once each time server instantiates
 */
export default {
  attach: (server, path, definitions) => {
    forEach(definitions, (def, key) => {
      const fullPath = `${path}/${key}`;
      server[def.method](fullPath, createHandler(key, def));
      console.log(
        'Registered API [' +
          def.method.toUpperCase() +
          '] method @ ' +
          path +
          '/' +
          key
      );
    });
    console.log('[All API Registered. Happy Coding!]');
  }
};
