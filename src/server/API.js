import _ from 'lodash';
import SIA from './SIA';

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
    handler: async ({
      originAirportCode,
      scheduledDepartureDate,
      destinationAirportCode,
      scheduledArrivalDate
    }) => {
      let response = await SIA.getFlightStatusByRoute({
        originAirportCode,
        scheduledDepartureDate,
        destinationAirportCode,
        scheduledArrivalDate
      });
      return response;
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
