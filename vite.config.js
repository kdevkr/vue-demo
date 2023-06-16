import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            // FIX: Component provided template option but runtime compilation is not supported in this build of Vue.
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
})
