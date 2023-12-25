import { vars } from '@nx-playground/theme';
import { clsx } from 'clsx';
import { CSSProperties, createElement, forwardRef } from 'react';

import { BaseStyle, StyleSprinkles } from '../../core/style.css';
import { extractSprinkleProps } from '../../utils/properties';
import { headingStyle } from './Heading.css';
import type { HeadingProps } from './Heading.types';

const Heading = forwardRef<HTMLElement, HeadingProps>((props, ref) => {
	const { as = 'h1', fontSize, background, color = 'gray', children } = props;

	const childSprinkleProps = extractSprinkleProps(props, Array.from(StyleSprinkles.properties));
	const className = clsx([BaseStyle, StyleSprinkles(childSprinkleProps), headingStyle({ fontSize }), props.className]);

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

Heading.displayName = 'Heading';

export default Heading;
