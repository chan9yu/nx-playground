import { HTMLAttributes, ReactNode } from 'react';

type AccordionItemBaseProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export type AccordionItemProps = AccordionItemBaseProps & {
	children: ReactNode[];
	itemName: string;
};
