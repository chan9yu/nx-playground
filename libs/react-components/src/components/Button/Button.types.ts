import { vars } from '@nx-playground/theme';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	color?: keyof typeof vars.colors.$scale;
	isDisabled?: boolean;
	isLoading?: boolean;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	size?: 'xs' | 'sm' | 'md' | 'lg';
	variant?: 'solid' | 'outline' | 'ghost';
};
