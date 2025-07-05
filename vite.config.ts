import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'node:path';

export default defineConfig({
    base: '/sliencio/',
    plugins: [
        remix({
            ignoredRouteFiles: ['**/*.module.scss'],
            ssr: false,
            basename: '/sliencio',
        }),
        tsconfigPaths(),
    ],
    resolve: {
        alias: {
            '@styles': path.resolve(__dirname, './src/styles/'),
        },
    },
    css: { preprocessorOptions: { scss: { api: 'modern' } } },
});
