import { vars } from '@nx-playground/theme';
import type { ReactNode } from 'react';

type Size = 'lg' | 'md' | 'sm' | 'xs';
type Color = keyof typeof vars.colors.$scale;

export type InputLeftAddonProps = {
	children: ReactNode;
	color?: Color;
	size?: Size;
};
