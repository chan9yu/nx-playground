import { HTMLAttributes, ReactNode } from 'react';

type AccordionItemExtendsProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export type AccordionItemProps = AccordionItemExtendsProps & {
	children: ReactNode[];
	itemName: string;
};
