import { vars } from '@nx-playground/theme';
import type { CSSProperties } from '@vanilla-extract/css';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

import type { BoxProps } from '../Box';

export type ListComponent = ForwardRefExoticComponent<Omit<ListProps, 'ref'> & RefAttributes<HTMLOListElement>>;

export type ListProps = BoxProps & {
	listStyleType?: CSSProperties['listStyleType'];
	spacing?: keyof typeof vars.box.spacing;
	variant?: 'ordered' | 'unordered';
};
