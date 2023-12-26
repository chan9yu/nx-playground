import { vars } from '@nx-playground/theme';
import { clsx } from 'clsx';
import { CSSProperties, createElement, forwardRef } from 'react';

import { BaseStyle, StyleSprinkles } from '../../core/style.css';
import { extractSprinkleProps } from '../../utils/properties';
import type { FlexComponent, FlexProps } from './Flex.types';

const Flex: FlexComponent = forwardRef<HTMLElement, FlexProps>((props, ref) => {
	const {
		as = 'div',
		color,
		background,
		boxShadow,
		borderRadius,
		align,
		basis,
		direction,
		grow,
		justify,
		shrink,
		wrap,
		gap,
		children,
		...rest
	} = props;

	const childSprinkleProps = extractSprinkleProps(props, Array.from(StyleSprinkles.properties));
	const className = clsx([BaseStyle, StyleSprinkles(childSprinkleProps), rest.className]);

	const style: CSSProperties = {
		display: 'flex',
		alignItems: align,
		justifyContent: justify,
		flexDirection: direction,
		flexWrap: wrap,
		flexGrow: grow,
		flexShrink: shrink,
		flexBasis: basis,
		gap,
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

Flex.displayName = 'Flex';

export default Flex;
