import { vars } from '@nx-playground/theme';
import { clsx } from 'clsx';
import { CSSProperties, createElement, forwardRef } from 'react';

import { BaseStyle, StyleSprinkles } from '../../../../core/style.css';
import { extractSprinkleProps } from '../../../../utils/properties';
import type { GridItemComponent, GridItemProps } from './GridItem.types';

const GridItem: GridItemComponent = forwardRef<HTMLElement, GridItemProps>((props, ref) => {
	const { as = 'div', color, background, children, area, colEnd, colStart, colSpan, rowEnd, rowStart, rowSpan } = props;

	const childSprinkleProps = extractSprinkleProps(props, Array.from(StyleSprinkles.properties));
	const className = clsx([BaseStyle, StyleSprinkles(childSprinkleProps), props.className]);

	const style: CSSProperties = {
		gridArea: area,
		gridColumnEnd: colEnd,
		gridColumnStart: colStart,
		gridColumn: colSpan,
		gridRowEnd: rowEnd,
		gridRowStart: rowStart,
		gridRow: rowSpan,
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

GridItem.displayName = 'GridItem';

export default GridItem;
