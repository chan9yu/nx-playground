import run from '@nx-monorepo-practice/esbuild-config';
import pkg from '../package.json' assert { type: 'json' };

run({ pkg });
