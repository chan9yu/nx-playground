import type { CSSProperties, ForwardRefExoticComponent, RefAttributes } from 'react';
import type { BoxProps } from '../Box';

export type FlexComponent = ForwardRefExoticComponent<Omit<FlexProps, 'ref'> & RefAttributes<HTMLElement>>;

export type FlexProps = BoxProps & {
	align?: CSSProperties['alignItems'];
	basis?: CSSProperties['flexBasis'];
	direction?: CSSProperties['flexDirection'];
	grow?: CSSProperties['flexGrow'];
	justify?: CSSProperties['justifyContent'];
	shrink?: CSSProperties['flexShrink'];
	wrap?: CSSProperties['flexWrap'];
	gap?: CSSProperties['gap'];
};
