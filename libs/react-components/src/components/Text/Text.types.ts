import { classes } from '@nx-playground/theme';
import type { CSSProperties, ForwardRefExoticComponent } from 'react';

import type { AsElementProps, StyleProps } from '../../core/types';

export type TextComponent = ForwardRefExoticComponent<TextProps>;

export type TextProps = AsElementProps &
	StyleProps & {
		fontSize: keyof typeof classes.typography.text;
		align?: CSSProperties['textAlign'];
		casing?: CSSProperties['textTransform'];
		decoration?: CSSProperties['textDecoration'];
	};
