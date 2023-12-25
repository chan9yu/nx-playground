import type { CSSProperties, ForwardRefExoticComponent } from 'react';
import { BoxProps } from '../Box';

export type GridComponent = ForwardRefExoticComponent<GridProps>;

export type GridProps = BoxProps & {
	autoColumns?: CSSProperties['gridAutoColumns'];
	autoFlow?: CSSProperties['gridAutoFlow'];
	autoRows?: CSSProperties['gridAutoRows'];
	column?: CSSProperties['gridColumn'];
	columnGap?: CSSProperties['columnGap'];
	gap?: CSSProperties['gap'];
	row?: CSSProperties['gridRow'];
	rowGap?: CSSProperties['rowGap'];
	templateAreas?: CSSProperties['gridTemplateAreas'];
	templateColumns?: CSSProperties['gridTemplateColumns'];
	templateRows?: CSSProperties['gridTemplateRows'];
};
