import { vars } from '@nx-playground/theme';
import { CSSProperties, forwardRef } from 'react';

import type { DividerProps } from './Divider.types';

const Divider = forwardRef<HTMLHRElement, DividerProps>((props, ref) => {
	const { color = 'gray', orientation = 'horizontal', size = 1, variant = 'solid', ...rest } = props;

	const borderStyle: CSSProperties =
		orientation === 'horizontal' ? { width: '100%', height: `${size}px` } : { width: `${size}px`, height: '100%' };

	const style: CSSProperties = {
		borderStyle: variant,
		borderColor: color && vars.colors.$scale?.[color]?.[200],
		...borderStyle,
		...props.style
	};

	return <hr {...rest} ref={ref} style={style} />;
});

Divider.displayName = 'Divider';

export default Divider;
