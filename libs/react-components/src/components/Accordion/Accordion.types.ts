import { HTMLAttributes, ReactNode } from 'react';

export type AccordionBaseProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export type AccordionProps = AccordionBaseProps & {
	children: ReactNode | ReactNode[];
	defaultActiveItems?: string[];
};
