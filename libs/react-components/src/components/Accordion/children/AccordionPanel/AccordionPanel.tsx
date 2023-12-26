import { assignInlineVars } from '@vanilla-extract/dynamic';
import { clsx } from 'clsx';
import { CSSProperties, forwardRef, useEffect, useRef, useState } from 'react';

import { useAccordionContext } from '../../context';
import { accordionPanelStyle, panelHeight } from './AccordionPanel.css';
import type { AccordionPanelProps } from './AccordionPanel.types';

const AccordionPanel = forwardRef<HTMLDivElement, AccordionPanelProps>((props, ref) => {
	const { children, itemName = '', ...rest } = props;

	const [currentPanelHeight, setCurrentPanelHeight] = useState('');
	const innerRef = useRef<HTMLDivElement>(null);

	const { activeItems } = useAccordionContext();
	const isActive = activeItems.includes(itemName);

	useEffect(() => {
		if (!innerRef.current) return;
		setCurrentPanelHeight(isActive ? `${innerRef.current.clientHeight}px` : '0');
	}, [isActive, activeItems]);

	const className = clsx([accordionPanelStyle, props.className]);
	const style: CSSProperties = {
		...assignInlineVars({
			[panelHeight]: currentPanelHeight ?? (innerRef.current && `${innerRef.current.clientHeight}px`)
		}),
		...props.style
	};

	return (
		<div {...rest} ref={ref} className={className} data-action-item={isActive} style={style}>
			<div ref={innerRef} data-name="panel-inner">
				{children}
			</div>
		</div>
	);
});

AccordionPanel.displayName = 'AccordionPanel';

export default AccordionPanel;
