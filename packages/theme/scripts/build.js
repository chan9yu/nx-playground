import esbuild from 'esbuild';
import process from 'process';

import pkg from '../package.json' assert { type: 'json' };

const dev = process.argv.includes('--dev');
const watch = process.argv.includes('--watch');

const minify = !dev;
const external = Object.keys({
	...pkg.dependencies,
	...pkg.peerDependencies
});

/** @type {import('esbuild').BuildOptions} */
const baseConfig = {
	entryPoints: ['src/index.ts'],
	bundle: true,
	minify,
	sourcemap: true,
	target: 'es2019',
	watch,
	external
};

Promise.all([
	esbuild.build({
		...baseConfig,
		outdir: './dist/esm',
		format: 'esm'
	}),
	esbuild.build({
		...baseConfig,
		outdir: './dist/cjs',
		format: 'cjs'
	})
]).catch(() => {
	console.error('Build failed');
	process.exit(1);
});
