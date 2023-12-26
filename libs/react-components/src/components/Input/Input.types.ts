import type { UseInputProps } from '@nx-playground/react-hooks';
import { vars } from '@nx-playground/theme';

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
