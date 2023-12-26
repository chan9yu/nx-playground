import type { CSSProperties, ForwardRefExoticComponent, RefAttributes } from 'react';
import type { BoxProps } from '../Box';

export type GridItemComponent = ForwardRefExoticComponent<Omit<GridItemProps, 'ref'>> & RefAttributes<HTMLElement>;

export type GridItemProps = BoxProps & {
	area?: CSSProperties['gridArea'];
	colEnd?: CSSProperties['gridColumnEnd'];
	colSpan?: CSSProperties['gridColumn'];
	colStart?: CSSProperties['gridColumnStart'];
	rowEnd?: CSSProperties['gridRowEnd'];
	rowSpan?: CSSProperties['gridRow'];
	rowStart?: CSSProperties['gridRowStart'];
};
