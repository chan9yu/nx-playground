import { useButton } from '@nx-playground/react-hooks';
import { clsx } from 'clsx';
import { MouseEvent, forwardRef } from 'react';

import { useAccordionContext } from '../../context';
import { accordionButtonStyle } from './AccordionButton.css';
import type { AccordionButtonProps } from './AccordionButton.types';

const AccordionButton = forwardRef<HTMLButtonElement, AccordionButtonProps>((props, ref) => {
	const { children, itemName = '', ...rest } = props;

	const className = clsx([accordionButtonStyle, rest.className]);

	const { setActiveItem } = useAccordionContext();

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		setActiveItem(itemName);
		rest.onClick?.(e);
	};

	const { buttonProps } = useButton({
		...rest,
		className,
		onClick: handleClick,
		elementType: 'button'
	});

	return (
		<button {...buttonProps} ref={ref}>
			{children}
		</button>
	);
});

AccordionButton.displayName = 'AccordionButton';

export default AccordionButton;
