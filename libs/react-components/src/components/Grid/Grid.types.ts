import type { CSSProperties, ForwardRefExoticComponent, RefAttributes } from 'react';
import type { BoxProps } from '../Box';

export type GridComponent = ForwardRefExoticComponent<Omit<GridProps, 'ref'>> & RefAttributes<HTMLElement>;

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
