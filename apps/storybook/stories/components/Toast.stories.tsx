import { Button, ToastProvider, useToast } from '@nx-playground/react-components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ToastProvider> = {
	title: 'Components/Toast',
	parameters: {
		layout: 'centered'
	}
} satisfies Meta<typeof ToastProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

const Example = () => {
	const { toast } = useToast();
	const handleClick = () => {
		toast({ payload: { message: 'toast!' } });
	};

	return <Button onClick={handleClick}>Toast Button</Button>;
};

export const ToastStory: Story = {
	render: _ => (
		<ToastProvider>
			<Example />
		</ToastProvider>
	)
};
