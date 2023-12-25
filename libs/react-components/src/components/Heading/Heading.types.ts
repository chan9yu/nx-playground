import { classes } from '@nx-playground/theme';
import type { AsElementProps, StyleProps } from '../../core/types';

export type HeadingProps = StyleProps &
	AsElementProps & {
		fontSize: keyof typeof classes.typography.heading;
	};
