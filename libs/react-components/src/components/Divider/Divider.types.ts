import { vars } from '@nx-playground/theme';
import type { HTMLAttributes } from 'react';

export type DividerProps = HTMLAttributes<HTMLHRElement> & {
	color?: keyof typeof vars.colors.$scale;
	orientation?: 'horizontal' | 'vertical';
	size?: number;
	variant?: 'solid' | 'dashed';
};
