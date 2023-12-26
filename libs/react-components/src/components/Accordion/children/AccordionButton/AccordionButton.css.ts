import { style } from '@vanilla-extract/css';
import { resetStyle } from '../../Accordion.css';

export const accordionButtonStyle = style([
	resetStyle,
	{
		width: '100%',
		padding: '0.5rem 0.75rem',
		gap: '0.625rem',
		display: 'flex',
		alignItems: 'center'
	}
]);
