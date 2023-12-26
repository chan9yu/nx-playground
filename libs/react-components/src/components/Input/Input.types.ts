import { vars } from '@nx-playground/theme';
import type { UseInputProps } from '../../hooks';

type Size = 'lg' | 'md' | 'sm' | 'xs';
type Color = keyof typeof vars.colors.$scale;
type Variant = 'outline' | 'filled';

export type InputProps = UseInputProps & {
	color?: Color;
	errorBorderColor?: string;
	focusBorderColor?: string;
	size?: Size;
	variant?: Variant;
};
