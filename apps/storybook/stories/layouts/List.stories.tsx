import { List, ListItem } from '@nx-playground/react-components';
import { vars } from '@nx-playground/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { CSSProperties } from 'react';

const meta: Meta<typeof List> = {
	title: 'Layouts/List',
	component: List,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		listStyleType: {
			options: [
				'-moz-initial',
				'inherit',
				'initial',
				'none',
				'revert',
				'revert-layer',
				'unset'
			] as CSSProperties['listStyleType'][],
			control: 'select'
		},
		spacing: {
			options: Object.keys(vars.box.spacing),
			control: 'select'
		},
		variant: {
			options: ['ordered', 'unordered'],
			control: 'select'
		}
	}
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ListStory: Story = {
	args: {
		spacing: '3'
	},
	render: args => (
		<List {...args}>
			<ListItem fontSize="md">1번</ListItem>
			<ListItem fontSize="md">2번</ListItem>
			<ListItem fontSize="md">3번</ListItem>
		</List>
	)
};

export const OrderedListStory: Story = {
	args: {
		variant: 'ordered',
		spacing: '3'
	},
	render: args => (
		<List {...args}>
			<ListItem fontSize="md">1번</ListItem>
			<ListItem fontSize="md">2번</ListItem>
			<ListItem fontSize="md">3번</ListItem>
		</List>
	)
};

export const UnorderedListStory: Story = {
	args: {
		variant: 'unordered',
		spacing: '3'
	},
	render: args => (
		<List {...args}>
			<ListItem fontSize="md">1번</ListItem>
			<ListItem fontSize="md">2번</ListItem>
			<ListItem fontSize="md">3번</ListItem>
		</List>
	)
};
