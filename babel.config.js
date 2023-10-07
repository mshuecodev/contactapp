module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          navigations: './src/navigations',
          screens: './src/screens',
          components: './src/components',
          hooks: './src/hooks',
          img: './src/img',
          themes: './src/themes',
          services: './src/services',
          context: './src/context',
        },
      },
    ],
  ],
};
