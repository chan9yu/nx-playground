import { vars } from '@nx-playground/theme';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Size = 'xs' | 'sm' | 'md' | 'lg';
type Variant = 'solid' | 'outline' | 'ghost';

type ButtonExtendsProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = ButtonExtendsProps & {
	color?: keyof typeof vars.colors.$scale;
	isDisabled?: boolean;
	isLoading?: boolean;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	size?: Size;
	variant?: Variant;
};
