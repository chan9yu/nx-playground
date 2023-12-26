import { HTMLAttributes, ReactNode } from 'react';

export type AccordionExtendsProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export type AccordionProps = AccordionExtendsProps & {
	children: ReactNode | ReactNode[];
	defaultActiveItems?: string[];
};
