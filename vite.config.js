import path from 'path'
import fs from 'fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { sassMigratorQuasar } from 'rollup-plugin-sass-migrator'
import topLevelAwait from 'vite-plugin-top-level-await'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
  },
  server: {
    host: '127.0.0.1',
    https: {
      key: fs.readFileSync('./certs/local.key'),
      cert: fs.readFileSync('./certs/local.pem'),
      ca: fs.readFileSync('./certs/localCA.pem'),
    },
    proxy: {
      '/api': 'http://127.0.0.1:8080',
      '/csrf': 'http://127.0.0.1:8080',
      '/ws': {
        target: 'http://127.0.0.1:8080',
        ws: true,
      },
    },
  },
  plugins: [
    vue({ template: { transformAssetUrls } }),
    quasar({ sassVariables: 'src/quasar-variables.sass' }),
    sassMigratorQuasar(),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: '__tla',
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // FIX: Component provided template option but runtime compilation is not supported in this build of Vue.
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
})
