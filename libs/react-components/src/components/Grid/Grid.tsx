import { vars } from '@nx-playground/theme';
import { clsx } from 'clsx';
import { CSSProperties, createElement, forwardRef } from 'react';

import { BaseStyle, StyleSprinkles } from '../../core/style.css';
import { extractSprinkleProps } from '../../utils/properties';
import type { GridComponent, GridProps } from './Grid.types';
import { GridItem } from './children';

const _Grid: GridComponent = forwardRef<HTMLElement, GridProps>((props, ref) => {
	const {
		as = 'div',
		color,
		background,
		children,
		autoColumns,
		autoFlow,
		autoRows,
		columnGap,
		column,
		gap,
		row,
		rowGap,
		templateColumns,
		templateRows,
		templateAreas
	} = props;

	const childSprinkleProps = extractSprinkleProps(props, Array.from(StyleSprinkles.properties));
	const className = clsx([BaseStyle, StyleSprinkles(childSprinkleProps), props.className]);

	const style: CSSProperties = {
		display: 'grid',
		gridAutoColumns: autoColumns,
		gridAutoFlow: autoFlow,
		gridAutoRows: autoRows,
		gridColumnGap: columnGap,
		gridGap: gap,
		gridRowGap: rowGap,
		gridTemplateColumns: templateColumns,
		gridTemplateRows: templateRows,
		gridTemplateAreas: templateAreas,
		gridColumn: column,
		gridRow: row,
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

const Grid = Object.assign(_Grid, {
	Item: GridItem
});

Grid.displayName = 'Grid';

export default Grid;
