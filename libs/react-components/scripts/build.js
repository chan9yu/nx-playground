import run from '@nx-playground/esbuild-config';
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';

import pkg from '../package.json' assert { type: 'json' };

/** @type {import('esbuild').BuildOptions} */
const config = {
	plugins: [vanillaExtractPlugin()]
};

run({ pkg, config });
