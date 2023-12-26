import { MouseEvent } from 'react';

import { useButton, useToggle } from '..';
import type { OverloadedToggleButtonFunction } from './useToggleButton.types';

const useToggleButton: OverloadedToggleButtonFunction = (props: any, isSelected?: boolean): any => {
	const { isSelected: _isSelected, onToggle } = useToggle({ isSelected });

	const handleClick = (event: MouseEvent) => {
		onToggle();
		props?.onClick?.(event);
	};

	const { buttonProps } = useButton({
		...props,
		onClick: handleClick
	});

	return {
		buttonProps,
		isSelected: _isSelected
	};
};

export default useToggleButton;
