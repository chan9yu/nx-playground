import { vars } from '@nx-playground/theme';
import type { HTMLAttributes, ReactNode } from 'react';

type Size = 'lg' | 'md' | 'sm' | 'xs';
type Color = keyof typeof vars.colors.$scale;

type InputGroupExtendsProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export type InputGroupProps = InputGroupExtendsProps & {
	children: ReactNode[];
	color?: Color;
	size?: Size;
};
