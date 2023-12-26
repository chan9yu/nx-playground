import { clsx } from 'clsx';
import { forwardRef, useState } from 'react';

import { accordionStyle } from './Accordion.css';
import type { AccordionProps } from './Accordion.types';
import { AccordionButton, AccordionItem, AccordionPanel } from './children';
import { AccordionContext } from './context';

const _Accordion = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
	const { children, defaultActiveItems = [], ...rest } = props;

	const className = clsx([accordionStyle, rest.className]);

	const [activeItems, setActiveItems] = useState(defaultActiveItems);

	const handleSetActiveItem = (item: string) =>
		activeItems.includes(item)
			? setActiveItems(activeItems.filter(activeItem => activeItem !== item))
			: setActiveItems([...activeItems, item]);

	return (
		<AccordionContext.Provider
			value={{
				activeItems,
				setActiveItem: handleSetActiveItem
			}}
		>
			<div {...rest} ref={ref} className={className}>
				{children}
			</div>
		</AccordionContext.Provider>
	);
});

const Accordion = Object.assign(_Accordion, {
	Button: AccordionButton,
	Item: AccordionItem,
	Panel: AccordionPanel
});

Accordion.displayName = 'Accordion';

export default Accordion;
