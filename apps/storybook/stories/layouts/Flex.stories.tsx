import { Flex } from '@nx-playground/react-components';
import '@nx-playground/react-components/style.css';
import type { Meta, StoryObj } from '@storybook/react';

import {
	alignItemsOptions,
	basisOptions,
	directionOptions,
	growOptions,
	justifyOptions,
	shrinkOptions,
	wrapOptions
} from '../../constants/flexOptions';

const meta: Meta<typeof Flex> = {
	title: 'Layouts/Flex',
	component: Flex,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		align: { options: alignItemsOptions, control: 'select' },
		basis: { options: basisOptions, control: 'select' },
		direction: { options: directionOptions, control: 'select' },
		grow: { options: growOptions, control: 'select' },
		justify: { options: justifyOptions, control: 'select' },
		shrink: { options: shrinkOptions, control: 'select' },
		wrap: { options: wrapOptions, control: 'select' }
	}
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FlexStory: Story = {
	args: {
		as: 'div',
		background: 'pink',
		boxShadow: 'xl',
		borderRadius: 'md',
		padding: '5',
		justify: 'space-between',
		style: {
			width: '300px'
		}
	},
	render: args => (
		<Flex {...args}>
			<div>테스트</div>
			<div>입니다</div>
		</Flex>
	)
};
