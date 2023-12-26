import { vars } from '@nx-playground/theme';
import { clsx } from 'clsx';
import { CSSProperties, createElement, forwardRef } from 'react';

import { BaseStyle, StyleSprinkles } from '../../core/style.css';
import { extractSprinkleProps } from '../../utils/properties';
import type { GridComponent, GridProps } from './Grid.types';

const Grid: GridComponent = forwardRef<HTMLElement, GridProps>((props, ref) => {
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
		templateAreas,
		...rest
	} = props;

	const childSprinkleProps = extractSprinkleProps(props, Array.from(StyleSprinkles.properties));
	const className = clsx([BaseStyle, StyleSprinkles(childSprinkleProps), rest.className]);

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

Grid.displayName = 'Grid';

export default Grid;
