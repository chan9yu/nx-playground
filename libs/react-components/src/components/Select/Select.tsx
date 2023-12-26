import { vars } from '@nx-playground/theme';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { clsx } from 'clsx';
import { CSSProperties, forwardRef } from 'react';

import { useSelect } from '../../hooks';
import { colorVariant, errorBorderColorVariant, focusBorderColorVariant, selectStyle } from './Select.css';
import type { SelectProps } from './Select.types';

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
	const {
		color = 'gray',
		errorBorderColor = '#E53E3E',
		focusBorderColor = '#3182CE',
		size = 'md',
		variant = 'outline',
		...rest
	} = props;

	const className = clsx([selectStyle({ size, variant }), rest.className]);
	const style: CSSProperties = {
		...assignInlineVars({
			[colorVariant]: vars.colors.$scale[color][900],
			[errorBorderColorVariant]: errorBorderColor,
			[focusBorderColorVariant]: focusBorderColor
		}),
		...rest.style
	};

	const { selectProps } = useSelect({ ...rest, className, style });

	return <select {...selectProps} ref={ref} />;
});

Select.displayName = 'Select';

export default Select;
