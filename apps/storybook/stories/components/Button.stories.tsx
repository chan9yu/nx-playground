import { Button, Text, useButton, useToggleButton } from '@nx-playground/react-components';
import { vars } from '@nx-playground/theme';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		color: {
			options: Object.keys(vars.colors.$scale),
			control: 'select'
		},
		size: {
			options: ['xs', 'sm', 'md', 'lg'],
			control: 'select'
		},
		variant: {
			options: ['solid', 'outline', 'ghost'],
			control: 'select'
		}
	}
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
	args: {
		size: 'lg',
		children: 'Button',
		variant: 'outline',
		isDisabled: false,
		isLoading: false,
		leftIcon: '😀',
		onClick: () => alert('test')
	}
};

export const TextButtonStory: Story = {
	render: _ => {
		const { buttonProps } = useButton({
			elementType: 'div',
			onClick: () => alert('test')
		});

		return (
			<Text {...buttonProps} as="div" fontSize="md" color="green" style={{ userSelect: 'none', cursor: 'pointer' }}>
				텍스트 버튼입니다.
			</Text>
		);
	}
};

export const ToggleButtonStory: Story = {
	render: _ => {
		const { buttonProps, isSelected } = useToggleButton({ elementType: 'button' }, false);

		return (
			<Button {...buttonProps} variant={isSelected ? 'solid' : 'outline'} color="green">
				{isSelected ? '😀' : '😂'}
			</Button>
		);
	}
};
