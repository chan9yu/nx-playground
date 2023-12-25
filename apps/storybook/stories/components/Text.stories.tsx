import { Text } from '@nx-playground/react-components';
import { classes, vars } from '@nx-playground/theme';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Text> = {
	title: 'Components/Text',
	component: Text,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		as: {
			options: ['p', 'span', 'div', 'b', 'i', 'u', 'strong', 'em'],
			control: 'select'
		},
		background: {
			options: Object.keys(vars.colors.$scale),
			control: 'select'
		},
		color: {
			options: Object.keys(vars.colors.$scale),
			control: 'select'
		},
		fontSize: {
			options: Object.keys(classes.typography.text),
			control: 'select'
		}
	}
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextStory: Story = {
	args: {
		as: 'p',
		children: 'Hello World',
		background: 'blue',
		color: 'gray',
		fontSize: 'xl'
	}
};
