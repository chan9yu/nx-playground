import { vars } from '@nx-playground/theme';
import { clsx } from 'clsx';
import { CSSProperties, createElement, forwardRef } from 'react';

import { BaseStyle, StyleSprinkles } from '../../core/style.css';
import { extractSprinkleProps } from '../../utils/properties';
import type { BoxProps } from './Box.types';

const Box = forwardRef<HTMLElement, BoxProps>((props, ref) => {
	const {
		as = 'div', //
		background,
		borderRadius,
		boxShadow,
		color,
		children,
		...rest
	} = props;

	const childSprinkleProps = extractSprinkleProps(props, Array.from(StyleSprinkles.properties));
	const className = clsx([BaseStyle, StyleSprinkles(childSprinkleProps), rest.className]);

	const style: CSSProperties = {
		color: color && vars.colors.$scale?.[color]?.[700],
		background: background && vars.colors.$scale?.[background]?.[100],
		...rest.style
	};

	const elementProps = {
		...rest,
		ref,
		className,
		style
	};

	return createElement(as, elementProps, children);
});

Box.displayName = 'Box';

export default Box;
