export type ToggleProps = {
	isSelected?: boolean;
};

export type UseToggleReturn = {
	readonly isSelected: boolean;
	onToggle: () => void;
	setSelected: (isSelected: boolean) => void;
};
