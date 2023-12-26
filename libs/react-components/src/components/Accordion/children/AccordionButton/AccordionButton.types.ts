import type { ButtonHTMLAttributes } from 'react';

type AccordionButtonExtendsProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type AccordionButtonProps = AccordionButtonExtendsProps & {
	itemName?: string;
};
