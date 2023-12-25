import { vars } from '@nx-playground/theme';
import { clsx } from 'clsx';
import { CSSProperties, Ref, createElement, forwardRef } from 'react';

import { BaseStyle, StyleSprinkles } from '../../core/style.css';
import { extractSprinkleProps } from '../../utils/properties';
import type { BoxProps } from './Box.types';

const Box = forwardRef((props: BoxProps, ref: Ref<HTMLElement>) => {
	const { as = 'div', background, color, children } = props;

	const childSprinkleProps = extractSprinkleProps(props, Array.from(StyleSprinkles.properties));
	const className = clsx([BaseStyle, StyleSprinkles(childSprinkleProps), props.className]);

	const style: CSSProperties = {
		color: color && vars.colors.$scale?.[color]?.[700],
		background: background && vars.colors.$scale?.[background]?.[100],
		...props.style
	};

	const elementProps = {
		...props,
		ref,
		className,
		style
	};

	return createElement(as, elementProps, children);
});

Box.displayName = 'Box';

export default Box;
