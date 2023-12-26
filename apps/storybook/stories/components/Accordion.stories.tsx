import { Accordion, Heading, Text } from '@nx-playground/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Accordion> = {
	title: 'Components/Accordion',
	component: Accordion,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

const items = [
	{ name: '목록1', content: '내용입니다.' },
	{ name: '목록2', content: '내용입니다.\n내용입니다.' }
];

Accordion.Item.displayName = 'Accordion.Item';
Accordion.Button.displayName = 'Accordion.Button';
Accordion.Panel.displayName = 'Accordion.Panel';

export const AccordionStory: Story = {
	args: {
		defaultActiveItems: [],
		style: { width: '500px' }
	},
	render: args => (
		<Accordion {...args}>
			{items.map((item, index) => (
				<Accordion.Item key={item.name} itemName={item.name}>
					<Accordion.Button data-testid={`button-${index}`}>
						<Heading color="gray" fontSize="lg">
							{item.name}
						</Heading>
					</Accordion.Button>
					<Accordion.Panel data-testid={`panel-${index}`}>
						<Text color="gray" fontSize="md">
							{item.content}
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
			))}
		</Accordion>
	)
};

export const AccordionTestStory: Story = {
	args: {
		defaultActiveItems: ['목록1']
	},
	render: args => (
		<Accordion {...args} style={{ width: '500px' }}>
			{items.map((item, index) => (
				<Accordion.Item key={item.name} itemName={item.name}>
					<Accordion.Button data-testid={`button-${index}`}>
						<Heading color="gray" fontSize="lg">
							{item.name}
						</Heading>
					</Accordion.Button>
					<Accordion.Panel data-testid={`panel-${index}`}>
						<Text color="gray" fontSize="md">
							{item.content}
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
			))}
		</Accordion>
	)
};
