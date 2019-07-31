module.exports = function (api) {
  api.cache(true);

  const presets = [
    'babel-preset-expo',
    "module:metro-react-native-babel-preset"
  ];

  const plugins = [
    "@babel/plugin-transform-flow-strip-types",
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]

  return {
    presets,
    plugins,
    'sourceMaps': true
  }
};
