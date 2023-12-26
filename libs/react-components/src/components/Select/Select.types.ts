import { vars } from '@nx-playground/theme';
import type { UseSelectProps } from '@nx-playground/react-hooks';

type Color = keyof typeof vars.colors.$scale;
type Size = 'lg' | 'md' | 'sm' | 'xs';
type Variant = 'outline' | 'filled';

export type SelectProps = UseSelectProps & {
	color?: Color;
	size?: Size;
	variant?: Variant;
	errorBorderColor?: string;
	focusBorderColor?: string;
};
