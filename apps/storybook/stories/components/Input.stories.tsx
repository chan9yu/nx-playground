import { Input, InputGroup, InputLeftAddon } from '@nx-playground/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
	title: 'Components/Input',
	component: Input,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputStory: Story = {
	args: {
		placeholder: 'placeholder'
	}
};

export const InputGroupStory: Story = {
	render: _ => (
		<InputGroup size="lg" color="red">
			<InputLeftAddon>$</InputLeftAddon>
			<Input placeholder="placeholder" />
		</InputGroup>
	)
};

export const InputVariantFilledStory: Story = {
	args: {
		placeholder: 'placeholder',
		variant: 'filled'
	},
	render: args => <Input {...args} />
};

export const InputFocusVisibleState: Story = {
	args: {
		placeholder: 'placeholder'
	},
	parameters: {
		pseudo: { focusVisible: true }
	}
};
