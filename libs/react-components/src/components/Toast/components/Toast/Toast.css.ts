import { style } from '@vanilla-extract/css';

export const toastStyle = style({
	width: '100%',
	maxWidth: '17.5rem',
	backgroundColor: 'var(--gray-900)',
	padding: '0.5rem 0.75rem',
	color: 'var(--gray-50)',
	borderRadius: 'var(--radii-md)'
});
