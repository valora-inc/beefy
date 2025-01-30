module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            crypto: 'react-native-quick-crypto',
            stream: 'readable-stream',
            buffer: '@craftzdog/react-native-buffer',
            '^src/(.+)$': './node_modules/@interaxyz/mobile/src/\\1',
            '^locales$': './node_modules/@interaxyz/mobile/locales',
          },
        },
      ],
      'react-native-reanimated/plugin', // NOTE: this plugin MUST be last
    ],
  }
}
