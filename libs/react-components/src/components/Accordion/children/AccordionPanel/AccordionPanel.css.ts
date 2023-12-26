import { createVar, style } from '@vanilla-extract/css';
import { resetStyle } from '../../Accordion.css';

export const panelHeight = createVar();

export const accordionPanelStyle = style([
	resetStyle,
	{
		width: '100%',
		height: panelHeight,
		overflow: 'hidden',
		transition: 'height 0.3s ease',
		// @ts-ignore
		"& > div[data-name='panel-inner']": {
			padding: '0.5rem 0.75rem 1.25rem'
		}
	}
]);
