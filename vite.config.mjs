import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { defineConfig } from 'vite';
import pkg from './package.json'
import { resolve } from 'node:path'
import typescript from '@rollup/plugin-typescript';
import vue from '@vitejs/plugin-vue'

const NAME = pkg.name;
const VERSION = pkg.version;

const banner = `/*!
  * ${NAME} v${VERSION}
  * (c) ${new Date().getFullYear()} Wizarr
  * @license MIT
  */`
const srcFolder = 'src';
export default defineConfig({
    plugins: [
        {
            ...typescript({ tsconfig: resolve(srcFolder, "tsconfig.json"), }),
            apply: 'build'
        },
        cssInjectedByJsPlugin(),
        vue(),
    ],
    build: {
        outDir: resolve("dist"),
        lib: {
            entry: resolve(__dirname, srcFolder, "index.ts"),
            name: "WizarrVueModal",
            formats: [`cjs`, 'umd', 'es'],
            fileName(format) {
                return [NAME, format, 'js'].join('.')
            }
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: 'Vue',
                },
                sourcemap: true,
                banner
            }
        },

    }
})