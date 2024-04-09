module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-typescript',
    ],
    plugins: [
      'module:react-native-dotenv',
      // Required for expo-router
      'expo-router/babel',
    ],
  };
};
