import { vars } from '@nx-playground/theme';
import { clsx } from 'clsx';
import { CSSProperties, createElement, forwardRef } from 'react';

import { BaseStyle, StyleSprinkles } from '../../core/style.css';
import { extractSprinkleProps } from '../../utils/properties';
import { textStyle } from './Text.css';
import type { TextComponent, TextProps } from './Text.types';

const Text: TextComponent = forwardRef<HTMLElement, TextProps>((props, ref) => {
	const { as = 'p', color = 'gray', background, children, fontSize } = props;

	const childSprinkleProps = extractSprinkleProps(props, Array.from(StyleSprinkles.properties));
	const className = clsx([BaseStyle, StyleSprinkles(childSprinkleProps), textStyle({ fontSize }), props.className]);

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

Text.displayName = 'Text';

export default Text;
