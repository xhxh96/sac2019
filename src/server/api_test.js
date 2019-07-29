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
    handler: () => {
      console.log('hello world');
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
