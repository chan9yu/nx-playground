import { style } from '@vanilla-extract/css';

export const toastContainerStyle = style({
	position: 'fixed',
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	pointerEvents: 'none',
	padding: '0.5rem',
	left: 0,
	bottom: 0,
	zIndex: 99999
});
