import { Block as _Block } from '@nx-monorepo-practice/react-components-layout';
import '@nx-monorepo-practice/react-components-layout/style.css';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof _Block> = {
	title: 'ReactComponents/Layout/Block',
	component: _Block,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof _Block>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BlockStory: Story = {
	args: {}
};
