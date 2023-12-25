import { Box } from '@nx-playground/react-components';
import '@nx-playground/react-components/style.css';
import { vars } from '@nx-playground/theme';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Box> = {
	title: 'Layouts/Box',
	component: Box,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		background: {
			options: Object.keys(vars.colors.$scale),
			control: 'select'
		},
		borderRadius: {
			options: Object.keys(vars.box.radius),
			control: 'select'
		},
		boxShadow: {
			options: Object.keys(vars.box.shadows),
			control: 'select'
		},
		padding: {
			options: Object.keys(vars.box.spacing),
			control: 'select'
		}
	}
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BoxStory: Story = {
	args: {
		as: 'div',
		background: 'pink',
		borderRadius: 'md',
		boxShadow: 'xl',
		padding: '5'
	}
};
