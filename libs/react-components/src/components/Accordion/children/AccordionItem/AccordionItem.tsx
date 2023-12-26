import { clsx } from 'clsx';
import { Children, cloneElement, forwardRef, isValidElement } from 'react';

import { accordionItemStyle } from './AccordionItem.css';
import type { AccordionItemProps } from './AccordionItem.types';

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>((props, ref) => {
	const { children, itemName, ...rest } = props;

	const className = clsx([accordionItemStyle, rest.className]);

	const childrenWithProps = Children.toArray(children);
	const accordionItemChildren = childrenWithProps.map(child =>
		isValidElement(child) ? cloneElement(child, { ...child.props, itemName }) : null
	);

	return (
		<div {...rest} ref={ref} className={className}>
			{accordionItemChildren}
		</div>
	);
});

AccordionItem.displayName = 'AccordionItem';

export default AccordionItem;
