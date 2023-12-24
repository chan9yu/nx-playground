import run from '@nx-playground/esbuild-config';
import pkg from '../package.json' assert { type: 'json' };

run({ pkg });
