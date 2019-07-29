import _ from 'lodash';

function createHandler(key, def) {
  return async (req, res) => {
    const isGet = req.method.toUpperCase() === 'GET';
    const args = isGet ? _.merge({}, req.params, req.query) : req.body;
    try {
      let result = await def.handler(args);
    } catch (err) {
      console.log(err);
    }
  };
}

export const AppAPI = {
  helloWorld: {
    method: 'post',
    handler: hello => {
      console.log('ni hao');
      if ((hello = 'true')) {
        console.log('hello');
        return 'api - hello';
      } else {
        console.log('not true');
        return 'api-not true';
      }
    }
  }
};

export default {
  attach: (server, path, definitions) => {
    _.forEach(definitions, (def, key) => {
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
  }
};
