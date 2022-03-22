const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          target: [
            {
              target: 'portable', // 'zip', 'nsis', 'portable'
              arch: ['x64'], // 'x64', 'ia32'
            },
          ],
        },
      },
    },
  },
})
