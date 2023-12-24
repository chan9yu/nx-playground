import { vars } from '@nx-monorepo-practice/theme';
import { style } from '@vanilla-extract/css';

export const blockStyle = style({
	width: '100px',
	height: '100px',
	backgroundColor: vars.colors.$scale.blue[500]
});
