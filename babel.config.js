module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@SharedComponents': './src/SharedComponents',
          '@Components': './src/Components',
          '@Screens': './src/Screens',
          '@Utiles': './src/Utiles',
          '@assets': './src/assets',
          '@Store': './src/Store',
          '@Providers': './src/Providers',
          '@Navigators': './src/Navigators',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
