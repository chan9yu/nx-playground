import type { HTMLAttributes } from 'react';

type AccordionPanelExtendsProps = HTMLAttributes<HTMLDivElement>;

export type AccordionPanelProps = AccordionPanelExtendsProps & {
	itemName?: string;
};
