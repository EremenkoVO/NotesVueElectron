const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        files: [
          "build//*",
          'dist/**/*',
          'package.json',
          "node_modules//*",
        ],
        asar: true,
        appId: 'com.electron.markdown-notes',
        win: {
          icon: 'public/icons/favicon.ico',
        },
        linux: {
          icon: 'public/icons',
          executableName: 'markdown-notes',
          target: ['deb'],
        },
      },
    },
  },
});
