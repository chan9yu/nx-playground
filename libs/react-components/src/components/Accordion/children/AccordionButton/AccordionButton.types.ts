import { ButtonHTMLAttributes } from 'react';

type AccordionButtonBaseProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type AccordionButtonProps = AccordionButtonBaseProps & {
	itemName?: string;
};
