import type { CSSProperties, ForwardRefExoticComponent } from 'react';
import { BoxProps } from '../Box';

export type GridItemComponent = ForwardRefExoticComponent<GridItemProps>;

export type GridItemProps = BoxProps & {
	area?: CSSProperties['gridArea'];
	colEnd?: CSSProperties['gridColumnEnd'];
	colSpan?: CSSProperties['gridColumn'];
	colStart?: CSSProperties['gridColumnStart'];
	rowEnd?: CSSProperties['gridRowEnd'];
	rowSpan?: CSSProperties['gridRow'];
	rowStart?: CSSProperties['gridRowStart'];
};
