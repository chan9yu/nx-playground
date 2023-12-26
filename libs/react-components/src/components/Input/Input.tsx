import { useInput } from '@nx-playground/react-hooks';
import { vars } from '@nx-playground/theme';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { clsx } from 'clsx';
import { CSSProperties, forwardRef } from 'react';

import { colorVariant, errorBorderColorVariant, focusBorderColorVariant, inputStyle } from './Input.css';
import type { InputProps } from './Input.types';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const {
		color = 'gray',
		errorBorderColor = '#E53E3E',
		focusBorderColor = '#3182CE',
		size = 'lg',
		variant = 'outline',
		...rest
	} = props;

	const className = clsx([inputStyle({ size, variant }), rest.className]);
	const style: CSSProperties = {
		...assignInlineVars({
			[colorVariant]: vars.colors.$scale[color][900],
			[errorBorderColorVariant]: errorBorderColor,
			[focusBorderColorVariant]: focusBorderColor
		}),
		...rest.style
	};

	const { inputProps } = useInput({ ...rest, className, style });

	return <input {...inputProps} ref={ref} />;
});

Input.displayName = 'Input';

export default Input;
