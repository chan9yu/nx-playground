import { HTMLAttributes } from 'react';
import { vars } from '@nx-playground/theme';

import { StyleSprinkles } from './style.css';

export type AsProps = {
	/** IntrinsicElements 타입에서 svg 관련타입 제거 */
	as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>;
};

export type ElementProps = Omit<HTMLAttributes<HTMLElement>, 'as'>;

export type AsElementProps = AsProps & ElementProps;

export type ColorProps = {
	color?: keyof typeof vars.colors.$scale;
	background?: keyof typeof vars.colors.$scale;
};

export type StyleProps = Parameters<typeof StyleSprinkles>[0] & ColorProps;
