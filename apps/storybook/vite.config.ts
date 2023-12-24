/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	assetsInclude: ['/sb-preview/runtime.js'],
	test: {
		globals: true,
		environment: 'happy-dom',
		include: ['./stories/**/*.test.ts?(x)']
	}
});
