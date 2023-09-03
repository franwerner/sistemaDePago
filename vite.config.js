import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
   

  //     '^/$': {  
  //       target: 'http://localhost:3000',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\//, ''),
  //     },
  //     '/a': {
  //       target: 'http://localhost:3000',
  //       changeOrigin: true,
  //       configure: (proxy, options) => {
  //       },
  //     },
  
  //   },
  // },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

});
