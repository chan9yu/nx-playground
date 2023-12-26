import { Select } from '@nx-playground/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
	title: 'Components/Select',
	component: Select,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SelectStory: Story = {
	render: _ => (
		<Select>
			<option value="1">1</option>
			<option value="2">2</option>
		</Select>
	)
};
