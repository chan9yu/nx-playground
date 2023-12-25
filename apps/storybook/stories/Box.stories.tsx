import { Box as _Box } from '@nx-playground/react-components';
import '@nx-playground/react-components/style.css';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof _Box> = {
	title: 'ReactComponents/Layout/Box',
	component: _Box,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof _Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BoxStory: Story = {
	args: {
		as: 'div',
		padding: '5',
		background: 'pink',
		boxShadow: 'xl',
		borderRadius: 'md'
	}
};
