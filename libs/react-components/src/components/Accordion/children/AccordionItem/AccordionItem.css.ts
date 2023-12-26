import { vars } from '@nx-playground/theme';
import { style } from '@vanilla-extract/css';

import { resetStyle } from '../../Accordion.css';

export const accordionItemStyle = style([
	resetStyle,
	{
		width: '100%',
		borderTop: `1px solid ${vars.colors.$scale.gray[300]}`,
		// @ts-ignore
		'&:last-of-type': {
			borderBottom: `1px solid ${vars.colors.$scale.gray[300]}`
		}
	}
]);
