import { useState } from 'react';
import type { ToggleProps, UseToggleReturn } from './useToggle.types';

const useToggle = (props: ToggleProps): UseToggleReturn => {
	const { isSelected = false } = props;

	const [toggle, setToggle] = useState(isSelected);

	const handleToggle = () => {
		setToggle(prev => !prev);
	};

	return {
		isSelected: toggle,
		onToggle: handleToggle,
		setSelected: setToggle
	};
};

export default useToggle;
