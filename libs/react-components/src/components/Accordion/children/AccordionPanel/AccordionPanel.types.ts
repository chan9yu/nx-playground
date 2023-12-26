import type { HTMLAttributes } from 'react';

type AccordionPanelBaseProps = HTMLAttributes<HTMLDivElement>;

export type AccordionPanelProps = AccordionPanelBaseProps & {
	itemName?: string;
};
