import '@nx-playground/react-components/style.css';
import '@nx-playground/theme/themes.css';
import type { Preview } from '@storybook/react';

import './style.css';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		rootAttributesTooltip: true,
		rootAttributes: [
			{
				root: 'body',
				attribute: 'class',
				defaultState: {
					name: 'light',
					value: 'theme-light'
				},
				states: [
					{
						name: 'dark',
						value: 'theme-dark'
					}
				]
			}
		]
	}
};

export default preview;
