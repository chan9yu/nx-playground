import { style } from '@vanilla-extract/css';

export const resetStyle = style({
	margin: 0,
	padding: 0,
	border: 0,
	background: 'none'
});

export const accordionStyle = style([resetStyle]);
