import { Heading } from '@nx-playground/react-components';
import { classes, vars } from '@nx-playground/theme';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Heading> = {
	title: 'Components/Heading',
	component: Heading,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		as: {
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
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
			options: Object.keys(classes.typography.heading),
			control: 'select'
		}
	}
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeadingStory: Story = {
	args: {
		as: 'h1',
		children: 'Hello World',
		color: 'gray',
		fontSize: '4xl'
	}
};
