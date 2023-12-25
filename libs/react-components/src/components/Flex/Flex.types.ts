import type { CSSProperties, ForwardRefExoticComponent } from 'react';
import { BoxProps } from '../Box';

export type FlexComponent = ForwardRefExoticComponent<FlexProps>;

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
