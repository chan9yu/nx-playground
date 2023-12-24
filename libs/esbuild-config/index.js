const esbuild = require('esbuild');
const process = require('process');

/**
 * @param {Object} options
 * @param {string[]} options.entryPoints
 * @param {string} options.pkg
 * @param {import('esbuild').BuildOptions} options.config
 */
function run({ entryPoints = ['src/index.ts'], pkg, config = {} }) {
	const dev = process.argv.includes('--dev');
	const watch = process.argv.includes('--watch');

	const minify = !dev;
	const external = Object.keys({
		...pkg.dependencies,
		...pkg.peerDependencies
	});

	/** @type {import('esbuild').BuildOptions} */
	const baseConfig = {
		entryPoints,
		bundle: true,
		minify,
		sourcemap: true,
		target: 'es2019',
		watch,
		external,
		...config
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
}

module.exports = run;
