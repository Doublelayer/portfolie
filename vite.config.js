import { fileURLToPath, URL } from 'url'
import replace from '@rollup/plugin-replace';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    build: {
        rollupOptions: {
          plugins: [
            replace({
              __VUE_I18N_FULL_INSTALL__: 'false',
            }),
          ],
        },
      },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData:`@import "@/scss/variables.scss";`
            }
        }
    },
    plugins: [
        vue({
            template: {
                compilerOptions: {
                  isCustomElement: (tag) => {
                    return tag.startsWith('ion-')
                  }
                }
              }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },

})
