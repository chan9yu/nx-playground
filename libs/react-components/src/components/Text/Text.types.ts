import { classes } from '@nx-playground/theme';
import type { CSSProperties, ForwardRefExoticComponent, RefAttributes } from 'react';

import type { AsElementProps, StyleProps } from '../../core/types';

export type TextComponent = ForwardRefExoticComponent<Omit<TextProps, 'ref'> & RefAttributes<HTMLElement>>;

type TextExtendsProps = AsElementProps & StyleProps;

export type TextProps = TextExtendsProps & {
	align?: CSSProperties['textAlign'];
	casing?: CSSProperties['textTransform'];
	decoration?: CSSProperties['textDecoration'];
	fontSize?: keyof typeof classes.typography.text;
};
