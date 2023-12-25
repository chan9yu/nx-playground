import { Box, Divider } from '@nx-playground/react-components';
import '@nx-playground/react-components/style.css';
import { vars } from '@nx-playground/theme';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Divider> = {
	title: 'Layouts/Divider',
	component: Divider,
	decorators: [
		Story => (
			<Box padding="3" style={{ width: '300px', height: '300px' }}>
				<Story />
			</Box>
		)
	],
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		color: {
			options: Object.keys(vars.colors.$scale),
			control: 'select'
		},
		orientation: {
			options: ['horizontal', 'vertical'],
			control: 'select'
		},
		variant: {
			options: ['solid', 'dashed'],
			control: 'select'
		}
	}
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DividerStory: Story = {
	args: {
		color: 'gray',
		orientation: 'horizontal',
		size: 1,
		variant: 'solid'
	}
};
