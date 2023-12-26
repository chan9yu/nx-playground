import { vars } from '@nx-playground/theme';
import { clsx } from 'clsx';
import { CSSProperties, forwardRef } from 'react';

import { inputLeftAddonStyle } from './InputLeftAddon.css';
import type { InputLeftAddonProps } from './InputLeftAddon.types';

const InputLeftAddon = forwardRef<HTMLDivElement, InputLeftAddonProps>((props, ref) => {
	const { children, color = 'gray', size = 'md' } = props;

	const className = clsx([inputLeftAddonStyle({ size })]);
	const style: CSSProperties = {
		color: vars.colors.$scale[color][900]
	};

	return (
		<div ref={ref} className={className} style={style}>
			{children}
		</div>
	);
});

InputLeftAddon.displayName = 'InputLeftAddon';

export default InputLeftAddon;
